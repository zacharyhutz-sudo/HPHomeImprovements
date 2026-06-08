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

This repo is configured to deploy with GitHub Actions, not Netlify and not Jekyll.

### Required GitHub setting

In GitHub, go to:

**Settings → Pages → Build and deployment → Source**

Set Source to:

**GitHub Actions**

Do not use **Deploy from a branch** for this Astro site. Branch deployment causes GitHub Pages to try building with Jekyll.

### Required workflow file

Make sure this file exists in GitHub:

```txt
.github/workflows/deploy.yml
```

Because `.github` is a hidden folder on Mac, it can be missed when dragging files into GitHub. If the workflow does not appear in the repo, create the file manually in GitHub using **Add file → Create new file**, name it `.github/workflows/deploy.yml`, and paste the workflow contents from this repo.

### Deploy

Push changes to the `main` branch, or run the workflow manually from the **Actions** tab.

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
