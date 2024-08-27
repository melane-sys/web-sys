using SkoloInstitute.Contracts;
using SkoloInstitute.Entities.Models;

namespace SkoloInstitute.Repository
{
    public class TeacherApplicationRepository : RepositoryBase<TeacherApplication>, ITeacherApplicationRepository
    {
        public TeacherApplicationRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {
        }

        public void CreateData(TeacherApplication data)
        {
            Create(data);
        }

        public void DeleteData(TeacherApplication data)
        {
            Delete(data);
        }

        public IEnumerable<TeacherApplication> GetAllData()
        {
            return FindAll().OrderBy(ow => ow.Email).ToList();
        }

        public TeacherApplication GetDataByEmail(string email)
        {
            return FindByCondition(ow => ow.Email.Equals(email)).FirstOrDefault();
        }

        public TeacherApplication GetDataById(Guid Id)
        {
            return FindByCondition(ow => ow.Id.Equals(Id)).FirstOrDefault();
        }

        public void UpdateData(TeacherApplication data)
        {
            Update(data);
        }
    }
}
