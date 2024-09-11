using System;
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
                keyValue: "20852404-8eb1-439e-be59-06f3c738e6d7");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3da17b5a-5b4a-444e-bfed-5856e285e4fd");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "cff57f1e-d2a6-4005-8a3d-ed9549018c47");

            migrationBuilder.CreateTable(
                name: "StudentCategories",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CategoryName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudentCategories", x => x.Id);
                    table.ForeignKey(
                        name: "FK_StudentCategories_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2b2a4e2f-ef23-4d32-99ac-336c4f07a966", null, "Student", "STUDENT" },
                    { "553db371-625b-4a60-bc05-9365040e5641", null, "School", "SCHOOL" },
                    { "6222d257-e948-4105-a24f-e20bf177c2ff", null, "Administrator", "ADMINISTRATOR" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_StudentCategories_UserId",
                table: "StudentCategories",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StudentCategories");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2b2a4e2f-ef23-4d32-99ac-336c4f07a966");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "553db371-625b-4a60-bc05-9365040e5641");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6222d257-e948-4105-a24f-e20bf177c2ff");

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
    }
}
