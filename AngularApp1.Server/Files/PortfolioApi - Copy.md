# Portfolio Application - Complete Structure

## 🏗️ Backend Structure (ASP.NET Core Web API)

```
PortfolioAPI/
│
├── PortfolioAPI.sln
├── src/
│   ├── PortfolioAPI/
│   │   ├── Controllers/
│   │   │   ├── AboutController.cs
│   │   │   ├── SkillsController.cs
│   │   │   ├── ProjectsController.cs
│   │   │   ├── ExperienceController.cs
│   │   │   ├── EducationController.cs
│   │   │   ├── ContactController.cs
│   │   │   ├── TestimonialsController.cs
│   │   │   └── AuthController.cs (for admin panel)
│   │   │
│   │   ├── Models/
│   │   │   ├── Domain/
│   │   │   │   ├── About.cs
│   │   │   │   ├── Skill.cs
│   │   │   │   ├── Project.cs
│   │   │   │   ├── Experience.cs
│   │   │   │   ├── Education.cs
│   │   │   │   ├── Contact.cs
│   │   │   │   ├── Testimonial.cs
│   │   │   │   └── User.cs
│   │   │   │
│   │   │   ├── DTOs/
│   │   │   │   ├── AboutDto.cs
│   │   │   │   ├── SkillDto.cs
│   │   │   │   ├── ProjectDto.cs
│   │   │   │   ├── ExperienceDto.cs
│   │   │   │   ├── ContactDto.cs
│   │   │   │   ├── LoginDto.cs
│   │   │   │   └── ResponseDto.cs
│   │   │   │
│   │   │   └── ViewModels/
│   │   │       └── PortfolioViewModel.cs
│   │   │
│   │   ├── Data/
│   │   │   ├── ApplicationDbContext.cs
│   │   │   ├── Configurations/
│   │   │   │   ├── ProjectConfiguration.cs
│   │   │   │   ├── SkillConfiguration.cs
│   │   │   │   └── ExperienceConfiguration.cs
│   │   │   └── Seeders/
│   │   │       └── DataSeeder.cs
│   │   │
│   │   ├── Repositories/
│   │   │   ├── Interfaces/
│   │   │   │   ├── IAboutRepository.cs
│   │   │   │   ├── ISkillRepository.cs
│   │   │   │   ├── IProjectRepository.cs
│   │   │   │   ├── IExperienceRepository.cs
│   │   │   │   └── IContactRepository.cs
│   │   │   │
│   │   │   └── Implementations/
│   │   │       ├── AboutRepository.cs
│   │   │       ├── SkillRepository.cs
│   │   │       ├── ProjectRepository.cs
│   │   │       ├── ExperienceRepository.cs
│   │   │       └── ContactRepository.cs
│   │   │
│   │   ├── Services/
│   │   │   ├── Interfaces/
│   │   │   │   ├── IAboutService.cs
│   │   │   │   ├── ISkillService.cs
│   │   │   │   ├── IProjectService.cs
│   │   │   │   ├── IEmailService.cs
│   │   │   │   ├── IFileService.cs
│   │   │   │   └── IAuthService.cs
│   │   │   │
│   │   │   └── Implementations/
│   │   │       ├── AboutService.cs
│   │   │       ├── SkillService.cs
│   │   │       ├── ProjectService.cs
│   │   │       ├── EmailService.cs
│   │   │       ├── FileService.cs
│   │   │       └── AuthService.cs
│   │   │
│   │   ├── Middleware/
│   │   │   ├── ExceptionHandlingMiddleware.cs
│   │   │   └── LoggingMiddleware.cs
│   │   │
│   │   ├── Helpers/
│   │   │   ├── AutoMapperProfile.cs
│   │   │   ├── JwtHelper.cs
│   │   │   └── FileHelper.cs
│   │   │
│   │   ├── Validators/
│   │   │   ├── ProjectValidator.cs
│   │   │   └── ContactValidator.cs
│   │   │
│   │   ├── wwwroot/
│   │   │   ├── images/
│   │   │   │   ├── projects/
│   │   │   │   ├── skills/
│   │   │   │   └── profile/
│   │   │   └── documents/
│   │   │       └── resume.pdf
│   │   │
│   │   ├── appsettings.json
│   │   ├── appsettings.Development.json
│   │   ├── Program.cs
│   │   └── PortfolioAPI.csproj
│   │
│   └── PortfolioAPI.Tests/
│       ├── Controllers/
│       ├── Services/
│       └── Repositories/
│
└── README.md
```

---

## 🎨 Frontend Structure (Angular)

```
portfolio-angular/
│
├── angular.json
├── package.json
├── tsconfig.json
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── guards/
│   │   │   │   └── auth.guard.ts
│   │   │   │
│   │   │   ├── interceptors/
│   │   │   │   ├── auth.interceptor.ts
│   │   │   │   ├── error.interceptor.ts
│   │   │   │   └── loading.interceptor.ts
│   │   │   │
│   │   │   ├── services/
│   │   │   │   ├── api.service.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── toast.service.ts
│   │   │   │   └── loading.service.ts
│   │   │   │
│   │   │   └── models/
│   │   │       ├── about.model.ts
│   │   │       ├── skill.model.ts
│   │   │       ├── project.model.ts
│   │   │       ├── experience.model.ts
│   │   │       ├── education.model.ts
│   │   │       ├── contact.model.ts
│   │   │       └── response.model.ts
│   │   │
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── header/
│   │   │   │   │   ├── header.component.ts
│   │   │   │   │   ├── header.component.html
│   │   │   │   │   └── header.component.scss
│   │   │   │   │
│   │   │   │   ├── footer/
│   │   │   │   │   ├── footer.component.ts
│   │   │   │   │   ├── footer.component.html
│   │   │   │   │   └── footer.component.scss
│   │   │   │   │
│   │   │   │   ├── loader/
│   │   │   │   │   ├── loader.component.ts
│   │   │   │   │   ├── loader.component.html
│   │   │   │   │   └── loader.component.scss
│   │   │   │   │
│   │   │   │   └── toast/
│   │   │   │       ├── toast.component.ts
│   │   │   │       ├── toast.component.html
│   │   │   │       └── toast.component.scss
│   │   │   │
│   │   │   ├── directives/
│   │   │   │   ├── scroll-animation.directive.ts
│   │   │   │   └── lazy-load.directive.ts
│   │   │   │
│   │   │   ├── pipes/
│   │   │   │   ├── safe-html.pipe.ts
│   │   │   │   └── truncate.pipe.ts
│   │   │   │
│   │   │   └── shared.module.ts
│   │   │
│   │   ├── features/
│   │   │   ├── home/
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.scss
│   │   │   │   └── home.module.ts
│   │   │   │
│   │   │   ├── about/
│   │   │   │   ├── about.component.ts
│   │   │   │   ├── about.component.html
│   │   │   │   ├── about.component.scss
│   │   │   │   ├── about.service.ts
│   │   │   │   └── about.module.ts
│   │   │   │
│   │   │   ├── skills/
│   │   │   │   ├── components/
│   │   │   │   │   ├── skill-card/
│   │   │   │   │   │   ├── skill-card.component.ts
│   │   │   │   │   │   ├── skill-card.component.html
│   │   │   │   │   │   └── skill-card.component.scss
│   │   │   │   │   │
│   │   │   │   │   └── skill-progress/
│   │   │   │   │       ├── skill-progress.component.ts
│   │   │   │   │       ├── skill-progress.component.html
│   │   │   │   │       └── skill-progress.component.scss
│   │   │   │   │
│   │   │   │   ├── skills.component.ts
│   │   │   │   ├── skills.component.html
│   │   │   │   ├── skills.component.scss
│   │   │   │   ├── skills.service.ts
│   │   │   │   └── skills.module.ts
│   │   │   │
│   │   │   ├── projects/
│   │   │   │   ├── components/
│   │   │   │   │   ├── project-card/
│   │   │   │   │   │   ├── project-card.component.ts
│   │   │   │   │   │   ├── project-card.component.html
│   │   │   │   │   │   └── project-card.component.scss
│   │   │   │   │   │
│   │   │   │   │   ├── project-filter/
│   │   │   │   │   │   ├── project-filter.component.ts
│   │   │   │   │   │   ├── project-filter.component.html
│   │   │   │   │   │   └── project-filter.component.scss
│   │   │   │   │   │
│   │   │   │   │   └── project-detail/
│   │   │   │   │       ├── project-detail.component.ts
│   │   │   │   │       ├── project-detail.component.html
│   │   │   │   │       └── project-detail.component.scss
│   │   │   │   │
│   │   │   │   ├── projects.component.ts
│   │   │   │   ├── projects.component.html
│   │   │   │   ├── projects.component.scss
│   │   │   │   ├── projects.service.ts
│   │   │   │   └── projects.module.ts
│   │   │   │
│   │   │   ├── experience/
│   │   │   │   ├── components/
│   │   │   │   │   └── timeline/
│   │   │   │   │       ├── timeline.component.ts
│   │   │   │   │       ├── timeline.component.html
│   │   │   │   │       └── timeline.component.scss
│   │   │   │   │
│   │   │   │   ├── experience.component.ts
│   │   │   │   ├── experience.component.html
│   │   │   │   ├── experience.component.scss
│   │   │   │   ├── experience.service.ts
│   │   │   │   └── experience.module.ts
│   │   │   │
│   │   │   ├── contact/
│   │   │   │   ├── contact.component.ts
│   │   │   │   ├── contact.component.html
│   │   │   │   ├── contact.component.scss
│   │   │   │   ├── contact.service.ts
│   │   │   │   └── contact.module.ts
│   │   │   │
│   │   │   └── admin/
│   │   │       ├── dashboard/
│   │   │       │   ├── dashboard.component.ts
│   │   │       │   ├── dashboard.component.html
│   │   │       │   └── dashboard.component.scss
│   │   │       │
│   │   │       ├── login/
│   │   │       │   ├── login.component.ts
│   │   │       │   ├── login.component.html
│   │   │       │   └── login.component.scss
│   │   │       │
│   │   │       ├── manage-projects/
│   │   │       ├── manage-skills/
│   │   │       └── admin.module.ts
│   │   │
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   └── app.module.ts
│   │
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo.svg
│   │   │   ├── avatar.jpg
│   │   │   └── bg/
│   │   │
│   │   ├── icons/
│   │   │   └── social/
│   │   │
│   │   ├── fonts/
│   │   │
│   │   └── i18n/
│   │       ├── en.json
│   │       └── ar.json
│   │
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   │
│   ├── styles/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   ├── _animations.scss
│   │   ├── _utilities.scss
│   │   └── styles.scss
│   │
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
│
└── README.md
```

---

## 📋 Key Models & DTOs

### Backend Models (C#)

**Project.cs**
```csharp
public class Project
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string ImageUrl { get; set; }
    public string DemoUrl { get; set; }
    public string GithubUrl { get; set; }
    public List<string> Technologies { get; set; }
    public DateTime CreatedDate { get; set; }
    public bool IsFeatured { get; set; }
    public string Category { get; set; }
}
```

**Skill.cs**
```csharp
public class Skill
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int Proficiency { get; set; } // 0-100
    public string Category { get; set; } // Frontend, Backend, Database, etc.
    public string IconUrl { get; set; }
}
```

**Experience.cs**
```csharp
public class Experience
{
    public int Id { get; set; }
    public string Position { get; set; }
    public string Company { get; set; }
    public string Location { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime? EndDate { get; set; }
    public string Description { get; set; }
    public List<string> Responsibilities { get; set; }
}
```

### Frontend Models (TypeScript)

**project.model.ts**
```typescript
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  technologies: string[];
  createdDate: Date;
  isFeatured: boolean;
  category: string;
}
```

---

## 🔧 API Endpoints

```
# About
GET    /api/about
PUT    /api/about (Admin)

# Skills
GET    /api/skills
GET    /api/skills/{id}
POST   /api/skills (Admin)
PUT    /api/skills/{id} (Admin)
DELETE /api/skills/{id} (Admin)

# Projects
GET    /api/projects
GET    /api/projects/{id}
GET    /api/projects/featured
POST   /api/projects (Admin)
PUT    /api/projects/{id} (Admin)
DELETE /api/projects/{id} (Admin)

# Experience
GET    /api/experience
GET    /api/experience/{id}
POST   /api/experience (Admin)
PUT    /api/experience/{id} (Admin)
DELETE /api/experience/{id} (Admin)

# Contact
POST   /api/contact/send

# Auth
POST   /api/auth/login
POST   /api/auth/refresh
POST   /api/auth/logout
```

---

## 🚀 Getting Started

### Backend Setup

```bash
# Create solution
dotnet new sln -n PortfolioAPI

# Create Web API project
dotnet new webapi -n PortfolioAPI
dotnet sln add PortfolioAPI/PortfolioAPI.csproj

# Install packages
cd PortfolioAPI
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools
dotnet add package AutoMapper.Extensions.Microsoft.DependencyInjection
dotnet add package FluentValidation.AspNetCore
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
dotnet add package Swashbuckle.AspNetCore

# Run migrations
dotnet ef migrations add InitialCreate
dotnet ef database update

# Run API
dotnet run
```

### Frontend Setup

```bash
# Install Angular CLI
npm install -g @angular/cli

# Create Angular project
ng new portfolio-angular --routing --style=scss

# Install dependencies
cd portfolio-angular
npm install @angular/animations
npm install @angular/material
npm install ngx-toastr
npm install aos
npm install swiper

# Generate components
ng generate module core
ng generate module shared
ng generate component shared/header
ng generate component shared/footer
ng generate component features/home
ng generate component features/about
ng generate component features/skills
ng generate component features/projects
ng generate component features/experience
ng generate component features/contact

# Generate services
ng generate service core/services/api
ng generate service features/projects/projects
ng generate service features/skills/skills
ng generate service features/experience/experience
ng generate service features/contact/contact

# Run development server
ng serve
```

---

## 📦 Key Features

### Backend Features
- ✅ RESTful API with CRUD operations
- ✅ Entity Framework Core with SQL Server
- ✅ JWT Authentication for admin panel
- ✅ AutoMapper for DTO mapping
- ✅ FluentValidation for input validation
- ✅ Global exception handling
- ✅ CORS configuration
- ✅ File upload for images/documents
- ✅ Email service for contact form
- ✅ Swagger documentation

### Frontend Features
- ✅ Responsive design (mobile-first)
- ✅ Lazy loading modules
- ✅ HTTP interceptors
- ✅ Route guards for admin
- ✅ Reactive forms
- ✅ Animations and transitions
- ✅ SEO optimization
- ✅ Progressive Web App (PWA)
- ✅ Dark/Light theme toggle
- ✅ Internationalization (i18n)
- ✅ Performance optimization

---

## 🎨 Design Sections

1. **Hero/Landing Section** - Name, title, CTA buttons
2. **About Me** - Photo, bio, personal info
3. **Skills** - Technical skills with proficiency bars
4. **Projects** - Portfolio showcase with filters
5. **Experience** - Work history timeline
6. **Education** - Academic background
7. **Testimonials** - Client/colleague reviews
8. **Contact** - Contact form + social links
9. **Footer** - Copyright, social media

---

## 🔐 Security Best Practices

- Use HTTPS in production
- Implement JWT with refresh tokens
- Validate all inputs (backend + frontend)
- Sanitize user inputs
- Use environment variables for secrets
- Implement rate limiting
- Add CORS policies
- Use parameterized queries (EF Core does this)
- Implement proper error handling
- Keep dependencies updated

---

## 📝 Environment Configuration

**appsettings.json (Backend)**
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=PortfolioDB;Trusted_Connection=True;"
  },
  "JwtSettings": {
    "SecretKey": "your-secret-key-here",
    "Issuer": "PortfolioAPI",
    "Audience": "PortfolioClient",
    "ExpirationMinutes": 60
  },
  "EmailSettings": {
    "SmtpServer": "smtp.gmail.com",
    "SmtpPort": 587,
    "SenderEmail": "your-email@gmail.com",
    "SenderPassword": "your-password"
  }
}
```

**environment.ts (Frontend)**
```typescript
export const environment = {
  production: false,
  apiUrl: 'https://localhost:7001/api',
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'ar']
};
```

---

## 🧪 Testing Structure

```
Backend Tests:
- Unit Tests (xUnit/NUnit)
- Integration Tests
- API Tests (Postman/Swagger)

Frontend Tests:
- Unit Tests (Jasmine/Karma)
- E2E Tests (Protractor/Cypress)
- Component Tests
```

---

## 📦 Deployment

**Backend:**
- Azure App Service
- AWS Elastic Beanstalk
- Heroku
- Docker Container

**Frontend:**
- Netlify
- Vercel
- Firebase Hosting
- Azure Static Web Apps
- GitHub Pages

**Database:**
- Azure SQL Database
- AWS RDS
- PostgreSQL on Heroku

---

This structure follows clean architecture principles, SOLID principles, and industry best practices for building scalable, maintainable applications.