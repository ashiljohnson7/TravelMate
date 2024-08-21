using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using System.Data;
using TravelMate.DataAcessLayer.DatabaseFactory;
using static TravelMate.DomainEntities.Response.HomeResponse;

namespace TravelMate.DataAcessLayer.Repository
{
    public class HomeRepository
    {
        private readonly IDBConnectionFactory _connectionFactory;

        public HomeRepository(IDBConnectionFactory connectionFactory)
        {
            _connectionFactory = connectionFactory;
        }

        public User GetUserById(int userId)
        {
            using var connection = _connectionFactory.GetAppSqlConnection();
            return connection.QuerySingleOrDefault<User>(SqlQueries.GetUserById, new
            {
                @UserID = userId
            });
        }
    }
}
