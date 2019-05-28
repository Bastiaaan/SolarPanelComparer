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

        public string Description { get; set; }

        public int AmountOfVendors { get { return this.ProductVendors.Count; } }

        [InverseProperty(nameof(ProductVendorViewModel.Product))]
        public ICollection<ProductVendorViewModel> ProductVendors { get; set; }
    }
}
