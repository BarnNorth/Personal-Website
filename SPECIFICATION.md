# BarnNorth Studios – Product Specification

## 1. Product Vision & Purpose

### What Are We Building?

BarnNorth Studios is a **personal portfolio site** for Tommy Mulder, focused on vibecoding and projects built with AI tools. It showcases a small set of shipped products (e.g. Health Freak, CommutesDontSuck) and professional background (Pinterest, Snap). Built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui.

### Who Is It For?

- **Tommy Mulder** (owner): Personal brand and project showcase.
- **Visitors**: Anyone interested in vibecoding, AI-assisted development, or the listed projects.

### Value Proposition

A minimal, readable site that presents the person behind BarnNorth Studios and links out to live projects and contact channels.

---

## 2. Features & Functionality

### 2.1 Home

- **Hero**: Full-viewport-height section with brand name (BarnNorth Studios), short intro (vibecoder / big tech background), and CTAs: View Portfolio, About Me.
- **Background**: Single full-bleed background image (blurred on non-home pages via layout).
- **No** featured-projects grid on the homepage in the current implementation.

### 2.2 Navigation

- **Header**: Sticky, dark transparent bar with logo (brand name), nav links (Home, Portfolio, About, Contact), and mobile hamburger (sheet) menu.
- **Footer**: Copyright and social links (LinkedIn, X, Instagram, GitHub).

### 2.3 Portfolio

- **Grid**: Responsive grid of project cards (e.g. 2 columns on desktop).
- **Cards**: Cover image, title, description, “Built with” tool logos; each card links **directly to the external project site** (`externalLink`). No internal project detail page as the primary CTA.
- **Project categories**: Data includes categories (e.g. ai-art, web-apps); filtering UI is not implemented in the current build.
- **Project detail route**: `/project/:slug` exists for direct links and showcases hero, copy, gallery, and lightbox; portfolio grid does not route here by default.

### 2.4 Project Detail (`/project/:slug`)

- **Hero**: Large cover image.
- **Content**: Title, year, category, description, tools; optional image gallery with lightbox.
- **404**: Invalid slug redirects to `/404`; the catch-all route renders the NotFound component for `/404` and all other unknown paths.

### 2.5 About

- **Layout**: Portrait image and biography block (emerald-tinted card).
- **Content**: Name, tagline, biography paragraphs, social links. No contact form.

### 2.6 Contact

- **Content**: Contact information only (email, location, social links). No contact form.
- **Availability**: Text can reflect openness to collaborations (data-driven).

### 2.7 404 Handling

- Unknown or invalid routes (including `/404`) are handled by the catch-all route and render the branded NotFound page with a “Return to Home” link. Invalid project slugs redirect to `/404` so users and bookmarks get a stable not-found URL.

---

## 3. Tech Stack & Architecture

- **Front end**: React 18, TypeScript, Vite, Tailwind CSS 4, shadcn/ui, Framer Motion.
- **Routing**: React Router (client-side); route-level code splitting (lazy-loaded pages).
- **Data**: Static data in `src/data` (e.g. `photographer.ts`, `projects.ts`); no CMS or backend.
- **SEO**: Per-page meta and Open Graph via `SEOHead` component.

---

## 4. Current Pages & Routes

| Route            | Page          | Description                          |
|------------------|---------------|--------------------------------------|
| `/`              | Home (HomeV2) | Hero, intro, Portfolio + About CTAs |
| `/portfolio`     | Portfolio     | Project grid linking to external sites |
| `/project/:slug`| ProjectDetail | Project showcase; 404 redirect if invalid |
| `/about`         | About         | Portrait, biography, socials        |
| `/contact`       | Contact       | Email, location, socials (no form)  |
| `*`              | NotFound      | Branded 404, link back to home       |

---

## 5. Design Direction

- **Visual**: Dark, minimal; full-bleed background image; emerald-tinted glass cards; white/light text.
- **Typography**: Clear hierarchy; light/medium weights; generous spacing.
- **Motion**: Subtle hero and scroll-reveal animations (Framer Motion).

This specification describes the current product as implemented. For the original “Frame Portfolio” (photographer-focused) vision, see any archived or legacy spec document.
