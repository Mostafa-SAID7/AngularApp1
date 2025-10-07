PortfolioApi/
├── Controllers/                  # API controllers
│   ├── ProjectsController.cs     # Handles projects CRUD
│   ├── SkillsController.cs       # Handles skills
│   ├── AboutController.cs        # Handles about me info
│   └── ContactController.cs      # Handles contact form submissions
├── Models/                       # Data models
│   ├── Project.cs                # Project entity (Id, Title, Description, Url, ImageUrl)
│   ├── Skill.cs                  # Skill entity (Id, Name, Proficiency)
│   ├── About.cs                  # About entity (Bio, ResumeUrl)
│   └── ContactRequest.cs         # DTO for contact form (Name, Email, Message)
├── Data/                         # DB context and migrations
│   ├── PortfolioDbContext.cs     # EF Core DbContext
│   └── Migrations/               # Auto-generated migration files
├── Services/                     # Business logic services
│   ├── ProjectService.cs         # Logic for projects
│   └── EmailService.cs           # For sending contact emails (optional, use SendGrid or SMTP)
├── Dtos/                         # Data Transfer Objects (if separating from models)
│   └── ProjectDto.cs             # Simplified project for API responses
├── appsettings.json              # Configuration (connection strings, JWT secrets)
├── appsettings.Development.json  # Dev-specific settings
├── Program.cs                    # Entry point, services registration, middleware
├── Startup.cs                    # (Optional, if not using minimal API style)
├── PortfolioApi.csproj           # Project file
└── wwwroot/                      # Static files (e.g., images for projects)
    └── images/                   # Upload folder for project images