# UI COMPONENT LIBRARY KNOWLEDGE BASE

## OVERVIEW

Angular 21 UI component library with Storybook integration for developing, documenting, and testing reusable components across the ecommerce platform.

## STRUCTURE

```
libs/@ecommerce/ui/
├── src/
│   ├── lib/
│   │   └── ui/
│   │       ├── ui.ts              # UI component definitions
│   │       ├── ui.html            # Component template
│   │       ├── ui.css             # Component styles
│   │       ├── ui.spec.ts         # Unit tests
│   │       └── ui.stories.ts     # Storybook stories
│   ├── test-setup.ts              # Test configuration
│   └── index.ts                  # Public API exports
├── .storybook/
│   ├── main.ts                   # Storybook configuration
│   ├── preview.ts                # Storybook preview settings
│   └── tsconfig.json            # Storybook TypeScript config
├── project.json                  # Nx project configuration
├── tsconfig.*.json              # TypeScript configurations
├── vite.config.mts              # Vite build configuration
└── eslint.config.mjs            # ESLint configuration
```

## WHERE TO LOOK

| Task             | Location                               | Notes                             |
| ---------------- | -------------------------------------- | --------------------------------- |
| Components       | libs/@ecommerce/ui/src/lib/ui/              | Angular UI components             |
| Stories          | libs/@ecommerce/ui/src/lib/ui/\*.stories.ts | Storybook documentation           |
| Tests            | libs/@ecommerce/ui/src/lib/ui/\*.spec.ts    | Unit tests                        |
| Exports          | libs/@ecommerce/ui/src/index.ts             | Public API surface                |
| Storybook Config | libs/@ecommerce/ui/.storybook/              | Storybook setup and configuration |
| Build Config     | libs/@ecommerce/ui/vite.config.mts          | Vite build configuration          |
| Nx Config        | libs/@ecommerce/ui/project.json             | Nx project metadata and targets   |

## CONVENTIONS

- Angular 21 with standalone components
- Component-based architecture
- Storybook for component documentation and visual testing
- TypeScript with strict mode
- SCSS for component styling
- Vitest for unit testing
- ESLint for code quality
- Vite for fast builds and development
- Semantic versioning for releases
- Public API through index.ts barrel exports

## COMMANDS

```bash
# Development
npx nx storybook @ecommerce/ui              # Start Storybook dev server
npx nx storybook @ecommerce/ui --port 4400   # Storybook on specific port
npx nx storybook @ecommerce/ui --ci          # Storybook in CI mode

# Build and Static
npx nx build-storybook @ecommerce/ui         # Build static Storybook
npx nx static-storybook @ecommerce/ui        # Serve built Storybook
npx nx static-storybook @ecommerce/ui --ci   # Static Storybook in CI mode

# Testing
npx nx test @ecommerce/ui                    # Run unit tests
npx nx test @ecommerce/ui --coverage        # With coverage report
npx nx test-storybook @ecommerce/ui          # Storybook visual testing

# Code Quality
npx nx lint @ecommerce/ui                    # ESLint checking
```

## COMPONENT DEVELOPMENT

### Creating New Components

1. **Component Structure**:

```typescript
@Component({
  selector: 'lib-component-name',
  standalone: true,
  imports: [
    /* Angular dependencies */
  ],
  templateUrl: './component-name.html',
  styleUrl: './component-name.css',
})
export class ComponentName {
  // Component logic
}
```

2. **Export Pattern**:

```typescript
// Export in src/index.ts
export * from './lib/ui/component-name';
export * from './lib/ui/other-component';
```

### Component Guidelines

- Use **standalone components** (no NgModules)
- Follow **semantic naming** (PascalCase for classes, kebab-case for selectors)
- Implement **proper TypeScript types** for inputs and outputs
- Use **component-scoped styles** with CSS encapsulation
- Include **accessibility attributes** (ARIA labels, keyboard navigation)
- Add **responsive design** considerations
- Provide **loading and error states** where applicable

## STORYBOOK INTEGRATION

### Story Structure

```typescript
import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta<ComponentName> = {
  title: 'UI/ComponentName',
  component: ComponentName,
  tags: ['autodocs'],
  argTypes: {
    // Input configurations
  },
};

export default meta;
type Story = StoryObj<ComponentName>;

export const Default: Story = {
  args: {
    // Default props
  },
};

export const WithCustomProps: Story = {
  args: {
    // Custom props
  },
};
```

### Storybook Best Practices

- Create **multiple stories** for different component states
- Use **argTypes** for documentation of inputs and events
- Include **controls** for interactive testing
- Add **playwright tests** for visual regression testing
- Group related components in **stories hierarchy**
- Use **autodocs** for automatic documentation generation

### Development Workflow

1. **Component First**: Develop component with unit tests
2. **Story Documentation**: Add comprehensive Storybook stories
3. **Visual Testing**: Test stories across different viewports
4. **Integration**: Import and use in main application

## TESTING STRATEGY

### Unit Testing with Vitest

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('ComponentName', () => {
  let component: ComponentName;
  let fixture: ComponentFixture<ComponentName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentName],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentName);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Additional tests...
});
```

### Visual Testing with Storybook

- **Storybook test-runner** for visual regression testing
- **Accessibility testing** with axe-core
- **Cross-browser testing** in different environments
- **Responsive testing** across viewport sizes

## TECHNOLOGY STACK

- **Framework**: Angular 21
- **Language**: TypeScript
- **Build Tool**: Vite
- **Documentation**: Storybook
- **Testing**: Vitest
- **Visual Testing**: Storybook test-runner
- **Linting**: ESLint
- **Workspace**: Nx
- **Package Manager**: pnpm (workspace)

## PUBLIC API

The library exports components through the main index.ts:

```typescript
// Import in consuming applications
import { ComponentName, OtherComponent } from '@ecommerce/ui';
```

### Export Patterns

- **Components**: Export all reusable UI components
- **Utilities**: Export helper functions and types
- **Interfaces**: Export TypeScript interfaces and types
- **Services**: Export shared services if needed

## DEVELOPMENT WORKFLOW

### 1. Component Development

```bash
# Start Storybook for visual development
npx nx storybook @ecommerce/ui

# Run tests in watch mode
npx nx test @ecommerce/ui --watch
```

### 2. Integration

```bash
# Build library for consumption
npx nx build @ecommerce/ui

# Test integration in main app
npx nx serve web
```

### 3. Release Process

1. Update version in package.json
2. Update changelog with new features
3. Build and publish to package registry (if needed)
4. Update documentation

## DESIGN SYSTEM INTEGRATION

### Design Tokens

- Use **CSS custom properties** for design tokens
- Implement **theme consistency** across components
- Provide **dark/light mode** variants where applicable
- Maintain **spacing and typography** scales

### Component Categories

- **Form Components**: Inputs, buttons, selects, etc.
- **Layout Components**: Grid, containers, spacers
- **Navigation Components**: Menus, breadcrumbs, pagination
- **Feedback Components**: Alerts, modals, tooltips
- **Data Display**: Tables, cards, lists

## PERFORMANCE CONSIDERATIONS

- **Lazy loading** for large components
- **OnPush change detection** where applicable
- **Minimal bundle impact** with tree-shaking
- **Efficient re-renders** with proper Angular patterns
- **Storybook optimization** for fast development

## INTEGRATION WITH MAIN APPLICATION

### Import Patterns

```typescript
// In main app's app.config.ts or component files
import { ComponentName } from '@ecommerce/ui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ComponentName],
  template: ` <lib-component-name [input]="value"></lib-component-name> `,
})
export class ExampleComponent {}
```

### Styling Integration

- Component styles are **scoped by default**
- Use **CSS custom properties** for theme integration
- Consider **CSS inheritance** for global styles
- Implement **shadow DOM** if needed for isolation

## NOTES

- **Buildable Library**: Can be built and published independently
- **Storybook Integration**: Full documentation and visual testing setup
- **Nx Workspace**: Follows Nx conventions and caching
- **Testing Setup**: Comprehensive testing with Vitest and Storybook
- **Initial Component**: Currently has basic `EcommerceUi` component
- **Single Export**: Index exports all components for easy consumption

## UPDATE POLICY

**Language Requirement:** All content in AGENTS.md must be in English.

When significant changes are made to the UI library (new components, Storybook patterns, build configuration changes, etc.), **always ask the user before updating AGENTS.md** with a specific suggestion.

Example: _"I've detected you added form validation components. Would you like me to update AGENTS.md to include form component patterns and validation conventions?"_
