namespace Webshop.Data
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Design;
    using Models;
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> dbContextOptions) : base(dbContextOptions) { }

        public DbSet<Order> Orders { get; set; }

        public DbSet<Product> Products { get; set; }

        public DbSet<Image> Images { get; set; }

        public DbSet<Vendor> Vendors { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<ProductVendor> ProductVendor { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ProductVendor>()
                .HasKey(keys => new { keys.ProductId, keys.VendorId });

            modelBuilder.Entity<ProductVendor>()
                .HasOne(ic => ic.Product)
                .WithMany(i => i.ProductVendors)
                .HasForeignKey(ic => ic.ProductId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<ProductVendor>()
                .HasOne(ic => ic.Vendor)
                .WithMany(i => i.ProductVendors)
                .HasForeignKey(ic => ic.VendorId)
                .OnDelete(DeleteBehavior.Cascade);
           
            base.OnModelCreating(modelBuilder);
        }
    }
}
