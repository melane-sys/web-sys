using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SkoloInstitute.Migrations
{
    /// <inheritdoc />
    public partial class InitialData3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9759cde8-65fb-4f28-96c0-697b355b1f83");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e5b78038-ec78-408a-8457-5890fa650da6");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fadd5408-2efd-4696-8979-ef9ef11dc6aa");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "23a33e1f-1b30-405a-abd4-7cc8f95fa8b6", null, "Administrator", "ADMINISTRATOR" },
                    { "6dc34c2d-707a-4e78-a808-566cd922b3e1", null, "Student", "STUDENT" },
                    { "b3dba2cc-7d86-49b6-bb0a-5a70abe9470c", null, "School", "SCHOOL" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "23a33e1f-1b30-405a-abd4-7cc8f95fa8b6");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6dc34c2d-707a-4e78-a808-566cd922b3e1");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b3dba2cc-7d86-49b6-bb0a-5a70abe9470c");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "9759cde8-65fb-4f28-96c0-697b355b1f83", null, "Student", "STUDENT" },
                    { "e5b78038-ec78-408a-8457-5890fa650da6", null, "School", "SCHOOL" },
                    { "fadd5408-2efd-4696-8979-ef9ef11dc6aa", null, "Administrator", "ADMINISTRATOR" }
                });
        }
    }
}
