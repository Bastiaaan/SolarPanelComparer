namespace Webshop.Data.ViewModels
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using Data.Framework;
    using Data.Models;

    public class VendorViewModel : IMapFrom<Vendor>
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public IEnumerable<ProductVendorViewModel> Products { get; set; }
    }
}
