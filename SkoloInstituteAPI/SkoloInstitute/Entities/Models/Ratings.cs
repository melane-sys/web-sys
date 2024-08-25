namespace SkoloInstitute.Entities.Models
{
    public class Rating
    {
        public Guid Id { get; set; }
        public string UserId { get; set; }
        public User User { get; set; }
        public string ReviewBody { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;
        public int starsCount { get; set; }
        public Guid TeacherId { get; set; }
        public Teacher Teacher { get; set; }
    }
}
