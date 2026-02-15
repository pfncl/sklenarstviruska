// @ts-check
import { defineConfig, envField } from 'astro/config';
import svelte from '@astrojs/svelte';
import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sklenarstviruska.cz',
  integrations: [svelte(), sitemap({
    filter: (page) => !page.includes('/formulare'),
  })],
  adapter: cloudflare({
    platformProxy: { enabled: true },
  }),
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret' }),
      CONTACT_EMAIL: envField.string({ context: 'server', access: 'secret', default: 'sklenarstvi.ruska@seznam.cz' }),
      ADMIN_PASSWORD: envField.string({ context: 'server', access: 'secret' }),
      TURNSTILE_SECRET_KEY: envField.string({ context: 'server', access: 'secret' }),
    },
  },
});
