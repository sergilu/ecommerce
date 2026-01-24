# PROJECT KNOWLEDGE BASE

## OVERVIEW

Nx-based monorepo with multiple projects. Each project has its own dedicated AGENTS.md file.

## PROJECT STRUCTURE

```
/
├── apps/web/          # Main application
├── apps/web-e2e/      # E2E tests
├── @ecommerce/ui/     # UI component library
└── dist/              # Build output
```

## PROJECT DOCUMENTATION

Each project contains its own AGENTS.md file:

| Project | File                      | Purpose                          |
| ------- | ------------------------- | -------------------------------- |
| web     | `apps/web/AGENTS.md`      | Main application development     |
| web-e2e | `apps/web-e2e/AGENTS.md`  | End-to-end testing               |
| ui      | `@ecommerce/ui/AGENTS.md` | UI component library development |

## WORKSPACE COMMANDS

```bash
# Project Management
npx nx graph               # Project dependency graph
npx nx show project <name>  # Project details
npx nx list                # List all projects
```

## WORKSPACE FILES

| File                | Purpose                    |
| ------------------- | -------------------------- |
| nx.json             | Nx workspace configuration |
| package.json        | Root dependencies          |
| pnpm-workspace.yaml | Package manager workspace  |

## UPDATE POLICY

**Language Requirement:** All content in AGENTS.md must be in English.

### When to Update This File

- Adding new projects
- Changing workspace-level configuration
- Modifying monorepo patterns

### Project-Specific Updates

Refer to individual project AGENTS.md files for project-specific update policies.

**Always ask before updating any AGENTS.md file** with specific suggestions.
