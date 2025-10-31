// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY ?? '';
const [owner, repo] = repository.split('/');
const isProjectPage = repo && owner && repo.toLowerCase() !== `${owner.toLowerCase()}.github.io`;

const site = process.env.ASTRO_SITE ?? (owner ? `https://${owner}.github.io` : 'https://example.com');
const base = process.env.ASTRO_BASE ?? (isProjectPage ? `/${repo}` : '/');

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [mdx(), tailwind(), sitemap()],
});
