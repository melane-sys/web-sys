namespace SkoloInstitute.Entities.Models
{
    public class Content
    {
        public Guid Id { get; set; }
        public string ContentName { get; set; }
        public Guid SubjectId { get; set; }
        public Subject Subject { get; set; }
    }
}
