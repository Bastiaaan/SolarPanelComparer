using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Webshop.Data.Framework;
using Webshop.Data.Models;

namespace Webshop.Data.ViewModels
{
    public class VendorImageViewModel : ImageViewModel, IMapFrom<VendorImage>
    {
        [ForeignKey("VendorId")]
        public VendorViewModel Vendor { get; set; }

        public int VendorId { get; set; }
    }
}
