namespace SkoloInstitute.Entities.DataTransferObjects.Rating
{
    public class RatingForCreationDto
    {
        public string UserId { get; set; }
        public string ReviewBody { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;
        public int starsCount { get; set; }
        public Guid TeacherId { get; set; }
    }
}
