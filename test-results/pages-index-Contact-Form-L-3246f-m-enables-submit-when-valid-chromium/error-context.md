# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pages/index.spec.ts >> Contact Form (LeadForm) >> form enables submit when valid
- Location: tests/e2e/pages/index.spec.ts:109:3

# Error details

```
Error: locator.selectOption: Error: strict mode violation: locator('select') resolved to 2 elements:
    1) <select name="country" id="lead-country" aria-invalid="false" aria-required="true" class="w-full px-4 py-3 bg-background-card border-2 rounded-lg text-foreground transition-all focus:outline-none border-border focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20">…</select> aka getByLabel('País *')
    2) <select name="dev-toolbar-select">…</select> aka locator('select[name="dev-toolbar-select"]')

Call log:
  - waiting for locator('select')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e8]:
      - generic [ref=e10]: ✨ Leituras de Tarot Profundas
      - heading "Descubra seu Caminho através dos Arcanos" [level=1] [ref=e11]:
        - text: Descubra seu
        - text: Caminho através dos
        - text: Arcanos
      - paragraph [ref=e12]: Leituras personalizadas que revelam insights profundos e guiam suas decisões com sabedoria ancestral.
      - generic [ref=e13]:
        - link "Agendar via WhatsApp" [ref=e14] [cursor=pointer]:
          - /url: https://wa.me/351935917861?text=Ol%C3%A1%20Patricia%2C%20gostaria%20de%20agendar%20uma%20leitura%20de%20tarot.
          - img [ref=e15]
          - text: Agendar via WhatsApp
        - link "Ver Preços" [ref=e17] [cursor=pointer]:
          - /url: "#pricing"
      - generic [ref=e18]:
        - generic [ref=e19]:
          - generic [ref=e20]: "+300"
          - generic [ref=e21]: Leituras
        - generic [ref=e23]:
          - generic [ref=e24]: 2+
          - generic [ref=e25]: Anos
        - generic [ref=e27]:
          - generic [ref=e28]: 5⭐
          - generic [ref=e29]: Avaliação
      - link "Descubra mais" [ref=e31] [cursor=pointer]:
        - /url: "#agendar"
        - generic [ref=e32]: Descubra mais
        - img [ref=e33]
    - generic [ref=e37]:
      - heading "Como Funciona" [level=2] [ref=e38]
      - paragraph [ref=e39]: Três passos simples para iniciar sua jornada de autoconhecimento.
      - generic [ref=e40]:
        - generic [ref=e41]:
          - generic [ref=e42]: "1"
          - generic [ref=e43]:
            - heading "Entre em Contato" [level=3] [ref=e44]
            - paragraph [ref=e45]: Use o WhatsApp para iniciar sua jornada espiritual.
          - img [ref=e47]
        - generic [ref=e49]:
          - generic [ref=e50]: "2"
          - generic [ref=e51]:
            - heading "Escolha seu Tipo" [level=3] [ref=e52]
            - paragraph [ref=e53]: "Selecione a leitura ideal para você: presencial ou por áudio/video."
          - img [ref=e55]
        - generic [ref=e57]:
          - generic [ref=e58]: "3"
          - generic [ref=e59]:
            - heading "Receba sua Leitura" [level=3] [ref=e60]
            - paragraph [ref=e61]: Mergulhe nas revelações dos cards e transforme sua perspectiva.
    - generic [ref=e63]:
      - heading "O que Inclui" [level=2] [ref=e64]
      - paragraph [ref=e65]: Cada leitura é uma experiência única, pensada para guiar sua jornada espiritual.
      - generic [ref=e66]:
        - generic [ref=e67]:
          - generic [ref=e68]: 📸
          - heading "Fotos" [level=3] [ref=e69]
          - paragraph [ref=e70]: Envio de fotos detalhadas das cartas tiradas durante sua sessão
        - generic [ref=e71]:
          - generic [ref=e72]: 🎧
          - heading "Áudio" [level=3] [ref=e73]
          - paragraph [ref=e74]: Gravação em áudio de toda a leitura para você ouvir depois
        - generic [ref=e75]:
          - generic [ref=e76]: 🧭
          - heading "Orientação" [level=3] [ref=e77]
          - paragraph [ref=e78]: Direcionamento claro e inspirações práticas para sua jornada
        - generic [ref=e79]:
          - generic [ref=e80]: 📦
          - heading "Entrega" [level=3] [ref=e81]
          - paragraph [ref=e82]: Material completo escrito com análise detalhada pós-sessão
    - generic [ref=e84]:
      - heading "O que dizem sobre Patricia" [level=2] [ref=e85]
      - paragraph [ref=e86]: Histórias reais de quem transformou sua perspectiva com os cards.
      - generic [ref=e87]:
        - generic [ref=e88]:
          - generic [ref=e89]:
            - generic [ref=e90]: ★
            - generic [ref=e91]: ★
            - generic [ref=e92]: ★
            - generic [ref=e93]: ★
            - generic [ref=e94]: ★
          - blockquote [ref=e95]: “Patricia me ajudou a enxergar claridad sobre uma decisão importante. Sua leitura foi precisa e tocou exatamente o que eu precisava ouvir.”
          - generic [ref=e96]:
            - generic [ref=e97]: Marina S.
            - generic [ref=e98]: São Paulo, Brasil
            - generic [ref=e99]: ✓ Clareza para decisão de carreira
        - generic [ref=e100]:
          - generic [ref=e101]:
            - generic [ref=e102]: ★
            - generic [ref=e103]: ★
            - generic [ref=e104]: ★
            - generic [ref=e105]: ★
            - generic [ref=e106]: ★
          - blockquote [ref=e107]: “Incrível como ela captura a energia das cartas. Senti que estava sendo ouvida e orientada por alguém que realmente se importa.”
          - generic [ref=e108]:
            - generic [ref=e109]: Isabella M.
            - generic [ref=e110]: Lisboa, Portugal
            - generic [ref=e111]: ✓ Paz interior e direcionamento
        - generic [ref=e112]:
          - generic [ref=e113]:
            - generic [ref=e114]: ★
            - generic [ref=e115]: ★
            - generic [ref=e116]: ★
            - generic [ref=e117]: ★
            - generic [ref=e118]: ★
          - blockquote [ref=e119]: “As fotos e o áudio da sessão foram essenciais. Volto a ouvir sempre que preciso de reflexão. Profissa e dedicada!”
          - generic [ref=e120]:
            - generic [ref=e121]: Carlos R.
            - generic [ref=e122]: Berlim, Alemanha
            - generic [ref=e123]: ✓ Decisão sobre mudança de país
    - generic [ref=e125]:
      - heading "Investimento na sua Jornada" [level=2] [ref=e126]
      - paragraph [ref=e127]: Escolha a opção que se encaixa melhor na sua realidade.
      - generic [ref=e128]:
        - generic [ref=e129]:
          - generic [ref=e130]: Brasil
          - generic [ref=e131]: Leitura completa para
          - generic [ref=e132]: R$ 260,00
          - list [ref=e133]:
            - listitem [ref=e134]:
              - generic [ref=e135]: ✓
              - text: Sessão via áudio ou video
            - listitem [ref=e136]:
              - generic [ref=e137]: ✓
              - text: Fotos das cartas tiradas
            - listitem [ref=e138]:
              - generic [ref=e139]: ✓
              - text: Gravação em áudio
            - listitem [ref=e140]:
              - generic [ref=e141]: ✓
              - text: Análise escrita detalhada
            - listitem [ref=e142]:
              - generic [ref=e143]: ✓
              - text: Suporte via WhatsApp
          - link "Agendar no WhatsApp" [ref=e144] [cursor=pointer]:
            - /url: https://wa.me/351935917861?text=Ol%C3%A1%20Patricia!%20Gostaria%20de%20agendar%20uma%20leitura%20de%20tarot%20para%20o%20Brasil.
            - img [ref=e145]
            - text: Agendar no WhatsApp
          - link "Ou pagar com cartão →" [ref=e147] [cursor=pointer]:
            - /url: "#payment"
        - generic [ref=e148]:
          - generic [ref=e149]: Europa/Global
          - generic [ref=e150]: Complete reading for
          - generic [ref=e151]: 150,00 €
          - list [ref=e152]:
            - listitem [ref=e153]:
              - generic [ref=e154]: ✓
              - text: Session via audio or video
            - listitem [ref=e155]:
              - generic [ref=e156]: ✓
              - text: Photos of cards taken
            - listitem [ref=e157]:
              - generic [ref=e158]: ✓
              - text: Audio recording
            - listitem [ref=e159]:
              - generic [ref=e160]: ✓
              - text: Detailed written analysis
            - listitem [ref=e161]:
              - generic [ref=e162]: ✓
              - text: WhatsApp support
          - link "Book via WhatsApp" [ref=e163] [cursor=pointer]:
            - /url: https://wa.me/351935917861?text=Hello%20Patricia!%20I%20would%20like%20to%20book%20a%20tarot%20reading%20session%20from%20Europe.
            - img [ref=e164]
            - text: Book via WhatsApp
          - link "Or pay with card →" [ref=e166] [cursor=pointer]:
            - /url: "#payment"
      - paragraph [ref=e167]: Pagamento via transferência bancária, PIX ou link de pagamento.
    - generic [ref=e169]:
      - heading "Pagamento Seguro" [level=2] [ref=e170]
      - paragraph [ref=e171]: Reserve sua sessão com pagamento seguro via Stripe. Aceitamos cartões de crédito e débito.
      - generic [ref=e174]:
        - group "Selecione um pacote de leitura" [ref=e175]:
          - generic [ref=e176]: Selecione um pacote de leitura
          - generic [ref=e177]:
            - radio "R$ 260,00 Leitura Brasil Sessão completa + fotos + áudio + análise escrita" [ref=e178]:
              - generic [ref=e179]: R$ 260,00
              - generic [ref=e180]: Leitura Brasil
              - generic [ref=e181]: Sessão completa + fotos + áudio + análise escrita
            - radio "€ 150,00 Leitura Europa Complete session + photos + audio + written analysis" [ref=e182]:
              - generic [ref=e183]: € 150,00
              - generic [ref=e184]: Leitura Europa
              - generic [ref=e185]: Complete session + photos + audio + written analysis
        - generic [ref=e186]:
          - paragraph [ref=e187]: Prefere pagar via transferência?
          - link "Entre em contato para outras formas de pagamento" [ref=e188] [cursor=pointer]:
            - /url: "#contato"
      - generic [ref=e189]:
        - generic [ref=e190]:
          - img [ref=e191]
          - generic [ref=e193]: SSL Seguro
        - generic [ref=e194]:
          - img [ref=e195]
          - generic [ref=e197]: Stripe Protegido
        - generic [ref=e198]:
          - img [ref=e199]
          - generic [ref=e201]: Cartões aceitos
    - generic [ref=e203]:
      - heading "Entre em Contato" [level=2] [ref=e204]
      - paragraph [ref=e205]: Preencha o formulário abaixo e sua mensagem será aberta diretamente no WhatsApp.
      - generic [ref=e206]:
        - form "Formulário de contato" [ref=e209]:
          - generic [ref=e210]:
            - generic [ref=e211]: Nome *
            - textbox "Nome *" [ref=e212]:
              - /placeholder: Seu nome completo
              - text: Maria Silva
            - alert [ref=e213]: Nome deve conter apenas letras
          - generic [ref=e214]:
            - generic [ref=e215]: Email *
            - textbox "Email *" [ref=e216]:
              - /placeholder: seu@email.com
              - text: maria@email.com
          - generic [ref=e217]:
            - generic [ref=e218]: Telefone/WhatsApp *
            - textbox "Telefone/WhatsApp *" [active] [ref=e219]:
              - /placeholder: +55 11 99999-9999
              - text: +55 11 99999-9999
            - alert [ref=e220]: Telefone inválido
          - generic [ref=e221]:
            - generic [ref=e222]: País *
            - combobox "País *" [ref=e223]:
              - option "Selecione seu país" [selected]
              - option "Brasil 🇧🇷"
              - option "Portugal 🇵🇹"
              - option "Espanha 🇪🇸"
              - option "Outro"
          - generic [ref=e224]:
            - generic [ref=e225]: Mensagem (opcional)
            - textbox "Mensagem (opcional)" [ref=e226]:
              - /placeholder: Como posso te ajudar? Qual tema te interessa?
          - button "Preencha todos os campos" [disabled] [ref=e227]:
            - img [ref=e228]
            - text: Preencha todos os campos
          - paragraph [ref=e230]: Seus dados estão protegidos e não serão compartilhados.
        - generic [ref=e231]:
          - generic [ref=e232]:
            - img [ref=e233]
            - generic [ref=e235]: Resposta em até 24h
          - generic [ref=e236]:
            - img [ref=e237]
            - generic [ref=e239]: Dados protegidos
          - generic [ref=e240]:
            - img [ref=e241]
            - generic [ref=e243]: Atendimento pessoal
  - contentinfo [ref=e244]:
    - generic [ref=e245]:
      - generic [ref=e246]:
        - generic [ref=e247]:
          - heading "Patricia Taques" [level=3] [ref=e248]
          - paragraph [ref=e249]: Tarot & Espiritualidade
        - generic [ref=e250]:
          - link "@patriciataques" [ref=e251] [cursor=pointer]:
            - /url: https://instagram.com/patriciataques
            - img [ref=e252]
            - generic [ref=e254]: "@patriciataques"
          - link "WhatsApp" [ref=e255] [cursor=pointer]:
            - /url: https://wa.me/351935917861?text=Ol%C3%A1%20Patricia%2C%20gostaria%20de%20agendar%20uma%20leitura%20de%20tarot.
            - img [ref=e256]
            - text: WhatsApp
      - paragraph [ref=e259]: © 2024 Patricia Taques. Todos os direitos reservados.
  - generic [ref=e262]:
    - button "Menu" [ref=e263]:
      - img [ref=e265]
      - generic: Menu
    - button "Inspect" [ref=e269]:
      - img [ref=e271]
      - generic: Inspect
    - button "Audit" [ref=e273]:
      - img [ref=e275]
      - generic: Audit
    - button "Settings" [ref=e278]:
      - img [ref=e280]
      - generic: Settings
```

# Test source

```ts
  13  |     await expect(page.locator('h1')).toBeVisible();
  14  |     await expect(page.locator('h1')).toContainText('Descubra');
  15  |     await expect(page.locator('text=Caminho')).toBeVisible();
  16  |   });
  17  | 
  18  |   test('trust metrics are displayed', async ({ page }) => {
  19  |     await expect(page.locator('text=+300')).toBeVisible();
  20  |     await expect(page.locator('text=Anos')).toBeVisible();
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
> 113 |     await page.locator('select').selectOption('BR');
      |                                  ^ Error: locator.selectOption: Error: strict mode violation: locator('select') resolved to 2 elements:
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
  190 |     await expect(whatsappLink).toHaveAttribute('target', '_blank');
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
```