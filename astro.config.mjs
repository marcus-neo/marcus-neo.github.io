import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://marcus-neo.github.io',
  integrations: [tailwind()],
});
