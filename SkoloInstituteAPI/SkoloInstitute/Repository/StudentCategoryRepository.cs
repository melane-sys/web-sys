using SkoloInstitute.Contracts;
using SkoloInstitute.Entities.Models;

namespace SkoloInstitute.Repository
{
    public class StudentCategoryRepository : RepositoryBase<StudentCategory>, IStudentCategoryRepository
    {
        public StudentCategoryRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {
        }

        public void CreateData(StudentCategory data)
        {
            Create(data);
        }

        public void DeleteData(StudentCategory data)
        {
            Delete(data);
        }

        public IEnumerable<StudentCategory> GetAllData()
        {
            return FindAll().OrderBy(ow => ow.Id)
              .ToList();
        }

        public StudentCategory GetDataById(Guid Id)
        {
            return FindByCondition(ow => ow.Id.Equals(Id))
    .FirstOrDefault();
        }

        public StudentCategory GetDataByUserId(string Id)
        {
            return FindByCondition(ow => ow.UserId.Equals(Id))
          .FirstOrDefault();
        }

        public void UpdateData(StudentCategory data)
        {
            Update(data);
        }
    }
}
