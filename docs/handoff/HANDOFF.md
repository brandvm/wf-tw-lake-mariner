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

2026-10-28 — Prototype complete; handoff checklist run. The style guide and all 10 pages (Home, Project Overview, Community Impact, Closed-Loop Cooling, Careers, News, News Article template, Events, Event template, 404) are built in `../prototype` (`pnpm dev`, port 5868). Approved in chat page by page from Project Overview on; Home and the style guide were taken as approved when the handoff was asked for (2026-10-28). Checks at handoff: screens (2560–360), states, style guide, axe WCAG 2.2 AA at 1440 and 390, heading outline, `#section` arrivals and back/forward, `wf:preflight --strict` (0 to fix), `check:snapshot`, `check:drift` (only the known shorthand false positives). Loader installed on staging. 2026-10-28 build: variables P1–P10, all 326 classes, the repo port, 9 CMS collections with 43 sample items, and the style guide base (all sections; Components rows 6–34 as inert previews until their components exist) are in Webflow; the style guide base was approved by the Brand Vision lead on 2026-10-28. Components: K1 (nav, footer, intro loader, button variants) and K2a (Page Hero, Fact Bar, Statement, Stat Row, Explore Rail, Accordion Item) and K2b-1 (Intro Row, Collage, Promo Card, Highlight Tabs, Image Accordion Items, Doc Accordion Item) built and published 2026-10-28; K2b-2 (Photo Band, Step List, Hover Pair, Video Frame, Benefit Grid) and K3 (Follow Band, Empty Card, Breadcrumb, Share Buttons, Download Card, Source Card) 2026-10-29. CMS cards and template parts are built with their pages. Next: pages, one per session, starting with Home. 2026-10-29: Project Overview built and published to webflow.io (sections, instances, Responsible Development autoplay, both document lists bound to Documents; filter/sort by hand: MANUAL-TODO BA). Motion checked at 1440; compared at 1440/820/390 (differences only from the fallback body font, MANUAL AA, and the unfiltered lists); mobile PageSpeed 68 (intro render delay, BUILD-NOTES Known issues).

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

- Variable changes, as old → new, grouped P1–P10 for approval: `prototype/src/css/proposed.css` (colours incl. Storm, Frost, the tints; semantic Base and Dark modes; type scale and roles incl. breakpoints; layout; button and chip).
- New classes, 326, with what each is for: `prototype/CLASSES.md`; every one is on the style guide.
- The plan per declaration: `pnpm wf:styles` (`.webflow-build/styles/styles-plan.json`): about 2,300 declarations through the connector, 26 by hand (MANUAL-TODO A–Z), 132 rules for repo CSS (`repo-css:` tagged in `new-classes.css`). 51 declarations read variables that only exist once the P-batches are created: create the variables first.
- Approval state: pages approved in the prototype; the variable batches are proposed again, batch by batch, at the start of the build.

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

From the prototype's partials and repeated blocks (each has its style-guide row; `prototype/CLASSES.md` lists the classes).

| Component | Used on | Props / CMS | Behaviour inside |
| --- | --- | --- | --- |
| G \| Nav W | every page | — (theme follows the page: `data-nav-theme="dark"` on a dark hero) | `nav`, `nav-state`, `announcement` |
| Intro Loader (in G \| Page W) | every page (first page of a visit) | — | `intro` |
| G \| Footer W | every page | — | `year` |
| C \| Page Hero | Project Overview, Community Impact, Cooling, Careers (built 2026-10-28) | Image, Heading, Text, Show Text 2 + Text 2, Button Label, Button Link (text: `#section` or URL), Button Hook (`data-video-open` on Cooling), Video URL. Home's hero is page markup (its overlay, width, heading size and `hero-sequence` hook differ) with a C \| Fact Bar; 404 by hand | `intro`, `parallax` |
| C \| Button | everywhere | variant (Solid, Light, Frost, Small), label, link, icon | — |
| C \| Fact Bar | Home (hero, aerial) (built 2026-10-28) | Label/Value 1–3, Show Labels 2 and 3 (off for the aerial bar) | `intro` (always on its root) |
| C \| Statement | Home intro (built 2026-10-28); the larger Cooling and Careers statements and the News/Events page heads are set with their pages | Eyebrow, Statement + Statement Muted (two-tone), Show Text + Text, Show Button + Button Label + Button Link | `text-fill` |
| C \| Stat Row | Home (built 2026-10-28) | Label, Value and Count 1–3, Suffix (shared, starts with a non-breaking space) | `count-up` |
| C \| Explore Rail | Home, Project Overview (built 2026-10-28) | — (fixed 4 cards) | `hscroll`, `parallax`, `cursor-button`, `text-fill` |
| Split + C \| Accordion Item (Is Glass) | Home FAQ, Cooling operations (item built 2026-10-28) | Item: Question, Answer (rich text), State (`open`/`closed`). The Split head and the Accordion wrapper are page markup; on Home the FAQs Collection List repeats the item | `accordion` |
| C \| Doc Accordion Item (Accordion Is Line) | Project Overview, Community Impact (Resources, Initiatives) (item built 2026-10-28) | Name, Description (rich), Button Label, Link, State; the Accordion Is Line wrapper and the Documents Collection List are page markup | `accordion` |
| C \| Image Accordion Item (dark) and C \| Image Accordion Item Light | Project Overview (Responsible Development, 5), Community Impact (Benefits, 7) (built 2026-10-28) | dark: Title, Number, Answer (rich), State; light: Title, Answer, State. The photos (`data-accordion-image`), the title and the autoplay Accordion wrapper are page markup | `accordion` (images, autoplay) |
| C \| Intro Row (with Media Frame) | Project Overview (About TeraWulf) (built 2026-10-28) | Logo, Heading, Media, Media Alt; the text is static rich text in the component (keeps the TeraWulf Inc. link) | `scroll-fx` (media-grow), `parallax` |
| C \| Collage | Project Overview (About the Project) (built 2026-10-28) | Eyebrow, Heading, Wide Image, Square Image, Statement + Statement Muted | `scroll-fx` (drift), `text-fill` |
| C \| Promo Card | Project Overview (Cooling teaser) (built 2026-10-28) | Image, Heading, Text, Button Label, Button Link | — |
| C \| Highlight Tabs | Project Overview (built 2026-10-28) | Eyebrow; Title, Text, Photo × 5 (the tab name repeats the Title) | `tabs` |
| C \| Photo Band | Cooling intro (built 2026-10-29) | Eyebrow, Statement + Statement Muted, Text; the photo, cloud layer and cut-out are one fixed scene inside the component | `band-inset`, `parallax` |
| C \| Step List | Cooling (built 2026-10-29) | Eyebrow, Heading; Text, Image, Alt × 3 | `steps` |
| C \| Hover Pair | Cooling (built 2026-10-29) | Image, Alt, Button Label × 2 (wide, narrow) | CSS hover + `lightbox` |
| C \| Video Frame | Careers (built 2026-10-29) | Poster, Poster Alt, Button Label, Video URL, Video Title | `scroll-fx` (media-grow), `video-modal` |
| C \| Benefit Grid | Careers (built 2026-10-29) | Title, Text, Photo × 4 | `benefits` |
| Quote Slider | Careers | — (Testimonials collection: two Collection Lists, quotes and photos; built with the Careers page, a component can't hold a CMS list) | `quote-slider` |
| Search Field, List Toolbar (pills, Select, Clear All) | News, Events | — (page markup, built with the News and Events pages; wired to Finsweet List) | Finsweet List (`list-filter` in the prototype), `custom-select` |
| Post Card (Is Row) | News list, Related | — (News Posts; page markup in each Collection List: the Topics nested list and the link to the current item can't live in a component through the API) | — |
| Event Card | Events, Other events | — (Events; page markup in each Collection List: current-item link, date formats on the badge) | `reveal` |
| C \| Empty Card | Events (upcoming list's empty state) (built 2026-10-29) | Label, Heading, Text, Button Label, Button Link, Image | `reveal` |
| C \| Breadcrumb, C \| Share Buttons | News and Event templates (built 2026-10-29) | Breadcrumb: Parent Label, Parent Link, Current (connect to Name on the templates); Share Buttons: none | `share` |
| Article Body (Rich Text Is Article), C \| Download Card, C \| Source Card | News template (cards built 2026-10-29) | Download Card: Name, Meta, Button Label, Link; Source Card: Label, Link Text, Link; Article Body is the Body field on the template | `lightbox` (rich-text images), `read-progress` |
| Detail Bar, Perk Grid, Callout, RSVP (C \| Download Card) | Event template | — (Events, Event Perks; page markup on the template, bound to the fields) | `calendar-links`, `count-up`, `reveal` |
| C \| Follow Band | News template, Events, Event template (built 2026-10-29) | Eyebrow, Heading, Text, Facebook, LinkedIn, X | `follow-fan` |
| Quick Links | 404 | — (built by hand on the 404 utility page) | — |

## Modules

In `prototype/src/modules/`, one file each, run from `prototype/src/main.ts`; all move into the repo's `src/modules/` unchanged. Every one finds its elements by `data-*` attributes and does nothing when they are absent; every motion is off under reduced motion.

| Module | `data-*` hooks | What it does |
| --- | --- | --- |
| gsap, smooth-scroll | `data-lenis-prevent` | GSAP + ScrollTrigger, Lenis smooth scrolling (recipes); off under reduced motion |
| anchor-scroll | — (any `#` link) | glides to the target below anything pinned; corrects an arriving hash (fixed for pinned sections, GOTCHAS 2026-10-28) |
| intro | `data-page-loader`, `data-page-loader-mark`, `data-intro`, `data-intro-media` | intro loader on the first page of a visit, then the hero parts rise in; 4 s CSS backstop; `html.intro-seen` from the head-code line |
| nav | `data-nav`, `data-nav-dropdown`, `data-nav-dropdown-toggle`, `data-nav-toggle`, `data-state` | dropdowns, mobile sheet (Lenis paused while open) |
| nav-state | `data-nav`, sets `data-nav-up` | the bar returns as a white bar when scrolling up |
| announcement | `data-announcement`, `data-announcement-close` | close and remember (localStorage, keyed by the message) |
| accordion | `data-accordion`, `data-accordion-item`, `data-accordion-trigger`, `data-state`; images: `data-accordion-image`, `data-accordion-scope`; autoplay: `data-accordion-autoplay`, `data-accordion-progress`; `data-accordion-open-first` | one open at a time with ARIA; optional photo per item and timed autoplay with a progress bar; `data-accordion-open-first` opens the first item when none starts open (Collection Lists, where every item takes the same State) |
| tabs | `data-tabs`, `data-tabs-frame`, `data-tab-list`, `data-tab`, `data-tab-panel`, `data-tab-bg`, `data-tab-progress` | Highlight Tabs: pinned from 768px, scroll moves through the tabs, the line fills; click or arrow keys glide to a tab |
| hscroll | `data-hscroll`, `data-hscroll-frame`, `data-hscroll-track`, `data-hscroll-item`, `data-hscroll-viewport` | Explore: pinned sideways scroll from 992px, a swipe row below |
| text-fill | `data-text-fill` | headings and statements fill letter by letter as they scroll up |
| parallax | `data-parallax` (`="x"` sideways) | photos drift inside their frames |
| scroll-fx | `data-media-grow` (start scale, default 0.86), `data-drift` (px) | a frame grows to full size as it arrives; an element drifts at its own speed |
| hero-sequence | `data-hero-seq`, `data-hero-content`, `data-hero-facts`, `data-hero-shade` | Home hero: text lifts and blurs, the photo darkens as it scrolls away |
| count-up | `data-count`, `data-prefix`, `data-suffix`, `data-decimals` | numbers count up once on arrival; the final text stays in the markup |
| cursor-button | `data-cursor-area`, `data-cursor-button` | the Explore pill follows the pointer over a card (mouse only) |
| band-inset | `data-band-inset`, `data-band-content` | the full-bleed photo draws in to an inset frame |
| steps | `data-steps`, `data-step`, `data-steps-bar`, `data-steps-count` | step cards fill in turn beside a sticky heading with a progress line |
| lightbox | `data-lightbox-group`, `data-lightbox`, `data-lightbox-item`, `data-lightbox-rich`, `data-full` | image viewer dialog with arrows and thumbnails; wraps rich-text images by itself |
| video-modal | `data-video-open`, `data-video-src`, `data-video-title` | the video in a dialog; "Video coming soon" without a src |
| benefits | `data-benefits`, `data-benefit-grid`, `data-benefit`, `data-benefit-progress` | the active Benefit box grows and hands over on a 4 s timer while on screen |
| quote-slider | `data-quote-slider`, `data-quote-slide`, `data-quote-bg`, `data-quote-prev`, `data-quote-next`, `data-quote-count` | quote and background photo change together; arrows, keys, swipe |
| custom-select | `data-select` › `[role=combobox]`, `.select-list`, native `select` | the sort dropdown over a hidden native select (Finsweet sort-trigger) |
| list-filter | `fs-list-*` markup, `data-list-root`, `data-list-more`, `data-list-page` | prototype stand-in for Finsweet List (filters, search, sort, show more). In Webflow: Finsweet Attributes (`recipes/finsweet/`); check the attribute names against the Finsweet List docs and wire Show more to the Collection List pagination (`fs-list-load="more"`) |
| reveal | `data-reveal` | entrance rise, staggered; the first screen is never hidden; the hiding is set by the module |
| calendar-links | `data-calendar` + `data-start`, `data-end` (ISO with offset), `data-title`, `data-location`, `data-details`; `data-calendar-google`, `data-calendar-ics` | Google Calendar link and .ics download from the event fields (bound as custom attributes) |
| share | `data-share="facebook|linkedin|x|native"` | share links from the page URL and title; native share sheet or copy link |
| read-progress | `data-read-progress`, `data-read-end` | the reading line on the CMS templates |
| follow-fan | `data-follow-area`, `data-follow-fan` | the Follow Band fan fans in and drifts against the pointer |
| style-guide-nav | `data-sg-nav` | the style guide's sidebar (style guide page only) |
| faq-schema | `data-faq-schema` (on the Home FAQ Accordion; reads each `data-accordion-item`'s `.accordion-question` and `.accordion-body`) | FAQPage JSON-LD in the head from the FAQs shown; none without items, no duplicate on re-run |

## Video list

| Video | Where | Status |
| --- | --- | --- |
| Meet our employees | Careers › Video Frame (Play Video) | file or YouTube URL needed; the dialog says "Video coming soon" |
| Cooling explained | Closed-Loop Cooling hero (Watch Cooling Explained) | file or YouTube URL needed |
| About TeraWulf | Project Overview › About TeraWulf media (a video in Figma; a still is used) | file needed; then the Media page (`/design/media`) holds it |

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
- 2026-10-28 · Accessibility pass before the handoff (axe WCAG 2.2 AA on every page at 1440 and 390): small text that failed contrast now passes — post topics and the Community Impact accordion text in Steel instead of Storm, the breadcrumb's current item without its extra dimming, stat labels at 64% and fact labels at 75% opacity, the mobile fact bar solid Steel. For designer review. Left as designed: the Cooling step cards' faded "not reached yet" state (motion, not resting text).
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

## Build kickoff

Paste into a new Claude session opened in the workspace folder (`TeraWulf (Sites)/`):

> Continue Lake Mariner Data: build in Webflow. The prototype is approved (every page and the style guide, 2026-10-28). Read the workspace CLAUDE.md, docs/handoff/ and the webflow-build skill. Start with the foundation: propose the variable batch from proposed.css and wait for my go-ahead before each Webflow write. Then tag styles, classes (from the styles plan), CMS collections, the repo port and the loader, the style guide page, the media page (if the video list has entries), components, and pages, one page per session.

