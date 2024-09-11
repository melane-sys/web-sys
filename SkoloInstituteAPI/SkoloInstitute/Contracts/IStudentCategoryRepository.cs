using SkoloInstitute.Entities.Models;

namespace SkoloInstitute.Contracts
{
    public interface IStudentCategoryRepository
    {
        IEnumerable<StudentCategory> GetAllData();
        StudentCategory GetDataById(Guid Id);
        StudentCategory GetDataByUserId(string Id);
        void CreateData(StudentCategory data);
        void UpdateData(StudentCategory data);
        void DeleteData(StudentCategory data);
    }
}
