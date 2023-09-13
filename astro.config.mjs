import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://inigochoa.github.io',
  base: '/water-me-landing',
  integrations: [
    tailwind({ applyBaseStyles: false, })
  ]
});
