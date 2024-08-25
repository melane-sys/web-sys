using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SkoloInstitute.Contracts;
using SkoloInstitute.Entities.DataTransferObjects.Rating;
using SkoloInstitute.Entities.Models;
using System.Security.Claims;

namespace SkoloInstitute.Controllers
{
    [Route("api/ratings")]
    [ApiController]
    public class RatingController : ControllerBase
    {
        private IRepositoryManager _repository;
        private IMapper _mapper;

        public RatingController(IRepositoryManager repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAllData()
        {
            try
            {
                var data = _repository.Rating.GetAllData();

                var dataResult = _mapper.Map<IEnumerable<RatingDto>>(data);
                return Ok(dataResult);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }
        }


        [HttpGet("{id}", Name = "RatingById")]
        public IActionResult GetDataById(Guid id)
        {
            try
            {
                var data = _repository.Rating.GetDataById(id);
                if (data is null)
                {

                    return NotFound();
                }
                else
                {


                    var dataResult = _mapper.Map<RatingDto>(data);
                    return Ok(dataResult);
                }
            }
            catch (Exception)
            {

                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPost]
        public IActionResult CreateData([FromBody] RatingForCreationDto data)
        {

            if (data is null)
            {

                return BadRequest("Data object is null");
            }

            if (!ModelState.IsValid)
            {

                return BadRequest("Invalid model object");
            }

            var userId = Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            data.UserId = userId;

            var dataEntity = _mapper.Map<Rating>(data);

            _repository.Rating.CreateData(dataEntity);
            _repository.Save();

            var createdData = _mapper.Map<RatingDto>(dataEntity);

            return CreatedAtRoute("RatingById", new { id = createdData.Id }, createdData);

        }
    }
}
