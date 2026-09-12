// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://evershine1972.com',
  integrations: [sitemap()],
  build: {
    assets: 'assets'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});