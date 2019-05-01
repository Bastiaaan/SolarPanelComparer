using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Webshop.Data.Models
{
    [Table("Order")]
    public class Order
    {
        public int Id { get; set; }

        public IList<Product> Product { get; set; }

        public DateTime DateOfOrder { get; set; }

        public DateTime EstimatedDeliveryTime { get; set; }

        public string Comment { get; set; }

        public int SupplierId { get; set; }

        [ForeignKey("{Supplier.Id}")]
        public Supplier Supplier { get; set; }
    }
}
