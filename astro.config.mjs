// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://patriciataques.com',
  output: 'server',
  adapter: cloudflare({
    imageService: 'passthrough',
    entrypointResolution: 'auto'
  }),
  integrations: [
    react()
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});