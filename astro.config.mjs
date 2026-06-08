// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isProjectPagesSite = Boolean(
  process.env.GITHUB_ACTIONS &&
  repositoryName &&
  !repositoryName.endsWith('.github.io')
);

const base = process.env.ASTRO_BASE || (isProjectPagesSite ? `/${repositoryName}` : '/');

// https://astro.build/config
export default defineConfig({
  base,
  vite: {
    plugins: [tailwindcss()]
  }
});
