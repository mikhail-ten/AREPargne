// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY ?? '';
const [owner, repo] = repository.split('/');
const isProjectPage = repo && owner && repo.toLowerCase() !== `${owner.toLowerCase()}.github.io`;

const ensureLeadingSlash = (value) => (value.startsWith('/') ? value : `/${value}`);
const ensureTrailingSlash = (value) => (value.endsWith('/') ? value : `${value}/`);
const normalizeBase = (value) => ensureTrailingSlash(ensureLeadingSlash(value));

const repoBase = repo ? normalizeBase(repo) : '/';
const defaultSite = owner ? `https://${owner}.github.io${isProjectPage ? repoBase : ''}` : 'https://example.com';
const site = process.env.ASTRO_SITE ?? defaultSite;

const defaultBase = isProjectPage ? repoBase : '/';
const envBase = process.env.ASTRO_BASE;
const base = envBase ? normalizeBase(envBase) : defaultBase;

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [mdx(), tailwind(), sitemap()],
});
