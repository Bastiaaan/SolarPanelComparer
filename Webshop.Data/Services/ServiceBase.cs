namespace Webshop.Data.Services
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using AutoMapper;
    using IConfiguration = Microsoft.Extensions.Configuration.IConfiguration;
    using Webshop.Data;
    public class ServiceBase
    {
        protected IConfiguration Configuration { get; set; }

        protected Context DbContext { get; set; }

        protected IMapper Mapper { get; set; }

        public ServiceBase(Context dbContext, IConfiguration configuration, IMapper mapper)
        {
            this.Configuration = configuration;
            this.DbContext = dbContext;
            this.Mapper = mapper;
        }
    }
}
