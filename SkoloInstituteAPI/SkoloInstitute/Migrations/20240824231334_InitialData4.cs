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
                keyValue: "6e82b011-059a-4747-957b-91528021b9f0");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "bbde0f05-5d2d-45f2-b808-2afdc02310bf");

            migrationBuilder.AddColumn<string>(
                name: "Class",
                table: "Subjects",
                type: "TEXT",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "c579eff4-f006-4d3b-9af9-f8b8bba713cb", null, "Administrator", "ADMINISTRATOR" },
                    { "ead38dd9-8a59-4dfa-b13b-afdcb3216459", null, "Student", "STUDENT" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c579eff4-f006-4d3b-9af9-f8b8bba713cb");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ead38dd9-8a59-4dfa-b13b-afdcb3216459");

            migrationBuilder.DropColumn(
                name: "Class",
                table: "Subjects");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "6e82b011-059a-4747-957b-91528021b9f0", null, "Student", "STUDENT" },
                    { "bbde0f05-5d2d-45f2-b808-2afdc02310bf", null, "Administrator", "ADMINISTRATOR" }
                });
        }
    }
}
