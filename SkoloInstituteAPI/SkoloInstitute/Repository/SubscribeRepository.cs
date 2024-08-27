using SkoloInstitute.Contracts;
using SkoloInstitute.Entities.Models;

namespace SkoloInstitute.Repository
{
    public class SubscribeRepository : RepositoryBase<Subscriber>, ISubscribeRepository
    {
        public SubscribeRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {
        }

        public void CreateData(Subscriber data)
        {
            Create(data);
        }

        public void DeleteData(Subscriber data)
        {
            Delete(data);
        }

        public IEnumerable<Subscriber> GetAllData()
        {
            return FindAll().OrderBy(ow => ow.Id)
      .ToList();
        }

        public Subscriber GetDataByEmail(string email)
        {
            return FindByCondition(ow => ow.Email.Equals(email))
.FirstOrDefault();
        }

        public Subscriber GetDataById(Guid Id)
        {
            return FindByCondition(ow => ow.Id.Equals(Id))
       .FirstOrDefault();
        }

        public void UpdateData(Subscriber data)
        {
            Update(data);
        }
    }
}
