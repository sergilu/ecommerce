# WEB E2E TESTING KNOWLEDGE BASE

## OVERVIEW

Playwright-based E2E testing suite for the web application. Provides comprehensive browser automation testing across multiple browsers with local development server integration.

## STRUCTURE

```
apps/web-e2e/
├── src/
│   └── example.spec.ts         # Example E2E test
├── playwright.config.ts        # Playwright configuration
├── project.json               # Nx project configuration
├── tsconfig.json              # TypeScript configuration
└── eslint.config.mjs          # ESLint configuration
```

## WHERE TO LOOK

| Task      | Location                          | Notes                   |
| --------- | --------------------------------- | ----------------------- |
| Tests     | apps/web-e2e/src/                 | E2E test specifications |
| Config    | apps/web-e2e/playwright.config.ts | Playwright setup        |
| Browsers  | playwright.config.ts              | Browser configurations  |
| Test Data | apps/web-e2e/src/                 | Test fixtures and data  |

## CONVENTIONS

- Playwright for browser automation
- TypeScript for test definitions
- Page Object Model pattern recommended
- Test-driven development approach
- Cross-browser testing (Chrome, Firefox)
- Local dev server integration
- Nx workspace integration

## COMMANDS

```bash
# Running Tests
npx nx e2e web-e2e                    # Run all E2E tests
npx nx e2e web-e2e --headed            # Run with visible browser
npx nx e2e web-e2e --debug             # Run in debug mode
npx nx e2e web-e2e --project=chromium  # Run specific browser

# Test Development
npx nx e2e web-e2e --ui                # Playwright Test UI
npx nx e2e web-e2e --codegen           # Generate test code

# Specific Test Files
npx nx e2e web-e2e --grep "test name"  # Run matching tests
npx nx e2e web-e2e src/example.spec.ts # Run specific file

# CI/CD
npx nx e2e web-e2e --reporter=html     # Generate HTML report
npx nx e2e web-e2e --reporter=junit    # JUnit XML for CI
```

## BROWSER SUPPORT

### Enabled Browsers:

- **Chromium** (Desktop Chrome) - Primary testing browser
- **Firefox** - Cross-browser compatibility testing

### Available (Commented Out):

- **WebKit** (Desktop Safari) - Safari testing
- **Mobile Chrome** - Mobile device testing
- **Mobile Safari** - iOS device testing
- **Microsoft Edge** - Edge browser testing
- **Google Chrome** - Official Chrome build

## CONFIGURATION

### Web Server Integration:

- Automatically starts local dev server before tests
- Server URL: `http://localhost:4200`
- Reuses existing server when available
- Command: `pnpm exec nx run web:serve`

### Test Settings:

- Base URL configurable via `BASE_URL` environment variable
- Trace collection on first retry for debugging
- Nx E2E preset integration
- Workspace root configuration

## TEST PATTERNS

### Basic Test Structure:

```typescript
import { test, expect } from '@playwright/test';

test('test description', async ({ page }) => {
  await page.goto('/');
  // Test implementation
});
```

### Recommended Practices:

1. **Page Object Model**: Create separate classes for page interactions
2. **Data-Driven Testing**: Use parameterized tests with `test.each()`
3. **Fixtures**: Use Playwright fixtures for test setup/teardown
4. **Assertions**: Use Playwright's built-in expect methods
5. **Waits**: Prefer explicit waits over implicit waits

## TEST CATEGORIES

### Typical E2E Test Categories:

- **Smoke Tests**: Critical path functionality
- **Regression Tests**: Existing feature verification
- **Integration Tests**: Multi-component workflows
- **Performance Tests**: Load and timing measurements
- **Accessibility Tests**: A11y compliance checking

## DEVELOPMENT WORKFLOW

1. **Test Development**:
   - Use `--headed` flag for visual debugging
   - Use `--debug` for step-by-step execution
   - Use Playwright Test UI for interactive development

2. **Local Testing**:
   - Tests automatically start dev server
   - Browser runs in headless mode by default
   - Results and reports generated in test output

3. **CI Integration**:
   - Configure appropriate reporters for your CI system
   - Use environment variables for different test environments
   - Implement test parallelization for faster CI runs

## DEBUGGING

### Debug Methods:

- `--debug` flag: Step-by-step execution with debugger
- `--headed` flag: Visible browser for visual debugging
- `--trace` option: Detailed execution traces
- Playwright Inspector: GUI-based debugging tool
- VS Code Playwright extension: IDE integration

## REPORTING

### Available Reporters:

- **HTML**: Interactive HTML reports
- **JUnit**: XML format for CI systems
- **JSON**: Machine-readable results
- **Line**: Simple console output
- **Dot**: Compact progress indication

## NOTES

- **Implicit Dependency**: Depends on `web` application project
- **Single Test File**: Currently has one example test (`example.spec.ts`)
- **Nx Integration**: Uses Nx E2E preset and workspace configuration
- **Browser Configuration**: Mobile and Safari browsers commented out but available
- **Environment**: Uses local development server by default

## UPDATE POLICY

**Language Requirement:** All content in AGENTS.md must be in English.

When significant changes are made to the E2E test suite (new test patterns, browser configurations, CI integrations, etc.), **always ask the user before updating AGENTS.md** with a specific suggestion.

Example: _"I've detected you added visual regression testing. Would you like me to update AGENTS.md to include visual testing conventions?"_
