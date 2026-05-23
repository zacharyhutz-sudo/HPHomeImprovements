# HP Home Improvements Astro Site

A small Astro/Tailwind site ready to deploy on Netlify.

## Local setup

```sh
npm install
npm run dev
```

## Netlify settings

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `22`

## Pages

- `/` Home
- `/projects/` Projects
- `/services/` Services
- `/vendors/` Vendors

## Dad-site customization checklist

1. Replace the company name throughout the files.
2. Update phone, email, address, and social links in `src/layouts/BaseLayout.astro`.
3. Update service/project copy in `src/pages/*.astro`.
4. Add real project images to `public/` and replace the placeholder visual blocks.
