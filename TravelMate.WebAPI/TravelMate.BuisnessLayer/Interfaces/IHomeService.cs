using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static TravelMate.DomainEntities.Response.HomeResponse;

namespace TravelMate.BuisnessLayer.Interfaces
{
    public interface IHomeService
    {
        User GetUserById(int userId);
    }
}
