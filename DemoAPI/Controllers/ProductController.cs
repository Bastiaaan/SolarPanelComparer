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
        private readonly ProductService ProductService;

        public ProductController(ProductService productService)
        {
            this.ProductService = productService;
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<ProductViewModel>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> ObtainProducts()
        {
            return null; // this.Ok(await this.productService.GetAllProducts());
        }
        
        [HttpPost]
        public void SaveProduct([FromBody] ProductViewModel jsonValue)
        {
            ProductService.AddProduct(jsonValue);
        }
    }
}
