using AutoMapper;
using SkoloInstitute.Entities.DataTransferObjects;
using SkoloInstitute.Entities.DataTransferObjects.Enrollment;
using SkoloInstitute.Entities.DataTransferObjects.Rating;
using SkoloInstitute.Entities.DataTransferObjects.Subject;
using SkoloInstitute.Entities.DataTransferObjects.Subscribe;
using SkoloInstitute.Entities.DataTransferObjects.Teacher;
using SkoloInstitute.Entities.Models;
using SkoloInstitute.Helpers;

namespace SkoloInstitute
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {

            CreateMap<UserForRegistrationDto, User>()
                .ForMember(u => u.UserName, opt => opt.MapFrom(x => x.Email));

            CreateMap<Teacher, TeacherDto>()
           .ForMember(d => d.PictureUrl, o => o.MapFrom<TeacherUrlResolver>())
           .ForMember(d => d.Rating, o => o.MapFrom(s => s.Ratings.Count != 0 ? (int)s.Ratings.Average(r => r.starsCount) : 0));
            CreateMap<TeacherForCreationDto, Teacher>();
            CreateMap<TeacherForUpdateDto, Teacher>();

            CreateMap<Rating, RatingDto>()
     .ForMember(n => n.FirstName, opt => opt.MapFrom(src => src.User.FirstName))
      .ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.User.LastName));
            CreateMap<RatingForCreationDto, Rating>();

            CreateMap<Subject, SubjectDto>()
                   .ForMember(n => n.TeacherFirstName, opt => opt.MapFrom(src => src.Teacher.FirstName))
                  .ForMember(dest => dest.TeacherLastName, opt => opt.MapFrom(src => src.Teacher.LastName));
            CreateMap<SubjectForCreationDto, Subject>();
            CreateMap<SubjectForUpdateDto, Subject>();

            CreateMap<Enrollment, EnrollmentDto>()
                  .ForMember(n => n.SubjectName, opt => opt.MapFrom(src => src.Subject.SubjectName))
                  .ForMember(n => n.FirstName, opt => opt.MapFrom(src => src.User.FirstName))
                  .ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.User.LastName))
                   .ForMember(n => n.TeacherFirstName, opt => opt.MapFrom(src => src.Subject.Teacher.FirstName))
                  .ForMember(dest => dest.TeacherLastName, opt => opt.MapFrom(src => src.Subject.Teacher.LastName));
            CreateMap<EnrollmentForCreationDto, Enrollment>();
            CreateMap<EnrollmentForUpdateDto, Enrollment>();

            CreateMap<TeacherApplication, TeacherAppDto>();
            CreateMap<TeacherAppForCreationDto, TeacherApplication>();

            CreateMap<Subscriber, SubscriberDto>();
            CreateMap<SubscriberForCreationDto, Subscriber>();
            CreateMap<SubscriberForUpdateDto, Subscriber>();

        }
    }
}
