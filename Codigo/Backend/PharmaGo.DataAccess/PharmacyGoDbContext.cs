using Microsoft.EntityFrameworkCore;
using PharmaGo.Domain.Entities;
using System.Numerics;

namespace PharmaGo.DataAccess
{
    public class PharmacyGoDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Drug> Drugs { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Invitation> Invitations { get; set; }
        public DbSet<Pharmacy> Pharmacys { get; set; }
        public DbSet<Purchase> Purchases { get; set; }
        public DbSet<PurchaseDetail> PurchaseDetails { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<StockRequest> StockRequests { get; set; }
        public DbSet<StockRequestDetail> StockRequestDetails { get; set; }
        public DbSet<UnitMeasure> UnitMeasures { get; set; }
        public DbSet<Presentation> Presentations { get; set; }
        public DbSet<Session> Sessions { get; set; }

        public PharmacyGoDbContext(DbContextOptions<PharmacyGoDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {

            modelBuilder.Entity<Drug>().Property(property => property.Price).HasPrecision(14, 2);
            modelBuilder.Entity<Purchase>().Property(property => property.TotalAmount).HasPrecision(14, 2);
            modelBuilder.Entity<PurchaseDetail>().Property(property => property.Price).HasPrecision(14, 2);
            modelBuilder.Entity<Product>().Property(property => property.Price).HasPrecision(14, 2);
            modelBuilder.Entity<UnitMeasure>().Property(u => u.Name).HasConversion<string>();
            modelBuilder.Entity<Presentation>().Property(u => u.Name).HasConversion<string>();




            modelBuilder.Entity<PurchaseDetail>()
         .HasOne(pd => pd.Drug)
         .WithMany()
         .HasForeignKey(pd => pd.DrugId);

            modelBuilder.Entity<PurchaseDetail>()
                .HasOne(pd => pd.Product)
                .WithMany()
                .HasForeignKey(pd => pd.ProductId);

            modelBuilder.Entity<PurchaseDetail>()
                .HasOne(pd => pd.Pharmacy)
                .WithMany()
                .HasForeignKey(pd => pd.PharmacyId);

            modelBuilder.Entity<PurchaseDetail>()
                .HasOne(pd => pd.Purchase)
                .WithMany()
                .HasForeignKey(pd => pd.PurchaseId);



            base.OnModelCreating(modelBuilder);

        }

    }
}