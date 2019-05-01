namespace Webshop.Data.ViewModels
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using Data.Models;
    using Data.Framework;

    public class ProductVendorViewModel : IMapFrom<ProductVendor>
    {
        public int Id { get; set; }

        public int ProductId { get; set; }

        public virtual ProductViewModel Product { get; set; }

        public int VendorId { get; set; }

        public virtual VendorViewModel Vendor { get; set; }

        public double Price { get; set; }

        public double TAV { get; set; }

        public string ImageUrl { get; set; }

        public OrderViewModel OrderDetails { get; set; }

        public int OrderId { get; set; }
    }
}
