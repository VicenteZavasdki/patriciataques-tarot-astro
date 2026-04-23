# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pages/index.spec.ts >> Payment Section >> package selection is visible
- Location: tests/e2e/pages/index.spec.ts:158:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=R$ 260,00')
Expected: visible
Error: strict mode violation: locator('text=R$ 260,00') resolved to 2 elements:
    1) <div class="text-4xl font-bold text-gold-400 mb-6 font-[family-name:var(--font-display)]"> R$ 260,00 </div> aka locator('#pricing').getByText('R$')
    2) <div class="text-2xl font-bold text-gold-400 font-[family-name:var(--font-display)] mb-1">R$ 260,00</div> aka getByRole('radio', { name: 'R$ 260,00 Leitura Brasil Sess' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=R$ 260,00')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
      - link "Descubra mais" [ref=e27] [cursor=pointer]:
        - /url: "#agendar"
        - generic [ref=e28]: Descubra mais
        - img [ref=e29]
    - generic [ref=e33]:
      - heading "Como Funciona" [level=2] [ref=e34]
      - paragraph [ref=e35]: Três passos simples para iniciar sua jornada de autoconhecimento.
      - generic [ref=e36]:
        - generic [ref=e37]:
          - generic [ref=e38]: "1"
          - generic [ref=e39]:
            - heading "Entre em Contato" [level=3] [ref=e40]
            - paragraph [ref=e41]: Use o WhatsApp para iniciar sua jornada espiritual.
        - generic [ref=e42]:
          - generic [ref=e43]: "2"
          - generic [ref=e44]:
            - heading "Escolha seu Tipo" [level=3] [ref=e45]
            - paragraph [ref=e46]: "Selecione a leitura ideal para você: presencial ou por áudio/video."
        - generic [ref=e47]:
          - generic [ref=e48]: "3"
          - generic [ref=e49]:
            - heading "Receba sua Leitura" [level=3] [ref=e50]
            - paragraph [ref=e51]: Mergulhe nas revelações dos cards e transforme sua perspectiva.
    - generic [ref=e53]:
      - heading "O que Inclui" [level=2] [ref=e54]
      - paragraph [ref=e55]: Cada leitura é uma experiência única, pensada para guiar sua jornada espiritual.
      - generic [ref=e56]:
        - generic [ref=e57]:
          - generic [ref=e58]: 📸
          - heading "Fotos" [level=3] [ref=e59]
          - paragraph [ref=e60]: Envio de fotos detalhadas das cartas tiradas durante sua sessão
        - generic [ref=e61]:
          - generic [ref=e62]: 🎧
          - heading "Áudio" [level=3] [ref=e63]
          - paragraph [ref=e64]: Gravação em áudio de toda a leitura para você ouvir depois
        - generic [ref=e65]:
          - generic [ref=e66]: 🧭
          - heading "Orientação" [level=3] [ref=e67]
          - paragraph [ref=e68]: Direcionamento claro e inspirações práticas para sua jornada
        - generic [ref=e69]:
          - generic [ref=e70]: 📦
          - heading "Entrega" [level=3] [ref=e71]
          - paragraph [ref=e72]: Material completo escrito com análise detalhada pós-sessão
    - generic [ref=e74]:
      - heading "O que dizem sobre Patricia" [level=2] [ref=e75]
      - paragraph [ref=e76]: Histórias reais de quem transformou sua perspectiva com os cards.
      - generic [ref=e77]:
        - generic [ref=e78]:
          - generic [ref=e79]:
            - generic [ref=e80]: ★
            - generic [ref=e81]: ★
            - generic [ref=e82]: ★
            - generic [ref=e83]: ★
            - generic [ref=e84]: ★
          - blockquote [ref=e85]: “Patricia me ajudou a enxergar claridad sobre uma decisão importante. Sua leitura foi precisa e tocou exatamente o que eu precisava ouvir.”
          - generic [ref=e86]:
            - generic [ref=e87]: Marina S.
            - generic [ref=e88]: São Paulo, Brasil
            - generic [ref=e89]: ✓ Clareza para decisão de carreira
        - generic [ref=e90]:
          - generic [ref=e91]:
            - generic [ref=e92]: ★
            - generic [ref=e93]: ★
            - generic [ref=e94]: ★
            - generic [ref=e95]: ★
            - generic [ref=e96]: ★
          - blockquote [ref=e97]: “Incrível como ela captura a energia das cartas. Senti que estava sendo ouvida e orientada por alguém que realmente se importa.”
          - generic [ref=e98]:
            - generic [ref=e99]: Isabella M.
            - generic [ref=e100]: Lisboa, Portugal
            - generic [ref=e101]: ✓ Paz interior e direcionamento
        - generic [ref=e102]:
          - generic [ref=e103]:
            - generic [ref=e104]: ★
            - generic [ref=e105]: ★
            - generic [ref=e106]: ★
            - generic [ref=e107]: ★
            - generic [ref=e108]: ★
          - blockquote [ref=e109]: “As fotos e o áudio da sessão foram essenciais. Volto a ouvir sempre que preciso de reflexão. Profissa e dedicada!”
          - generic [ref=e110]:
            - generic [ref=e111]: Carlos R.
            - generic [ref=e112]: Berlim, Alemanha
            - generic [ref=e113]: ✓ Decisão sobre mudança de país
    - generic [ref=e115]:
      - heading "Investimento na sua Jornada" [level=2] [ref=e116]
      - paragraph [ref=e117]: Escolha a opção que se encaixa melhor na sua realidade.
      - generic [ref=e118]:
        - generic [ref=e119]:
          - generic [ref=e120]: Brasil
          - generic [ref=e121]: Leitura completa para
          - generic [ref=e122]: R$ 260,00
          - list [ref=e123]:
            - listitem [ref=e124]:
              - generic [ref=e125]: ✓
              - text: Sessão via áudio ou video
            - listitem [ref=e126]:
              - generic [ref=e127]: ✓
              - text: Fotos das cartas tiradas
            - listitem [ref=e128]:
              - generic [ref=e129]: ✓
              - text: Gravação em áudio
            - listitem [ref=e130]:
              - generic [ref=e131]: ✓
              - text: Análise escrita detalhada
            - listitem [ref=e132]:
              - generic [ref=e133]: ✓
              - text: Suporte via WhatsApp
          - link "Agendar no WhatsApp" [ref=e134] [cursor=pointer]:
            - /url: https://wa.me/351935917861?text=Ol%C3%A1%20Patricia!%20Gostaria%20de%20agendar%20uma%20leitura%20de%20tarot%20para%20o%20Brasil.
            - img [ref=e135]
            - text: Agendar no WhatsApp
          - link "Ou pagar com cartão →" [ref=e137] [cursor=pointer]:
            - /url: "#payment"
        - generic [ref=e138]:
          - generic [ref=e139]: Europa/Global
          - generic [ref=e140]: Complete reading for
          - generic [ref=e141]: 150,00 €
          - list [ref=e142]:
            - listitem [ref=e143]:
              - generic [ref=e144]: ✓
              - text: Session via audio or video
            - listitem [ref=e145]:
              - generic [ref=e146]: ✓
              - text: Photos of cards taken
            - listitem [ref=e147]:
              - generic [ref=e148]: ✓
              - text: Audio recording
            - listitem [ref=e149]:
              - generic [ref=e150]: ✓
              - text: Detailed written analysis
            - listitem [ref=e151]:
              - generic [ref=e152]: ✓
              - text: WhatsApp support
          - link "Book via WhatsApp" [ref=e153] [cursor=pointer]:
            - /url: https://wa.me/351935917861?text=Hello%20Patricia!%20I%20would%20like%20to%20book%20a%20tarot%20reading%20session%20from%20Europe.
            - img [ref=e154]
            - text: Book via WhatsApp
          - link "Or pay with card →" [ref=e156] [cursor=pointer]:
            - /url: "#payment"
      - paragraph [ref=e157]: Pagamento via transferência bancária, PIX ou link de pagamento.
    - generic [ref=e159]:
      - heading "Pagamento Seguro" [level=2] [ref=e160]
      - paragraph [ref=e161]: Reserve sua sessão com pagamento seguro via Stripe. Aceitamos cartões de crédito e débito.
      - generic [ref=e164]:
        - group "Selecione um pacote de leitura" [ref=e165]:
          - generic [ref=e166]: Selecione um pacote de leitura
          - generic [ref=e167]:
            - radio "R$ 260,00 Leitura Brasil Sessão completa + fotos + áudio + análise escrita" [ref=e168]:
              - generic [ref=e169]: R$ 260,00
              - generic [ref=e170]: Leitura Brasil
              - generic [ref=e171]: Sessão completa + fotos + áudio + análise escrita
            - radio "€ 150,00 Leitura Europa Complete session + photos + audio + written analysis" [ref=e172]:
              - generic [ref=e173]: € 150,00
              - generic [ref=e174]: Leitura Europa
              - generic [ref=e175]: Complete session + photos + audio + written analysis
        - generic [ref=e176]:
          - paragraph [ref=e177]: Prefere pagar via transferência?
          - link "Entre em contato para outras formas de pagamento" [ref=e178] [cursor=pointer]:
            - /url: "#contato"
      - generic [ref=e179]:
        - generic [ref=e180]:
          - img [ref=e181]
          - generic [ref=e183]: SSL Seguro
        - generic [ref=e184]:
          - img [ref=e185]
          - generic [ref=e187]: Stripe Protegido
        - generic [ref=e188]:
          - img [ref=e189]
          - generic [ref=e191]: Cartões aceitos
    - generic [ref=e193]:
      - heading "Entre em Contato" [level=2] [ref=e194]
      - paragraph [ref=e195]: Preencha o formulário abaixo e sua mensagem será aberta diretamente no WhatsApp.
      - generic [ref=e196]:
        - form "Formulário de contato" [ref=e199]:
          - generic [ref=e200]:
            - generic [ref=e201]: Nome *
            - textbox "Nome *" [ref=e202]:
              - /placeholder: Seu nome completo
          - generic [ref=e203]:
            - generic [ref=e204]: Email *
            - textbox "Email *" [ref=e205]:
              - /placeholder: seu@email.com
          - generic [ref=e206]:
            - generic [ref=e207]: Telefone/WhatsApp *
            - textbox "Telefone/WhatsApp *" [ref=e208]:
              - /placeholder: +55 11 99999-9999
          - generic [ref=e209]:
            - generic [ref=e210]: País *
            - combobox "País *" [ref=e211]:
              - option "Selecione seu país" [selected]
              - option "Brasil 🇧🇷"
              - option "Portugal 🇵🇹"
              - option "Espanha 🇪🇸"
              - option "Outro"
          - generic [ref=e212]:
            - generic [ref=e213]: Mensagem (opcional)
            - textbox "Mensagem (opcional)" [ref=e214]:
              - /placeholder: Como posso te ajudar? Qual tema te interessa?
          - button "Preencha todos os campos" [disabled] [ref=e215]:
            - img [ref=e216]
            - text: Preencha todos os campos
          - paragraph [ref=e218]: Seus dados estão protegidos e não serão compartilhados.
        - generic [ref=e219]:
          - generic [ref=e220]:
            - img [ref=e221]
            - generic [ref=e223]: Resposta em até 24h
          - generic [ref=e224]:
            - img [ref=e225]
            - generic [ref=e227]: Dados protegidos
          - generic [ref=e228]:
            - img [ref=e229]
            - generic [ref=e231]: Atendimento pessoal
  - contentinfo [ref=e232]:
    - generic [ref=e233]:
      - generic [ref=e234]:
        - generic [ref=e235]:
          - heading "Patricia Taques" [level=3] [ref=e236]
          - paragraph [ref=e237]: Tarot & Espiritualidade
        - generic [ref=e238]:
          - link [ref=e239] [cursor=pointer]:
            - /url: https://instagram.com/patriciataques
            - img [ref=e240]
          - link "WhatsApp" [ref=e242] [cursor=pointer]:
            - /url: https://wa.me/351935917861?text=Ol%C3%A1%20Patricia%2C%20gostaria%20de%20agendar%20uma%20leitura%20de%20tarot.
            - img [ref=e243]
            - text: WhatsApp
      - paragraph [ref=e246]: © 2024 Patricia Taques. Todos os direitos reservados.
  - generic [ref=e249]:
    - button "Menu" [ref=e250]:
      - img [ref=e252]
      - generic: Menu
    - button "Inspect" [ref=e256]:
      - img [ref=e258]
      - generic: Inspect
    - button "Audit" [ref=e260]:
      - generic [ref=e261]:
        - img [ref=e262]
        - img [ref=e265]
      - generic: Audit
    - button "Settings" [ref=e268]:
      - img [ref=e270]
      - generic: Settings
```

# Test source

```ts
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
> 159 |     await expect(page.locator('text=R$ 260,00')).toBeVisible();
      |                                                  ^ Error: expect(locator).toBeVisible() failed
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