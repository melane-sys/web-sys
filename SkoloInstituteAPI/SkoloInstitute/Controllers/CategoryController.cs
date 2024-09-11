using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SkoloInstitute.Contracts;
using SkoloInstitute.Entities.DataTransferObjects.Subject;
using SkoloInstitute.Entities.Models;
using System.Security.Claims;

namespace SkoloInstitute.Controllers
{
    [Route("api/categories")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private IRepositoryManager _repository;
        private IMapper _mapper;

        public CategoryController(IRepositoryManager repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAllCategories()
        {
            try
            {
                var categories = _repository.StudentCategory.GetAllData();

                var categoriesResult = _mapper.Map<IEnumerable<StudentCategoryDto>>(categories);
                return Ok(categoriesResult);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("{id}", Name = "CategoryById")]
        public IActionResult GetCategoryById(Guid id)
        {
            try
            {
                var category = _repository.StudentCategory.GetDataById(id);
                if (category == null)
                {

                    return NotFound();
                }
                var categoryResult = _mapper.Map<StudentCategoryDto>(category);
                return Ok(categoryResult);
            }
            catch (Exception)
            {

                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("user/CategoryByUserId")]
        public IActionResult GetCategoryByUserId()
        {
            try
            {
                var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
                if (userId == null)
                {
                    return NotFound("User not avialable");
                }
                var category = _repository.StudentCategory.GetDataByUserId(userId);
                if (category == null)
                {
                    return NoContent();
                }
                var categoryResult = _mapper.Map<StudentCategoryDto>(category);
                return Ok(categoryResult);
            }
            catch (Exception)
            {

                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPost]
        public IActionResult CreateSubject([FromBody] StudentCategoryForCreationDto category)
        {
            try
            {
                if (category == null)
                {
                    return BadRequest("Subject object is null");
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest("Invalid model object");
                }
                var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
                if (userId == null)
                {
                    return BadRequest("User not found logout and login again");
                }
                category.UserId = userId;
                var categoryEntity = _mapper.Map<StudentCategory>(category);
                _repository.StudentCategory.CreateData(categoryEntity);
                _repository.Save();

                var createdCategory = _mapper.Map<StudentCategoryDto>(categoryEntity);
                return CreatedAtRoute("CategoryById", new { id = createdCategory.Id }, createdCategory);
            }
            catch (Exception)
            {

                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateSubject(Guid id, [FromBody] StudentCategoryForUpdateDto category)
        {
            try
            {
                if (category == null)
                {
                    return BadRequest("Subject object is null");
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest("Invalid model object");
                }

                var categoryEntity = _repository.StudentCategory.GetDataById(id);
                if (categoryEntity == null)
                {
                    return NotFound();
                }

                _mapper.Map(category, categoryEntity);
                _repository.StudentCategory.UpdateData(categoryEntity);
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
