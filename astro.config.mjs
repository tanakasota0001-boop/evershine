// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://evershine-coating.jp',
  integrations: [sitemap()],
  image: {
    service: passthroughImageService()
  },
  build: {
    assets: 'assets'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});