using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SkoloInstitute.Contracts;
using SkoloInstitute.Entities.DataTransferObjects.Teacher;
using SkoloInstitute.Entities.Models;

namespace SkoloInstitute.Controllers
{
    [Route("api/teacher-applications")]
    [ApiController]
    public class TeacherApplicationController : ControllerBase
    {
        private IRepositoryManager _repository;
        private IMapper _mapper;

        public TeacherApplicationController(IRepositoryManager repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAllTeacherApplications()
        {
            try
            {
                var teacherApplications = _repository.TeacherApplication.GetAllData();
                var teacherApplicationsResult = _mapper.Map<IEnumerable<TeacherAppDto>>(teacherApplications);
                return Ok(teacherApplicationsResult);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("{id}", Name = "TeacherApplicationById")]
        public IActionResult GetTeacherApplicationById(Guid id)
        {
            try
            {
                var teacherApplication = _repository.TeacherApplication.GetDataById(id);
                if (teacherApplication == null)
                {
                    return NotFound();
                }
                var teacherApplicationResult = _mapper.Map<TeacherAppDto>(teacherApplication);
                return Ok(teacherApplicationResult);
            }
            catch (Exception)
            {

                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPost]
        public IActionResult CreateTeacherApplication([FromBody] TeacherAppForCreationDto teacherApplication)
        {
            try
            {
                var app = _repository.TeacherApplication.GetDataByEmail(teacherApplication.Email);

                if (app != null)
                {

                    return BadRequest("You have already applied for this role in the last 6 months. Please try again after 6 months.");
                }
                if (teacherApplication == null)
                {

                    return BadRequest("Teacher application object is null");
                }

                if (!ModelState.IsValid)
                {

                    return BadRequest("Invalid model object");
                }

                var teacherApplicationEntity = _mapper.Map<TeacherApplication>(teacherApplication);
                _repository.TeacherApplication.CreateData(teacherApplicationEntity);
                _repository.Save();

                var createdTeacherApplication = _mapper.Map<TeacherAppDto>(teacherApplicationEntity);
                return CreatedAtRoute("TeacherApplicationById", new { id = createdTeacherApplication.Id }, createdTeacherApplication);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTeacherApplication(Guid id)
        {
            try
            {
                var teacherApplication = _repository.TeacherApplication.GetDataById(id);
                if (teacherApplication == null)
                {

                    return NotFound();
                }

                _repository.TeacherApplication.DeleteData(teacherApplication);
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
