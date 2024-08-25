namespace SkoloInstitute.Entities.Models
{
    public class Enrollment
    {
        public Guid Id { get; set; }
        public string UserId { get; set; }
        public User User { get; set; }
        public Guid SubjectId { get; set; }
        public Subject Subject { get; set; }
        public DateTime EnrolledDate { get; set; } = DateTime.Now;
    }
}
