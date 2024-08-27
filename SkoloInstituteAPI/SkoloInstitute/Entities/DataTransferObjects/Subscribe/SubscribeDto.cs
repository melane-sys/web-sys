namespace SkoloInstitute.Entities.DataTransferObjects.Subscribe
{
    public class SubscriberDto
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public bool IsSubscribed { get; set; }
    }
    public class SubscriberForCreationDto
    {
        public string Email { get; set; }
    }

    public class SubscriberForUpdateDto
    {
        public string Email { get; set; }
        public bool IsSubscribed { get; set; } = true;
    }
}
