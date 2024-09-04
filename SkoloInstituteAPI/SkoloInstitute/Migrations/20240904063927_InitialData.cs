using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SkoloInstitute.Migrations
{
    /// <inheritdoc />
    public partial class InitialData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ae604613-a32d-4378-86b8-77917466af88");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "bacfd27d-7e86-44ef-90ad-812a41c9fafc");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "dacd638f-a1a8-4936-a650-c0017f276d69");

            migrationBuilder.AddColumn<bool>(
                name: "Paid",
                table: "Enrollments",
                type: "bit",
                nullable: false,
                defaultValue: false);

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.DropColumn(
                name: "Paid",
                table: "Enrollments");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "ae604613-a32d-4378-86b8-77917466af88", null, "School", "SCHOOL" },
                    { "bacfd27d-7e86-44ef-90ad-812a41c9fafc", null, "Administrator", "ADMINISTRATOR" },
                    { "dacd638f-a1a8-4936-a650-c0017f276d69", null, "Student", "STUDENT" }
                });
        }
    }
}
