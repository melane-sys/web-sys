using SkoloInstitute.Contracts;

namespace SkoloInstitute.Repository
{
    public class RepositoryManager : IRepositoryManager
    {
        private RepositoryContext _repoContext;
        private IRatingRepository _ratingRepository;
        private IEnrollmentRepository _enrollmentRepository;
        private ITeacherApplicationRepository _applicationRepository;
        private ITeacherRepository _teacherRepository;
        private ISubjectRepository _subjectRepository;
        private ISubscribeRepository _subscribeRepository;
        private IStudentCategoryRepository _categoryRepository;

        public RepositoryManager(RepositoryContext repositoryContext)
        {
            _repoContext = repositoryContext;
        }

        public IRatingRepository Rating
        {
            get
            {
                if (_ratingRepository == null)
                {
                    _ratingRepository = new RatingRepository(_repoContext);
                }
                return _ratingRepository;
            }

        }

        public IEnrollmentRepository Enrollment
        {
            get
            {
                if (_enrollmentRepository == null)
                {
                    _enrollmentRepository = new EnrollmentRepository(_repoContext);
                }
                return _enrollmentRepository;
            }
        }

        public ISubjectRepository Subject
        {
            get
            {
                if (_subjectRepository == null)
                {
                    _subjectRepository = new SubjectRepository(_repoContext);
                }
                return _subjectRepository;
            }
        }

        public ITeacherRepository Teacher
        {
            get
            {
                if (_teacherRepository == null)
                {
                    _teacherRepository = new TeacherRepository(_repoContext);
                }
                return _teacherRepository;
            }
        }

        public ITeacherApplicationRepository TeacherApplication
        {
            get
            {
                if (_applicationRepository == null)
                {
                    _applicationRepository = new TeacherApplicationRepository(_repoContext);
                }
                return _applicationRepository;
            }
        }

        public ISubscribeRepository Subscriber
        {
            get
            {
                if (_subscribeRepository == null)
                {
                    _subscribeRepository = new SubscribeRepository(_repoContext);
                }
                return _subscribeRepository;
            }
        }

        public IStudentCategoryRepository StudentCategory
        {
            get
            {
                if (_categoryRepository == null)
                {
                    _categoryRepository = new StudentCategoryRepository(_repoContext);
                }
                return _categoryRepository;
            }
        }

        public void Save() => _repoContext.SaveChanges();
    }
}
