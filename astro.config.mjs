import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nowell.strite.org',
  integrations: [sitemap()],
  output: 'static',
});
