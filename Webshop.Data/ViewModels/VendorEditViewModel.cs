namespace Webshop.Data.ViewModels
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using AutoMapper;
    using Webshop.Data.Framework;
    using Webshop.Data.Models;

    public class VendorEditViewModel : IMapFrom<Vendor>
    {
        public VendorEditViewModel()
        {
            this.ProductIds = new List<int>();
        }

        public int Id { get; set; }

        public string Address { get; set; }

        public string Name { get; set; }

        public IList<int> ProductIds { get; set; }
    }
}
