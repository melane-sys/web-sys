namespace SkoloInstitute.Entities.DataTransferObjects.Subject
{
    public class SubjectDto
    {
        public Guid Id { get; set; }
        public string SubjectName { get; set; }
        public string Class { get; set; }
        public Guid TeacherId { get; set; }
        public string TeacherFirstName { get; set; }
        public string TeacherLastName { get; set; }

    }
}
