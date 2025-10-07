Portfolio.API/
├── Controllers/
│   ├── ProjectsController.cs
│   ├── SkillsController.cs
│   ├── ExperienceController.cs
│   ├── ContactController.cs
│   └── FilesController.cs
├── Models/
│   ├── Entities/
│   │   ├── Project.cs
│   │   ├── Skill.cs
│   │   ├── Experience.cs
│   │   ├── ContactMessage.cs
│   │   └── User.cs
│   ├── DTOs/
│   │   ├── Requests/
│   │   │   ├── CreateProjectDto.cs
│   │   │   ├── UpdateProjectDto.cs
│   │   │   └── ContactMessageDto.cs
│   │   └── Responses/
│   │       ├── ProjectResponseDto.cs
│   │       ├── SkillResponseDto.cs
│   │       └── ApiResponse.cs
│   └── ViewModels/
├── Services/
│   ├── Interfaces/
│   │   ├── IProjectService.cs
│   │   ├── ISkillService.cs
│   │   ├── IFileService.cs
│   │   └── IEmailService.cs
│   ├── Implementations/
│   │   ├── ProjectService.cs
│   │   ├── SkillService.cs
│   │   ├── FileService.cs
│   │   └── EmailService.cs
│   └── LocalizationService.cs
├── Data/
│   ├── ApplicationDbContext.cs
│   ├── Configurations/
│   │   ├── ProjectConfiguration.cs
│   │   └── SkillConfiguration.cs
│   ├── Migrations/
│   └── SeedData/
├── Repositories/
│   ├── Interfaces/
│   │   ├── IRepository.cs
│   │   ├── IProjectRepository.cs
│   │   └── ISkillRepository.cs
│   └── Implementations/
│       ├── Repository.cs
│       ├── ProjectRepository.cs
│       └── SkillRepository.cs
├── Helpers/
│   ├── ImageHelper.cs
│   ├── FileValidationAttribute.cs
│   ├── ApiException.cs
│   └── ResponseFormatter.cs
├── Middleware/
│   ├── ExceptionMiddleware.cs
│   ├── LocalizationMiddleware.cs
│   └── RequestLoggingMiddleware.cs
├── Resources/
│   ├── Controllers/
│   │   ├── ProjectsController.en.json
│   │   ├── ProjectsController.es.json
│   │   └── ProjectsController.fr.json
│   └── Models/
├── wwwroot/
│   ├── images/
│   │   ├── projects/
│   │   ├── skills/
│   │   └── profile/
│   └── files/
├── Properties/
├── Program.cs
├── appsettings.json
└── Portfolio.API.csproj