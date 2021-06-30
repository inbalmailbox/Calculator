using System;
using Isracart.Data.Services;
using Microsoft.AspNetCore.Mvc;

namespace Isracart.Controllers
{
    [Route("api/[controller]")]
    public class CalcsController : Controller
    {
        private ICalcService _service;

        public CalcsController(ICalcService service)
        {
            this._service = service;
        }

        [HttpGet("GetResult")]

        public IActionResult GetResult(int inputNum1,int inputNum2, string calcAction)
        {     
               var res =  _service.GetResult(inputNum1, inputNum2, calcAction);
               return Ok(res);      
           
        }




        
    }
}
