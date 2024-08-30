using System.ComponentModel.DataAnnotations;

namespace SkoloInstitute.Entities.DataTransferObjects.Basket
{
    public class CustomerBasketDto
    {
        [Required]
        public string Id { get; set; }
        public List<BasketItemDto> Items { get; set; }
    }
}
