namespace SkoloInstitute.Entities.Models.EnrollAggregate
{
    public class EnrollItem
    {
        public Guid Id { get; set; }
        public string SubjectName { get; set; }
        public string Class { get; set; }
        public Guid TeacherId { get; set; }
        public decimal Price { get; set; }
        public Guid EnrollmentId { get; set; }
        public Enrollment Enrollment { get; set; }
        public Guid SubjectId { get; set; }
        public Subject Subject { get; set; }
    }
}
