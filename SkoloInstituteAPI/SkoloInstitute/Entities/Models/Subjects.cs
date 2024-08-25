namespace SkoloInstitute.Entities.Models
{
    public class Subject
    {
        public Guid Id { get; set; }
        public string SubjectName { get; set; }
        public string Class { get; set; }
        public Guid TeacherId { get; set; }
        public Teacher Teacher { get; set; }
    }
}
