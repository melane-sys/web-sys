using SkoloInstitute.Entities.Models;

namespace SkoloInstitute.Contracts
{
    public interface IRatingRepository
    {
        IEnumerable<Rating> GetAllData();
        Rating GetDataById(Guid Id);
        void CreateData(Rating data);
        void UpdateData(Rating data);
        void DeleteData(Rating data);
    }
}
