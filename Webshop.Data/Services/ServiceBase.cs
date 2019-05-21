namespace Webshop.Data.Services
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using AutoMapper;
    using IConfiguration = Microsoft.Extensions.Configuration.IConfiguration;
    using Webshop.Data;
    public abstract class ServiceBase
    {
        protected readonly IConfiguration Configuration;

        protected readonly Context DbContext;

        protected readonly IMapper Mapper;

        protected readonly IConfigurationProvider ConfigurationProvider;

        public ServiceBase(Context dbContext, IConfiguration configuration, IMapper mapper, IConfigurationProvider configurationProvider)
        {
            this.Configuration = configuration;
            this.DbContext = dbContext;
            this.Mapper = mapper;
            this.ConfigurationProvider = configurationProvider;
        }
    }
}
