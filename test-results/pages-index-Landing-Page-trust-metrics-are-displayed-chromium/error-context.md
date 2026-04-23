# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pages/index.spec.ts >> Landing Page >> trust metrics are displayed
- Location: tests/e2e/pages/index.spec.ts:18:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Anos')
Expected: visible
Error: strict mode violation: locator('text=Anos') resolved to 2 elements:
    1) <span class="text-foreground" data-astro-source-loc="27:37" data-astro-source-file="/home/zavasdki/patriciataques-tarot-astro/src/components/sections/Hero.astro">Arcanos</span> aka getByText('Arcanos')
    2) <div data-astro-source-loc="51:60" class="text-sm uppercase tracking-wider mt-1" data-astro-source-file="/home/zavasdki/patriciataques-tarot-astro/src/components/sections/Hero.astro">Anos</div> aka getByText('Anos', { exact: true })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=Anos')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]: ✨ Leituras de Tarot Profundas
      - heading "Descubra seu Caminho através dos Arcanos" [level=1] [ref=e6]:
        - text: Descubra seu
        - text: Caminho através dos
        - text: Arcanos
      - paragraph [ref=e7]: Leituras personalizadas que revelam insights profundos e guiam suas decisões com sabedoria ancestral.
      - generic [ref=e8]:
        - link "Agendar via WhatsApp" [ref=e9] [cursor=pointer]:
          - /url: https://wa.me/351935917861?text=Ol%C3%A1%20Patricia%2C%20gostaria%20de%20agendar%20uma%20leitura%20de%20tarot.
          - img [ref=e10]
          - text: Agendar via WhatsApp
        - link "Ver Preços" [ref=e12] [cursor=pointer]:
          - /url: "#pricing"
      - generic [ref=e13]:
        - generic [ref=e14]:
          - generic [ref=e15]: "+300"
          - generic [ref=e16]: Leituras
        - generic [ref=e17]:
          - generic [ref=e18]: 2+
          - generic [ref=e19]: Anos
        - generic [ref=e20]:
          - generic [ref=e21]: 5⭐
          - generic [ref=e22]: Avaliação
      - link "Descubra mais" [ref=e24] [cursor=pointer]:
        - /url: "#agendar"
        - text: Descubra mais
        - img [ref=e25]
    - generic [ref=e28]:
      - heading "Como Funciona" [level=2] [ref=e29]
      - paragraph [ref=e30]: Três passos simples para iniciar sua jornada de autoconhecimento.
      - generic [ref=e31]:
        - generic [ref=e32]:
          - generic [ref=e33]: "1"
          - generic [ref=e34]:
            - heading "Entre em Contato" [level=3] [ref=e35]
            - paragraph [ref=e36]: Use o WhatsApp para iniciar sua jornada espiritual.
          - img [ref=e38]
        - generic [ref=e40]:
          - generic [ref=e41]: "2"
          - generic [ref=e42]:
            - heading "Escolha seu Tipo" [level=3] [ref=e43]
            - paragraph [ref=e44]: "Selecione a leitura ideal para você: presencial ou por áudio/video."
          - img [ref=e46]
        - generic [ref=e48]:
          - generic [ref=e49]: "3"
          - generic [ref=e50]:
            - heading "Receba sua Leitura" [level=3] [ref=e51]
            - paragraph [ref=e52]: Mergulhe nas revelações dos cards e transforme sua perspectiva.
    - generic [ref=e54]:
      - heading "O que Inclui" [level=2] [ref=e55]
      - paragraph [ref=e56]: Cada leitura é uma experiência única, pensada para guiar sua jornada espiritual.
      - generic [ref=e57]:
        - generic [ref=e58]:
          - generic [ref=e59]: 📸
          - heading "Fotos" [level=3] [ref=e60]
          - paragraph [ref=e61]: Envio de fotos detalhadas das cartas tiradas durante sua sessão
        - generic [ref=e62]:
          - generic [ref=e63]: 🎧
          - heading "Áudio" [level=3] [ref=e64]
          - paragraph [ref=e65]: Gravação em áudio de toda a leitura para você ouvir depois
        - generic [ref=e66]:
          - generic [ref=e67]: 🧭
          - heading "Orientação" [level=3] [ref=e68]
          - paragraph [ref=e69]: Direcionamento claro e inspirações práticas para sua jornada
        - generic [ref=e70]:
          - generic [ref=e71]: 📦
          - heading "Entrega" [level=3] [ref=e72]
          - paragraph [ref=e73]: Material completo escrito com análise detalhada pós-sessão
    - generic [ref=e75]:
      - heading "O que dizem sobre Patricia" [level=2] [ref=e76]
      - paragraph [ref=e77]: Histórias reais de quem transformou sua perspectiva com os cards.
      - generic [ref=e78]:
        - generic [ref=e79]:
          - generic [ref=e80]: ★★★★★
          - blockquote [ref=e81]: “Patricia me ajudou a enxergar claridad sobre uma decisão importante. Sua leitura foi precisa e tocou exatamente o que eu precisava ouvir.”
          - generic [ref=e82]:
            - generic [ref=e83]: Marina S.
            - generic [ref=e84]: São Paulo, Brasil
            - text: ✓ Clareza para decisão de carreira
        - generic [ref=e85]:
          - generic [ref=e86]: ★★★★★
          - blockquote [ref=e87]: “Incrível como ela captura a energia das cartas. Senti que estava sendo ouvida e orientada por alguém que realmente se importa.”
          - generic [ref=e88]:
            - generic [ref=e89]: Isabella M.
            - generic [ref=e90]: Lisboa, Portugal
            - text: ✓ Paz interior e direcionamento
        - generic [ref=e91]:
          - generic [ref=e92]: ★★★★★
          - blockquote [ref=e93]: “As fotos e o áudio da sessão foram essenciais. Volto a ouvir sempre que preciso de reflexão. Profissa e dedicada!”
          - generic [ref=e94]:
            - generic [ref=e95]: Carlos R.
            - generic [ref=e96]: Berlim, Alemanha
            - text: ✓ Decisão sobre mudança de país
    - generic [ref=e98]:
      - heading "Investimento na sua Jornada" [level=2] [ref=e99]
      - paragraph [ref=e100]: Escolha a opção que se encaixa melhor na sua realidade.
      - generic [ref=e101]:
        - generic [ref=e102]:
          - generic [ref=e103]: Brasil
          - generic [ref=e104]: Leitura completa para
          - generic [ref=e105]: R$ 260,00
          - list [ref=e106]:
            - listitem [ref=e107]: ✓ Sessão via áudio ou video
            - listitem [ref=e108]: ✓ Fotos das cartas tiradas
            - listitem [ref=e109]: ✓ Gravação em áudio
            - listitem [ref=e110]: ✓ Análise escrita detalhada
            - listitem [ref=e111]: ✓ Suporte via WhatsApp
          - link "Agendar no WhatsApp" [ref=e112] [cursor=pointer]:
            - /url: https://wa.me/351935917861?text=Ol%C3%A1%20Patricia!%20Gostaria%20de%20agendar%20uma%20leitura%20de%20tarot%20para%20o%20Brasil.
            - img [ref=e113]
            - text: Agendar no WhatsApp
          - link "Ou pagar com cartão →" [ref=e115] [cursor=pointer]:
            - /url: "#payment"
        - generic [ref=e116]:
          - generic [ref=e117]: Europa/Global
          - generic [ref=e118]: Complete reading for
          - generic [ref=e119]: 150,00 €
          - list [ref=e120]:
            - listitem [ref=e121]: ✓ Session via audio or video
            - listitem [ref=e122]: ✓ Photos of cards taken
            - listitem [ref=e123]: ✓ Audio recording
            - listitem [ref=e124]: ✓ Detailed written analysis
            - listitem [ref=e125]: ✓ WhatsApp support
          - link "Book via WhatsApp" [ref=e126] [cursor=pointer]:
            - /url: https://wa.me/351935917861?text=Hello%20Patricia!%20I%20would%20like%20to%20book%20a%20tarot%20reading%20session%20from%20Europe.
            - img [ref=e127]
            - text: Book via WhatsApp
          - link "Or pay with card →" [ref=e129] [cursor=pointer]:
            - /url: "#payment"
      - paragraph [ref=e130]: Pagamento via transferência bancária, PIX ou link de pagamento.
    - generic [ref=e132]:
      - heading "Pagamento Seguro" [level=2] [ref=e133]
      - paragraph [ref=e134]: Reserve sua sessão com pagamento seguro via Stripe. Aceitamos cartões de crédito e débito.
      - generic [ref=e137]:
        - generic [ref=e138]:
          - button "R$ 260,00 Leitura Brasil Sessão completa + fotos + áudio + análise escrita" [ref=e139]:
            - generic [ref=e140]: R$ 260,00
            - generic [ref=e141]: Leitura Brasil
            - generic [ref=e142]: Sessão completa + fotos + áudio + análise escrita
          - button "€ 150,00 Leitura Europa Complete session + photos + audio + written analysis" [ref=e143]:
            - generic [ref=e144]: € 150,00
            - generic [ref=e145]: Leitura Europa
            - generic [ref=e146]: Complete session + photos + audio + written analysis
        - generic [ref=e147]:
          - paragraph [ref=e148]: Prefere pagar via transferência?
          - link "Entre em contato para outras formas de pagamento" [ref=e149] [cursor=pointer]:
            - /url: "#contato"
      - generic [ref=e150]:
        - generic [ref=e151]:
          - img [ref=e152]
          - text: SSL Seguro
        - generic [ref=e154]:
          - img [ref=e155]
          - text: Stripe Protegido
        - generic [ref=e157]:
          - img [ref=e158]
          - text: Cartões aceitos
    - generic [ref=e161]:
      - heading "Entre em Contato" [level=2] [ref=e162]
      - paragraph [ref=e163]: Preencha o formulário abaixo e sua mensagem será aberta diretamente no WhatsApp.
      - generic [ref=e164]:
        - generic [ref=e167]:
          - generic [ref=e168]:
            - text: Nome *
            - textbox "Seu nome completo" [ref=e169]
          - generic [ref=e170]:
            - text: Email *
            - textbox "seu@email.com" [ref=e171]
          - generic [ref=e172]:
            - text: Telefone/WhatsApp *
            - textbox "+55 11 99999-9999" [ref=e173]
          - generic [ref=e174]:
            - text: País *
            - combobox [ref=e175]:
              - option "Selecione seu país" [selected]
              - option "Brasil 🇧🇷"
              - option "Portugal 🇵🇹"
              - option "Espanha 🇪🇸"
              - option "Outro"
          - generic [ref=e176]:
            - text: Mensagem (opcional)
            - textbox "Como posso te ajudar? Qual tema te interessa?" [ref=e177]
          - button "Preencha todos os campos" [disabled] [ref=e178]:
            - img [ref=e179]
            - text: Preencha todos os campos
          - paragraph [ref=e181]: Seus dados estão protegidos e não serão compartilhados.
        - generic [ref=e182]:
          - generic [ref=e183]:
            - img [ref=e184]
            - text: Resposta em até 24h
          - generic [ref=e186]:
            - img [ref=e187]
            - text: Dados protegidos
          - generic [ref=e189]:
            - img [ref=e190]
            - text: Atendimento pessoal
  - contentinfo [ref=e192]:
    - generic [ref=e193]:
      - generic [ref=e194]:
        - generic [ref=e195]:
          - heading "Patricia Taques" [level=3] [ref=e196]
          - paragraph [ref=e197]: Tarot & Espiritualidade
        - generic [ref=e198]:
          - link "@patriciataques" [ref=e199] [cursor=pointer]:
            - /url: https://instagram.com/patriciataques
            - img [ref=e200]
            - text: "@patriciataques"
          - link "WhatsApp" [ref=e202] [cursor=pointer]:
            - /url: https://wa.me/351935917861?text=Ol%C3%A1%20Patricia%2C%20gostaria%20de%20agendar%20uma%20leitura%20de%20tarot.
            - img [ref=e203]
            - text: WhatsApp
      - paragraph [ref=e206]: © 2024 Patricia Taques. Todos os direitos reservados.
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('Landing Page', () => {
  4   |   test.beforeEach(async ({ page }) => {
  5   |     await page.goto('/');
  6   |   });
  7   | 
  8   |   test('page loads without errors', async ({ page }) => {
  9   |     await expect(page).toHaveTitle(/Patricia Taques/);
  10  |   });
  11  | 
  12  |   test('hero section is visible with animations', async ({ page }) => {
  13  |     await expect(page.locator('h1')).toBeVisible();
  14  |     await expect(page.locator('h1')).toContainText('Descubra');
  15  |     await expect(page.locator('text=Caminho')).toBeVisible();
  16  |   });
  17  | 
  18  |   test('trust metrics are displayed', async ({ page }) => {
  19  |     await expect(page.locator('text=+300')).toBeVisible();
> 20  |     await expect(page.locator('text=Anos')).toBeVisible();
      |                                             ^ Error: expect(locator).toBeVisible() failed
  21  |   });
  22  | 
  23  |   test('process section has 3 steps', async ({ page }) => {
  24  |     await expect(page.locator('text=Como Funciona')).toBeVisible();
  25  |     await expect(page.locator('text=Entre em Contato').first()).toBeVisible();
  26  |     await expect(page.locator('text=Escolha seu Tipo').first()).toBeVisible();
  27  |     await expect(page.locator('text=Receba sua Leitura').first()).toBeVisible();
  28  |   });
  29  | 
  30  |   test('benefits section shows 4 cards', async ({ page }) => {
  31  |     await expect(page.locator('text=O que Inclui')).toBeVisible();
  32  |     await expect(page.locator('section').filter({ hasText: '📸' })).toBeVisible();
  33  |     await expect(page.locator('section').filter({ hasText: '🎧' })).toBeVisible();
  34  |   });
  35  | 
  36  |   test('testimonials section displays 3 reviews', async ({ page }) => {
  37  |     await expect(page.locator('text=Depoimentos')).toBeVisible();
  38  |     const stars = page.locator('text=★★★★★').first();
  39  |     await expect(stars).toBeVisible();
  40  |   });
  41  | 
  42  |   test('pricing section shows both currencies', async ({ page }) => {
  43  |     await page.locator('#pricing').scrollIntoViewIfNeeded();
  44  |     await expect(page.locator('text=Brasil')).toBeVisible();
  45  |     await expect(page.locator('text=260')).toBeVisible();
  46  |   });
  47  | 
  48  |   test('whatsapp button has correct href', async ({ page }) => {
  49  |     const whatsappBtns = page.locator('a[href*=\"wa.me\"]');
  50  |     await expect(whatsappBtns.first()).toBeVisible();
  51  |     const href = await whatsappBtns.first().getAttribute('href');
  52  |     expect(href).toContain('wa.me');
  53  |   });
  54  | 
  55  |   test('scroll to contact section', async ({ page }) => {
  56  |     await page.locator('#contato').scrollIntoViewIfNeeded();
  57  |     await expect(page.locator('text=Entre em Contato').last()).toBeVisible();
  58  |   });
  59  | 
  60  |   test('footer displays correctly', async ({ page }) => {
  61  |     await expect(page.locator('text=Patricia Taques').first()).toBeVisible();
  62  |     await expect(page.locator('text=Tarot & Espiritualidade')).toBeVisible();
  63  |   });
  64  | 
  65  |   test('mobile responsive - hero visible', async ({ page }) => {
  66  |     await page.setViewportSize({ width: 375, height: 667 });
  67  |     await expect(page.locator('h1')).toBeVisible();
  68  |   });
  69  | 
  70  |   test('tablet responsive - hero visible', async ({ page }) => {
  71  |     await page.setViewportSize({ width: 768, height: 1024 });
  72  |     await expect(page.locator('h1')).toBeVisible();
  73  |   });
  74  | });
  75  | 
  76  | test.describe('Contact Form (LeadForm)', () => {
  77  |   test.beforeEach(async ({ page }) => {
  78  |     await page.goto('/#contato');
  79  |     await page.waitForSelector('#contato', { state: 'visible' });
  80  |   });
  81  | 
  82  |   test('form fields are present', async ({ page }) => {
  83  |     await expect(page.locator('input[placeholder*=\"nome\"]')).toBeVisible();
  84  |     await expect(page.locator('input[type=\"email\"]')).toBeVisible();
  85  |     await expect(page.locator('input[type=\"tel\"]')).toBeVisible();
  86  |     await expect(page.locator('select')).toBeVisible();
  87  |   });
  88  | 
  89  |   test('whatsapp button disabled initially', async ({ page }) => {
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
```