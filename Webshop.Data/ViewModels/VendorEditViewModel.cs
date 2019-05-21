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
        public int Id { get; set; }
    }
}
