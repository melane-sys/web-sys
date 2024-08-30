using SkoloInstitute.Entities.DataTransferObjects.Basket;

namespace SkoloInstitute.Contracts
{
    public interface IBasketService
    {
        Task<CustomerBasketDto> GetBasketAsync(string basketId);
        Task<CustomerBasketDto> UpdateBasketAsync(CustomerBasketDto basketDto);
        Task<bool> DeleteBasketAsync(string basketId);
    }
}
