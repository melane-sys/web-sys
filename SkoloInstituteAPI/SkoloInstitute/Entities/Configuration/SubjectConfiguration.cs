using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SkoloInstitute.Entities.Models;

namespace SkoloInstitute.Entities.Configuration
{
    public class SubjectConfiguration : IEntityTypeConfiguration<Subject>
    {
        public void Configure(EntityTypeBuilder<Subject> builder)
        {
            builder.HasData(
                new Subject
                {
                    Id = new Guid("f10323d3-da72-44e7-ae7d-0379da31b329"),
                    SubjectName = "Career Guidence",
                    Class = "All",
                    TeacherId = new Guid("302a431a-2f54-4768-8a34-b6414f3909df")
                }

            );
        }
    }
}
