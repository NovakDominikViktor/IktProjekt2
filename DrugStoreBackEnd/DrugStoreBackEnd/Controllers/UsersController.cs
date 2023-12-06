using DrugStoreBackEnd.Models.DTOs;
using DrugStoreBackEnd.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DrugStoreBackEnd.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private ResponeResult response;

        public UsersController()
        {
            response = new();
        }

        [HttpGet]
        public ActionResult<IEnumerable<User>> Get()
        {
            using (var context = new DrugstoreContext())
            {
                var result = context.Users.ToList();

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
        public ActionResult<User> GetById(int id)
        {
            using (var context = new DrugstoreContext())
            {
                var result = context.Users
                    .Include(u => u.Access)
                    .FirstOrDefault(x => x.Id == id);

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
        public ActionResult<User> Post(CreateUserDto createUserDto)
        {
            var user = new User
            {
               
                UserName = createUserDto.UserName,
                Email = createUserDto.Email,
                PasswordHash = createUserDto.PasswordHash,
                AccessId = createUserDto.AccessId
            };

            using (var context = new DrugstoreContext())
            {
                if (user == null)
                {
                    response.Message = "Method Failed";
                    return BadRequest(response);
                }
                else
                {
                    context.Users.Add(user);

                    context.SaveChanges();

                    response.Result = user;

                    response.IsSuccess = true;

                    response.Message = "User added";

                    return StatusCode(201, response);
                }
            }
        }

        [HttpPut("{id}")]
        public ActionResult<User> Put(int id, UpdateUserDto updateUserDto)
        {
            using (var context = new DrugstoreContext())
            {
                var existingUser = context.Users.FirstOrDefault(x => x.Id == id);

                if (existingUser == null)
                {
                    response.Message = "Update failed";
                    return BadRequest(response);
                }
                else
                {
                    existingUser.UserName = updateUserDto.UserName;
                    existingUser.Email = updateUserDto.Email;
                    existingUser.PasswordHash = updateUserDto.PasswordHash;
                    existingUser.AccessId = updateUserDto.AccessId;

                    context.Users.Update(existingUser);

                    context.SaveChanges();

                    response.Result = existingUser;

                    response.IsSuccess = true;

                    response.Message = "Update success";

                    return Ok(response);
                }
            }
        }

        [HttpDelete("{id}")]
        public ActionResult<User> Delete(int id)
        {
            using (var context = new DrugstoreContext())
            {
                var result = context.Users.FirstOrDefault(x => x.Id == id);

                if (result == null)
                {
                    response.Message = "DeleteFailed";

                    return BadRequest(response);
                }
                else
                {
                    context.Users.Remove(result);

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
