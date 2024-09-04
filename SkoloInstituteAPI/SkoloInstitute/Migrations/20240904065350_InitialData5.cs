using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SkoloInstitute.Migrations
{
    /// <inheritdoc />
    public partial class InitialData5 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "400c38a5-c2fd-4b7d-86f2-4fdcd3ed20e0");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9f164674-352a-478e-943b-c75c9107883d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b8dfeb31-8955-4b62-97c0-4395370b135a");

            migrationBuilder.AddColumn<string>(
                name: "PhoneNumber",
                table: "Enrollments",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "03861512-901d-40f6-8d8c-c14badb96e43", null, "Administrator", "ADMINISTRATOR" },
                    { "a76ab55c-9267-421a-9f3d-bd9f6991b32d", null, "Student", "STUDENT" },
                    { "d7ef109a-fa42-4022-9c87-66ac86dd735d", null, "School", "SCHOOL" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "03861512-901d-40f6-8d8c-c14badb96e43");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a76ab55c-9267-421a-9f3d-bd9f6991b32d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d7ef109a-fa42-4022-9c87-66ac86dd735d");

            migrationBuilder.DropColumn(
                name: "PhoneNumber",
                table: "Enrollments");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "400c38a5-c2fd-4b7d-86f2-4fdcd3ed20e0", null, "School", "SCHOOL" },
                    { "9f164674-352a-478e-943b-c75c9107883d", null, "Administrator", "ADMINISTRATOR" },
                    { "b8dfeb31-8955-4b62-97c0-4395370b135a", null, "Student", "STUDENT" }
                });
        }
    }
}
