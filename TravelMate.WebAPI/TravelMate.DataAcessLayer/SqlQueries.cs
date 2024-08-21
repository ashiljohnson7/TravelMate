namespace TravelMate.DataAcessLayer
{
    public class SqlQueries
    {

            public const string GetUserById = @"SELECT 
                                                     Username, 
                                                      Password 
                                                FROM [dbo].[User] 
                                                WHERE UserID = @UserID";
        
    }
}
