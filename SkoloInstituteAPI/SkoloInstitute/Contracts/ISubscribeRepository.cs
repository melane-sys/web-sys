using SkoloInstitute.Entities.Models;

namespace SkoloInstitute.Contracts
{
    public interface ISubscribeRepository
    {
        IEnumerable<Subscriber> GetAllData();
        Subscriber GetDataById(Guid Id);
        Subscriber GetDataByEmail(string email);
        void CreateData(Subscriber data);
        void UpdateData(Subscriber data);
        void DeleteData(Subscriber data);
    }
}
