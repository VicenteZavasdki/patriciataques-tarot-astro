import { describe, it, expect } from 'vitest';
import { siteConfig, pricingConfig, processSteps } from '../../../src/lib/constants';

describe('constants', () => {
  describe('siteConfig', () => {
    it('should have required properties', () => {
      expect(siteConfig).toHaveProperty('name');
      expect(siteConfig).toHaveProperty('url');
      expect(siteConfig).toHaveProperty('whatsapp');
      expect(siteConfig).toHaveProperty('instagram');
    });

    it('should have valid WhatsApp number', () => {
      expect(siteConfig.whatsapp).toHaveLength(12);
      expect(Number(siteConfig.whatsapp)).toBeTruthy();
    });

    it('should have valid Instagram URL', () => {
      expect(siteConfig.instagram).toContain('instagram.com');
    });
  });

  describe('pricingConfig', () => {
    it('should have Europe pricing', () => {
      expect(pricingConfig.europe).toHaveProperty('amount');
      expect(pricingConfig.europe).toHaveProperty('currency', 'EUR');
    });

    it('should have Brazil pricing', () => {
      expect(pricingConfig.brazil).toHaveProperty('amount');
      expect(pricingConfig.brazil).toHaveProperty('currency', 'BRL');
    });

    it('should have reasonable pricing', () => {
      expect(pricingConfig.europe.amount).toBeGreaterThan(0);
      expect(pricingConfig.brazil.amount).toBeGreaterThan(0);
    });
  });

  describe('processSteps', () => {
    it('should have 3 steps', () => {
      expect(processSteps).toHaveLength(3);
    });

    it('should have numbered steps', () => {
      processSteps.forEach((step, index) => {
        expect(step.step).toBe(index + 1);
      });
    });

    it('should have titles and descriptions', () => {
      processSteps.forEach(step => {
        expect(step.title).toBeTruthy();
        expect(step.description).toBeTruthy();
      });
    });
  });
});