namespace Webshop.Data.Models
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;

    [Table("ProductVendor")]
    public class ProductVendor
    {
        [Key]
        public int Id { get; set; }

        public int ProductId { get; set; }

        [ForeignKey("ProductId")]
        public virtual Product Product { get; set; }
        
        public int VendorId { get; set; }

        [ForeignKey("VendorId")]
        public virtual Vendor Vendor { get; set; }

        public double Price { get; set; }

        public double TAV { get; set; }

        public string ImageUrl { get; set; }

        [ForeignKey("OrderId")]
        public Order OrderDetails { get; set; }

        public int OrderId { get; set; }
    }
}
