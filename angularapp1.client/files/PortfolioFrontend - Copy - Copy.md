portfolio-frontend/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── services/
│   │   │   │   ├── api/
│   │   │   │   │   ├── project.service.ts
│   │   │   │   │   ├── skill.service.ts
│   │   │   │   │   ├── experience.service.ts
│   │   │   │   │   └── contact.service.ts
│   │   │   │   ├── theme.service.ts
│   │   │   │   ├── localization.service.ts
│   │   │   │   └── file-upload.service.ts
│   │   │   ├── guards/
│   │   │   │   └── auth.guard.ts
│   │   │   ├── interceptors/
│   │   │   │   ├── api.interceptor.ts
│   │   │   │   └── error.interceptor.ts
│   │   │   ├── models/
│   │   │   │   ├── project.model.ts
│   │   │   │   ├── skill.model.ts
│   │   │   │   ├── experience.model.ts
│   │   │   │   └── api-response.model.ts
│   │   │   └── core.module.ts
│   │   ├── modules/
│   │   │   ├── home/
│   │   │   │   ├── components/
│   │   │   │   │   ├── hero/
│   │   │   │   │   ├── about/
│   │   │   │   │   └── stats/
│   │   │   │   └── home.module.ts
│   │   │   ├── projects/
│   │   │   │   ├── components/
│   │   │   │   │   ├── project-list/
│   │   │   │   │   ├── project-card/
│   │   │   │   │   └── project-detail/
│   │   │   │   ├── pages/
│   │   │   │   │   └── projects-page/
│   │   │   │   └── projects.module.ts
│   │   │   ├── skills/
│   │   │   │   ├── components/
│   │   │   │   │   ├── skills-chart/
│   │   │   │   │   └── skill-category/
│   │   │   │   └── skills.module.ts
│   │   │   ├── experience/
│   │   │   │   ├── components/
│   │   │   │   │   ├── timeline/
│   │   │   │   │   └── experience-card/
│   │   │   │   └── experience.module.ts
│   │   │   ├── contact/
│   │   │   │   ├── components/
│   │   │   │   │   └── contact-form/
│   │   │   │   └── contact.module.ts
│   │   │   └── admin/
│   │   │       ├── components/
│   │   │       │   ├── project-form/
│   │   │       │   └── file-upload/
│   │   │       └── admin.module.ts
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── header/
│   │   │   │   ├── footer/
│   │   │   │   ├── language-switcher/
│   │   │   │   ├── theme-toggle/
│   │   │   │   └── loading-spinner/
│   │   │   ├── directives/
│   │   │   │   ├── click-outside.directive.ts
│   │   │   │   └── lazy-load.directive.ts
│   │   │   ├── pipes/
│   │   │   │   ├── safe-html.pipe.ts
│   │   │   │   └── localize.pipe.ts
│   │   │   └── shared.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   └── app.module.ts
│   ├── assets/
│   │   ├── i18n/
│   │   │   ├── en.json
│   │   │   ├── es.json
│   │   │   └── fr.json
│   │   ├── images/
│   │   │   ├── icons/
│   │   │   └── placeholders/
│   │   └── styles/
│   │       ├── _variables.scss
│   │       ├── _mixins.scss
│   │       ├── _dark-theme.scss
│   │       ├── _light-theme.scss
│   │       └── global.scss
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   └── main.ts
├── angular.json
├── package.json
└── tsconfig.json
