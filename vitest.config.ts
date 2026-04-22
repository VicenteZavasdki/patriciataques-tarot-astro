import { defineConfig } from 'vitest/config';
import { getViteConfig } from 'astro/config';

export default defineConfig(
  getViteConfig({
    test: {
      environment: 'node',
      globals: true,
      include: ['tests/unit/**/*.test.ts', 'tests/unit/**/*.test.tsx'],
      setupFiles: ['./tests/setup.ts'],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'html'],
        include: ['src/**/*.{ts,tsx,astro}'],
        exclude: ['node_modules', 'dist']
      }
    }
  })
);