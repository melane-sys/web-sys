namespace SkoloInstitute.Entities.Models
{
    public class Teacher
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PictureUrl { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public ICollection<Subject> Subjects { get; set; }
        public ICollection<Rating> Ratings { get; set; }

    }
}
