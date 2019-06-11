namespace Webshop.Data.Services
{
    using System;
    using System.Collections.Generic;
    using System.Reflection;
    using System.Text;
    using System.Threading.Tasks;
    using AutoMapper;
    using IConfiguration = Microsoft.Extensions.Configuration.IConfiguration;
    using Webshop.Data;
    using Webshop.Data.Framework;
    using Webshop.Data.Models;
    using Webshop.Data.ViewModels;
    using System.Data.SqlClient;
    using Microsoft.EntityFrameworkCore;

    public class ImageService<T> : ServiceBase where T : Image
    {
        public ImageService(Context context, IConfiguration configuration, IMapper Mapper, IConfigurationProvider configurationProvider) : base(context, configuration, Mapper, configurationProvider)
        { }

        public async Task<bool> AddImage(T entity)
        {
            try
            {
                this.DbContext.Add(entity);
                await this.DbContext.SaveChangesAsync();
                return true;
            }
            catch(SqlException ex)
            {
                throw ex;
            }
        }

        public async Task<IEnumerable<T>> LoadImages()
        {
            return await this.DbContext.Set<T>().ToArrayAsync();
        }

        public T GetImageById(long id)
        {
            return this.DbContext.Set<T>().Find(id);
        }
    }
}
