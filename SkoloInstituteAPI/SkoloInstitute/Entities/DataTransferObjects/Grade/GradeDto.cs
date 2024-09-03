namespace SkoloInstitute.Entities.DataTransferObjects.Grade
{
    public class GradeDto
    {
        public Guid Id { get; set; }
        public string GradeName { get; set; }
        public Guid SubjectId { get; set; }
    }
}
