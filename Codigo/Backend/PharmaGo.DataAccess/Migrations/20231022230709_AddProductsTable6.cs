using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PharmaGo.DataAccess.Migrations
{
    public partial class AddProductsTable6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PurchaseDetails_Purchases_PurchaseId1",
                table: "PurchaseDetails");

            migrationBuilder.DropIndex(
                name: "IX_PurchaseDetails_PurchaseId1",
                table: "PurchaseDetails");

            migrationBuilder.DropColumn(
                name: "PurchaseId1",
                table: "PurchaseDetails");

            migrationBuilder.AddColumn<string>(
                name: "TypeOfProduct",
                table: "PurchaseDetails",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TypeOfProduct",
                table: "PurchaseDetails");

            migrationBuilder.AddColumn<int>(
                name: "PurchaseId1",
                table: "PurchaseDetails",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_PurchaseDetails_PurchaseId1",
                table: "PurchaseDetails",
                column: "PurchaseId1");

            migrationBuilder.AddForeignKey(
                name: "FK_PurchaseDetails_Purchases_PurchaseId1",
                table: "PurchaseDetails",
                column: "PurchaseId1",
                principalTable: "Purchases",
                principalColumn: "Id");
        }
    }
}
