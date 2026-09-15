# SAIT Website — Redesign Challenge

A modern, responsive frontend prototype redesigning the official website of **SAIT (Students Association of Information Technology)**, Division of Information Technology, School of Engineering, CUSAT — built for the **SAIT Website Redesign Challenge, 2026**.

🔗 **Live site:** https://saitwebsite.vercel.app/

📦 **Repository:** https://github.com/krishnavenisshiju-afk/SAIT

---

## About the project

SAIT is the student body representing IT students at CUSAT. This project reimagines the association's web presence with a cleaner information architecture, a distinct visual identity (navy, gold and olive palette with Sora/Manrope typography), and interactive UI patterns — while keeping the codebase modular and easy to extend.

All data (events, people, announcements, placement stats, achievements) is mock/sample data for demonstration purposes, as permitted by the challenge guidelines.

---

## Features

- **Home** — hero introduction, key statistics, mission/vision preview, upcoming events, featured student projects, latest announcements, and a call-to-action band.

- **About** — vision & mission, department history timeline, faculty coordinators, and quick links to academic resources.

- **People** — executive committee and sub-team directory (Tech, Media, Events, PR, Content, Creative) with filterable team profile cards.

- **Events** — featured/flagship event spotlight, searchable and category-filterable upcoming and past events, with a details dialog for each event.

- **Placements** — placement statistics, recruiting companies, and career preparation resources (mock interviews, portfolio clinics, mentoring).

- **Alumni** — alumni spotlights, graduation-year timelines, and community advice.

- **Achievements** — hall of fame with a running record of awards, publications, and competition results.

- **My SAIT (Activity Logger)** — a student dashboard to log academic and extracurricular activities (event name, date, type, role, proof upload), track submission status (verified/pending/rejected), and view a leaderboard — fully interactive on the frontend.

- **Announcements** — searchable, filterable notice board with urgency labels for deadlines and registrations.

- **Contact** — department contact details, a stylised location panel, social links, a contact form, and a quick FAQ section.

- Sticky header with scroll progress indicator, active-route highlighting, and a responsive mobile menu.

- Consistent footer with full site navigation, social links, and contact shortcuts.

- Scroll-reveal animations, hover micro-interactions, and an ambient animated grid background on dark sections — with full `prefers-reduced-motion` support throughout.

---

## Tech stack

- **React 19** + **TypeScript**
- **TanStack Start** / **TanStack Router** (file-based routing)
- **Tailwind CSS v4**
- **Radix UI** primitives (dialog, tabs, dropdown, etc.) via a local `ui/` component layer
- **lucide-react** for icons

---

## Getting started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# build for production
npm run build

# preview the production build
npm run preview