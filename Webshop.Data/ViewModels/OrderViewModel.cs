namespace Webshop.Data.ViewModels
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using Data.Models;
    using Data.Framework;

    public class OrderViewModel : IMapFrom<Order>
    {
        public int Id { get; set; }

        public IList<ProductViewModel> Product { get; set; }

        public DateTime DateOfOrder { get; set; }

        public DateTime EstimatedDeliveryTime { get; set; }

        public string Comment { get; set; }

        public int VendorId { get; set; }

        public VendorViewModel Vendor { get; set; }
    }
}
