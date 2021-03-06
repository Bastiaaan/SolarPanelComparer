﻿
namespace DemoAPI.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net;
    using System.Threading.Tasks;
    using AutoMapper;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Webshop.Data;
    using Webshop.Data.Models;
    using Webshop.Data.Services;
    using Webshop.Data.ViewModels;

    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : Controller
    {
        private readonly ProductService productService;
        private readonly ImageService imageService;
        private readonly IMapper autoMapper;

        public ProductController(ProductService productService, IMapper mapper, ImageService imageService)
        {
            this.productService = productService;
            this.autoMapper = mapper;
            this.imageService = imageService;
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<ProductViewModel>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> Get()
        {
            var products = await this.productService.GetAllProducts();
            if(products.Count >= 1)
            {
                return this.Ok(products);
            }

            return this.NotFound();
        }

        [HttpGet("{id:int}")]
        [ProducesResponseType(typeof(ProductEditViewModel), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await this.productService.GetProductById<ProductEditViewModel>(id);
            if(result == null)
            {
                return this.NotFound();
            }

            return this.Ok(result);
        }

        [HttpPut("{id:long}")]
        [ProducesResponseType(typeof(ProductEditViewModel), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> Put(long id, [FromBody]ProductEditViewModel model)
        {
            if(id != model.Id)
            {
                return this.BadRequest("Invalid product");
            }
            var result = await this.productService.UpdateProduct(model);
            if (result == false)
            {
                return this.BadRequest();
            }

            return this.Ok(result);
        }

        [HttpPost]
        [ProducesResponseType(typeof(ProductCreateViewModel), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> Post([FromBody]ProductCreateViewModel product)
        {
            var result = await this.productService.AddProduct(product);
            if(result)
            {
                return this.Created("api/product/", product);
            }

            return this.Json("something went wrong");

        }
    }
}
