namespace Webshop.Data.ViewModels
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using Webshop.Data.Framework;
    using Webshop.Data.Models;
    public class ProductViewModel : IMapFrom<Product>
    {
        public int Id { get; set; }

        public string Name { get; set; }

        //public IEnumerable<ProductVendorViewModel> Vendors { get; set; }
    }
}
