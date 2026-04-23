# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pages/index.spec.ts >> Navigation >> WhatsApp links open in new tab
- Location: tests/e2e/pages/index.spec.ts:188:3

# Error details

```
Error: expect(locator).toHaveAttribute(expected) failed

Locator: locator('a[href*="wa.me"]').first()
Expected: "_blank"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveAttribute" with timeout 5000ms
  - waiting for locator('a[href*="wa.me"]').first()

```

# Test source

```ts
  90  |     const submitBtn = page.locator('button[type=\"submit\"]');
  91  |     await expect(submitBtn).toBeDisabled();
  92  |     await expect(submitBtn).toContainText('Preencha todos os campos');
  93  |   });
  94  | 
  95  |   test('form validates name field', async ({ page }) => {
  96  |     const nameInput = page.locator('input[placeholder*=\"nome\"]');
  97  |     await nameInput.fill('123'); // Numbers only - invalid
  98  |     await nameInput.blur();
  99  |     await expect(page.locator('text=Nome deve conter apenas letras')).toBeVisible();
  100 |   });
  101 | 
  102 |   test('form validates email field', async ({ page }) => {
  103 |     const emailInput = page.locator('input[type=\"email\"]');
  104 |     await emailInput.fill('invalid-email');
  105 |     await emailInput.blur();
  106 |     await expect(page.locator('text=Email inválido')).toBeVisible();
  107 |   });
  108 | 
  109 |   test('form enables submit when valid', async ({ page }) => {
  110 |     await page.locator('input[placeholder*=\"nome\"]').fill('Maria Silva');
  111 |     await page.locator('input[type=\"email\"]').fill('maria@email.com');
  112 |     await page.locator('input[type=\"tel\"]').fill('+55 11 99999-9999');
  113 |     await page.locator('select').selectOption('BR');
  114 | 
  115 |     const submitBtn = page.locator('button[type=\"submit\"]');
  116 |     await expect(submitBtn).toBeEnabled();
  117 |     await expect(submitBtn).toContainText('Enviar via WhatsApp');
  118 |   });
  119 | });
  120 | 
  121 | test.describe('Pricing Section', () => {
  122 |   test.beforeEach(async ({ page }) => {
  123 |     await page.goto('/');
  124 |     await page.locator('#pricing').scrollIntoViewIfNeeded();
  125 |   });
  126 | 
  127 |   test('shows Brazil pricing card', async ({ page }) => {
  128 |     await expect(page.locator('text=Leitura Brasil')).toBeVisible();
  129 |     await expect(page.locator('text=R$')).toBeVisible();
  130 |     await expect(page.locator('text=Agendar no WhatsApp').first()).toBeVisible();
  131 |   });
  132 | 
  133 |   test('shows Europe pricing card', async ({ page }) => {
  134 |     await expect(page.locator('text=Leitura Europa')).toBeVisible();
  135 |     await expect(page.locator('text=€')).toBeVisible();
  136 |     await expect(page.locator('text=Book via WhatsApp').first()).toBeVisible();
  137 |   });
  138 | 
  139 |   test('Brazil WhatsApp button has correct message', async ({ page }) => {
  140 |     const brazilBtn = page.locator('text=Agendar no WhatsApp').first();
  141 |     const href = await brazilBtn.getAttribute('href');
  142 |     expect(href).toContain('wa.me');
  143 |     expect(href).toContain('agendar');
  144 |   });
  145 | 
  146 |   test('link to payment section exists', async ({ page }) => {
  147 |     const payWithCardLink = page.locator('text=Ou pagar com cartão');
  148 |     await expect(payWithCardLink.first()).toBeVisible();
  149 |   });
  150 | });
  151 | 
  152 | test.describe('Payment Section', () => {
  153 |   test.beforeEach(async ({ page }) => {
  154 |     await page.goto('/#payment');
  155 |     await page.waitForSelector('#payment', { state: 'visible' });
  156 |   });
  157 | 
  158 |   test('package selection is visible', async ({ page }) => {
  159 |     await expect(page.locator('text=R$ 260,00')).toBeVisible();
  160 |     await expect(page.locator('text=€ 150,00')).toBeVisible();
  161 |   });
  162 | 
  163 |   test('can select Brazil package', async ({ page }) => {
  164 |     await page.locator('text=R$ 260,00').click();
  165 |     await expect(page.locator('text=Dados para Pagamento')).toBeVisible();
  166 |     await expect(page.locator('text=NIF')).not.toBeVisible();
  167 |   });
  168 | 
  169 |   test('can select Europe package - NIF required', async ({ page }) => {
  170 |     await page.locator('text=€ 150,00').click();
  171 |     await expect(page.locator('text=Dados para Pagamento')).toBeVisible();
  172 |     await expect(page.locator('text=NIF')).toBeVisible();
  173 |   });
  174 | });
  175 | 
  176 | test.describe('Navigation', () => {
  177 |   test('scroll to different sections', async ({ page }) => {
  178 |     await page.goto('/');
  179 |     await expect(page.locator('h1')).toBeVisible();
  180 | 
  181 |     await page.locator('#pricing').scrollIntoViewIfNeeded();
  182 |     await expect(page.locator('text=Investimento')).toBeVisible();
  183 | 
  184 |     await page.locator('#agendar').scrollIntoViewIfNeeded();
  185 |     await expect(page.locator('text=Agende sua Leitura')).toBeVisible();
  186 |   });
  187 | 
  188 |   test('WhatsApp links open in new tab', async ({ page }) => {
  189 |     const whatsappLink = page.locator('a[href*=\"wa.me\"]').first();
> 190 |     await expect(whatsappLink).toHaveAttribute('target', '_blank');
      |                                ^ Error: expect(locator).toHaveAttribute(expected) failed
  191 |     await expect(whatsappLink).toHaveAttribute('rel', /noopener/);
  192 |   });
  193 | 
  194 |   test('Instagram link opens in new tab', async ({ page }) => {
  195 |     const instagramLink = page.locator('a[href*=\"instagram.com\"]');
  196 |     await expect(instagramLink.first()).toHaveAttribute('target', '_blank');
  197 |   });
  198 | });
  199 | 
  200 | test.describe('SEO & Meta', () => {
  201 |   test('has correct meta tags', async ({ page }) => {
  202 |     await page.goto('/');
  203 |     const description = await page.locator('meta[name=\"description\"]').getAttribute('content');
  204 |     expect(description).toBeTruthy();
  205 |     expect(description).toContain('tarot');
  206 |   });
  207 | 
  208 |   test('has OG tags for social sharing', async ({ page }) => {
  209 |     await page.goto('/');
  210 |     await expect(page.locator('meta[property=\"og:title\"]')).toHaveAttribute('content', /Patricia Taques/);
  211 |     await expect(page.locator('meta[property=\"og:type\"]')).toHaveAttribute('content', 'website');
  212 |   });
  213 | 
  214 |   test('has canonical URL', async ({ page }) => {
  215 |     await page.goto('/');
  216 |     const canonical = await page.locator('link[rel=\"canonical\"]').getAttribute('href');
  217 |     expect(canonical).toContain('patriciataques');
  218 |   });
  219 | 
  220 |   test('has robots.txt link', async ({ page }) => {
  221 |     await page.goto('/robots.txt');
  222 |     await expect(page.locator('body')).toContainText('User-agent');
  223 |   });
  224 | });
  225 | 
  226 | test.describe('Accessibility', () => {
  227 |   test('page has proper lang attribute', async ({ page }) => {
  228 |     await page.goto('/');
  229 |     await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
  230 |   });
  231 | 
  232 |   test('form labels are associated', async ({ page }) => {
  233 |     await page.goto('/#contato');
  234 |     const nameLabel = page.locator('label:has-text(\"Nome\")');
  235 |     await expect(nameLabel).toBeVisible();
  236 |   });
  237 | 
  238 |   test('focus states are visible', async ({ page }) => {
  239 |     await page.goto('/');
  240 |     const emailInput = page.locator('input[type=\"email\"]');
  241 |     await emailInput.focus();
  242 |     await expect(emailInput).toHaveCSS('outline-color', /rgb/);
  243 |   });
  244 | 
  245 |   test('color contrast - gold on dark is accessible', async ({ page }) => {
  246 |     await page.goto('/');
  247 |     const goldText = page.locator('text=Caminho').first();
  248 |     const color = await goldText.evaluate(el => getComputedStyle(el).color);
  249 |     expect(color).toBeTruthy();
  250 |   });
  251 | });
```