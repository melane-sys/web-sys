using SkoloInstitute.Entities.DataTransferObjects.Grade;

namespace SkoloInstitute.Entities.DataTransferObjects.Subject
{
    public class SubjectForCreationDto
    {
        public string SubjectName { get; set; }
        public string Class { get; set; }
        public Guid TeacherId { get; set; }
        public IEnumerable<GradeForCreationDto> Grades { get; init; }
    }

    public class SubjectForUpdateDto
    {
        //     public string SubjectName { get; set; }
        //   public Guid TeacherId { get; set; }
        public IEnumerable<GradeForCreationDto> Grades { get; init; }
    }
}
