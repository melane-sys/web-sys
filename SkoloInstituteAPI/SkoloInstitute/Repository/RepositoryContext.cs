using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SkoloInstitute.Entities.Configuration;
using SkoloInstitute.Entities.Models;
using SkoloInstitute.Entities.Models.EnrollAggregate;

namespace SkoloInstitute.Repository
{
    public class RepositoryContext : IdentityDbContext<User>
    {
        public RepositoryContext(DbContextOptions options)
        : base(options)
        {
        }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<Rating> Ratings { get; set; }
        public DbSet<TeacherApplication> TeacherApplications { get; set; }

        public DbSet<Subscriber> subscribers { get; set; }

        public DbSet<Enrollment> Enrollments { get; set; }
        public DbSet<EnrollItem> EnrollItems { get; set; }
        public DbSet<Grade> Grades { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new RoleConfiguration());
            modelBuilder.ApplyConfiguration(new SubjectConfiguration());
            modelBuilder.ApplyConfiguration(new TeacherConfiguration());

            modelBuilder.Entity<EnrollItem>()
            .Property(p => p.Price)
            .HasColumnType("decimal(18, 2)");

            modelBuilder.Entity<Subject>()
            .Property(p => p.Price)
           .HasColumnType("decimal(18, 2)");

            modelBuilder.Entity<Enrollment>()
               .Property(p => p.Subtotal)
               .HasColumnType("decimal(18, 2)");
        }

    }
}
