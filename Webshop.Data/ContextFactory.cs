namespace Webshop.Data
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Design;

    public class ContextFactory : IDesignTimeDbContextFactory<Context>
    {
        public Context CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<Context>();
            optionsBuilder.UseSqlServer(@"Server=WS120;DataBase=WebShop;Trusted_Connection=true;MultipleActiveResultSets=false");

            return new Context(optionsBuilder.Options);
        }
    }
}
