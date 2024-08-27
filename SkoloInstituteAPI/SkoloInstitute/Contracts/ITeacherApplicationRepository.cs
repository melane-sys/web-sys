using SkoloInstitute.Entities.Models;

namespace SkoloInstitute.Contracts
{
    public interface ITeacherApplicationRepository
    {
        IEnumerable<TeacherApplication> GetAllData();
        TeacherApplication GetDataById(Guid Id);
        TeacherApplication GetDataByEmail(string email);
        void CreateData(TeacherApplication data);
        void UpdateData(TeacherApplication data);
        void DeleteData(TeacherApplication data);
    }
}
