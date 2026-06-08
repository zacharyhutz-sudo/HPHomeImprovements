# GitHub Pages Upload Note

This Astro site deploys through GitHub Actions. The required workflow is here:

```txt
.github/workflows/deploy.yml
```

On Mac, `.github` is a hidden folder. If you drag files manually into GitHub and the workflow does not appear online, create the file in GitHub manually:

1. Go to your repo.
2. Click **Add file → Create new file**.
3. Name the file `.github/workflows/deploy.yml`.
4. Paste the contents from this package's `.github/workflows/deploy.yml`.
5. Commit the file.

Then go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
