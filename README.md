# HP Home Improvements

Astro static site for HP Home Improvements.

## Local development

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

The production build is created in `dist/`.

## Deploying on GitHub Pages

This repo includes `.github/workflows/deploy.yml`, which builds the Astro site and deploys `dist/` to GitHub Pages whenever changes are pushed to `main`.

After uploading these files to GitHub:

1. Go to the repository's **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to the `main` branch.
4. Open the workflow run under the **Actions** tab to confirm the deployment completed.

### Default URL behavior

For a normal project repo, GitHub Pages serves the site at a path like:

```text
https://your-username.github.io/HPHomeImprovements/
```

The Astro config automatically uses the repository name as the base path during GitHub Actions builds, so internal links and local assets work at that URL.

### Custom domain

If you connect a custom domain directly to this GitHub Pages site, set a repository variable named `ASTRO_BASE` to `/` before deploying. That tells Astro to build links for the root of the domain instead of `/repo-name/`.

To set it: **Settings → Secrets and variables → Actions → Variables → New repository variable**.
