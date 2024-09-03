using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SkoloInstitute.Contracts;
using SkoloInstitute.Entities.DataTransferObjects.Enrollment;
using SkoloInstitute.Entities.Models;
using System.Security.Claims;

namespace SkoloInstitute.Controllers
{
    [Route("api/enrollments")]
    [ApiController]
    public class EnrollmentController : ControllerBase
    {
        private IRepositoryManager _repository;
        private IMapper _mapper;

        public EnrollmentController(IRepositoryManager repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAllEnrollments()
        {
            try
            {
                var enrollments = _repository.Enrollment.GetAllData();
                var enrollmentsResult = _mapper.Map<IEnumerable<EnrollmentDto>>(enrollments);
                return Ok(enrollmentsResult);
            }
            catch (Exception)
            {

                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("userEnrollements")]
        public IActionResult GetAllEnrollmentsById()
        {
            try
            {
                var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

                if (string.IsNullOrEmpty(userId))
                {
                    var claims = User.Claims.Select(c => new { c.Type, c.Value }).ToList();
                    return BadRequest($"User ID not found. Claims: {string.Join(", ", claims)}");
                }

                var enrollments = _repository.Enrollment.GetAllDataById(userId);
                var enrollmentsResult = _mapper.Map<IEnumerable<EnrollmentDto>>(enrollments);
                return Ok(enrollmentsResult);
            }
            catch (Exception)
            {

                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("{id}", Name = "EnrollmentById")]
        public IActionResult GetEnrollmentById(Guid id)
        {
            try
            {
                var enrollment = _repository.Enrollment.GetDataById(id);
                if (enrollment == null)
                {

                    return NotFound();
                }
                var enrollmentResult = _mapper.Map<EnrollmentDto>(enrollment);
                return Ok(enrollmentResult);
            }
            catch (Exception)
            {

                return StatusCode(500, "Internal server error");
            }
        }


        [HttpPost]
        public IActionResult CreateEnrollment([FromBody] EnrollmentForCreationDto enrollment)
        {
            try
            {
                if (enrollment == null)
                {
                    return BadRequest("Enrollment object is null");
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest("Invalid model object");
                }
                var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
                enrollment.UserId = userId;
                var enrollmentEntity = _mapper.Map<Enrollment>(enrollment);
                _repository.Enrollment.CreateData(enrollmentEntity);
                _repository.Save();

                var createdEnrollment = _mapper.Map<EnrollmentDto>(enrollmentEntity);
                return CreatedAtRoute("EnrollmentById", new { id = createdEnrollment.Id }, createdEnrollment);
            }
            catch (Exception)
            {

                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateEnrollment(Guid id, [FromBody] EnrollmentForUpdateDto enrollment)
        {
            try
            {
                if (enrollment == null)
                {

                    return BadRequest("Enrollment object is null");
                }

                if (!ModelState.IsValid)
                {

                    return BadRequest("Invalid model object");
                }

                var enrollmentEntity = _repository.Enrollment.GetDataById(id);
                if (enrollmentEntity == null)
                {

                    return NotFound();
                }

                _mapper.Map(enrollment, enrollmentEntity);
                _repository.Enrollment.UpdateData(enrollmentEntity);
                _repository.Save();

                return NoContent();
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteEnrollment(Guid id)
        {
            try
            {
                var enrollment = _repository.Enrollment.GetDataById(id);
                if (enrollment == null)
                {

                    return NotFound();
                }

                _repository.Enrollment.DeleteData(enrollment);
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
