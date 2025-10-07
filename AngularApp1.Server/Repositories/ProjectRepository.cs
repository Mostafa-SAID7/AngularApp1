using AngularApp1.Server.Models;

namespace AngularApp1.Server.Repositories
{
    public class ProjectRepository : IProjectRepository
    {
        private readonly List<Project> _projects = new() { /* Seed data */ };

        public Task<IEnumerable<Project>> GetAllAsync() =>
            Task.FromResult(_projects.AsEnumerable());
    }
}
