# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Running the Site
- `npm run dev` - Start development server with CSS watching and live reload
- `npm start` - Alias for dev command
- `npm run build` - Production build (CSS optimization + static site generation)

### Individual Commands
- `npx tailwindcss -i src/styles/tailwind.css -o src/styles/main.css --watch` - CSS watching only
- `npx @11ty/eleventy --serve` - Eleventy development server only

## Architecture Overview

### Static Site Structure
- **Generator**: Eleventy v3.1.2 with Nunjucks templating
- **CSS**: Tailwind CSS v3.4.13 with PostCSS processing  
- **Input**: `src/` directory
- **Output**: `_site/` directory (auto-generated)

### Key Files
- `.eleventy.js` - Eleventy configuration and passthrough copies
- `tailwind.config.js` - Tailwind configuration with content scanning
- `postcss.config.js` - PostCSS and autoprefixer setup
- `src/_includes/layout.njk` - Main layout template

### Content Strategy
This is Zach Kane's personal portfolio showcasing:
- Career transition from television to software engineering
- "Wasatch Bitworks" professional branding
- Project highlights (CMS and Workout Tracker)
- Bird photography gallery
- Purple-to-yellow gradient design system with indigo accents

### Build Process
1. Tailwind scans `./src/**/*.{html,njk,md}` for utility classes
2. CSS compiled from `src/styles/tailwind.css` to `src/styles/main.css`
3. Eleventy processes Nunjucks templates and copies assets
4. Static files output to `_site/` directory

### Design System
- **Typography**: Inter font family
- **Colors**: Purple, pink, yellow gradients with indigo accents  
- **Responsive**: Mobile-first Tailwind breakpoints
- **Interactions**: Hover effects on gallery images and project cards

### Development Notes
- Use parallel processing with `npm-run-all` for CSS watching + serving
- Image assets in `src/images/` are passthrough copied
- All HTML files use Nunjucks templating engine
- SEO meta tags, Open Graph, and Twitter Cards included in layout

## Related Projects
- **Bitworks CMS**: `/Users/zachkane/Wasatch_Bitworks/Bitworks_CMS` - Multi-tenant Sinatra CMS for content management
- **Integration**: Portfolio site can fetch project data from CMS via API endpoints