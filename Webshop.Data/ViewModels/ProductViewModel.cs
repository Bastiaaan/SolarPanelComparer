namespace Webshop.Data.ViewModels
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Text;
    using Webshop.Data.Framework;
    using Webshop.Data.Models;
    public class ProductViewModel : IMapFrom<Product>
    {
        public int Id { get; set; }

        public string Name { get; set; }

        [InverseProperty(nameof(ProductVendorViewModel.Product))]
        public IEnumerable<ProductVendorViewModel> ProductVendors { get; set; }
    }
}
