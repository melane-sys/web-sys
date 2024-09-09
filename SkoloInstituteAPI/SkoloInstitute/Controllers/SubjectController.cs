using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SkoloInstitute.Contracts;
using SkoloInstitute.Entities.DataTransferObjects.Subject;
using SkoloInstitute.Entities.Models;

namespace SkoloInstitute.Controllers
{
    [Route("api/subjects")]
    [ApiController]
    public class SubjectController : ControllerBase
    {
        private IRepositoryManager _repository;
        private IMapper _mapper;

        public SubjectController(IRepositoryManager repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAllSubjects()
        {
            try
            {
                var subjects = _repository.Subject.GetAllData();

                var subjectsResult = _mapper.Map<IEnumerable<SubjectDto>>(subjects);
                return Ok(subjectsResult);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }
        }
        [HttpGet("{name}/class")]
        public IActionResult GetAllSubjectsByClass(string name)
        {
            try
            {
                var subjects = _repository.Subject.GetSubjectsByClass(name);

                var subjectsResult = _mapper.Map<IEnumerable<SubjectDto>>(subjects);
                return Ok(subjectsResult);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("classs/{name}/class")]
        public IActionResult GetAllSubjectsByClasses(string name)
        {
            try
            {
                var subjects = _repository.Subject.GetSubjectsByClasses(name);

                var subjectsResult = _mapper.Map<IEnumerable<SubjectDto>>(subjects);
                return Ok(subjectsResult);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("{id}", Name = "SubjectById")]
        public IActionResult GetSubjectById(Guid id)
        {
            try
            {
                var subject = _repository.Subject.GetDataById(id);
                if (subject == null)
                {

                    return NotFound();
                }
                var subjectResult = _mapper.Map<SubjectDto>(subject);
                return Ok(subjectResult);
            }
            catch (Exception)
            {

                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPost]
        public IActionResult CreateSubject([FromBody] SubjectForCreationDto subject)
        {
            try
            {
                if (subject == null)
                {
                    return BadRequest("Subject object is null");
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest("Invalid model object");
                }

                var subjectEntity = _mapper.Map<Subject>(subject);
                _repository.Subject.CreateData(subjectEntity);
                _repository.Save();

                var createdSubject = _mapper.Map<SubjectDto>(subjectEntity);
                return CreatedAtRoute("SubjectById", new { id = createdSubject.Id }, createdSubject);
            }
            catch (Exception)
            {

                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateSubject(Guid id, [FromBody] SubjectForUpdateDto subject)
        {
            try
            {
                if (subject == null)
                {
                    return BadRequest("Subject object is null");
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest("Invalid model object");
                }

                var subjectEntity = _repository.Subject.GetDataById(id);
                if (subjectEntity == null)
                {
                    return NotFound();
                }

                _mapper.Map(subject, subjectEntity);
                _repository.Subject.UpdateData(subjectEntity);
                _repository.Save();

                return NoContent();
            }
            catch (Exception)
            {

                return StatusCode(500, "Internal server error");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteSubject(Guid id)
        {
            try
            {
                var subject = _repository.Subject.GetDataById(id);
                if (subject == null)
                {
                    return NotFound();
                }

                _repository.Subject.DeleteData(subject);
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
