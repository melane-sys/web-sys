using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using SkoloInstitute.Repository;

namespace SkoloInstitute.ContextFactory
{
    public class RepositoryContextFactory : IDesignTimeDbContextFactory<RepositoryContext>
    {
        public RepositoryContext CreateDbContext(string[] args)
        {
            // Build configuration
            var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            // Build DbContextOptions
            // var optionsBuilder = new DbContextOptionsBuilder<RepositoryContext>()
            //    .UseMySql(configuration.GetConnectionString("myConnection"),
            //             ServerVersion.AutoDetect(configuration.GetConnectionString("myConnection")));

            var builder = new DbContextOptionsBuilder<RepositoryContext>()
   .UseSqlServer(configuration.GetConnectionString("sqlConnection"),
   b => b.MigrationsAssembly("SkoloInstitute"));

            // Create and return the context
            return new RepositoryContext(builder.Options);
        }
    }
}
