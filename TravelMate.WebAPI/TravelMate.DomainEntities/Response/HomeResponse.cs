using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelMate.DomainEntities.Response
{
    public class HomeResponse
    {
        public class User
        {
            public int UserID { get; set; }    
            public string Username { get; set; }    
            public string Password { get; set; }    
        }
    }
}
