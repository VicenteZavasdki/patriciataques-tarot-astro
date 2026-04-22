// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: import.meta.env.SITE_URL || 'https://patriciataques.com',
  output: 'server',
  adapter: cloudflare({
    imageService: 'passthrough',
    entrypointResolution: 'auto'
  }),
  integrations: [
    react()
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      minify: 'esbuild'
    }
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport'
  },
  image: {
    domains: ['images.unsplash.com', 'picsum.photos'],
    remotePatterns: [{ protocol: 'https' }]
  },
  compressHTML: true
});