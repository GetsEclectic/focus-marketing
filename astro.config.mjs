import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// If deploying to https://<username>.github.io/<repo>, keep base set to "/<repo>".
// If using a custom domain (root), remove base and set site to your domain.
export default defineConfig({
  site: 'https://getseclectic.github.io',
  base: '/focus-marketing',
  integrations: [mdx()]
});
