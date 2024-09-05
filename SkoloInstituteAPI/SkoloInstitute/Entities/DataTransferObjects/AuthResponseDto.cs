namespace SkoloInstitute.Entities.DataTransferObjects
{
    public class AuthResponseDto
    {
        public bool IsAuthSuccessful { get; set; }
        public string ErrorMessage { get; set; }
        public string Token { get; set; }
        public string RefreshToken { get; set; }
        public bool Is2StepVerificationRequired { get; set; }
        public string Provider { get; set; }
        public UserDto User { get; set; }
    }

    public record TokenDto(string AccessToken, string RefreshToken);
}
