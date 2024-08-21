using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelMate.BuisnessLayer.Interfaces;
using TravelMate.DataAcessLayer.Repository;
using static TravelMate.DomainEntities.Response.HomeResponse;

namespace TravelMate.BuisnessLayer.Implementations
{
    public class HomeService : IHomeService
    {
        private readonly HomeRepository _repository;

        public HomeService(HomeRepository repository)
        {
            _repository = repository;
        }

        public User GetUserById(int userId)
        {
            return _repository.GetUserById(userId);
        }
    }
}
