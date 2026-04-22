# AGENTS.md - Patricia Taques Tarot Site

## Development Philosophy

### Spec-Driven Development
1. Read SPEC.md before any implementation
2. Write tests that match spec behavior
3. Implement to pass tests
4. Refactor maintaining passing tests
5. Commit with conventional commits

### TDD Workflow
```
┌────────────────────────────────────────────────────┐
│  1. Read SPEC.md                                   │
│     ↓                                              │
│  2. Write failing test                             │
│     ↓                                              │
│  3. Implement minimal code to pass                 │
│     ↓                                              │
│  4. Refactor + ensure all tests pass               │
│     ↓                                              │
│  5. Commit (conventional: feat|fix|docs|test)      │
└────────────────────────────────────────────────────┘
```

## Commands

### Development
```bash
npm run dev          # Start dev server (localhost:4321)
npm run build        # Production build
npm run preview      # Preview production build
```

### Testing
```bash
npm test             # Run Vitest unit tests
npm run test:e2e     # Run Playwright E2E tests
npm run test:watch   # Run tests in watch mode
```

### Quality
```bash
npm run lint         # ESLint check
npm run format       # Prettier format
```

### Deployment
```bash
npm run build        # Build for Cloudflare Pages
wrangler pages deploy # Deploy to Cloudflare
```

## Project Structure

```
src/
├── components/
│   ├── ui/           # Pure Astro components
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   └── Badge.astro
│   ├── islands/      # React client components
│   │   └── CalEmbed.tsx
│   └── sections/     # Page sections
│       ├── Hero.astro
│       ├── Process.astro
│       ├── Benefits.astro
│       ├── Testimonials.astro
│       ├── Pricing.astro
│       └── Footer.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   └── api/          # Server endpoints (future)
│       ├── create-checkout-session.ts
│       └── stripe-webhook.ts
├── lib/
│   ├── utils.ts      # Utility functions
│   └── constants.ts  # Site configuration
├── data/
│   ├── benefits.ts   # Benefits data
│   └── testimonials.ts # Testimonials data
└── styles/
    └── global.css    # Tailwind + design tokens

tests/
├── unit/
│   ├── components/   # Vitest component tests
│   └── lib/          # Utility function tests
└── e2e/
    └── pages/        # Playwright E2E tests
```

## Component Conventions

### Astro Components
- Props interface in frontmatter
- Use TypeScript for type safety
- CSS classes via Tailwind utilities
- No external CSS files unless necessary

### React Islands
- Use 'use client' directive
- Use client:visible for lazy loading
- Handle loading states gracefully

### File Naming
- Components: PascalCase.astro
- Scripts: camelCase.ts
- Styles: kebab-case.css

## Test Conventions

### Unit Tests (Vitest)
```typescript
// File: tests/unit/components/Button.test.ts
import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Button from '../../../src/components/ui/Button.astro';
import { Container } from 'astro/container';

test('Button renders with default variant', async () => {
  const container = await Container.create();
  const result = await container.renderToString(Button, {
    props: { variant: 'default' },
    slots: { default: 'Click me' }
  });
  expect(result).toContain('Click me');
});
```

### E2E Tests (Playwright)
```typescript
// File: tests/e2e/pages/index.spec.ts
import { test, expect } from '@playwright/test';

test('Landing page loads correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Patricia Taques/);
  await expect(page.locator('h1')).toContainText('Descubra');
});
```

## Definition of Done

- [ ] Component matches SPEC.md specifications
- [ ] All unit tests passing
- [ ] All E2E tests passing
- [ ] No console errors in browser
- [ ] Lighthouse score > 90
- [ ] Mobile responsive (tested)
- [ ] Accessible (keyboard navigation)
- [ ] Semantic HTML used

## Environment Variables

```env
# .env.example
PUBLIC_SITE_URL=https://patriciataques.com
PUBLIC_CALCOM_LINK=patriciataques/tarot-reading
PUBLIC_WHATSAPP=5511999999999
```

## Deployment

### Cloudflare Pages
1. Run `npm run build`
2. Deploy via Wrangler or GitHub integration
3. Configure environment variables in Cloudflare dashboard
4. Set build command: `npm run build`
5. Set build output: `dist`