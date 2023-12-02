using DrugStoreBackEnd.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DrugStoreBackEnd.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private ResponeResult response;

        public ProductController()
        {
            response = new();
        }

        [HttpGet]

        public ActionResult<IEnumerable<Product>> Get()
        {
            using (var context = new DrugStoreContext())
            {
                var result = context.Products.ToList();

                if(result == null)
                {
                    response.Message = "Method failed";
                    return BadRequest(response);
                }
                else
                {
                    response.Result = result;

                    response.IsSuccess = true;

                    response.Message = "Method successful";

                    return Ok(response);
                }
            }
        }

        [HttpPost]

        public ActionResult<Product> Post()
    }
}
