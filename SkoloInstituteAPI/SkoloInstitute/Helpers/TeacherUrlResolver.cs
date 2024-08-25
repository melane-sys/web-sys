using AutoMapper;
using SkoloInstitute.Entities.DataTransferObjects.Teacher;
using SkoloInstitute.Entities.Models;

namespace SkoloInstitute.Helpers
{
    public class TeacherUrlResolver : IValueResolver<Teacher, TeacherDto, string>
    {
        private readonly IConfiguration _config;
        public TeacherUrlResolver(IConfiguration config)
        {
            _config = config;
        }
        public string Resolve(Teacher source, TeacherDto destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.PictureUrl))
            {
                return _config["ApiUrl"] + source.PictureUrl;
            }
            return null;
        }
    }
}
