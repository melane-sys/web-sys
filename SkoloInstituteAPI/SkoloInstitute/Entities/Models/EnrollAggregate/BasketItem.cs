namespace SkoloInstitute.Entities.Models.EnrollAggregate
{
    public class BasketItem
    {
        public string Id { get; set; }
        public string SubjectName { get; set; }
        public string Class { get; set; }
        public Guid TeacherId { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public Guid userId { get; set; }
        public Guid SubjectId { get; set; }
    }
}
