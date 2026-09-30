using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApplication_HBA.Migrations
{
    /// <inheritdoc />
    public partial class RenameTodoProperties : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IsComplete",
                table: "Todos",
                newName: "IsCompleted");

            migrationBuilder.RenameColumn(
                name: "CreateAt",
                table: "Todos",
                newName: "CreatedAt");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IsCompleted",
                table: "Todos",
                newName: "IsComplete");

            migrationBuilder.RenameColumn(
                name: "CreatedAt",
                table: "Todos",
                newName: "CreateAt");
        }
    }
}
