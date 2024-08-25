using SkoloInstitute.Entities.Models;

namespace SkoloInstitute.Contracts
{
    public interface ITeacherRepository
    {
        IEnumerable<Teacher> GetAllData();
        Teacher GetDataById(Guid Id);
        void CreateData(Teacher data);
        void UpdateData(Teacher data);
        void DeleteData(Teacher data);
    }
}
