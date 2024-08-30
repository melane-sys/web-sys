using AutoMapper;
using SkoloInstitute.Contracts;
using SkoloInstitute.Entities.DataTransferObjects.Basket;
using SkoloInstitute.Entities.Models.EnrollAggregate;
using StackExchange.Redis;
using System.Text.Json;

namespace SkoloInstitute.Repository.Services
{
    public sealed class BasketService : IBasketService
    {
        private readonly IDatabase _database;
        private readonly IMapper _mapper;

        public BasketService(IConnectionMultiplexer redis, IMapper mapper)
        {
            _database = redis.GetDatabase();
            _mapper = mapper;
        }

        public async Task<bool> DeleteBasketAsync(string basketId)
        {
            return await _database.KeyDeleteAsync(basketId);
        }

        public async Task<CustomerBasketDto> GetBasketAsync(string basketId)
        {
            var data = await _database.StringGetAsync(basketId);
            var basket = data.IsNullOrEmpty ? null : JsonSerializer.Deserialize<CustomerBasket>(data);
            return _mapper.Map<CustomerBasketDto>(basket);
        }

        public async Task<CustomerBasketDto> UpdateBasketAsync(CustomerBasketDto basketDto)
        {
            var basket = _mapper.Map<CustomerBasket>(basketDto);

            // Basket will be available for 15 days in memory
            var created = await _database.StringSetAsync(basket.Id, JsonSerializer.Serialize(basket), TimeSpan.FromDays(15));

            if (!created) return null;

            return await GetBasketAsync(basket.Id);
        }
    }
}
