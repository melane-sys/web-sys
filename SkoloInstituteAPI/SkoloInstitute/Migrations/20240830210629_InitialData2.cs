using System;
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
                keyValue: "091fd85a-1ccc-4b42-be6a-1a11abee5eb9");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6db658b8-624b-4ada-a9c6-d63655b302b5");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d0700e15-6f38-4555-86dc-bd7e1ddbc85f");

            migrationBuilder.AddColumn<decimal>(
                name: "Price",
                table: "Subjects",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "Subtotal",
                table: "Enrollments",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.CreateTable(
                name: "EnrollItems",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    SubjectName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Class = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TeacherId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    EnrollmentId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EnrollItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EnrollItems_Enrollments_EnrollmentId",
                        column: x => x.EnrollmentId,
                        principalTable: "Enrollments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "9759cde8-65fb-4f28-96c0-697b355b1f83", null, "Student", "STUDENT" },
                    { "e5b78038-ec78-408a-8457-5890fa650da6", null, "School", "SCHOOL" },
                    { "fadd5408-2efd-4696-8979-ef9ef11dc6aa", null, "Administrator", "ADMINISTRATOR" }
                });

            migrationBuilder.UpdateData(
                table: "Subjects",
                keyColumn: "Id",
                keyValue: new Guid("f10323d3-da72-44e7-ae7d-0379da31b329"),
                column: "Price",
                value: 125m);

            migrationBuilder.CreateIndex(
                name: "IX_EnrollItems_EnrollmentId",
                table: "EnrollItems",
                column: "EnrollmentId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EnrollItems");

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

            migrationBuilder.DropColumn(
                name: "Price",
                table: "Subjects");

            migrationBuilder.DropColumn(
                name: "Subtotal",
                table: "Enrollments");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "091fd85a-1ccc-4b42-be6a-1a11abee5eb9", null, "Student", "STUDENT" },
                    { "6db658b8-624b-4ada-a9c6-d63655b302b5", null, "School", "SCHOOL" },
                    { "d0700e15-6f38-4555-86dc-bd7e1ddbc85f", null, "Administrator", "ADMINISTRATOR" }
                });
        }
    }
}
