export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatWhatsAppLink(phone: string, message?: string): string {
  const cleanPhone = phone.replace(/\//g, '').replace(/[ +]/g, '').replace(/-/g, '');
  const encodedMessage = message ? encodeURIComponent(message) : '';
  return `https://wa.me/${cleanPhone}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
}

export function formatPrice(amount: number, currency: string): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency
  }).format(amount);
}

export function generateWhatsAppMessage(type: 'contact' | 'booking' | 'question'): string {
  const messages = {
    contact: 'Olá Patricia! Gostaria de saber mais sobre suas leituras de tarot.',
    booking: 'Olá Patricia! Gostaria de agendar uma sessão de tarot.',
    question: 'Olá Patricia! Tenho uma pergunta sobre o seu trabalho.'
  };
  return messages[type];
}