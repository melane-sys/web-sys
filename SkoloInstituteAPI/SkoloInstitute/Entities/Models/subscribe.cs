namespace SkoloInstitute.Entities.Models
{
    public class Subscriber
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public bool IsSubscribed { get; set; } = true;
    }

}
