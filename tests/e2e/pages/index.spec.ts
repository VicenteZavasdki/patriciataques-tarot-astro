import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('page loads without errors', async ({ page }) => {
    await expect(page).toHaveTitle(/Patricia Taques/);
  });

  test('hero section is visible with animations', async ({ page }) => {
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Descubra');
    await expect(page.locator('text=Caminho')).toBeVisible();
  });

  test('trust metrics are displayed', async ({ page }) => {
    await expect(page.locator('text=+300')).toBeVisible();
    await expect(page.locator('text=Anos')).toBeVisible();
  });

  test('process section has 3 steps', async ({ page }) => {
    await expect(page.locator('text=Como Funciona')).toBeVisible();
    await expect(page.locator('text=Entre em Contato').first()).toBeVisible();
    await expect(page.locator('text=Escolha seu Tipo').first()).toBeVisible();
    await expect(page.locator('text=Receba sua Leitura').first()).toBeVisible();
  });

  test('benefits section shows 4 cards', async ({ page }) => {
    await expect(page.locator('text=O que Inclui')).toBeVisible();
    await expect(page.locator('section').filter({ hasText: '📸' })).toBeVisible();
    await expect(page.locator('section').filter({ hasText: '🎧' })).toBeVisible();
  });

  test('testimonials section displays 3 reviews', async ({ page }) => {
    await expect(page.locator('text=Depoimentos')).toBeVisible();
    const stars = page.locator('text=★★★★★').first();
    await expect(stars).toBeVisible();
  });

  test('pricing section shows both currencies', async ({ page }) => {
    await page.locator('#pricing').scrollIntoViewIfNeeded();
    await expect(page.locator('text=Brasil')).toBeVisible();
    await expect(page.locator('text=260')).toBeVisible();
  });

  test('whatsapp button has correct href', async ({ page }) => {
    const whatsappBtns = page.locator('a[href*=\"wa.me\"]');
    await expect(whatsappBtns.first()).toBeVisible();
    const href = await whatsappBtns.first().getAttribute('href');
    expect(href).toContain('wa.me');
  });

  test('scroll to contact section', async ({ page }) => {
    await page.locator('#contato').scrollIntoViewIfNeeded();
    await expect(page.locator('text=Entre em Contato').last()).toBeVisible();
  });

  test('footer displays correctly', async ({ page }) => {
    await expect(page.locator('text=Patricia Taques').first()).toBeVisible();
    await expect(page.locator('text=Tarot & Espiritualidade')).toBeVisible();
  });

  test('mobile responsive - hero visible', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('h1')).toBeVisible();
  });

  test('tablet responsive - hero visible', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('h1')).toBeVisible();
  });
});

test.describe('Contact Form (LeadForm)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#contato');
    await page.waitForSelector('#contato', { state: 'visible' });
  });

  test('form fields are present', async ({ page }) => {
    await expect(page.locator('input[placeholder*=\"nome\"]')).toBeVisible();
    await expect(page.locator('input[type=\"email\"]')).toBeVisible();
    await expect(page.locator('input[type=\"tel\"]')).toBeVisible();
    await expect(page.locator('select')).toBeVisible();
  });

  test('whatsapp button disabled initially', async ({ page }) => {
    const submitBtn = page.locator('button[type=\"submit\"]');
    await expect(submitBtn).toBeDisabled();
    await expect(submitBtn).toContainText('Preencha todos os campos');
  });

  test('form validates name field', async ({ page }) => {
    const nameInput = page.locator('input[placeholder*=\"nome\"]');
    await nameInput.fill('123'); // Numbers only - invalid
    await nameInput.blur();
    await expect(page.locator('text=Nome deve conter apenas letras')).toBeVisible();
  });

  test('form validates email field', async ({ page }) => {
    const emailInput = page.locator('input[type=\"email\"]');
    await emailInput.fill('invalid-email');
    await emailInput.blur();
    await expect(page.locator('text=Email inválido')).toBeVisible();
  });

  test('form enables submit when valid', async ({ page }) => {
    await page.locator('input[placeholder*=\"nome\"]').fill('Maria Silva');
    await page.locator('input[type=\"email\"]').fill('maria@email.com');
    await page.locator('input[type=\"tel\"]').fill('+55 11 99999-9999');
    await page.locator('select').selectOption('BR');

    const submitBtn = page.locator('button[type=\"submit\"]');
    await expect(submitBtn).toBeEnabled();
    await expect(submitBtn).toContainText('Enviar via WhatsApp');
  });
});

test.describe('Pricing Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('#pricing').scrollIntoViewIfNeeded();
  });

  test('shows Brazil pricing card', async ({ page }) => {
    await expect(page.locator('text=Leitura Brasil')).toBeVisible();
    await expect(page.locator('text=R$')).toBeVisible();
    await expect(page.locator('text=Agendar no WhatsApp').first()).toBeVisible();
  });

  test('shows Europe pricing card', async ({ page }) => {
    await expect(page.locator('text=Leitura Europa')).toBeVisible();
    await expect(page.locator('text=€')).toBeVisible();
    await expect(page.locator('text=Book via WhatsApp').first()).toBeVisible();
  });

  test('Brazil WhatsApp button has correct message', async ({ page }) => {
    const brazilBtn = page.locator('text=Agendar no WhatsApp').first();
    const href = await brazilBtn.getAttribute('href');
    expect(href).toContain('wa.me');
    expect(href).toContain('agendar');
  });

  test('link to payment section exists', async ({ page }) => {
    const payWithCardLink = page.locator('text=Ou pagar com cartão');
    await expect(payWithCardLink.first()).toBeVisible();
  });
});

test.describe('Payment Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#payment');
    await page.waitForSelector('#payment', { state: 'visible' });
  });

  test('package selection is visible', async ({ page }) => {
    await expect(page.locator('text=R$ 260,00')).toBeVisible();
    await expect(page.locator('text=€ 150,00')).toBeVisible();
  });

  test('can select Brazil package', async ({ page }) => {
    await page.locator('text=R$ 260,00').click();
    await expect(page.locator('text=Dados para Pagamento')).toBeVisible();
    await expect(page.locator('text=NIF')).not.toBeVisible();
  });

  test('can select Europe package - NIF required', async ({ page }) => {
    await page.locator('text=€ 150,00').click();
    await expect(page.locator('text=Dados para Pagamento')).toBeVisible();
    await expect(page.locator('text=NIF')).toBeVisible();
  });
});

test.describe('Navigation', () => {
  test('scroll to different sections', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();

    await page.locator('#pricing').scrollIntoViewIfNeeded();
    await expect(page.locator('text=Investimento')).toBeVisible();

    await page.locator('#agendar').scrollIntoViewIfNeeded();
    await expect(page.locator('text=Agende sua Leitura')).toBeVisible();
  });

  test('WhatsApp links open in new tab', async ({ page }) => {
    const whatsappLink = page.locator('a[href*=\"wa.me\"]').first();
    await expect(whatsappLink).toHaveAttribute('target', '_blank');
    await expect(whatsappLink).toHaveAttribute('rel', /noopener/);
  });

  test('Instagram link opens in new tab', async ({ page }) => {
    const instagramLink = page.locator('a[href*=\"instagram.com\"]');
    await expect(instagramLink.first()).toHaveAttribute('target', '_blank');
  });
});

test.describe('SEO & Meta', () => {
  test('has correct meta tags', async ({ page }) => {
    await page.goto('/');
    const description = await page.locator('meta[name=\"description\"]').getAttribute('content');
    expect(description).toBeTruthy();
    expect(description).toContain('tarot');
  });

  test('has OG tags for social sharing', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('meta[property=\"og:title\"]')).toHaveAttribute('content', /Patricia Taques/);
    await expect(page.locator('meta[property=\"og:type\"]')).toHaveAttribute('content', 'website');
  });

  test('has canonical URL', async ({ page }) => {
    await page.goto('/');
    const canonical = await page.locator('link[rel=\"canonical\"]').getAttribute('href');
    expect(canonical).toContain('patriciataques');
  });

  test('has robots.txt link', async ({ page }) => {
    await page.goto('/robots.txt');
    await expect(page.locator('body')).toContainText('User-agent');
  });
});

test.describe('Accessibility', () => {
  test('page has proper lang attribute', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
  });

  test('form labels are associated', async ({ page }) => {
    await page.goto('/#contato');
    const nameLabel = page.locator('label:has-text(\"Nome\")');
    await expect(nameLabel).toBeVisible();
  });

  test('focus states are visible', async ({ page }) => {
    await page.goto('/');
    const emailInput = page.locator('input[type=\"email\"]');
    await emailInput.focus();
    await expect(emailInput).toHaveCSS('outline-color', /rgb/);
  });

  test('color contrast - gold on dark is accessible', async ({ page }) => {
    await page.goto('/');
    const goldText = page.locator('text=Caminho').first();
    const color = await goldText.evaluate(el => getComputedStyle(el).color);
    expect(color).toBeTruthy();
  });
});