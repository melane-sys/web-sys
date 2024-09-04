using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SkoloInstitute.Migrations
{
    /// <inheritdoc />
    public partial class InitialData4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1e3962c0-92ad-491e-94d5-735d8bdcfa75");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "657b5e2c-45b1-4eb7-ab74-843bda155e71");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7b2c1c29-3534-4fb0-aa7d-20573c74850b");

            migrationBuilder.AddColumn<string>(
                name: "PaymentToken",
                table: "Enrollments",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ReferenceId",
                table: "Enrollments",
                type: "nvarchar(max)",
                nullable: true);

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.DropColumn(
                name: "PaymentToken",
                table: "Enrollments");

            migrationBuilder.DropColumn(
                name: "ReferenceId",
                table: "Enrollments");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1e3962c0-92ad-491e-94d5-735d8bdcfa75", null, "Administrator", "ADMINISTRATOR" },
                    { "657b5e2c-45b1-4eb7-ab74-843bda155e71", null, "School", "SCHOOL" },
                    { "7b2c1c29-3534-4fb0-aa7d-20573c74850b", null, "Student", "STUDENT" }
                });
        }
    }
}
