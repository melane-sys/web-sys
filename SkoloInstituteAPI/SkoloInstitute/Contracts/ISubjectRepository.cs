using SkoloInstitute.Entities.Models;

namespace SkoloInstitute.Contracts
{
    public interface ISubjectRepository
    {
        IEnumerable<Subject> GetAllData();
        IEnumerable<Subject> GetSubjectsByClass(string name);
        IEnumerable<Subject> GetSubjectsByClasses(string name);
        Subject GetDataById(Guid Id);
        void CreateData(Subject data);
        void UpdateData(Subject data);
        void DeleteData(Subject data);
    }
}
