# SPEC.md - Patricia Taques Tarot Site

## 1. Concept & Vision

Site de reservas para taróloga brasileira Patricia Taques. Foco em conversão imediata via Instagram → Site → Agendamento (Cal.com) + Pagamento (Stripe). Estética dark/gold luxuosa que transmite mistério e profissionalismo. O site deve criar conexão emocional imediata e facilitar o processo de booking.

## 2. Design Language

### Aesthetic Direction
Místico-luxuoso com tema escuro e acentos em ouro. Inspirado em cartomancia tradicional com toques modernos.

### Color Palette
```
Primary:      #D4A12C (Gold 500)
Secondary:    #F5C842 (Gold 400)
Accent:       #2A2105 (Gold 950)
Background:   #0A0A0B
Surface:      #18181B (Background Card)
Border:       #27272A
Text:         #FAFAFA
Muted:        #A1A1AA
```

### Typography
- **Display**: Cormorant Garamond (títulos grandes)
- **Heading**: Playfair Display (subtítulos)
- **Body**: Inter (texto corrido)

### Spatial System
- Container narrow: 640px
- Container wide: 1200px
- Padding sections: 80px (py-20)
- Card padding: 24-32px
- Border radius: 16px (rounded-2xl)

### Motion Philosophy
- Fade-in: 800ms ease-out
- Slide-up: 600ms ease-out
- Glow gold: 2s ease-in-out infinite
- Hover transitions: 200-300ms

## 3. Layout & Structure

```
┌─────────────────────────────────────────┐
│  HERO                                   │
│  - Badge stats                          │
│  - Título + CTA buttons                 │
│  - Trust metrics                        │
├─────────────────────────────────────────┤
│  PROCESS (Como Funciona)                 │
│  3 steps cards                          │
├─────────────────────────────────────────┤
│  BENEFITS (O que Inclui)                │
│  4 icon cards                           │
├─────────────────────────────────────────┤
│  TESTIMONIALS (Depoimentos)             │
│  3 glass cards                          │
├─────────────────────────────────────────┤
│  PRICING (Investimento)                 │
│  2 pricing cards (BRL/EUR)              │
├─────────────────────────────────────────┤
│  CAL.COM EMBED (Agendar)                │
│  Inline scheduling widget               │
├─────────────────────────────────────────┤
│  FOOTER                                 │
│  Instagram + WhatsApp                   │
└─────────────────────────────────────────┘
```

### Responsive Strategy
- Mobile-first
- Breakpoints: sm(640), md(768), lg(1024), xl(1280)
- Grid: 1 col mobile → 2 col tablet → 4 col desktop

## 4. Features & Interactions

### Hero Section
- Badge animates in first
- Title fades in with stagger
- CTAs slide up with delay
- Stats bar appears last
- Gradient text for emphasis words

### Process Steps
- Numbered circles with step indication
- Arrow connector between steps (hidden on mobile)
- Hover effect on cards

### Benefits Cards
- Gold variant with gradient background
- Emoji icons centered
- Hover lift effect

### Testimonials
- Glass morphism variant
- 5-star rating display
- Quote with styled quotation marks
- Success badge for results

### Pricing Section
- Two-column layout (BRL/EUR)
- Highlight active region (gold border)
- WhatsApp CTA for Brazil
- Online CTA for Europe/Global
- Payment method note

### Cal.com Embed
- Dark theme configuration
- Primary color: gold-500
- Visible only when in viewport (client:visible)
- Glass card container

### Footer
- Logo + name
- Instagram button
- WhatsApp CTA button
- Copyright

### Interactions
- All buttons: hover scale + glow
- Cards: border color change on hover
- Links: underline on hover
- Focus states: gold ring

## 5. Component Inventory

### Button
- **Variants**: default, outline, ghost, link
- **Sizes**: sm, md, lg, xl
- **States**: default, hover, active, disabled, focus

### Card
- **Variants**: default, gold, glass, hover
- **Padding**: none, sm, md, lg
- **States**: default, hover

### Badge
- **Variants**: default, secondary, outline, success, warning, destructive
- **States**: default only (inline element)

## 6. Technical Approach

### Framework
- Astro 6.x
- Output: hybrid (static + SSR for API)
- Adapter: Cloudflare Pages

### Styling
- Tailwind CSS v3 (via @astrojs/tailwind)
- CSS custom properties for design tokens
- No class-variance-authority (pure CSS variants)

### Integrations
- Cal.com embed (React island)
- WhatsApp direct links
- Instagram profile link

### API Routes (Future)
- `/api/create-checkout-session` - Stripe checkout
- `/api/stripe-webhook` - Payment confirmation

### Testing
- Vitest for unit tests
- Playwright for E2E tests
- Container API for Astro components

## 7. Content

### Hero Stats
- +300 Leituras
- 2+ Anos de experiência
- Alcance Global

### Pricing
- Brasil: R$ 260 (PIX/Transferência)
- Europa/Global: €150 (Transferência/Link)

### Process Steps
1. Entre em Contato
2. Escolha seu Tipo
3. Receba sua Leitura

### Benefits
1. 📸 Fotos - Envio de fotos detalhadas
2. 🎧 Áudio - Gravação da sessão
3. 🧭 Orientação - Direcionamento claro
4. 📦 Entrega - Material escrito completo