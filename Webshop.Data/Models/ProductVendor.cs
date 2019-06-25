namespace Webshop.Data.Models
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;
    using Webshop.Data.ViewModels;
    using Webshop.Data.Framework;

    [Table("ProductVendor")]
    public class ProductVendor : IMapFrom<ProductVendorViewModel>
    {
        [Key]
        public int Id { get; set; }

        public int ProductId { get; set; }

        [ForeignKey("Id")]
        public virtual Product Product { get; set; }
        
        public int VendorId { get; set; }

        [ForeignKey("Id")]
        public virtual Vendor Vendor { get; set; }

        public double Price { get; set; }

        public double TAV { get; set; }

        public string ImageUrl { get; set; }

        [ForeignKey("OrderId")]
        public Order OrderDetails { get; set; }

        public int OrderId { get; set; }
    }
}
