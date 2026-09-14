# SAIT Website Redesign

## Overview
Build an original, fully responsive frontend prototype for SAIT that feels like a polished official student association website: warm, editorial, technology-focused, and distinctly youthful. The four uploaded images will remain visual references only and will not be embedded or copied.

## Visual Direction
- Use the supplied warm palette: midnight navy, warm ivory, sand, charcoal, gold, olive, sage, beige, and dusty blue.
- Pair bold editorial headings with highly legible body type, strong whitespace, thin borders, restrained shadows, and large rounded section containers.
- Use neutral demo and reference-style campus-and-technology visuals without AI-generated imagery, arranged in asymmetrical compositions rather than repetitive card grids.
- Keep motion subtle: entrance reveals, 2–4px lifts, gentle image zoom, smooth filters, counters, navbar transitions, and reduced-motion support.

## Pages and Content
- **Home:** editorial “Learn. Build. Connect.” opening, SAIT introduction, mission/vision/history preview, statistics, horizontal events, project showcase, student collage, announcements, and join CTA.
- **About:** department context, mission and vision, history timeline, faculty coordinators, and academic resources.
- **People:** faculty plus executive, tech, media, events, PR, content, and creative teams with believable demo profiles.
- **Events:** featured event, upcoming and past events, search, category filters, event detail dialog, and registration action.
- **Placements:** outcomes, recruiters, internships, career resources, and student success stories.
- **Alumni:** alumni spotlights, career timelines, batches, companies, and community stories.
- **Achievements:** hall of fame, competition/publication milestones, timeline, and animated statistics.
- **My SAIT:** client-side dashboard, progress ring, leaderboard, submission form with proof upload, and searchable/filterable activity history with verified, pending, and rejected states.
- **Announcements:** searchable and filterable notice board with importance labels and deadlines.
- **Contact:** department details, map-style location panel, social links, contact form, and FAQ preview.

## Shared Experience
- Create a sticky responsive site header with an elegant mobile menu, active navigation, shared footer, scroll progress indicator, and back-to-top control.
- Use reusable section headers, buttons, filters, profile/event/project treatments, and a central realistic demo-data layer.
- Give every route unique title, description, Open Graph, and social metadata.

## Technical Details
- Keep the existing TanStack Start, React 19, TypeScript, and Tailwind CSS v4 foundation.
- Use semantic design tokens in the global stylesheet and existing interface primitives for controls.
- Keep all requested data and submissions in local frontend state; no backend or account system will be added.
- Use route files for each primary destination and type-safe links throughout.
- Generate and bundle original visual assets rather than hotlinking or reusing the references.

## Validation
- Verify all routes and main interactions in the running preview.
- Test desktop and mobile viewport layouts for overflow, navigation, readable hierarchy, and touch targets.
- Confirm there are no broken links, failed assets, runtime errors, or unfinished placeholder copy.
