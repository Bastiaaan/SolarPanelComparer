using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DemoAPI.Controllers
{
    [Route("api/[controller]")]
    public class PublicController : Controller
    {
        [HttpGet("echo/{msg}")]
        public JsonResult Echo(string msg)
        {
            return this.Json(string.Format("Api zegt: {0}", msg));
        }
    }
}
