using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SkoloInstitute.Contracts;
using SkoloInstitute.Entities.DataTransferObjects.Subscribe;
using SkoloInstitute.Entities.Models;

namespace SkoloInstitute.Controllers
{
    [Route("api/subscribers")]
    [ApiController]
    public class SubscriberController : ControllerBase
    {
        private IRepositoryManager _repository;
        private IMapper _mapper;

        public SubscriberController(IRepositoryManager repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAllSubscribers()
        {
            try
            {
                var subscribers = _repository.Subscriber.GetAllData();

                var subscribersResult = _mapper.Map<IEnumerable<SubscriberDto>>(subscribers);
                return Ok(subscribersResult);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("{id}", Name = "SubscriberById")]
        public IActionResult GetSubscriberById(Guid id)
        {
            try
            {
                var subscriber = _repository.Subscriber.GetDataById(id);
                if (subscriber == null)
                {

                    return NotFound();
                }
                var subscriberResult = _mapper.Map<SubscriberDto>(subscriber);
                return Ok(subscriberResult);
            }
            catch (Exception)
            {

                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPost]
        public IActionResult CreateSubscriber([FromBody] SubscriberForCreationDto subscriber)
        {
            try
            {
                var subscriberId = _repository.Subscriber.GetDataByEmail(subscriber.Email);
                if (subscriberId != null)
                {
                    return BadRequest("A subscriber with this email already exists. Please use a different email address.");
                }

                if (subscriber == null)
                {
                    return BadRequest("Subscriber object is null");
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest("Invalid model object");
                }

                var subscriberEntity = _mapper.Map<Subscriber>(subscriber);
                _repository.Subscriber.CreateData(subscriberEntity);
                _repository.Save();

                var createdSubscriber = _mapper.Map<SubscriberDto>(subscriberEntity);
                return CreatedAtRoute("SubscriberById", new { id = createdSubscriber.Id }, createdSubscriber);
            }
            catch (Exception)
            {

                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateSubscriber(Guid id, [FromBody] SubscriberForUpdateDto subscriber)
        {
            try
            {
                if (subscriber == null)
                {
                    return BadRequest("Subscriber object is null");
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest("Invalid model object");
                }

                var subscriberEntity = _repository.Subscriber.GetDataById(id);
                if (subscriberEntity == null)
                {
                    return NotFound();
                }

                _mapper.Map(subscriber, subscriberEntity);
                _repository.Subscriber.UpdateData(subscriberEntity);
                _repository.Save();

                return NoContent();
            }
            catch (Exception)
            {

                return StatusCode(500, "Internal server error");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteSubscriber(Guid id)
        {
            try
            {
                var subscriber = _repository.Subscriber.GetDataById(id);
                if (subscriber == null)
                {
                    return NotFound();
                }

                _repository.Subscriber.DeleteData(subscriber);
                _repository.Save();

                return NoContent();
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
