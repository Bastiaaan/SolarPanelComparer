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
    using System.Linq;

    public class ImageService : ServiceBase
    {
        public ImageService(Context context, IConfiguration configuration, IMapper Mapper, IConfigurationProvider configurationProvider) : base(context, configuration, Mapper, configurationProvider)
        { }

        public async Task<bool> AddImage(Image image)
        {
            try
            {
                this.DbContext.Add(image);
                await this.DbContext.SaveChangesAsync();
                return true;
            }
            catch(SqlException ex)
            {
                throw ex;
            }
        }

        public IEnumerable<ImageViewModel> LoadImages()
        {
            var imagesAvailable = this.DbContext.Images.ToList();
            foreach(Image img in imagesAvailable)
            {
                yield return this.Mapper.Map<ImageViewModel>(img);
            }
        }

        public ImageViewModel GetImageById(long id)
        {
            return this.Mapper.Map<ImageViewModel>(this.DbContext.Images.Find(id));
        }
    }
}
