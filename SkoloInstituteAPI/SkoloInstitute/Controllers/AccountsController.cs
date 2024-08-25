using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using SkoloInstitute.Contracts;
using SkoloInstitute.Entities.DataTransferObjects;
using SkoloInstitute.Entities.Models;
using SkoloInstitute.JwtFeatures;
using SkoloInstitute.Services;

namespace SkoloInstitute.Controllers
{
    [Route("api/accounts")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly IMapper _mapper;
        private readonly JwtHandler _jwtHandler;
        private readonly EmailService _emailService;
        private readonly IConfiguration _config;
        private IRepositoryManager _repository;

        public AccountsController(UserManager<User> userManager, IMapper mapper, JwtHandler jwtHandler,
            EmailService emailService, IConfiguration config, IRepositoryManager repository)
        {
            _userManager = userManager;
            _mapper = mapper;
            _jwtHandler = jwtHandler;
            _emailService = emailService;
            _config = config;
            _repository = repository;
        }

        [HttpPost("Registration")]
        public async Task<IActionResult> RegisterUser([FromBody] UserForRegistrationDto userForRegistration)
        {
            if (userForRegistration == null || !ModelState.IsValid)
                return BadRequest();

            var user = _mapper.Map<User>(userForRegistration);
            var result = await _userManager.CreateAsync(user, userForRegistration.Password);
            if (!result.Succeeded)
            {
                var errors = result.Errors.Select(e => e.Description);

                return BadRequest(new RegistrationResponseDto { Errors = errors });
            }

            await _userManager.AddToRoleAsync(user, "Student");

            // Create enrollment
            var enrollment = new Enrollment
            {
                UserId = user.Id,
                SubjectId = new Guid("ea552602-ca9a-49c2-8027-b0c8af51e474")
            };
            _repository.Enrollment.CreateData(enrollment);
            _repository.Save();

            await SendConfirmEMailAsync(userForRegistration);

            return StatusCode(201);
        }

        [HttpPost("Registration/school")]
        public async Task<IActionResult> RegisterSchool([FromBody] UserForRegistrationDto userForRegistration)
        {
            if (userForRegistration == null || !ModelState.IsValid)
                return BadRequest();

            var user = _mapper.Map<User>(userForRegistration);
            var result = await _userManager.CreateAsync(user, userForRegistration.Password);
            if (!result.Succeeded)
            {
                var errors = result.Errors.Select(e => e.Description);

                return BadRequest(new RegistrationResponseDto { Errors = errors });
            }

            await _userManager.AddToRoleAsync(user, "School");

            await SendConfirmEMailAsync(userForRegistration);

            return StatusCode(201);
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] UserForAuthenticationDto userForAuthentication)
        {
            var user = await _userManager.FindByNameAsync(userForAuthentication.Email);
            if (user == null)
                return BadRequest("Invalid Request");

            if (!await _userManager.IsEmailConfirmedAsync(user))
                return Unauthorized(new AuthResponseDto { ErrorMessage = "Email is not confirmed" });

            if (!await _userManager.CheckPasswordAsync(user, userForAuthentication.Password))
            {
                await _userManager.AccessFailedAsync(user);

                if (await _userManager.IsLockedOutAsync(user))
                {
                    var logoUrl = "https://skoloinstitute.azurewebsites.net/assets/img/brand-logo/img-skoloi-web.png";

                    var body = $@"
<!DOCTYPE html>
<html>
<head>
    <style>
        body {{
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
           
        }}
p{{
 font-size: 16px;
}}
        .container {{
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }}
        .header {{
            text-align: center;
            padding-bottom: 20px;
        }}
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <img src='{logoUrl}' alt='Skolo Institute' style='max-width: 100px;' />
        </div>
        <p>Hello {user.FirstName} {user.LastName},</p>
         <p>Username: {user.UserName}.</p>
        <p>Your account is locked out. To reset the password click this link:</p>
        <p><a href='{userForAuthentication.ClientURI}'>Click here</a></p>
        <p>Thank you,</p>
        <h3>{_config["Email:ApplicationName"]}</h3>
    </div>
</body>
</html>";

                    var emailSend = new EmailSendDto(user.Email, "Locked out account information", body);

                    await _emailService.SendEmailAsync(emailSend);

                    return Unauthorized(new AuthResponseDto { ErrorMessage = "The account is locked out" });
                }

                return Unauthorized(new AuthResponseDto { ErrorMessage = "Invalid Authentication" });
            }

            var token = await _jwtHandler.GenerateToken(user);

            await _userManager.ResetAccessFailedCountAsync(user);
            // Create the UserDto object with user information
            var userDto = new UserDto
            {
                FirstName = user.FirstName,
                LastName = user.LastName
            };

            var response = new AuthResponseDto
            {
                IsAuthSuccessful = true,
                Token = token,
                Is2StepVerificationRequired = false, // Set based on your logic
                Provider = null, // Set if needed
                User = userDto
            };

            return Ok(response);
        }

        private async Task<IActionResult> GenerateOTPFor2StepVerification(User user)
        {
            var providers = await _userManager.GetValidTwoFactorProvidersAsync(user);
            if (!providers.Contains("Email"))
            {
                return Unauthorized(new AuthResponseDto { ErrorMessage = "Invalid 2-Step Verification Provider." });
            }

            var token = await _userManager.GenerateTwoFactorTokenAsync(user, "Email");
            //   var message = new Message(new string[] { user.Email }, "Authentication token", token, null);

            // await _emailSender.SendEmailAsync(message);

            return Ok(new AuthResponseDto { Is2StepVerificationRequired = true, Provider = "Email" });
        }

        [HttpPost("ForgotPassword")]
        public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordDto forgotPasswordDto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var user = await _userManager.FindByEmailAsync(forgotPasswordDto.Email);
            if (user == null)
                return BadRequest("Invalid Request");

            var token = await _userManager.GeneratePasswordResetTokenAsync(user);
            var param = new Dictionary<string, string>
            {
                {"token", token },
                {"email", forgotPasswordDto.Email }
            };

            var callback = QueryHelpers.AddQueryString(forgotPasswordDto.ClientURI, param);
            var logoUrl = "https://skoloinstitute.azurewebsites.net/assets/img/brand-logo/img-skoloi-web.png";
            var body = $@"
<!DOCTYPE html>
<html>
<head>
    <style>
        body {{
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
           
        }}
p{{
 font-size: 16px;
}}
        .container {{
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }}
        .header {{
            text-align: center;
            padding-bottom: 20px;
        }}
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <img src='{logoUrl}' alt='Skolo Institute' style='max-width: 100px;' />
        </div>
        <p>Hello {user.FirstName} {user.LastName},</p>
        <p>Username: {user.UserName}.</p>
        <p>In order to reset your password, please click on the following link:</p>
        <p><a href='{callback}'>Click here</a></p>
        <p>Thank you,</p>
        <h3>{_config["Email:ApplicationName"]}</h3>
    </div>
</body>
</html>";

            var emailSend = new EmailSendDto(user.Email, "Forgot username or password", body);

            await _emailService.SendEmailAsync(emailSend);

            return Ok();
        }

        [HttpPost("ResetPassword")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordDto resetPasswordDto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var user = await _userManager.FindByEmailAsync(resetPasswordDto.Email);
            if (user == null)
                return BadRequest("Invalid Request");

            var resetPassResult = await _userManager.ResetPasswordAsync(user, resetPasswordDto.Token, resetPasswordDto.Password);
            if (!resetPassResult.Succeeded)
            {
                var errors = resetPassResult.Errors.Select(e => e.Description);

                return BadRequest(new { Errors = errors });
            }

            await _userManager.SetLockoutEndDateAsync(user, new DateTime(2000, 1, 1));

            return Ok();
        }

        [HttpGet("EmailConfirmation")]
        public async Task<IActionResult> EmailConfirmation([FromQuery] string email, [FromQuery] string token)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if (user == null)
                return BadRequest("Invalid Email Confirmation Request");

            var confirmResult = await _userManager.ConfirmEmailAsync(user, token);
            if (!confirmResult.Succeeded)
                return BadRequest("Invalid Email Confirmation Request");

            return Ok();
        }

        [HttpPost("TwoStepVerification")]
        public async Task<IActionResult> TwoStepVerification([FromBody] TwoFactorDto twoFactorDto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var user = await _userManager.FindByEmailAsync(twoFactorDto.Email);
            if (user is null)
                return BadRequest("Invalid Request");

            var validVerification = await _userManager.VerifyTwoFactorTokenAsync(user, twoFactorDto.Provider, twoFactorDto.Token);
            if (!validVerification)
                return BadRequest("Invalid Token Verification");

            var token = await _jwtHandler.GenerateToken(user);

            return Ok(new AuthResponseDto { IsAuthSuccessful = true, Token = token });
        }

        [HttpPost("ExternalLogin")]
        public async Task<IActionResult> ExternalLogin([FromBody] ExternalAuthDto externalAuth)
        {
            var payload = await _jwtHandler.VerifyGoogleToken(externalAuth);
            if (payload == null)
                return BadRequest("Invalid External Authentication.");

            var info = new UserLoginInfo(externalAuth.Provider, payload.Subject, externalAuth.Provider);

            var user = await _userManager.FindByLoginAsync(info.LoginProvider, info.ProviderKey);
            if (user == null)
            {
                user = await _userManager.FindByEmailAsync(payload.Email);
                if (user == null)
                {
                    user = new User { Email = payload.Email, UserName = payload.Email };
                    await _userManager.CreateAsync(user);

                    //prepare and send an email for the email confirmation

                    await _userManager.AddToRoleAsync(user, "Student");
                    await _userManager.AddLoginAsync(user, info);
                }
                else
                {
                    await _userManager.AddLoginAsync(user, info);
                }
            }

            if (user == null)
                return BadRequest("Invalid External Authentication.");

            //check for the Locked out account

            var token = await _jwtHandler.GenerateToken(user);

            return Ok(new AuthResponseDto { Token = token, IsAuthSuccessful = true });
        }


        private async Task<bool> SendConfirmEMailAsync(UserForRegistrationDto userForRegistration)
        {
            var user = await _userManager.FindByEmailAsync(userForRegistration.Email);
            var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);
            var param = new Dictionary<string, string>
            {
                {"token", token },
                {"email", userForRegistration.Email }
            };

            var callback = QueryHelpers.AddQueryString(userForRegistration.ClientURI, param);
            var logoUrl = "https://skoloinstitute.azurewebsites.net/assets/img/brand-logo/img-skoloi-web.png";

            var body = $@"
<!DOCTYPE html>
<html>
<head>
    <style>
        body {{
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
           
        }}
p{{
 font-size: 16px;
}}
        .container {{
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }}
        .header {{
            text-align: center;
            padding-bottom: 20px;
        }}
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <img src='{logoUrl}' alt='Skolo Institute' style='max-width: 100px;' />
        </div>
        <p>Hello {userForRegistration.FirstName} {userForRegistration.LastName},</p>
        <p>Please confirm your email address by clicking on the following link.</p>
        <p><a href='{callback}'>Click here</a></p>
        <p>Thank you,</p>
        <h3>{_config["Email:ApplicationName"]}</h3>
    </div>
</body>
</html>";
            var emailSend = new EmailSendDto(userForRegistration.Email, "Confirm your email", body);

            return await _emailService.SendEmailAsync(emailSend);
        }
    }
}