namespace SkoloInstitute.Entities.DataTransferObjects.Enrollment
{
    public class EnrollmentDto
    {
        public Guid Id { get; set; }
        public string UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Grade { get; set; }
        public DateTime EnrolledDate { get; set; }
        public decimal Subtotal { get; set; }
        public ICollection<EnrollItemDto> EnrollItems { get; set; }
    }
    public class EnrollItemDto
    {
        public string SubjectName { get; set; }
        public string Class { get; set; }
        public Guid TeacherId { get; set; }
        public decimal Price { get; set; }
        public string TeacherFirstName { get; set; }
        public string TeacherLastName { get; set; }
    }
}
