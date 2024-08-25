﻿using SkoloInstitute.Contracts;

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

        public void Save() => _repoContext.SaveChanges();
    }
}
