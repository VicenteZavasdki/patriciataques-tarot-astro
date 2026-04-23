// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: import.meta.env.SITE_URL || 'https://patriciataques.com',
  output: 'server',
  adapter: cloudflare({
    imageService: 'passthrough',
    entrypointResolution: 'auto',
    compatibilityFlags: ['nodejs_compat']
  }),
  integrations: [
    react(),
    sitemap()
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      minify: 'esbuild'
    },
    resolve: {
      dedupe: ['react', 'react-dom']
    },
    ssr: {
      noExternal: ['react', 'react-dom', 'react-hook-form', 'zod', '@hookform/resolvers']
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