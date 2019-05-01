namespace DemoAPI.Models
{
    using System;
    using Microsoft.EntityFrameworkCore;
    public class DemoAPIDbContext : DbContext
    {
        public DemoAPIDbContext(DbContextOptions<DemoAPIDbContext> options) : base(options) { }

        public DbSet<TodoItem> TodoItems { get; set; }
    }
}
