using Microsoft.EntityFrameworkCore;
using SkoloInstitute.Contracts;
using SkoloInstitute.Entities.Models;

namespace SkoloInstitute.Repository
{
    public class SubjectRepository : RepositoryBase<Subject>, ISubjectRepository
    {
        public SubjectRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {
        }

        public void CreateData(Subject data)
        {
            Create(data);
        }

        public void DeleteData(Subject data)
        {
            Delete(data);
        }

        public IEnumerable<Subject> GetAllData()
        {
            return FindAll().OrderBy(ow => ow.Id)
                   .Include(x => x.Teacher)
                .ToList();
        }

        public Subject GetDataById(Guid Id)
        {
            return FindByCondition(ow => ow.Id.Equals(Id))
                  .Include(x => x.Teacher)
                .FirstOrDefault();
        }

        public IEnumerable<Subject> GetSubjectsByClass(string name)
        {
            return FindByCondition(ow => ow.Class.Equals(name))
      .Include(x => x.Teacher)
    .ToList();
        }

        public void UpdateData(Subject data)
        {
            Update(data);
        }
    }
}
