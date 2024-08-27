using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SkoloInstitute.Migrations
{
    /// <inheritdoc />
    public partial class InitialData7 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.CreateTable(
                name: "subscribers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: true),
                    IsSubscribed = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_subscribers", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2e459a90-d71f-478e-ad79-109ad6fc33bb", null, "School", "SCHOOL" },
                    { "35faa4b6-d918-4126-89bc-5fb11f0cf986", null, "Student", "STUDENT" },
                    { "454d3043-bd67-4204-8514-22c696553a17", null, "Administrator", "ADMINISTRATOR" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "subscribers");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2e459a90-d71f-478e-ad79-109ad6fc33bb");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "35faa4b6-d918-4126-89bc-5fb11f0cf986");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "454d3043-bd67-4204-8514-22c696553a17");

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
    }
}
