using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SkoloInstitute.Migrations
{
    /// <inheritdoc />
    public partial class InitialData8 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.AddColumn<DateTime>(
                name: "DateCreated",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Provider",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "00325095-bdec-465e-85f3-e505e42684cf", null, "School", "SCHOOL" },
                    { "108d98a8-8a24-4ab6-86ff-d71b6c90012e", null, "Student", "STUDENT" },
                    { "a3f7ffbd-83d3-40b1-b476-4cf4013032f7", null, "Administrator", "ADMINISTRATOR" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "00325095-bdec-465e-85f3-e505e42684cf");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "108d98a8-8a24-4ab6-86ff-d71b6c90012e");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a3f7ffbd-83d3-40b1-b476-4cf4013032f7");

            migrationBuilder.DropColumn(
                name: "DateCreated",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Provider",
                table: "AspNetUsers");

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
    }
}
