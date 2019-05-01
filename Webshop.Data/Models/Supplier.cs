using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Webshop.Data.Models
{
    [Table("Supplier")]
    public class Supplier
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        [InverseProperty(nameof(ProductSupplier.Supplier))]
        public ICollection<ProductSupplier> ProductSuppliers { get; set; }
    }
}
