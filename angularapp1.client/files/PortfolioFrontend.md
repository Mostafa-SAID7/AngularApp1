PortfolioFrontend/
├── src/
│   ├── app/
│   │   ├── components/                  # Reusable components
│   │   │   ├── header/                  # Header with navigation
│   │   │   │   ├── header.component.html
│   │   │   │   ├── header.component.scss
│   │   │   │   ├── header.component.ts
│   │   │   │   └── header.component.spec.ts
│   │   │   ├── footer/                  # Footer
│   │   │   │   └── ... (similar files)
│   │   │   ├── about/                   # About section
│   │   │   │   └── ... 
│   │   │   ├── skills/                  # Skills list
│   │   │   │   └── ... 
│   │   │   ├── projects/                # Projects grid/list
│   │   │   │   ├── project-card/        # Sub-component for each project
│   │   │   │   │   └── ... 
│   │   │   │   └── ... 
│   │   │   ├── experience/              # Timeline of experience
│   │   │   │   └── ... 
│   │   │   └── contact/                 # Contact form
│   │   │       └── ... 
│   │   ├── services/                    # API services
│   │   │   ├── api.service.ts           # Base HTTP service
│   │   │   ├── project.service.ts       # Fetches projects from API
│   │   │   └── skill.service.ts         # Fetches skills
│   │   ├── models/                      # Interfaces for data
│   │   │   ├── project.ts               # Interface for Project
│   │   │   └── skill.ts
│   │   ├── app.component.html           # Root component
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   │   ├── app.module.ts                # Main module, imports
│   │   ├── app-routing.module.ts        # Routes (e.g., /about, /projects)
│   │   └── environments/                # Env configs
│   │       ├── environment.ts           # Dev API URL
│   │       └── environment.prod.ts      # Prod API URL
│   ├── assets/                          # Images, icons
│   │   └── images/                      # Portfolio images
│   ├── index.html                       # Main HTML
│   ├── main.ts                          # Bootstrap
│   ├── styles.scss                      # Global styles
│   └── polyfills.ts                     # Browser compat
├── angular.json                         # Angular config
├── package.json                         # Dependencies
├── tsconfig.json                        # TypeScript config
└── README.md
