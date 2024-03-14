
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
namespace AngularServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LecturerController : ControllerBase
    {
        // Mock data for demonstration
        private static List<Lecturer> lecturers = new List<Lecturer>
        {
            new Lecturer { Id = 1, Name = "dan", Address = "Address 1", Email = "lecturer1@example.com", Password = "1111" },
            new Lecturer { Id = 2, Name = "Lecturer 2", Address = "Address 2", Email = "lecturer2@example.com", Password = "2222" }
        };

        // GET: api/Lecturer
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(lecturers);
        }

        // GET: api/Lecturer/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var lecturer = lecturers.Find(l => l.Id == id);
            if (lecturer == null)
            {
                return NotFound();
            }
            return Ok(lecturer);
        }

        // POST: api/Lecturer
        [HttpPost]
        public bool Post([FromBody] Lecturer lecturer)
        {
            if (lecturer == null)
            {
                return false;
            }

            lecturers.Add(lecturer);
            return true;
        }

        // PUT: api/Lecturer/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Lecturer lecturer)
        {
            var index = lecturers.FindIndex(l => l.Id == id);
            if (index == -1)
            {
                return NotFound();
            }

            lecturers[index] = lecturer;
            return NoContent();
        }

        // DELETE: api/Lecturer/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var lecturer = lecturers.Find(l => l.Id == id);
            if (lecturer == null)
            {
                return NotFound();
            }

            lecturers.Remove(lecturer);
            return NoContent();
        }
    }
}


