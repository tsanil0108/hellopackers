# Hello Packers — Website (v2)

React + Vite site for Hello Packers (packers & movers, Mumbai), redesigned to
match the approved UI mockups — navy/cyan/amber palette, real photography,
scroll animations, and a WhatsApp chat button.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Outputs a static site to `dist/` — deploy that folder to Vercel, Netlify, or
any static host.

## What's included

- 5 pages: Home, Services, About, Information, Contact — React Router
- Fully responsive: mobile, tablet and desktop breakpoints on every page
- Scroll-reveal animations (`src/components/Reveal.jsx`) and hover motion
  on cards, buttons and images
- A floating WhatsApp button (bottom-right, on every page) that opens a
  chat pre-filled with a quote request — edit the number in `src/siteData.js`
- Real Hello Packers photography, cropped from the supplied brand image sets,
  used across hero sections, service cards, the About/Information pages
- A quote-request form on the Contact page (opens the visitor's email app
  with the details filled in — no backend needed for this phase)

## Editing content

- `src/siteData.js` — phone, email, address, WhatsApp number, nav links,
  services, stats, testimonials, FAQs, values — single source of truth
- `src/assets/photos.js` — maps friendly names to the photo files in
  `src/assets/photos/`; swap any image by replacing the file it points to
- `src/components/` — shared building blocks (Navbar, Footer, PageHero,
  StatBar, ProcessSteps, Testimonials, FAQAccordion, FinalCTA, WhatsAppButton)
- `src/pages/` — one folder-free file + matching `.css` per page

## Next phase (not in this build)

The partner/packers-mover listing directory and CRM app are planned for a
later phase, once this marketing site is live.
