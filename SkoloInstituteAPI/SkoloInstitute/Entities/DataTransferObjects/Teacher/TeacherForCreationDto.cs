using SkoloInstitute.Entities.DataTransferObjects.Subject;

namespace SkoloInstitute.Entities.DataTransferObjects.Teacher
{
    public class TeacherForCreationDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public IEnumerable<SubjectForCreationDto> Subjects { get; init; }
    }

    public class TeacherForUpdateDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public IEnumerable<SubjectForCreationDto> Subjects { get; init; }
    }
}
