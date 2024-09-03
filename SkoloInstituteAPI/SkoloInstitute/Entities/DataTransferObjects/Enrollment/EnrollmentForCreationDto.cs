namespace SkoloInstitute.Entities.DataTransferObjects.Enrollment
{
    public class EnrollmentForCreationDto
    {
        public string UserId { get; set; }
        public string Grade { get; set; }
        public DateTime EnrolledDate { get; set; } = DateTime.Now;
        public decimal Subtotal { get; set; }
        public IEnumerable<EnrollItemCreateDto> EnrollItems { get; init; }
    }

    public class EnrollItemCreateDto
    {
        public string SubjectName { get; set; }
        public string Class { get; set; }
        public Guid TeacherId { get; set; }
        public decimal Price { get; set; }
        public Guid SubjectId { get; set; }
    }
    public class EnrollmentForUpdateDto
    {
        public string UserId { get; set; }
        public Guid SubjectId { get; set; }
    }
}
