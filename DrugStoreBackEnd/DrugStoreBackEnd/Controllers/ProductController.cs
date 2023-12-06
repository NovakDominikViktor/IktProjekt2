using DrugStoreBackEnd.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DrugStoreBackEnd.Models.DTOs;

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
            using (var context = new DrugstoreContext())
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

        [HttpGet("{id}")]

        public ActionResult<Accesess> GetById(Guid id)
        {
            using (var context = new DrugstoreContext())
            {
                var result = context.Products.FirstOrDefault(x => x.Id == id);

                if (result == null)
                {
                    response.Message = "Method failed";

                    return BadRequest(response);
                }
                else
                {
                    response.Result = result;

                    response.IsSuccess = true;

                    response.Message = "Method success";

                    return Ok(response);
                }
            }
        }

        [HttpPost]

        public ActionResult<Product> Post(CreatedProductDto createProductDto)
        {
            var product = new Product
            {
                Id = Guid.NewGuid(),

                ProductName = createProductDto.ProductName,

                ProductBrand = createProductDto.ProductBrand,

                Instructions = createProductDto.Instructions,

                AccessId = createProductDto.AccessId,

                Price = createProductDto.Price,

                CreatedTime = DateTime.UtcNow
            };

            using(var context = new DrugstoreContext())
            {
                if(product == null)
                {
                    response.Message = "Method Failed";
                    return BadRequest(response);
                }
                else
                {
                    context.Products.Add(product);

                    context.SaveChanges();

                    response.Result = product;

                    response.IsSuccess = true;

                    response.Message = "Product added";

                    return StatusCode(201, response);
                }
            }
        }

        [HttpPut("{id}")]

        public ActionResult<Product> put(Guid id, UpdateProductDto updateProductDto)
        {
            using(var context = new DrugstoreContext())
            {
                var existingProduct = context.Products.FirstOrDefault(x => x.Id == id);

                if(existingProduct == null)
                {
                    response.Message = "Update failed";
                    return BadRequest(response);
                }
                else
                {
                    existingProduct.ProductName = updateProductDto.ProductName;

                    existingProduct.ProductBrand = updateProductDto.ProductBrand;

                    existingProduct.Instructions = updateProductDto.Instructions;

                    existingProduct.AccessId = updateProductDto.AccessId;

                    existingProduct.Price = updateProductDto.Price;

                    context.Products.Update(existingProduct);

                    context.SaveChanges();

                    response.Result = existingProduct;

                    response.IsSuccess = true;

                    response.Message = "Update success";

                    return Ok(response);
                }
            }
        }

        [HttpDelete("{id}")]

        public ActionResult<Product> Delete (Guid id)
        {
            using(var context = new DrugstoreContext())
            {
                var result = context.Products.FirstOrDefault(x => x.Id == id);

                if(result == null)
                {
                    response.Message = "DeleteFailed";
                    
                    return BadRequest(response);
                }
                else
                {
                    context.Products.Remove(result);

                    context.SaveChanges();

                    response.Result = result;

                    response.IsSuccess = true;

                    response.Message = "Delete success";

                    return Ok(response);
                }
            }
        }
    }
}
