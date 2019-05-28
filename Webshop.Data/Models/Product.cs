namespace Webshop.Data.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Text;
    using Webshop.Data.Framework;
    using Webshop.Data.ViewModels;

    [Table("Product")]
    public class Product : IMapFrom<ProductViewModel>, IMapFrom<ProductCreateViewModel>, IMapFrom<ProductEditViewModel>
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        [NotMapped]
        public int AmountOfVendors { get { return this.ProductVendors != null ? this.ProductVendors.Count : 0; } }

        [InverseProperty(nameof(ProductVendor.Product))]        
        public virtual ICollection<ProductVendor> ProductVendors { get; set; }
    }
}
