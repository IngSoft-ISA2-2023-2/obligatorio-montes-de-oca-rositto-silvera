using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using PharmaGo.IBusinessLogic;
using PharmaGo.WebApi.Filters;
using PharmaGo.WebApi.Models.In;
using PharmaGo.WebApi.Models.Out;

namespace PharmaGo.WebApi.Controllers
{
    [Route("api/[controller]")]
    
    [ApiController]
    [TypeFilter(typeof(ExceptionFilter))]
    public class LoginController : ControllerBase
    {
        private readonly ILoginManager _loginManager;

       public LoginController(ILoginManager manager)
       {
         _loginManager = manager;
       }

        [HttpPost]
        public IActionResult Login([FromBody] LoginModelRequest userModel)
        {
            try
            {
                var authorization = _loginManager.Login(userModel.UserName, userModel.Password);

                if (authorization != null)
                {
                    return Ok(new LoginModelResponse()
                    {
                        token = authorization.Token,
                        role = authorization.Role,
                        userName = authorization.UserName
                    });
                }
                else
                {
                    // Devolvemos un resultado NotFound (404) con un mensaje de error personalizado.
                    return NotFound("Usuario no encontrado en la base de datos");
                }
            }
            catch (Exception ex)
            {
                // Capturamos y manejamos cualquier excepción que pueda ocurrir durante el proceso de inicio de sesión.
                // Puedes registrar la excepción aquí si es necesario.
                Console.WriteLine($"Excepción: {ex.Message}");

                // Devolvemos un resultado NotFound (404) con un mensaje de error personalizado en caso de excepción.
                return NotFound("Error durante la autenticación");
            }
        }
       
    }
}
