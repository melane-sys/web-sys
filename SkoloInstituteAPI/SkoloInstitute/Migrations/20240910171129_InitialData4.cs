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
            migrationBuilder.DropForeignKey(
                name: "FK_StudentCategories_AspNetUsers_UserId",
                table: "StudentCategories");

            migrationBuilder.DropIndex(
                name: "IX_StudentCategories_UserId",
                table: "StudentCategories");

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

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "StudentCategories",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0844250b-22d7-4da8-b0d1-d34cbccf340e", null, "School", "SCHOOL" },
                    { "4b16f88d-627f-4aa3-9ec0-6a405c7fcd5a", null, "Administrator", "ADMINISTRATOR" },
                    { "8d728d04-21fb-406c-90c9-c7c038a6f07d", null, "Student", "STUDENT" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0844250b-22d7-4da8-b0d1-d34cbccf340e");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4b16f88d-627f-4aa3-9ec0-6a405c7fcd5a");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8d728d04-21fb-406c-90c9-c7c038a6f07d");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "StudentCategories",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

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

            migrationBuilder.AddForeignKey(
                name: "FK_StudentCategories_AspNetUsers_UserId",
                table: "StudentCategories",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }
    }
}
