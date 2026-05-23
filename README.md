# HP Home Improvements Modern Static Site

This is a modernized Astro/Netlify rebuild of the HP Home Improvements site.

## What changed in this version

- Modern full-screen hero treatment
- Updated typography and spacing inspired by the provided Nick Sammons site
- Refined HP blue, black, white, and warm-neutral design system
- Uploaded HP logo added locally at `public/assets/hp-logo.png`
- New favicon and Apple touch icon generated from the logo
- Modernized Home, Projects, Services, and Vendors pages
- Placeholder/fake links for login, social links, estimate forms, and testimonial forms
- Conversion-focused CTAs for calling and booking an estimate
- Responsive layouts for desktop, tablet, and mobile

## Netlify settings

```txt
Build command: npm run build
Publish directory: dist
Node version: 22
```

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Notes

The site references publicly served Wix project/service images by URL. The uploaded HP logo is stored locally. Form submissions are visual placeholders only and can be wired to Netlify Forms later.
