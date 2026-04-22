import { describe, it, expect } from 'vitest';
import { cn, formatWhatsAppLink, formatPrice, generateWhatsAppMessage } from '../../../src/lib/utils';

describe('utils', () => {
  describe('cn', () => {
    it('should combine class names', () => {
      expect(cn('foo', 'bar')).toBe('foo bar');
    });

    it('should filter out falsy values', () => {
      expect(cn('foo', false, 'bar', undefined, 'baz', null)).toBe('foo bar baz');
    });

    it('should handle empty inputs', () => {
      expect(cn()).toBe('');
    });
  });

  describe('formatWhatsAppLink', () => {
    it('should create basic WhatsApp link', () => {
      expect(formatWhatsAppLink('351935917861')).toBe('https://wa.me/351935917861');
    });

    it('should clean phone numbers with spaces and dashes', () => {
      expect(formatWhatsAppLink('+351 935-917-861')).toBe('https://wa.me/351935917861');
    });

    it('should add encoded message', () => {
      const result = formatWhatsAppLink('351935917861', 'Hello world');
      expect(result).toContain('https://wa.me/351935917861');
      expect(result).toContain('text=Hello%20world');
    });

    it('should handle empty message', () => {
      const result = formatWhatsAppLink('351935917861', '');
      expect(result).toBe('https://wa.me/351935917861');
    });
  });

  describe('formatPrice', () => {
    it('should format BRL currency', () => {
      expect(formatPrice(260, 'BRL')).toBe('R$ 260,00');
    });

    it('should format EUR currency', () => {
      const result = formatPrice(150, 'EUR');
      expect(result).toContain('150');
      expect(result).toContain(',00');
    });
  });

  describe('generateWhatsAppMessage', () => {
    it('should generate contact message', () => {
      expect(generateWhatsAppMessage('contact')).toContain('leituras');
    });

    it('should generate booking message', () => {
      expect(generateWhatsAppMessage('booking')).toContain('agendar');
    });

    it('should generate question message', () => {
      expect(generateWhatsAppMessage('question')).toContain('pergunta');
    });
  });
});