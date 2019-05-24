namespace Webshop.Data.Framework
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using AutoMapper;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Options;
    using Webshop.Data.Services;

    public static class DataLayerServiceCollectionExtensions 
    {
        public static IServiceCollection InitializeServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddAutoMapper();
            services.AddDbContext<Context>(options =>
                options.UseSqlServer(configuration.GetConnectionString("UsedConnection")));
            services.AddTransient<ProductService, ProductService>();

            return services;
        }
    }
}
