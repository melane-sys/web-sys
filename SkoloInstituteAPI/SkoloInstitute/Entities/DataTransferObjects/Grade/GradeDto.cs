namespace SkoloInstitute.Entities.DataTransferObjects.Grade
{
    public class GradeDto
    {
        public Guid Id { get; set; }
        public string GradeName { get; set; }
        public Guid SubjectId { get; set; }
    }
    public class GradeForCreationDto
    {
        public string GradeName { get; set; }
    }
    public class GradeForUpdateDto
    {
        public string GradeName { get; set; }
    }
}
