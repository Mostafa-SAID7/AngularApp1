using AngularApp1.Server.Interfaces;
using AngularApp1.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private readonly IProjectRepository _repo;

        public ProjectsController(IProjectRepository repo) => _repo = repo;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Project>>> GetProjects()
            => Ok(await _repo.GetAllAsync());
    }
}
