# Wasatch Bitworks Eleventy Starter

# We rolled the Eleventy site back to an earlier Tailwind version (3.*) because the newest release (4.*) was causing problems with our development setup. Specifically, IntelliSense/autocomplete in VS Code wasn’t recognizing the Tailwind classes properly, and the build pipeline wasn’t generating styles consistently. By stepping back to the previous stable version, we got class suggestions and builds working smoothly again, so it’s just a temporary compatibility choice until the newer Tailwind release and tooling play nicely together.

This is the base template I use for building static sites with [Eleventy](https://11ty.dev) and [Tailwind CSS](https://tailwindcss.com).

## Getting Started

```bash
npm install
npm run build:css
npm start

npm run build:css & npm start
```

## Currently run with
```bash
npm run dev
```