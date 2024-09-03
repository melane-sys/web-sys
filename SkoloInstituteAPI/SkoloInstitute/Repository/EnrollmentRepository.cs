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
                  .Include(x => x.User)
                     .Include(x => x.EnrollItems)
                .ToList();
        }

        public IEnumerable<Enrollment> GetAllDataById(string Id)
        {
            return FindByCondition(ow => ow.UserId.Equals(Id))
        .Include(x => x.User)
         .Include(x => x.EnrollItems)
     .ToList();
        }

        public Enrollment GetDataById(Guid Id)
        {
            return FindByCondition(ow => ow.Id.Equals(Id))
                   .Include(x => x.User)
                    .Include(x => x.EnrollItems)
                .FirstOrDefault();
        }

        public Enrollment GetDataByUserId(string Id)
        {
            return FindByCondition(ow => ow.UserId.Equals(Id))
                 .Include(x => x.User)
                 .FirstOrDefault();
        }

        public void UpdateData(Enrollment data)
        {
            Update(data);
        }
    }
}
