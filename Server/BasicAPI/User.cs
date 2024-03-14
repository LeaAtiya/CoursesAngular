using System.ComponentModel.DataAnnotations;
using System.Diagnostics.Metrics;

namespace AngularServer
{
    public class User
    {
        private static int NextId = 0;
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public User()
        {
            Id = NextId++;
          
        }
    }

}
