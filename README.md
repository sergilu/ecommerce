# Enterprise Application Patterns Learning Playground

A comprehensive learning environment for practicing and testing enterprise application development concepts.

## 🎯 Learning Objectives

This project demonstrates and allows hands-on practice with key enterprise patterns:

- **Unit Testing**: Testing Library integration with Vitest
- **End-to-End Testing**: Playwright automation and testing
- **Monorepo Architecture**: Nx workspace management
- **Design System**: Storybook component library with documentation
- **Modern Build Tools**: Rspack for fast builds, Vite for development
- **Server-Side Rendering**: Angular SSR implementation
- **Component-First Architecture**: Standalone components and shared libraries

## 🛠 Technology Stack

- **Framework**: Angular 21 with TypeScript
- **Workspace**: Nx monorepo with intelligent caching
- **Testing**: Vitest + Testing Library + Playwright
- **Design System**: Storybook with visual testing
- **Build Tools**: Rspack (production) + Vite (development)
- **SSR**: Angular Universal with Express
- **Styling**: SCSS with Tailwind CSS
- **Package Manager**: pnpm workspace

## 📁 Project Structure

```
/
├── apps/web/          # Main Angular application (SSR enabled)
├── apps/web-e2e/      # End-to-end tests with Playwright
├── libs/ui/           # Reusable UI component library
└── dist/              # Build outputs
```

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Development
npx nx serve web --ssr        # Main app with SSR
npx nx storybook ui           # Component library

# Testing
npx nx test web                # Unit tests
npx nx e2e web-e2e            # E2E tests
npx nx test-storybook ui      # Visual testing

# Build
npx nx build web               # Production build
npx nx build-storybook ui      # Static Storybook
```

## 💡 Usage

This is **not** a production e-commerce application. It's a controlled environment for:

1. **Learning** enterprise patterns without production constraints
2. **Testing** new technologies and approaches
3. **Practicing** code organization and architecture
4. **Experimenting** with modern development workflows
