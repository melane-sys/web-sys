using Microsoft.EntityFrameworkCore;
using SkoloInstitute.Contracts;
using SkoloInstitute.Entities.Models;

namespace SkoloInstitute.Repository
{
    public class RatingRepository : RepositoryBase<Rating>, IRatingRepository
    {
        public RatingRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {
        }

        public void CreateData(Rating data)
        {
            Create(data);
        }

        public void DeleteData(Rating data)
        {
            Delete(data);
        }

        public IEnumerable<Rating> GetAllData()
        {
            return FindAll().OrderBy(ow => ow.CreatedDate)
               .OrderBy(c => c.CreatedDate)
             .Include(c => c.User)
                .ToList();
        }

        public Rating GetDataById(Guid Id)
        {
            return FindByCondition(ow => ow.Id.Equals(Id)).FirstOrDefault();
        }


        public void UpdateData(Rating data)
        {
            Update(data);
        }
    }
}
