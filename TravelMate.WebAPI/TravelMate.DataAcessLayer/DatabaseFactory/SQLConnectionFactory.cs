using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelMate.DataAcessLayer.DatabaseFactory
{
    public class DBConnectionFactory : IDBConnectionFactory
    {
        private readonly string _connectionString;

        public DBConnectionFactory(string connectionString)
        {
            _connectionString = connectionString;
        }

        public IDbConnection GetAppSqlConnection()
        {
            return new SqlConnection(_connectionString);
        }
    }
}
