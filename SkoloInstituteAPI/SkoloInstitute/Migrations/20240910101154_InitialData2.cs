using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SkoloInstitute.Migrations
{
    /// <inheritdoc />
    public partial class InitialData2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7dcc278c-b74a-4f9c-b156-27a636e3561d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "965dbf66-9186-412d-ae6f-f373ed6df1c3");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a91cb262-4de1-4c3b-806a-4e222e1db027");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "20852404-8eb1-439e-be59-06f3c738e6d7", null, "Administrator", "ADMINISTRATOR" },
                    { "3da17b5a-5b4a-444e-bfed-5856e285e4fd", null, "Student", "STUDENT" },
                    { "cff57f1e-d2a6-4005-8a3d-ed9549018c47", null, "School", "SCHOOL" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "20852404-8eb1-439e-be59-06f3c738e6d7");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3da17b5a-5b4a-444e-bfed-5856e285e4fd");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "cff57f1e-d2a6-4005-8a3d-ed9549018c47");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "7dcc278c-b74a-4f9c-b156-27a636e3561d", null, "Administrator", "ADMINISTRATOR" },
                    { "965dbf66-9186-412d-ae6f-f373ed6df1c3", null, "Student", "STUDENT" },
                    { "a91cb262-4de1-4c3b-806a-4e222e1db027", null, "School", "SCHOOL" }
                });
        }
    }
}
