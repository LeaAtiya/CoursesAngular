using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        // Mock data for demonstration
        private static List<Course> courses = new List<Course>
        {
            new Course { Id = 1, Name = "Course 1", CategoryId = 0, LessonsAmount = 10, StartDate = DateTime.Now, CourseSyllabus = new string[] { "Lesson 1", "Lesson 2" }, LearningWay = LearningWay.Frontal, LecturerId = 0, Image = "\\assets\\Courses\\java.png" },
            new Course { Id = 2, Name = "Course 2", CategoryId = 1, LessonsAmount = 8, StartDate = DateTime.Now.AddDays(7), CourseSyllabus = new string[] { "Lesson 1", "Lesson 2", "Lesson 3" }, LearningWay = LearningWay.Zoom, LecturerId = 1, Image =  "\\assets\\Courses\\dancing.png" }
        };

        // GET: api/Course
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(courses);
        }

        // GET: api/Course/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var course = courses.Find(c => c.Id == id);
            if (course == null)
            {
                return NotFound();
            }
            return Ok(course);
        }

        // POST: api/Course
        [HttpPost]
        public bool Post([FromBody] Course course)
        {
            if (course == null)
            {
                return false;
            }

            courses.Add(course);
            return true;
        }

        // PUT: api/Course/5
        [HttpPut("{id}")]
        public bool Put(int id, [FromBody] Course course)
        {
            var index = courses.FindIndex(c => c.Id == id);
            if (index == -1)
            {
                return false;
            }
            course.Id = id;
            courses[index] = course;
            return true;
        }

        // DELETE: api/Course/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var course = courses.Find(c => c.Id == id);
            if (course == null)
            {
                return NotFound();
            }

            courses.Remove(course);
            return NoContent();
        }

    }

}
