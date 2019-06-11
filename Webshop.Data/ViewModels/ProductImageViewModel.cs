using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Webshop.Data.Framework;
using Webshop.Data.Models;

namespace Webshop.Data.ViewModels
{
    public class ProductImageViewModel : ImageViewModel, IMapFrom<ProductImage>
    {
        [ForeignKey("ProductId")]
        public ProductViewModel Product { get; set; }

        public int ProductId { get; set; }
    }
}
