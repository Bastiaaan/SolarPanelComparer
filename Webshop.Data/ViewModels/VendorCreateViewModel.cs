namespace Webshop.Data.ViewModels
{
    using System;
    using System.Collections.Generic;
    using System.Text;

    public class VendorCreateViewModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public ImageViewModel DefaultImage { get; set; }
    }
}
