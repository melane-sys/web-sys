using Microsoft.EntityFrameworkCore;
using SkoloInstitute.Contracts;
using SkoloInstitute.Entities.Models;

namespace SkoloInstitute.Repository
{
    public class TeacherRepository : RepositoryBase<Teacher>, ITeacherRepository
    {
        public TeacherRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {
        }

        public void CreateData(Teacher data)
        {
            Create(data);
        }

        public void DeleteData(Teacher data)
        {
            Delete(data);
        }

        public IEnumerable<Teacher> GetAllData()
        {
            return FindAll().OrderBy(ow => ow.FirstName)
                    .Include(x => x.Subjects)
                    .Include(c => c.Ratings)
                .ToList();
        }

        public Teacher GetDataById(Guid Id)
        {
            return FindByCondition(ow => ow.Id.Equals(Id))
                .Include(x => x.Subjects)
                .Include(c => c.Ratings).ThenInclude(a => a.User)
                .FirstOrDefault();
        }

        public void UpdateData(Teacher data)
        {
            Update(data);
        }
    }
}
