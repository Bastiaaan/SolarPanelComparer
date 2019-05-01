// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DemoAPI.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net.Http;
    using System.Threading.Tasks;
    using DemoAPI.Models;
    using Microsoft.AspNetCore.Cors;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;

    [ApiController]
    //[EnableCors("*")]
    [Route("api/[controller]")]
    public class TodoController : Controller
    {
        private readonly DemoAPIDbContext _context;
        public TodoController(DemoAPIDbContext context)
        {
            this._context = context;
            if(!this._context.TodoItems.Any())
            {
                this._context.TodoItems.Add(new TodoItem { IsComplete = false, Name = "Custom task" });
                this._context.SaveChanges();
            }
        }

        // GET: api/<controller>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TodoItem>>> Get()
        {
            return await _context.TodoItems.ToListAsync();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TodoItem>> GetTodoItem(int id)
        {
            var result = await _context.TodoItems.FindAsync(id);
            if (result == null)
            {
                return NoContent();
            }

            return result;
        }

        
        // POST api/<controller>
        [HttpPost]
        public async Task<ActionResult<TodoItem>> PostItem([FromBody]TodoItem item)
        {
            _context.TodoItems.Add(item);
            await _context.SaveChangesAsync();

            return NoContent();
        } 


        [HttpPut]
        public async Task<IActionResult> PutTodoItem([FromBody]TodoItem item)
        {
            if(item == null)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE api/<controller>/5
        [HttpDelete]
        public async Task<IActionResult> Delete([FromBody]TodoItem item)
        {
            if(item == null)
            {
                return NotFound();
            }
            _context.TodoItems.Remove(item);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
