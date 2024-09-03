namespace SkoloInstitute.Entities.Models
{
    public class Grade
    {
        public Guid Id { get; set; }
        public string GradeName { get; set; }
        public Guid SubjectId { get; set; }
        public Subject Subject { get; set; }
    }
}
