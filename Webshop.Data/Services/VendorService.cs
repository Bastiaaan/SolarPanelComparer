namespace Webshop.Data.Services
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using System.Threading.Tasks;
    using AutoMapper;
    using IConfiguration = Microsoft.Extensions.Configuration.IConfiguration;
    using Microsoft.EntityFrameworkCore;
    using Webshop.Data;
    using Webshop.Data.Framework;
    using Webshop.Data.Models;
    using Webshop.Data.Services;
    using Webshop.Data.ViewModels;
    using System.Data.SqlClient;
    using System.IO;

    public class VendorService : ServiceBase
    {
        public VendorService(Context context, IConfiguration configuration, IMapper Mapper, IConfigurationProvider configurationProvider) 
            : base(context, configuration, Mapper, configurationProvider) { }

        public async Task<IEnumerable<Vendor>> GetAll()
        {
            return await DbContext.Vendors.ToArrayAsync();
        }

        public async Task<T> GetVendorById<T>(int id) where T : class
        {
            var result = await DbContext.Vendors.FindAsync(id);
            if (result != null)
            {
                return Mapper.Map<T>(result);
            }

            return null;
        }

        public async Task<bool> Create(VendorCreateViewModel vendor)
        {
            var mappedFrom = this.Mapper.Map<Vendor>(vendor);
            try
            {
                if(vendor.DefaultImage != null)
                {
                    File.Create(vendor.DefaultImage.FileName);
                }
                DbContext.Vendors.Add(mappedFrom);
                await DbContext.SaveChangesAsync();
                return true;
            }
            catch(SqlException ex)
            {
                throw ex;
            }
        }

        public async Task<bool> Update(VendorEditViewModel vendor)
        {
            try
            {
                if (vendor.ProductIds.Count >= 1)
                {
                    foreach (int id in vendor.ProductIds)
                    {
                        var productVendor = new ProductVendorViewModel
                        {
                            VendorId = vendor.Id,
                            ProductId = id
                        };

                        var mappedToDomain = this.Mapper.Map<ProductVendor>(productVendor);
                        this.DbContext.ProductVendor.Add(mappedToDomain);
                    }
                }

                var mapped = this.Mapper.Map<Vendor>(vendor);
                DbContext.Vendors.Update(mapped);
                DbContext.Entry(vendor).State = EntityState.Modified;
                await DbContext.SaveChangesAsync();
                return true;
            }
            catch (DbUpdateConcurrencyException ex)
            {
                throw ex;
            }            
        }
    }
}
