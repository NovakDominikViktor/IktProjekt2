using DrugStoreBackEnd.Models.DTOs;
using DrugStoreBackEnd.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DrugStoreBackEnd.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AccessController : ControllerBase
    {
        private ResponeResult response;

        public AccessController()
        {
            response = new();
        }

        [HttpGet]

        public ActionResult<IEnumerable<Accesess>> Get()
        {
            using (var context = new DrugStoreContext())
            {
                var result = context.Products.ToList();

                if (result == null)
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

        public ActionResult<Accesess> GetById(int id)
        {
            using(var context = new DrugStoreContext())
            {
                var result = context.Accesesses.FirstOrDefault(x => x.Id == id);

                if(result == null)
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

        public ActionResult<Accesess> Post(CreatedAccessDto createAccessDto)
        {
            var access = new Accesess
            {
                Id = createAccessDto.Id,

                Name = createAccessDto.Name,

                Description = createAccessDto.Description,

                
            };

            using (var context = new DrugStoreContext())
            {
                if (access == null)
                {
                    response.Message = "Method Failed";
                    return BadRequest(response);
                }
                else
                {
                    context.Accesesses.Add(access);

                    context.SaveChanges();

                    response.Result = access;

                    response.IsSuccess = true;

                    response.Message = "Access level added";

                    return StatusCode(201, response);
                }
            }
        }

        [HttpPut("{id}")]

        public ActionResult<Accesess> put(int id, UpdateAccessDto updateAccessDto)
        {
            using (var context = new DrugStoreContext())
            {
                var existingAccessLevel = context.Accesesses.FirstOrDefault(x => x.Id == id);

                if (existingAccessLevel == null)
                {
                    response.Message = "Update failed";
                    return BadRequest(response);
                }
                else
                {
                    existingAccessLevel.Id = updateAccessDto.Id;

                    existingAccessLevel.Name = updateAccessDto.Name;

                    existingAccessLevel.Description = updateAccessDto.Description;

               
                    context.Accesesses.Update(existingAccessLevel);

                    context.SaveChanges();

                    response.Result = existingAccessLevel;

                    response.IsSuccess = true;

                    response.Message = "Update success";

                    return Ok(response);
                }
            }
        }

        [HttpDelete("{id}")]
        public ActionResult<Accesess> Delete(int id)
        {
            using (var context = new DrugStoreContext())
            {
                var result = context.Accesesses.FirstOrDefault(x => x.Id == id);

                if (result == null)
                {
                    response.Message = "DeleteFailed";
                    return BadRequest(response);
                }
                else
                {
                    context.Accesesses.Remove(result);
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
