using Microsoft.EntityFrameworkCore;

namespace AngularApp1.Server.Data
{
    public class PortfolioDbContext : DbContext
    {
        public DbSet<Project> Projects { get; set; }
        public DbSet<Skill> Skills { get; set; }
        // ... other DbSets
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Seed initial data if needed
            modelBuilder.Entity<Project>().HasData(new Project { Id = 1, Title = "Sample Project", ... });
        }
    }
}
