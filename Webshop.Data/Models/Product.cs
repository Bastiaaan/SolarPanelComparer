namespace Webshop.Data.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Text;
    using Webshop.Data.Framework;
    using Webshop.Data.ViewModels;

    [Table("Product")]
    public class Product : IMapFrom<ProductViewModel>
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public double Price { get; set; }

        public double TAV { get { return 0.21 * this.Price; } }

        public string ImageUrl { get; set; }

        [ForeignKey("OrderId")]
        public Order OrderDetails { get; set; }

        public int OrderId { get; set; }

        [InverseProperty(nameof(ProductSupplier.Product))]
        public ICollection<ProductSupplier> ProductSuppliers { get; set; }
    }
}
