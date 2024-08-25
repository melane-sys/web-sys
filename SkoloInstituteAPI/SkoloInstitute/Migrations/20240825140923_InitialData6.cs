using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SkoloInstitute.Migrations
{
    /// <inheritdoc />
    public partial class InitialData6 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c579eff4-f006-4d3b-9af9-f8b8bba713cb");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ead38dd9-8a59-4dfa-b13b-afdcb3216459");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "3731b244-3f3d-4b0b-8735-520848ee1c20", null, "School", "SCHOOL" },
                    { "9f43202b-1c9a-4413-8ab9-c3379de49d06", null, "Student", "STUDENT" },
                    { "f8e19bf8-7a80-482c-a31f-567e334cb79b", null, "Administrator", "ADMINISTRATOR" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3731b244-3f3d-4b0b-8735-520848ee1c20");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9f43202b-1c9a-4413-8ab9-c3379de49d06");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f8e19bf8-7a80-482c-a31f-567e334cb79b");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "c579eff4-f006-4d3b-9af9-f8b8bba713cb", null, "Administrator", "ADMINISTRATOR" },
                    { "ead38dd9-8a59-4dfa-b13b-afdcb3216459", null, "Student", "STUDENT" }
                });
        }
    }
}
