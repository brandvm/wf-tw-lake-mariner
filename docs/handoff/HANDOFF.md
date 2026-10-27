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

2026-10-27 — Loader installed on staging. Clean design reference made in Figma (page "↪ • Template — Clean Pages", node 2523:111): 9 desktop (1680) pages. Prototype phase. The style guide, Home, Project Overview, Community Impact, Closed-Loop Cooling, Careers, News, the News Article template (one item: `/news/understanding-energy-pricing-in-new-york`), Events the Event template (one item: `/events/terawulf-hiring-event-data-center-operators`) and the 404 page are built in `../prototype` (`pnpm dev`, port 5868) and waiting for review at 1440, 820 and 390. The variable proposal is `prototype/src/css/proposed.css` (P1–P10), the new classes are `prototype/CLASSES.md` (326). Phase 0 audit done (`AUDIT.md`): the Webflow site is the unchanged starter, so the prototype's starter snapshot matches it. Nothing written to Webflow yet.

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
| `/404` | not designed | 404 (utility page) | the Page Hero centred over the campus photo: shield, Error 404, Page not found, Back to Home and News & Events, quick links to the main pages; noindex. Utility page: the API can't reach it, so it is built by hand in the Designer (a MANUAL-TODO row at build time) |
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
| C \| Step List | Cooling | — | `steps` |
| C \| Hover Pair | Cooling | two images | CSS hover + `lightbox` |
| C \| Photo Band | Cooling intro | photo, cloud layer, cut-out (one scene, fixed proportions) | `band-inset`, `parallax` |
| C \| Video Frame | Careers | poster, video URL | `scroll-fx` (media-grow), `video-modal` |
| C \| Benefit Grid | Careers | — | `benefits` |
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
| hscroll | `data-hscroll`, `data-hscroll-frame`, `data-hscroll-track`, `data-hscroll-item`, `data-hscroll-viewport` | Explore: the section pins in the middle of the screen and page scroll moves the whole row (title and cards) sideways until the last card meets the content edge; from 992px without reduced motion, otherwise a swipe row |
| text-fill | `data-text-fill` | statement words fill from muted to the text colour as it scrolls up the screen |
| parallax | `data-parallax` (`="x"` sideways) | photos drift against the scroll inside their frames; Explore card photos drift sideways |
| intro | `data-page-loader`, `data-page-loader-mark`, `data-intro`, `data-intro-media` | intro loader on the first page of a visit: navy screen with the shield and a progress line, lifts like a curtain, hero parts rise in; 4 s CSS backstop, none under reduced motion or on later pages (head-code line adds `html.intro-seen`) |
| smooth-scroll | — (GSAP ticker + Lenis, recipes/smooth-scroll) | Lenis smooth scrolling; off under reduced motion and in the Designer; anchor-scroll glides through it |
| quote-slider | `data-slider`, `data-slide`, `data-slider-prev/next/count` | slides quote + photo, counter, swipe |
| scroll-video | `data-scroll-video` | grows the frame on scroll (GSAP ScrollTrigger), off below 992 and with reduced motion |
| video-modal | `data-video-modal="<YouTube URL>"` | opens the video in a dialog (`recipes/modal/`) |
| share | `data-share="facebook|linkedin|x|native"` | share URLs from the page URL (canonical when set) and title; native opens the share sheet or copies the link |
| read-progress | `data-read-progress`, optional `data-read-end` | the reading line on CMS templates |
| follow-fan | `data-follow-area`, `data-follow-fan` | Follow Band fan entrance and pointer drift |
| calendar-links | `data-calendar` + `data-start`, `data-end` (ISO with offset), `data-title`, `data-location`, `data-details`; `data-calendar-google`, `data-calendar-ics` | builds the Google Calendar link and an .ics download (data URL) from the event fields; in Webflow the attributes are bound to the Events fields |
| list filters | Finsweet Attributes (`recipes/finsweet/`) | News: category filter, search, sort, load more; Events: search. The prototype's `list-filter` module stands in for it (one per list, by `fs-list-instance`) on the same `fs-list-*` markup; check the attribute names against the Finsweet List docs when building, and wire Show more to the Collection List pagination (`fs-list-load="more"`) |
| custom-select | `data-select` › `[role=combobox]`, `.select-list`, native `select` | the sort dropdown over a hidden native select (Finsweet sort-trigger) |
| reveals | `data-reveal` | one IntersectionObserver for entrance fades, staggered; first screen never hidden; the hiding is set by the module, so nothing hides without it |
| faq-schema | CMS embed on Home | FAQPage JSON-LD from the FAQs shown |

## Motion references

The interaction level is set by two reference sites (2026-10-27): marketcap.webflow.io (also built by Brand Vision on wf-template; its modules are in `brandvm/marketcap`, ported where they fit) and findrealestate.com. A section whose layout matches one of theirs gets the same interaction.

| Reference pattern | TeraWulf section | Module | Status |
| --- | --- | --- | --- |
| findrealestate hero: text lifts and blurs as the hero scrolls away (its logo-mask stage and pin removed at the client's request, 2026-10-27) | Home hero | `hero-sequence` | built |
| findrealestate headings: letter-by-letter fill | every statement and section title | `text-fill` | built |
| findrealestate "Why FIND": media grows as it scrolls in | About TeraWulf media | `scroll-fx` (`data-media-grow`) | built |
| findrealestate "For Agents": small photo drifts | About the Project square photo | `scroll-fx` (`data-drift`) | built |
| marketcap Approach: pinned steps, progress rule, photo per step | Scale & Infrastructure | `tabs` | built |
| marketcap nav-state: bar returns on scroll up | nav, every page | `nav-state` | built |
| marketcap count-up | Home key figures; Event perks | `count-up` | built |
| add to calendar (Google link, .ics download) | Event Detail Bar | `calendar-links` | built |
| marketcap cursor-button | Explore cards | `cursor-button` | built (not on News cards: they carry a visible Read more, so the card image zooms on hover instead) |
| findrealestate Steps: cards fill in turn, sticky heading with a progress line | Closed-Loop Cooling › How It Works | `steps` | built |
| marketcap band-inset | Closed-Loop Cooling intro photo | `band-inset` (ported) | built |
| marketcap lightbox | Inside the Loop blueprints, article images | `lightbox` (ported; wraps rich-text images in `data-lightbox-rich`) | built |
| reading progress line under the top edge (my addition) | News Article | `read-progress` | built |
| sticky related column | News Article | CSS (sticky) | built |
| Figma hover state: hovered image widens | Inside the Loop | CSS (Hover Pair) | built |
| video in a dialog | Cooling hero, Careers "Play Video" | `video-modal` | built (no videos yet) |
| marketcap capabilities: active box grows, timer | Careers › Your Benefits | `benefits` (adapted) | built |
| findrealestate testimonials pager: quote and photo change together | Careers › Testimonials | `quote-slider` | built |
| findrealestate "Why FIND": video frame grows | Careers › Meet our employees | `scroll-fx` (`data-media-grow="0.47"`) | built |
| marketcap custom-select | News sort | `custom-select` (ported; read-only for a short list) | built |
| list filters, search, sort, show more (cards rise in) | News list, Events past list | `list-filter` (prototype stand-in for Finsweet List) | built |
| entrance: cards rise in on scroll, first screen never hidden | Events cards and empty card | `reveal` | built |
| marketcap brand-lines: fans in, drifts against the pointer | Follow us band (3D fan) | `follow-fan` (adapted) | built |
| marketcap transition: Barba swap, card image grows into the hero | whole site | — | dropped (2026-10-27, not wanted): normal page loads; the intro loader shows on the first page of a visit only |

## Decisions

- 2026-10-27 · Nav: option "2V (with Part of TeraWulf logo clickable)" (Figma 2292:6818). The "Part of TeraWulf" logo links to terawulf.com. Every page already used its layout; the clean pages now carry its "Part of" label instead of "Site of".
- 2026-10-27 · No FAQ or Contact page on the campus site. FAQ links (Home "All questions", footer "FAQ") and Contact links (nav "Contact Us", footer "Contact") go to the matching pages on terawulf.com.
- 2026-10-27 · Prototype first: the design is built and approved on localhost before any Webflow write (tablet and mobile are Claude's call and get reviewed there).
- 2026-10-27 · Body font is Satoshi: every body text style in the Figma file (Text B, Text B M, Text B XS) uses it; the Manrope text in the frames is unstyled leftovers. Headings Space Grotesk, labels and buttons Space Mono.
- 2026-10-27 · Nav theme follows the page: white over a hero marked `data-nav-theme="dark"`, dark text on every other page (the Figma News and Events nav). Done with a `:has()` rule, so it never flashes.
- 2026-10-27 · Explore card tags: placed with alignment combos (Is Center, Is End, Is Inset) in a Tag Cloud, not at the exact Figma coordinates, so Webflow needs no per-tag classes. Accordion icons: plus when closed, minus when open (Figma shows them the other way round). For designer review.
- 2026-10-27 · Motion asked for on Home: pinned sideways scroll on Explore (title moves with the cards), text fill on the intro statement, parallax on every photo, Lenis smooth scrolling, and an intro loader (my design: none in Figma, for review). All in repo modules (conventions §16), all off under reduced motion; adds gsap and lenis to the bundle.
- 2026-10-27 · Project Overview: Highlight Tabs and the Responsible Development accordion advance by themselves (7 s, the line or bar fills first; paused on hover, focus and off screen; stop after a click; off with reduced motion), as the Figma progress bars suggest. The About the Project statement fills on scroll like the Home intro. Explore and the intro loader are shared partials (one Webflow component each).
- 2026-10-27 · Closed-Loop Cooling: the intro photo band draws in to an inset frame (marketcap band-inset) and its layers move as one scene, since the worker cut-out has to stay on the worker in the photo. How It Works cards fill in turn beside a sticky heading with a [1]–[3] progress line (findrealestate Steps; the counter and line are my addition). The drawings widen on hover as in the Figma hover state and open in a lightbox. "Watch Cooling Explained" opens a video dialog that says "Video coming soon" until the video URL is in.
- 2026-10-27 · Careers: the employees video frame grows from the design's 600px to the content width as it scrolls in, from its top edge (findrealestate "Why FIND"); Play Video opens the video dialog. Your Benefits: one box at a time is active, takes more of the grid and hands over every 4 s while on screen (adapted from marketcap capabilities); the photos of the other boxes sit back. Testimonials: the quote and the photo behind change together; quotes 2 and 3 are placeholders. Current Openings shows the design's portal screenshot with a View All Openings link (target open).
- 2026-10-27 · News: category pills are radio buttons (the active one takes the TW gradient), the search sits in the hero, the sort is a custom select ("Sort by:" where the Figma says "Filter by:", since it sorts). Clear All shows only while a filter or search is on; an empty message shows when nothing matches. Show more adds 6 cards at a time and they rise in. A post with no cover image shows the shield on the TW gradient (the design's fourth card). Titles clamp at 4 lines, or 2 above an excerpt.
- 2026-10-27 · News Article: the excerpt is the lead paragraph above the body (Figma styles it apart from the body); body images are cropped to 760 × 420 and open in the lightbox; Related sticks beside the body on desktop. The breadcrumb shows the current post's title (the Figma frame shows another post's). A thin reading line runs under the top edge (my addition). The Follow band is one partial (Webflow component) for the News template, Events and the Event template.
- 2026-10-27 · Events: the upcoming list shows its empty state, as in the Figma ("Nothing scheduled", Subscribe to updates scrolls to the Follow band until its target is decided). Past events are Event Cards two per row on Frost, rising in on scroll; the search filters them. The card dates match their badges (the Figma repeats one date line on every card).
- 2026-10-27 · Event template: the Detail Bar's Google Calendar and ICS buttons work (the times carry the New York offset). The perks with numbers count up and the perk boxes rise in. "Why TeraWulf" ends the body rich text and the Perk Grid follows it; the closing line is a Callout field; the RSVP card reuses the Download Card. The reading line runs here too. The announcement bar now links to this event.
- 2026-10-27 · 404 (not designed, my design for review): the full-height dark Page Hero over the rooftop cooler photo, with the shield, an "Error 404" eyebrow, "Page not found", a line, Back to Home and News & Events, and frosted quick links to Project Overview, Community Impact, Closed-Loop Cooling, Careers and Events. Same intro and parallax as the other heroes; no new modules.
- 2026-10-27 · No page transitions (Barba): pages load normally. Modules stay per page with no teardown, and wf:transitions is not part of the checks.
- 2026-10-27 · Build from the Figma page "↪ • Template — Clean Pages" (2523:111), not the working Template page.

## Open decisions

| Item | Now | Options |
| --- | --- | --- |
| Current Openings source | the prototype shows the design's screenshot of the TeraWulf careers portal and a View All Openings button (no link yet) | iframe or widget of that portal (URL needed), a link out, or a CMS list |
| Explore rail behaviour | cards run off the right edge | drag/scroll rail (planned), or cards that widen on hover |
| "Subscribe to updates" (Events) | no target | a Webflow form, a newsletter tool, or the campus Facebook page |
| Privacy and Cookie policy | footer links | local pages, or terawulf.com's |
| Social links | Facebook, LinkedIn, X | per campus or TeraWulf's accounts |
| Videos | Meet our employees, Cooling Explained, About TeraWulf | files or YouTube URLs needed |
| Cooling operations accordion | "Maintenance and Longevity" and "Continuous Operations During Maintenance" have no copy in the Figma | copy from the client; the items say "Copy to come" |
| How It Works eyebrow | "Lorem Ipsum" in the Figma | a real eyebrow line, or none |
| Past events on the Event template | the page looks the same before and after the event | hide RSVP and Add to calendar once the end date has passed (Webflow conditional visibility on the date, or calendar-links sets a state) |
| Announcement bar content | hiring event, static | a CMS item (switchable) — planned |
| Other campuses | one template × 5 | duplicate the finished site; one repo per campus or one shared bundle |

## Stand-in assets and placeholders

- Home FAQ section intro is lorem ipsum: keep it as a placeholder for now (owner: client copy).
- terawulf.com FAQ and Contact page URLs: to confirm before wiring the links.
- Project Overview: About TeraWulf is a video in Figma (a still is used; file or URL needed). Responsible Development items 2–5 share one photo in the design (one per item would be better). Highlight 4 text is the design's placeholder ("Learn about how the community benefits here."). Resources rows 2–6 have no description or file yet (Documents collection); the study links to the Lake Hawkeye site's PDF, as in the design.
- Careers: testimonials 2 and 3 are placeholders (Testimonials collection) and use benefit photos behind them; the portal screenshot stands in for the openings embed; "Who Beowulf Is" eyebrow is as in the design (check the wording).
- News: posts 6–9 are sample placeholders (titles say so) with photos from other pages, and dates are made up so the sort can be tested; every topic reads "Topic Name" as in the design. Card links go to their own slugs, which 404 in the prototype until the News Article template is built.
- News Article: the Related list's third card is a sample post (the Figma's third card is the current article, which Related excludes). The Follow band's fan is a 1024px export: ask the designer for a larger one.
- Events: past events 2–4 are sample placeholders with photos from other pages; the first is the Figma's (its webinar title names Lansing, which looks like another campus's copy: check).
- Event template: Other events 2–3 are sample placeholders (the Figma's are Lansing events, another campus's copy); the RSVP link (Microsoft Forms) is a placeholder `#`.
- Home FAQ answers 2–4: placeholder lines until the FAQs collection is filled from the live FAQ page.
- Intro loader: when it is built in Webflow, the `intro-seen` line from `prototype/partials/head.html` goes into the head code (loader.html piece 1) and is re-pasted; the Intro Loader sits in G | Page W.
- Logos: the light-page versions (`logo-lmd-horizontal-dark.svg`, `logo-terawulf-dark.svg`) were derived from the white exports with the TW gradient; ask the designer for official files.
