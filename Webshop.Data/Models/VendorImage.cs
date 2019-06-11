namespace Webshop.Data.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Text;

    [Table("VendorImage")]
    public class VendorImage : Image
    {
        public int VendorId { get; set; }

        [ForeignKey("VendorId")]
        public Vendor Vendor { get; set; }
    }
}
