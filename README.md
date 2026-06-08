# HP Home Improvements

Astro static site for HP Home Improvements.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages deployment

This repo is configured to deploy with GitHub Actions.

1. Push the project files to the root of the GitHub repository.
2. Confirm this file exists in GitHub: `.github/workflows/deploy.yml`.
3. In GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push to the `main` branch, or run the workflow manually from the **Actions** tab.

The workflow builds Astro and deploys the generated `dist` folder to GitHub Pages.

### Branch name

The workflow currently deploys on pushes to `main`. If your repository uses `master`, edit `.github/workflows/deploy.yml` and change:

```yaml
branches: [main]
```

to:

```yaml
branches: [master]
```

### Custom domains

For a custom domain, add a repository variable named `ASTRO_SITE` with your full domain, for example `https://www.hphomeimprovements.com`, and set `ASTRO_BASE` to `/`.
