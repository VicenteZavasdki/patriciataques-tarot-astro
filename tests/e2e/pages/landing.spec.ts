import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('page loads without errors', async ({ page }) => {
    await expect(page).toHaveTitle(/Patricia Taques/);
  });

  test('hero section is visible', async ({ page }) => {
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Descubra');
  });

  test('CTA buttons are present', async ({ page }) => {
    const ctas = page.locator('a:has-text(\"Agendar\")');
    await expect(ctas.first()).toBeVisible();
  });

  test('process section has 3 steps', async ({ page }) => {
    await expect(page.locator('text=Como Funciona')).toBeVisible();
    const steps = page.locator('text=Entre em Contato, text=Escolha seu Tipo, text=Receba sua Leitura');
    await expect(steps).toHaveCount(3);
  });

  test('pricing section shows both currencies', async ({ page }) => {
    await expect(page.locator('text=Brasil')).toBeVisible();
    await expect(page.locator('text=Europa')).toBeVisible();
  });

  test('whatsapp button links correctly', async ({ page }) => {
    const whatsappBtn = page.locator('a[href*=\"wa.me\"]').first();
    await expect(whatsappBtn).toHaveAttribute('href', /wa.me/);
  });

  test('mobile responsive', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('h1')).toBeVisible();
  });
});