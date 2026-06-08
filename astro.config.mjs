// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const repository = process.env.GITHUB_REPOSITORY ?? '';
const [owner = '', repo = ''] = repository.split('/');
const isProjectPagesSite = Boolean(
  process.env.GITHUB_ACTIONS && repo && !repo.endsWith('.github.io')
);

const site = process.env.ASTRO_SITE || (owner ? `https://${owner}.github.io` : undefined);
const base = process.env.ASTRO_BASE || (isProjectPagesSite ? `/${repo}` : '/');

export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()]
  }
});
