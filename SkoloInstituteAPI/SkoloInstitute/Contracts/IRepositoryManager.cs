namespace SkoloInstitute.Contracts
{
    public interface IRepositoryManager
    {
        IRatingRepository Rating { get; }
        IEnrollmentRepository Enrollment { get; }
        ITeacherApplicationRepository TeacherApplication { get; }
        ITeacherRepository Teacher { get; }
        ISubjectRepository Subject { get; }
        ISubscribeRepository Subscriber { get; }
        IStudentCategoryRepository StudentCategory { get; }
        void Save();
    }
}
