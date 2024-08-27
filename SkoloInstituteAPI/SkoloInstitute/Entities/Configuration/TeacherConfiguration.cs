using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SkoloInstitute.Entities.Models;

namespace SkoloInstitute.Entities.Configuration
{
    public class TeacherConfiguration : IEntityTypeConfiguration<Teacher>
    {
        public void Configure(EntityTypeBuilder<Teacher> builder)
        {
            builder.HasData(
                new Teacher
                {
                    Id = new Guid("302a431a-2f54-4768-8a34-b6414f3909df"),
                    FirstName = "Sipho",
                    LastName = "Dlamini",
                    PictureUrl = "Resources\\images\\user.png",
                    Phone = "768888887",
                    Email = "sipho@melanegroup.com",

                }

            );
        }
    }
}
