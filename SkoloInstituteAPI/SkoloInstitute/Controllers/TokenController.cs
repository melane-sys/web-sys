using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SkoloInstitute.Entities.DataTransferObjects;
using SkoloInstitute.Entities.Models;
using SkoloInstitute.JwtFeatures;
using System.Security.Claims;

namespace SkoloInstitute.Controllers
{
    [Route("api/token")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        private readonly JwtHandler _jwtHandler;
        private readonly UserManager<User> _userManager;

        public TokenController(JwtHandler jwtHandler, UserManager<User> userManager)
        {
            _jwtHandler = jwtHandler;
            _userManager = userManager;
        }

        [HttpPost("refresh")]
        public async Task<IActionResult> Refresh([FromBody] TokenDto tokenDto)
        {
            try
            {
                // Validate the access token and get the claims principal
                var principal = await _jwtHandler.ValidateToken(tokenDto.AccessToken);

                if (principal == null)
                    return BadRequest(new AuthResponseDto { ErrorMessage = "Invalid access token." });

                // Extract the username or email from the claims
                var username = principal.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Name)?.Value;

                if (username == null)
                    return BadRequest(new AuthResponseDto { ErrorMessage = "Invalid token claims." });

                // Find the user by username or email
                var user = await _userManager.FindByNameAsync(username);
                if (user == null || user.RefreshToken != tokenDto.RefreshToken || user.RefreshTokenExpiryTime <= DateTime.Now)
                    return BadRequest(new AuthResponseDto { ErrorMessage = "Invalid or expired refresh token." });

                // Generate new tokens
                var newToken = await _jwtHandler.GenerateToken(user);
                var newRefreshToken = await _jwtHandler.GenerateRefreshToken();

                // Update the user with the new refresh token
                user.RefreshToken = newRefreshToken;
                user.RefreshTokenExpiryTime = DateTime.Now.AddDays(7); // Set refresh token expiry time
                await _userManager.UpdateAsync(user);

                var userDto = new UserDto
                {
                    FirstName = user.FirstName,
                    LastName = user.LastName
                };

                var response = new AuthResponseDto
                {
                    IsAuthSuccessful = true,
                    Token = newToken,
                    RefreshToken = newRefreshToken,
                    Is2StepVerificationRequired = false, // Set based on your logic
                    Provider = null, // Set if needed
                    User = userDto
                };

                return Ok(response);
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(500, new AuthResponseDto { ErrorMessage = "Internal server error" });
            }
        }
    }

}
