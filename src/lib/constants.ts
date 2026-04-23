export const siteConfig = {
  name: 'Patricia Taques',
  title: 'Patricia Taques | Tarot Reader & Spiritual Guide',
  description: 'Professional tarot readings to guide your path. Book your session and discover the wisdom of the cards.',
  url: import.meta.env.PUBLIC_SITE_URL || 'https://patriciataques.com',
  instagram: 'https://instagram.com/patriciataques',
  whatsapp: import.meta.env.PUBLIC_WHATSAPP || '351935917861',
  email: 'contato@patriciataques.com'
};

export const pricingConfig = {
  europe: {
    amount: 150,
    currency: 'EUR',
    label: 'Europa'
  },
  brazil: {
    amount: 260,
    currency: 'BRL',
    label: 'Brasil'
  },
  discount: 0
};

export const processSteps = [
  {
    step: 1,
    title: 'Entre em Contato',
    description: 'Use o WhatsApp para iniciar sua jornada espiritual.'
  },
  {
    step: 2,
    title: 'Escolha seu Tipo',
    description: 'Selecione a leitura ideal para você: presencial ou por áudio/video.'
  },
  {
    step: 3,
    title: 'Receba sua Leitura',
    description: 'Mergulhe nas revelações dos cards e transforme sua perspectiva.'
  }
];