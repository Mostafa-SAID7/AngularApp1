using AngularApp1.Server.Models;

namespace AngularApp1.Server.Interfaces
{
    public interface IProjectRepository
    {
        Task<IEnumerable<Project>> GetAllAsync();
        Task<Project> GetByIdAsync(int id);
    }
}
