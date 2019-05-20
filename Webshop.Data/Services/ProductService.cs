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
        public ProductService(Context context, IConfiguration configuration, IMapper mapper) : base(context, configuration, mapper)
        {

        }

        public async Task<IList<Product>> GetAllProducts()
        {
            return await DbContext.Products.Where(i => i.Id != 0).ToListAsync();
        }

        public async Task<Product> GetProductById(long id)
        {
            return await DbContext.Products.FindAsync(id);
        }

        public void AddProduct(ProductViewModel product)
        {
            if(product != null)
            {
                try
                {
                    Product MappedFromVM = Mapper.Map(product, new Product());
                    DbContext.Products.Add(MappedFromVM);
                    DbContext.SaveChanges();
                }
                catch (SqlException ex)
                {
                    throw ex;
                }
            }
        }

        public void UpdateProduct(ProductViewModel product)
        {
            if(product != null)
            {
                try
                {
                    var mappedProduct = Mapper.Map<Product>(product);
                    DbContext.Products.Update(mappedProduct);
                    DbContext.Entry(mappedProduct).State = EntityState.Modified;
                    DbContext.SaveChanges();
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
        }
    }
}
