namespace DemoAPI.Models
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using DemoAPI.Models.Enums;

    public class OrderItem
    {
        public long Id { get; set; }

        public string OrderName { get; set; }

        public double OrderPrice { get; set; }

        public double ShippingCosts { get; set; }

        public double TaxAddedValue { get; set; }

        private double _totalCosts;

        public double TotalCosts
        {
            get
            {
                return this.OrderPrice + this.ShippingCosts + this.TaxAddedValue;
            }
            set { this._totalCosts = value; }
        }

        public string ItemImage { get; set; }

        public TransportMethod TransportMethod { get; set; }
    }
}
