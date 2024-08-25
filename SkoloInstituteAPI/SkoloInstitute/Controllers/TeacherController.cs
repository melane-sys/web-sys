using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SkoloInstitute.Contracts;
using SkoloInstitute.Entities.DataTransferObjects.Teacher;
using SkoloInstitute.Entities.Models;

namespace SkoloInstitute.Controllers
{
    [Route("api/teachers")]
    [ApiController]
    public class TeacherController : ControllerBase
    {
        private IRepositoryManager _repository;
        private IMapper _mapper;

        public TeacherController(IRepositoryManager repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAllTeachers()
        {
            try
            {
                var teachers = _repository.Teacher.GetAllData();

                var teachersResult = _mapper.Map<IEnumerable<TeacherDto>>(teachers);
                return Ok(teachersResult);
            }
            catch (Exception)
            {

                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("{id}", Name = "TeacherById")]
        public IActionResult GetTeacherById(Guid id)
        {
            try
            {
                var teacher = _repository.Teacher.GetDataById(id);
                if (teacher == null)
                {

                    return NotFound();
                }
                var teacherResult = _mapper.Map<TeacherDto>(teacher);
                return Ok(teacherResult);
            }
            catch (Exception)
            {

                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPost]
        public IActionResult CreateTeacher([FromBody] TeacherForCreationDto teacher)
        {
            try
            {
                if (teacher == null)
                {

                    return BadRequest("Teacher object is null");
                }

                if (!ModelState.IsValid)
                {

                    return BadRequest("Invalid model object");
                }

                var teacherEntity = _mapper.Map<Teacher>(teacher);
                _repository.Teacher.CreateData(teacherEntity);
                _repository.Save();

                var createdTeacher = _mapper.Map<TeacherDto>(teacherEntity);
                return CreatedAtRoute("TeacherById", new { id = createdTeacher.Id }, createdTeacher);
            }
            catch (Exception)
            {

                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateTeacher(Guid id, [FromBody] TeacherForUpdateDto teacher)
        {
            try
            {
                if (teacher == null)
                {

                    return BadRequest("Teacher object is null");
                }

                if (!ModelState.IsValid)
                {

                    return BadRequest("Invalid model object");
                }

                var teacherEntity = _repository.Teacher.GetDataById(id);
                if (teacherEntity == null)
                {
                    return NotFound();
                }

                _mapper.Map(teacher, teacherEntity);
                _repository.Teacher.UpdateData(teacherEntity);
                _repository.Save();

                return NoContent();
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTeacher(Guid id)
        {
            try
            {
                var teacher = _repository.Teacher.GetDataById(id);
                if (teacher == null)
                {
                    return NotFound();
                }

                _repository.Teacher.DeleteData(teacher);
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
