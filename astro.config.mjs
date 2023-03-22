import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://yulily.github.io',
	base: '/murmur',
	integrations: [mdx(), sitemap()],
});
