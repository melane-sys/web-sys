using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SkoloInstitute.Contracts;
using SkoloInstitute.Entities.DataTransferObjects.Basket;

namespace SkoloInstitute.Controllers
{
    [Route("api/basket")]
    [ApiController]
    public class BasketController : ControllerBase
    {
        private readonly IBasketService _service;
        private readonly IMapper _mapper;

        public BasketController(IBasketService service, IMapper mapper)
        {
            _service = service;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<CustomerBasketDto>> GetBasketById(string id)
        {
            var basketDto = await _service.GetBasketAsync(id);
            return Ok(basketDto ?? new CustomerBasketDto { Id = id });
        }

        [HttpPost]
        public async Task<ActionResult<CustomerBasketDto>> UpdateBasket(CustomerBasketDto basketDto)
        {
            var updatedBasketDto = await _service.UpdateBasketAsync(basketDto);
            return Ok(updatedBasketDto);
        }

        [HttpDelete]
        public async Task DeleteBasketAsync(string id)
        {
            await _service.DeleteBasketAsync(id);
        }
    }
}
