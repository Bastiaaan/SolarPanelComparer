namespace Webshop.Data.ViewModels
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Text;
    using Data.Framework;
    using Data.Models;

    public class VendorViewModel : IMapFrom<Vendor>
    {
        public int Id { get; set; }

        public string Name { get; set; }

        [InverseProperty(nameof(ProductVendorViewModel.Vendor))]
        public IEnumerable<ProductVendorViewModel> ProductVendors { get; set; }
    }
}
