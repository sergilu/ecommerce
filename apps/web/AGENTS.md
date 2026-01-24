# WEB APPLICATION KNOWLEDGE BASE

## OVERVIEW

Angular 21 application with Server-Side Rendering (SSR) support built with Rspack. This is the main frontend application of the ecommerce platform.

## STRUCTURE

```
apps/web/
├── src/
│   ├── app/
│   │   ├── app.ts              # Main app component
│   │   ├── app.html            # App component template
│   │   ├── app.scss            # App component styles
│   │   ├── app.config.ts       # Angular application configuration
│   │   ├── app.routes.ts       # Application routing
│   │   ├── app.config.server.ts # SSR configuration
│   │   ├── nx-welcome.ts       # Nx welcome component (951 lines)
│   │   └── app.spec.ts         # App component tests
│   ├── main.ts                 # Browser application bootstrap
│   ├── main.server.ts          # Server-side bootstrap
│   ├── server.ts               # SSR server entry point
│   └── test-setup.ts           # Test configuration
├── public/                     # Static assets
├── project.json                # Nx project configuration
├── rspack.config.ts            # Rspack build configuration
├── vite.config.mts             # Vite configuration
├── tsconfig.*.json             # TypeScript configurations
└── eslint.config.mjs           # ESLint configuration
```

## WHERE TO LOOK

| Task         | Location                              | Notes                  |
| ------------ | ------------------------------------- | ---------------------- |
| Components   | apps/web/src/app/                     | Angular components     |
| Routing      | apps/web/src/app/app.routes.ts        | Angular Router setup   |
| SSR Config   | apps/web/src/app/app.config.server.ts | Server-side rendering  |
| Build Config | apps/web/rspack.config.ts             | Rspack build setup     |
| Server Entry | apps/web/src/server.ts                | Express server for SSR |

## CONVENTIONS

- Angular 21 with standalone components
- TypeScript with strict mode
- Server-Side Rendering (SSR) enabled
- Rspack for fast builds (replacing Webpack)
- Component-based architecture
- Standalone components (no NgModules)
- SCSS for styling
- Vitest for unit testing

## COMMANDS

```bash
# Development
npx nx serve web              # Dev server (CSR)
npx nx serve web --ssr        # SSR dev server
npx nx run web:serve-ssr      # SSR dev server (alternative)

# Building
npx nx build web              # Production build
npx nx run web:serve-static   # Serve built application
npx nx run web:build:production # Production optimized build

# Testing
npx nx test web               # Unit tests with Vitest
npx nx test web --coverage     # With coverage report

# Code Quality
npx nx lint web               # ESLint checking

# Internationalization
npx nx extract-i18n web       # Extract translatable strings
```

## TECHNOLOGY STACK

- **Framework**: Angular 21
- **Language**: TypeScript
- **Build Tool**: Rspack
- **SSR**: @angular/ssr
- **Testing**: Vitest
- **Linting**: ESLint
- **Styling**: SCSS
- **Package Manager**: pnpm (workspace)

## KEY FILES

- `src/app/app.ts` - Root application component
- `src/app/app.routes.ts` - Application routing configuration
- `src/app/app.config.ts` - Application providers and configuration
- `src/app/app.config.server.ts` - SSR-specific configuration
- `rspack.config.ts` - Rspack build configuration
- `src/server.ts` - Express server for SSR

## DEVELOPMENT WORKFLOW

1. Use `npx nx serve web --ssr` for SSR development
2. Components use standalone component pattern
3. Routing configured in `app.routes.ts`
4. Styles use SCSS with component-scoped styles
5. SSR server runs on Express.js
6. Build outputs optimized for production

## NOTES

- Large file: `nx-welcome.ts` (951 lines - generated template)
- SSR enabled by default with Express server
- Rspack provides faster builds compared to Webpack
- Uses Nx workspace conventions
- Implicit dependency: web-e2e depends on this project

## UPDATE POLICY

**Language Requirement:** All content in AGENTS.md must be in English.

When significant changes are made to the web application (new features, architecture changes, modified patterns, etc.), **always ask the user before updating AGENTS.md** with a specific suggestion.

Example: _"I've detected you added NgRx state management. Would you like me to update AGENTS.md to include state management conventions with this pattern?"_
