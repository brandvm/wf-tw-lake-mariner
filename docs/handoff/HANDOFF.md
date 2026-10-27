# Lake Mariner Data — design handoff → Webflow build

The brief every build session starts from. Written when the design is
approved (by the designer, or at the end of the prototype phase) and kept
current during the build. Agents read it after `AGENTS.md` and `GOTCHAS.md`.

## Read first

1. `AGENTS.md`, `GOTCHAS.md`, and the skill's `conventions.md`.
2. This file, then `MANUAL-TODO.md` and `BUILD-NOTES.md` in this folder;
   after the build handoff, `REVIEW.md` (feedback rounds until launch) and
   `SEO-PLAN.md`.
3. The approved design: Figma file `i5kBzV34Xa9qvV7I64FxFZ`, page "↪ • Template — Clean Pages"
   (node `2523:111`), desktop 1680 only. The development plan and section
   inventory are in `BUILD-PLAN.md`.

## Status

2026-10-27 — Loader installed on staging. Clean design reference made in Figma (page "↪ • Template — Clean Pages", node 2523:111): 9 desktop (1680) pages. Development plan written (`BUILD-PLAN.md`). Next: phase 0, a read-only audit of the Webflow site, then foundations.

## Ground rules for this project

- The Brand Vision project lead gives the go-ahead for Webflow writes in chat, batch by batch.
- Tablet and mobile layouts are Claude's call (no designs); they're reviewed as screenshots at 991, 767 and 479 with each page.
- The Figma Template page is the designer's working page: read it, never edit it. Build from the Clean Pages page.

## Pages

| URL | Design source | Webflow page | Notes |
| --- | --- | --- | --- |
| `/` | 01 Home (`2523:112`) | Home | |
| `/project-overview` | 02 Project Overview (`2523:617`) | Project Overview | |
| `/community-impact` | 03 Community Impact (`2523:1235`) | Community Impact | |
| `/closed-loop-cooling` | 04 Closed-Loop Cooling (`2523:1696`) | Closed-Loop Cooling | optional per campus (water-cooled only) |
| `/careers` | 05 Careers (`2523:2102`) | Careers | |
| `/news` | 06 News (`2523:2511`) | News | |
| `/news/<slug>` | 07 News Article (`2523:2885`) | News Posts template | CMS template |
| `/events` | 08 Events (`2523:3252`) | Events | |
| `/events/<slug>` | 09 Event (`2523:3595`) | Events template | CMS template |
| `/404` | not designed | 404 | built from the page shell + Section Head |
| `/design/style-guide` | | Style guide (folder `design`) | first page built; excluded from search |
| `/design/media` | | Media (folder `design`) | Careers and Project Overview videos; excluded from search |

URLs follow the current Squarespace paths where they exist; check them against the crawl before the redirect map.

Breakpoints: 991 (tablet), 767 (mobile landscape), 479 (mobile). Checked at
1440, 820 and 390 (`webflow-build.config.json`), plus the 1680 design frame.

## Variables and classes

- Variable changes, as old → new, grouped for approval: proposed in phase 1 (`BUILD-PLAN.md` › Design system read from Figma has the source values).
- New classes, with what each is for: `CLASSES.md`, started in phase 1.
- Approval state: pending.

## CMS

| Collection | Fields | Used on |
| --- | --- | --- |
| News Posts | name, slug, category (ref News Categories), topics (multi-ref Topics), cover image (alt on the field), excerpt, author, publish date, read time (number), body (rich text), attachment (file), attachment label, attachment size, source name, source URL, featured (switch) | News list (all, sorted by date, load more 6), News template, Related (same category, 3, exclude current), Home and Explore rail if a feed is added |
| News Categories | name, slug | filter pills, card chip |
| Topics | name, slug | card topic line |
| Events | name, slug, event type (ref Event Types), tagline, start (date/time), end (date/time), location, location note (e.g. "Online — replay available"), image, summary, body (rich text), perks (multi-ref Event Perks), RSVP URL, RSVP provider | Events upcoming (start in future, soonest first) and past (start in past, newest first), Event template, Other events (3, exclude current), announcement bar link |
| Event Types | name, slug | chip |
| Event Perks | value (e.g. "$28 – 36 / hr"), label | Perk Grid on the Event template |
| Documents | name, description (rich text), file, external URL, group (option: Resources & Documents / Community & Partnership), show on Project Overview (switch), show on Community Impact (switch), order (number) | Doc Accordions on Project Overview and Community Impact |
| FAQs | question, answer (rich text), show on Home (switch), order | Home FAQ preview (4) + FAQPage schema |
| Testimonials | quote (rich text), name, role, photo, order | Careers Quote Slider |

## Components to make

| Component | Used on | Props | Behaviour inside |
| --- | --- | --- | --- |
| G \| Nav W | every page | theme (light/dark), announcement on/off | `nav`, `announcement` |
| G \| Footer W | every page | — | — |
| C \| Page Hero | Home, Project Overview, Community Impact, Cooling, Careers | image, heading, text (1–2 paragraphs), button label + link, fact bar on/off | — |
| C \| Button | everywhere | variant (Solid, Light, Ghost, Small), label, link, icon (plus/arrow) | — |
| Section Head | most sections | eyebrow, heading, text, alignment | — |
| Fact Bar | Home (hero, aerial) | items as text props | — |
| Stat Row | Home | 3 label/value pairs | `reveal` (count-up optional) |
| C \| Explore Rail | Home, Project Overview | — (fixed 4 cards) | `explore-rail` |
| C \| Accordion (Is Glass / Is Line) | Home FAQ, Cooling operations, Doc Accordion | — | `accordion` |
| C \| Image Accordion (Is Light / Is Dark) | Project Overview, Community Impact | heading | `image-accordion` |
| C \| Highlight Tabs | Project Overview | — | `highlight-tabs` |
| C \| Promo Card | Project Overview | image, title, text, link | — |
| C \| Step List | Cooling | — | — |
| C \| Hover Pair | Cooling | two images | `hover-pair` (CSS mostly) |
| C \| Scroll Video | Careers | poster, video URL | `scroll-video`, `video-modal` |
| C \| Benefit Grid | Careers | — | — |
| C \| Quote Slider | Careers | — (CMS) | `quote-slider` |
| C \| Post Card (Is Row) | News list, Related | — (CMS bound) | — |
| C \| Event Card (Is Row) | Events, Other events | — (CMS bound) | — |
| Download Card, Source Card, RSVP Card, Detail Bar, Perk Grid | templates | — (CMS bound) | `calendar-links` (Detail Bar) |
| C \| Follow Band | News template, Events, Event template | — | — |
| Share Buttons | both templates | — | `share` |
| Breadcrumb | both templates | parent label + link | — |

## Modules

| Module | `data-*` hooks | What it does |
| --- | --- | --- |
| nav | `data-nav`, `data-nav-menu`, `data-nav-toggle` | dropdowns, mobile sheet, light/dark from the section under it |
| announcement | `data-announcement`, `data-announcement-close` | close and remember (localStorage, keyed by the message) |
| accordion | `data-accordion`, `data-accordion-item`, `data-accordion-trigger` | one open at a time, ARIA expanded/controls, height animation |
| image-accordion | `data-image-accordion`, `data-accordion-image` | accordion + swaps the image and runs the progress line on the open item |
| highlight-tabs | `data-tabs`, `data-tab`, `data-tab-panel`, `data-tab-bg` | tab list with arrow keys; cross-fades background and text |
| explore-rail | `data-rail` | drag/scroll rail with snap on desktop; native scroll on touch |
| quote-slider | `data-slider`, `data-slide`, `data-slider-prev/next/count` | slides quote + photo, counter, swipe |
| scroll-video | `data-scroll-video` | grows the frame on scroll (GSAP ScrollTrigger), off below 992 and with reduced motion |
| video-modal | `data-video-modal="<YouTube URL>"` | opens the video in a dialog (`recipes/modal/`) |
| share | `data-share="facebook|linkedin|x|native"` | share URLs from the page URL and title |
| calendar-links | `data-calendar` + `data-start`, `data-end`, `data-title`, `data-location` | builds the Google Calendar link and an ICS download from the event fields |
| list filters | Finsweet Attributes (`recipes/finsweet/`) | News: category filter, search, sort, load more; Events: search |
| reveals | `data-reveal` | one IntersectionObserver for entrance fades; first screen never hidden |
| faq-schema | CMS embed on Home | FAQPage JSON-LD from the FAQs shown |

## Decisions

- 2026-10-27 · Nav: option "2V (with Part of TeraWulf logo clickable)" (Figma 2292:6818). The "Part of TeraWulf" logo links to terawulf.com. Every page already used its layout; the clean pages now carry its "Part of" label instead of "Site of".
- 2026-10-27 · No FAQ or Contact page on the campus site. FAQ links (Home "All questions", footer "FAQ") and Contact links (nav "Contact Us", footer "Contact") go to the matching pages on terawulf.com.
- 2026-10-27 · Build from the Figma page "↪ • Template — Clean Pages" (2523:111), not the working Template page.

## Open decisions

| Item | Now | Options |
| --- | --- | --- |
| Body font | Manrope and Satoshi both used for body text | one family (Manrope is used most), or keep both with clear roles |
| Current Openings source | Figma shows a screenshot of the TeraWulf careers portal | iframe or widget of that portal (URL needed), a link out, or a CMS list |
| Explore rail behaviour | cards run off the right edge | drag/scroll rail (planned), or cards that widen on hover |
| "Subscribe to updates" (Events) | no target | a Webflow form, a newsletter tool, or the campus Facebook page |
| Privacy and Cookie policy | footer links | local pages, or terawulf.com's |
| Social links | Facebook, LinkedIn, X | per campus or TeraWulf's accounts |
| Videos | Meet our employees, Cooling Explained, About TeraWulf | files or YouTube URLs needed |
| Announcement bar content | hiring event, static | a CMS item (switchable) — planned |
| Other campuses | one template × 5 | duplicate the finished site; one repo per campus or one shared bundle |

## Stand-in assets and placeholders

- Home FAQ section intro is lorem ipsum: keep it as a placeholder for now (owner: client copy).
- terawulf.com FAQ and Contact page URLs: to confirm before wiring the links.
