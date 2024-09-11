using SkoloInstitute.Entities.DataTransferObjects.Grade;

namespace SkoloInstitute.Entities.DataTransferObjects.Subject
{
    public class SubjectDto
    {
        public Guid Id { get; set; }
        public string SubjectName { get; set; }
        public string Class { get; set; }
        public decimal Price { get; set; }
        public Guid TeacherId { get; set; }
        public string TeacherFirstName { get; set; }
        public string TeacherLastName { get; set; }
        public int TeacherRating { get; set; }
        public IEnumerable<ContentDto> Contents { get; set; }
        public int EnrollItemsCount { get; set; }

    }
}
