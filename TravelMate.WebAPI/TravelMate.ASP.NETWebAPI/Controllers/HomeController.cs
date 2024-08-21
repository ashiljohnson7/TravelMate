using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TravelMate.BuisnessLayer.Interfaces;

namespace TravelMate.ASP.NETWebAPI.Controllers
{
    /// <summary>
    /// HomeController
    /// </summary>
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly IHomeService _homeService;
        private const string Controller = "Home Controller ";

        /// <summary>
        /// Constructor: 
        /// All Services will be injected and instantiated here
        /// </summary>
        /// <param name="homeService">Home Service</param>
        public HomeController(IHomeService homeService)
        {
            _homeService = homeService;
        }


        /// <summary>
        /// Logs the exception and returns BadCustomActionResult Response
        /// </summary>
        /// <param name="ex">Exception</param>
        /// <param name="methodInfo">Method name</param>
        /// <returns>Returns Bad Custom Result</returns>
        internal ObjectResult BadCustomResult(Exception ex, string methodInfo)
        {
            // Implement logging and custom result handling
            // Example:
            // _logHelper.LogException(ex, methodInfo);
            // var res = _customResult.GetFailureResult("An error occurred", StatusCodes.Status500InternalServerError, ex.Message);
            // return StatusCode(StatusCodes.Status500InternalServerError, res);
            return StatusCode(StatusCodes.Status500InternalServerError, new { Error = "An error occurred", Message = ex.Message });
        }


        /// <summary>
        /// GetUser
        /// </summary>
        /// <param name="id">User ID</param>
        /// <returns>Returns user details based on the User ID</returns>
        /// <response code="200">If returns user details</response>
        /// <response code="404">If the user is not found</response>
        /// <response code="500">If an error occurs</response>
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult GetUser([FromQuery] int id)
        {
            try
            {
                var user = _homeService.GetUserById(id);
                 return Ok(user);
            }
            catch (Exception ex)
            {
                return BadCustomResult(ex, Controller + "GetUser");
            }
        }
    }
}
