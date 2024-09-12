using Microsoft.EntityFrameworkCore;
using SkoloInstitute.Contracts;
using SkoloInstitute.LoggerService;
using SkoloInstitute.Repository;

namespace SkoloInstitute.Extensions
{
    public static class ServiceExtensions
    {
        public static void ConfigureCors(this IServiceCollection services) =>
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy", builder =>
                   builder.WithOrigins("http://localhost:4200")
                    .AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader());
            });

        public static void ConfigureIISIntegration(this IServiceCollection services) =>
            services.Configure<IISOptions>(options =>
            {

            });

        public static void ConfigureLoggerService(this IServiceCollection services)
        {
            services.AddSingleton<ILoggerManager, LoggerManager>();
        }
        public static void ConfigureSqlContext(this IServiceCollection services, IConfiguration configuration) =>
        services.AddDbContext<RepositoryContext>(opts =>
          opts.UseSqlServer(configuration.GetConnectionString("sqlConnection"), b => b.MigrationsAssembly("SkoloInstitute")));

        //   public static void ConfigureMySqlContext(this IServiceCollection services, IConfiguration config)
        //  {
        //    var connectionString = config.GetConnectionString("myConnection");
        //   services.AddDbContext<RepositoryContext>(o => o.UseMySql(connectionString,
        //        MySqlServerVersion.LatestSupportedServerVersion));
        // }

        //  public static void ConfigureSqlContext(this IServiceCollection services,
        //IConfiguration configuration) =>
        //services.AddDbContext<RepositoryContext>(o =>
        //o.UseInMemoryDatabase("SkoloInstitute"));

        public static void ConfigureRepositoryManager(this IServiceCollection services) =>
           services.AddScoped<IRepositoryManager, RepositoryManager>();

    }
}
