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

        public DbSet<Supplier> Suppliers { get; set; }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ProductSupplier>()
                .HasKey(keys => new { keys.ProductId, keys.SupplierId });

            modelBuilder.Entity<ProductSupplier>()
                .HasOne(ic => ic.Product)
                .WithMany(i => i.ProductSuppliers)
                .HasForeignKey(ic => ic.ProductId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<ProductSupplier>()
                .HasOne(ic => ic.Supplier)
                .WithMany(i => i.ProductSuppliers)
                .HasForeignKey(ic => ic.SupplierId)
                .OnDelete(DeleteBehavior.Cascade);
            
            base.OnModelCreating(modelBuilder);
        }
    }
}
