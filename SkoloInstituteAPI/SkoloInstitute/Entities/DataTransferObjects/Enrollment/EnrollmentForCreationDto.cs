namespace SkoloInstitute.Entities.DataTransferObjects.Enrollment
{
    public class EnrollmentForCreationDto
    {
        public string UserId { get; set; }
        public Guid SubjectId { get; set; }
    }
    public class EnrollmentForUpdateDto
    {
        public string UserId { get; set; }
        public Guid SubjectId { get; set; }
    }
}
