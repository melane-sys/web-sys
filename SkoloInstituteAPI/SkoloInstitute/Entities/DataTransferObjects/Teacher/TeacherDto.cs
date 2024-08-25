using SkoloInstitute.Entities.DataTransferObjects.Rating;
using SkoloInstitute.Entities.DataTransferObjects.Subject;

namespace SkoloInstitute.Entities.DataTransferObjects.Teacher
{
    public class TeacherDto
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string PictureUrl { get; set; }
        public int Rating { get; set; }
        public IEnumerable<SubjectDto> Subjects { get; set; }
        public IEnumerable<RatingDto> Ratings { get; set; }

    }
}
