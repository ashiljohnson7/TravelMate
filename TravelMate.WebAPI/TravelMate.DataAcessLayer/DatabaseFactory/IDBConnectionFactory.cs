using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace TravelMate.DataAcessLayer.DatabaseFactory
{
    public interface IDBConnectionFactory
    {
        IDbConnection GetAppSqlConnection();
    }
}
