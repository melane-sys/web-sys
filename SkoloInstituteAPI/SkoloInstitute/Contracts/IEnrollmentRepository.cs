using SkoloInstitute.Entities.Models;

namespace SkoloInstitute.Contracts
{
    public interface IEnrollmentRepository
    {
        IEnumerable<Enrollment> GetAllData();
        IEnumerable<Enrollment> GetAllDataById(string Id);
        Enrollment GetDataById(Guid Id);
        void CreateData(Enrollment data);
        void UpdateData(Enrollment data);
        void DeleteData(Enrollment data);
    }
}
