using Microsoft.EntityFrameworkCore;
using SkoloInstitute.Contracts;
using SkoloInstitute.Entities.Models;

namespace SkoloInstitute.Repository
{
    public class EnrollmentRepository : RepositoryBase<Enrollment>, IEnrollmentRepository
    {
        public EnrollmentRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {
        }

        public void CreateData(Enrollment data)
        {
            Create(data);
        }

        public void DeleteData(Enrollment data)
        {
            Delete(data);
        }

        public IEnumerable<Enrollment> GetAllData()
        {
            return FindAll().OrderBy(ow => ow.Id)
                   .Include(x => x.Subject)
                  .Include(x => x.Subject).ThenInclude(a => a.Teacher)
                  .Include(x => x.User)
                .ToList();
        }

        public IEnumerable<Enrollment> GetAllDataById(string Id)
        {
            return FindByCondition(ow => ow.UserId.Equals(Id))
       .Include(x => x.Subject)
           .Include(x => x.Subject).ThenInclude(a => a.Teacher)
        .Include(x => x.User)
     .ToList();
        }

        public Enrollment GetDataById(Guid Id)
        {
            return FindByCondition(ow => ow.Id.Equals(Id))
                  .Include(x => x.Subject)
                   .Include(x => x.User)
                       .Include(x => x.Subject).ThenInclude(a => a.Teacher)
                .FirstOrDefault();
        }

        public void UpdateData(Enrollment data)
        {
            Update(data);
        }
    }
}
