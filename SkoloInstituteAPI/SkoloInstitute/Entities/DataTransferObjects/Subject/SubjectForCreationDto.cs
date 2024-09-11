using SkoloInstitute.Entities.DataTransferObjects.Grade;

namespace SkoloInstitute.Entities.DataTransferObjects.Subject
{
    public class SubjectForCreationDto
    {
        public string SubjectName { get; set; }
        public string Class { get; set; }
        public Guid TeacherId { get; set; }
        public IEnumerable<ContentForCreationDto> Contents { get; init; }
    }

    public class SubjectForUpdateDto
    {
        //     public string SubjectName { get; set; }
        //   public Guid TeacherId { get; set; }
        public IEnumerable<ContentForCreationDto> Contents { get; init; }
    }

    public class StudentCategoryForUpdateDto
    {
        public string CategoryName { get; set; }
    }
    public class StudentCategoryForCreationDto
    {
        public string CategoryName { get; set; }
        public string UserId { get; set; }
    }
    public class StudentCategoryDto
    {
        public Guid Id { get; set; }
        public string CategoryName { get; set; }
        public string UserId { get; set; }
    }
}
