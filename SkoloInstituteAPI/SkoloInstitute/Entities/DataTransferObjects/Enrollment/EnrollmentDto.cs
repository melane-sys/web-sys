namespace SkoloInstitute.Entities.DataTransferObjects.Enrollment
{
    public class EnrollmentDto
    {
        public Guid Id { get; set; }
        public string UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Guid SubjectId { get; set; }
        public string TeacherFirstName { get; set; }
        public string TeacherLastName { get; set; }
        public string SubjectName { get; set; }
        public DateTime EnrolledDate { get; set; }
    }
}
