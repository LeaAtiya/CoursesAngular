using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        // Mock data for demonstration
        private static List<Category> categories= new List<Category>
        {
            new Category{Id=0,Name="computer",IconRouting="\\assets\\categories\\02.png"},
            new Category{Id=1, Name="expression",IconRouting="\\assets\\categories\\01.png"}
        };

        // GET: api/Category
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(categories);
        }

    }
}


