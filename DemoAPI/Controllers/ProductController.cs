namespace DemoAPI.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Webshop.Data;
    using Webshop.Data.Services;
    using Webshop.Data.ViewModels;

    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : Controller
    {
        private readonly ProductService productService;

        public ProductController(ProductService productService)
        {
            this.productService = productService;
        }

        [HttpGet("product")]
        [ProducesResponseType(typeof(IEnumerable<ProductViewModel>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> Get()
        {
            return this.Json(await this.productService.GetAllProducts());
        }

        [HttpPost]
        [ProducesResponseType(typeof(ProductViewModel), (int)HttpStatusCode.OK)]
        public IActionResult Post([FromBody]ProductViewModel product)
        {
            productService.AddProduct(product);
            return Ok(product);
        }
    }
}
