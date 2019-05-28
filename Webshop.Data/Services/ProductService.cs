namespace Webshop.Data.Services
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using AutoMapper;
    using IConfiguration = Microsoft.Extensions.Configuration.IConfiguration;
    using Webshop.Data;
    using Webshop.Data.Models;
    using Webshop.Data.ViewModels;
    using System.Data.SqlClient;
    using Microsoft.EntityFrameworkCore;

    public class ProductService : ServiceBase
    {
        public ProductService(Context context, IConfiguration configuration, IMapper Mapper, IConfigurationProvider configurationProvider) : base(context, configuration, Mapper, configurationProvider)
        { }

        public async Task<IList<Product>> GetAllProducts()
        {
            return await DbContext.Products.Where(i => i.Id != 0).ToListAsync();
        }

        public async Task<T> GetProductById<T>(int id) where T : class
        {
            var item = await DbContext.Products.SingleOrDefaultAsync(i => id == i.Id);
            return this.Mapper.Map<T>(item);
        }

        public async Task<bool> AddProduct(ProductCreateViewModel product)
        {
            if(product != null)
            {
                try
                {
                    Product MappedFromVM = Mapper.Map<Product>(product);
                    DbContext.Products.Add(MappedFromVM);
                    await DbContext.SaveChangesAsync();

                    return true;
                }
                catch (SqlException ex)
                {
                    throw ex;
                }
            }

            return false;
        }

        public async Task<bool> UpdateProduct(ProductEditViewModel product)
        {
            if(product != null)
            {
                try
                {
                    var mappedProduct = Mapper.Map<Product>(product);
                    DbContext.Products.Update(mappedProduct);
                    DbContext.Entry(mappedProduct).State = EntityState.Modified;
                    await DbContext.SaveChangesAsync();
                    return true;
                }
                catch(DbUpdateConcurrencyException ex)
                {
                    if(DbContext.Products.Find(product.Id) == null)
                    {
                        throw new ArgumentNullException("Geen product gevonden");
                    }

                    throw ex;
                }
            }

            return false;
        }
    }
}
