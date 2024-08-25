namespace SkoloInstitute.Entities.DataTransferObjects.Teacher
{
    public class TeacherAppDto
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Experience { get; set; }
        public string subjects { get; set; }
    }
}
