namespace SkoloInstitute.Entities.DataTransferObjects.Basket
{
    public class BasketItemDto
    {
        public string Id { get; set; }
        public string SubjectName { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public string Class { get; set; }
        public string TeacherId { get; set; }

    }
}
