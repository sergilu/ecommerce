# PROJECT KNOWLEDGE BASE

**Generated:** 2026-01-24 12:42:41
**Commit:** 4f24c9d
**Branch:** main

## OVERVIEW

Nx-based Angular monorepo with SSR support using Analog.js and Rspack.

## STRUCTURE

```
/
├── apps/web/          # Main Angular application
├── apps/web-e2e/      # Playwright E2E tests
└── dist/              # Build output
```

## WHERE TO LOOK

| Task         | Location                  | Notes                   |
| ------------ | ------------------------- | ----------------------- |
| Main app     | apps/web/src/             | Angular with SSR        |
| E2E tests    | apps/web-e2e/             | Playwright tests        |
| Build config | apps/web/rspack.config.ts | Rspack build setup      |
| Nx config    | nx.json                   | Workspace configuration |

## CONVENTIONS

- Nx monorepo structure
- Angular 21 with TypeScript
- SSR via @angular/ssr
- Rspack for builds (not Webpack)
- Vitest for unit tests
- Playwright for E2E
- ESLint for linting
- pnpm workspace

## COMMANDS

```bash
# Development
npx nx serve web          # Dev server
npx nx serve web --ssr     # SSR dev server

# Building
npx nx build web          # Production build
npx nx serve-static web   # Serve built app

# Testing
npx nx test web            # Unit tests
npx nx e2e web-e2e         # E2E tests

# Utilities
npx nx graph               # Project dependency graph
npx nx show project web    # Project details
```

## NOTES

- Single app workspace (web)
- Large file: nx-welcome.ts (951 lines - generated template)
- Uses pnpm for package management
- ESLint config present

## UPDATE POLICY

**Language Requirement:** All content in AGENTS.md must be in English.

When significant changes are made to the project (new libraries, architecture changes, modified patterns, etc.), **always ask the user before updating AGENTS.md** with a specific suggestion.

Example: _"I've detected you added React Query. Would you like me to update AGENTS.md to include state management conventions with this pattern?"_
