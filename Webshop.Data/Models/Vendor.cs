using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using Webshop.Data.Framework;
using Webshop.Data.ViewModels;

namespace Webshop.Data.Models
{
    [Table("Vendor")]
    public class Vendor : IMapFrom<VendorCreateViewModel>, IMapFrom<VendorEditViewModel>
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        [InverseProperty(nameof(ProductVendor.Vendor))]
        public virtual ICollection<ProductVendor> ProductVendors { get; set; }
    }
}
