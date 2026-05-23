# HP Home Improvements Static Recreation

This is a near-identical static Astro recreation of the public HP Home Improvements Wix site for GitHub/Netlify deployment.

## Netlify settings

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `22`

## Pages included

- Home
- Projects
- Services
- Vendors

## Notes

- Form/login/social links are placeholder anchors for now.
- Public Wix-hosted image URLs are referenced in `src/data/siteData.js`.
- Vendor logos are recreated as local styled text cards rather than bundled trademark image files.
- The Wix backend, CMS, login behavior, and original editor project cannot be exported from the public site.
