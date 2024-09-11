using SkoloInstitute.Entities.Models.EnrollAggregate;

namespace SkoloInstitute.Entities.Models
{
    public class Subject
    {
        public Guid Id { get; set; }
        public string SubjectName { get; set; }
        public string Class { get; set; }
        public decimal Price { get; set; } = 125;
        public Guid TeacherId { get; set; }
        public Teacher Teacher { get; set; }
        public ICollection<Content> Contents { get; set; }
        public ICollection<EnrollItem> EnrollItems { get; set; }
    }
}
