namespace SkoloInstitute.Entities.DataTransferObjects.Rating
{
    public class RatingDto
    {
        public Guid Id { get; set; }
        //  public string UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ReviewBody { get; set; }
        public DateTime CreatedDate { get; set; }
        public int starsCount { get; set; }
    }
}
