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
    public class VendorController : Controller
    {
        private readonly VendorService service;
        private readonly IMapper mapper;

        public VendorController(VendorService service, IMapper mapper)
        {
            this.service = service;
            this.mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<VendorViewModel>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> Get()
        {
            var vendors = await this.service.GetAll();
            if(vendors.ToList().Count > 0)
            {
                return this.Ok(vendors);
            }

            return this.Json("Geen verkopers gevonden");
        }

        [HttpGet("{id:int}")]
        [ProducesResponseType(typeof(VendorViewModel), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> Get(int id)
        {
            var vendor = await this.service.GetVendorById<VendorViewModel>(id);
            if (vendor != null)
            {
                return this.Ok(vendor);
            }

            return this.Json("Niet gevonden");
        }

        [HttpGet("{id:int}")]
        [ProducesResponseType(typeof(VendorEditViewModel), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> Edit(int id)
        {
            var vendor = await this.service.GetVendorById<VendorEditViewModel>(id);
            if (vendor != null)
            {
                return this.Ok(vendor);
            }

            return this.Json("Niet gevonden");
        }

        [HttpPut("{id:int}")]
        [ProducesResponseType(typeof(VendorEditViewModel), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> Edit(int id, [FromBody]VendorEditViewModel vendor)
        {
            var vendorResult = await this.service.GetVendorById<VendorEditViewModel>(id);
            if (vendorResult != null)
            {
                var isEdited = await this.service.Update(this.mapper.Map<Vendor>(vendor));
                if(isEdited)
                {
                    return this.Ok(vendor);
                }

                return this.BadRequest(vendor);
            }

            return this.Json("Niet gevonden");
        }

        [HttpPost]
        [ProducesResponseType(typeof(VendorViewModel), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> Post([FromBody] VendorCreateViewModel vendor)
        {
            var isCreated = await this.service.Create(this.mapper.Map<Vendor>(vendor));
            if (isCreated)
            {
                return this.Created("api/vendor", vendor);
            }

            return this.BadRequest("Niet gevonden");
        }
    }
}
