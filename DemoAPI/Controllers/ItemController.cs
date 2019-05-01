namespace DemoAPI.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Models;

    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        //[ProducesResponseType((int)HttpStatusCode.OK)]
        public IActionResult Get()
        {
            double orderPrice = 1.500;

            var customizedOrder = new OrderItem
            {
                Id = 10,
                ItemImage = null,
                OrderName = "MacBook Pro",
                ShippingCosts = 14.20,
                OrderPrice = orderPrice,
                TaxAddedValue = orderPrice * 0.21,
            };

            return this.Ok(customizedOrder);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
