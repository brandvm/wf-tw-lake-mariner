# Launch QA — Lake Mariner Data

Site `6ae0f7d7bcf5d7622aeac214` · staging https://tw-lake-mariner.webflow.io ·
MCP `webflow-tw-lake-mariner` · Figma `i5kBzV34Xa9qvV7I64FxFZ`, Clean Pages
(`2523:111`), Lake Mariner row. QA session 2026-11-26.

Status: **draft — findings in, fixes pending the user's go-ahead.**

## How it was checked

- **Design (1680):** every Figma frame's text and image nodes were read with
  the Plugin API (font, size, colour, letter-spacing, line-height, box) and
  matched to the computed styles and boxes on staging at a 1680 viewport
  (body 16px, so Figma px = CSS px), plus side-by-side section crops for what
  numbers miss. Findings were formed before reading `FINAL-DESIGN-DIFF.md`
  or the Build Review markers, then sorted as known or new.
- **820 / 390 (no design):** full-page and scroll-through screenshots at 390,
  768, 800, 820, 992, 1100, 1280, 1440; scripted checks for clipping,
  overlaps, small text, tap targets, distorted images, blank pinned screens,
  console errors and failed requests; the mobile menu driven at 390 and 820.
- **Repo checks:** `wf:links --external` (23 pages crawled), `wf:a11y
  --all-widths`, `wf:seo`, `wf:overflow` (13 widths), `wf:outline`, on every
  page and both CMS templates.

## Design check — findings

"Known" = already in `FINAL-DESIGN-DIFF.md`, a Build Review marker, HANDOFF
Decisions or the BUILD-NOTES changes log. Figma → staging values in px at
1680.

### Known, staying as is (decided)

| Page | Difference | Why it stays |
| --- | --- | --- |
| Home | "Explore the Campus" (design: "The") | Chloe: capital C only |
| Project Overview | About the Project statement is the live site's two sentences (design: the 750 MW sentence only) | Chloe: match lakemarinerdata.com |
| Project Overview, Community Impact | Resources & Documents and Initiatives sections (not in the design) | Chloe: both accordions on both pages |
| Project Overview | Explore rail copy is Home's (design has its own intro and card text) | one shared component; Chloe's newer wording (D7) |
| Home, Project Overview | Explore Events and News cards have no chips | decided earlier (FINAL-DESIGN-DIFF › Home) |
| Community Impact | hero is one paragraph | Chloe |
| Closed-Loop Cooling | hero line ends at "Lake Ontario." | Chloe's copy |
| News | intro "Read on for project updates and news coverage."; "Sort by:" | Chloe; the control sorts |
| everywhere | Small buttons 28–30px tall (design 35) | changes log 2026-11-23 (prototype size) |
| everywhere | Satoshi for Manrope; Steel for Storm on small text; accordion +/− | decisions 2026-10-27/28 |

### Known, open

| Page | Item |
| --- | --- |
| Event template | Reserve card shows with no RSVP URL (Build Review marker 09-3) |
| Closed-Loop Cooling | How It Works eyebrow "Lorem Ipsum"; two Operations answers "Copy to come" (client copy) |
| About the Project | heading "About the Project" vs design "About The Project" (D5) |

### New

High = a client sees it at a glance.

| # | Page › section | Figma → staging | Sev | Kind |
| --- | --- | --- | --- | --- |
| N1 | Home › aerial Key Highlights bar, 768–840px | fixed 843px wide, runs off both screen edges (cut "Key Highlights:" / "Fully funded") | high | Webflow style |
| N2 | /404 | only "404" between nav and footer; the planned hero, message, buttons and quick links aren't built; no meta description or share image | high | Designer (utility page) |
| N3 | Home › aerial photo | horizon ~110px higher, more foreground (object-position 50% 0%) | med | Webflow style |
| N4 | Home › FAQ background | worker photo much darker and blurred (overlay gradients, position 50% 100%); design shows him clearly | med | Webflow style |
| N5 | Home › hero fact bar, aerial bar | 12% smaller: padding in em on the 14px font (729×74 → 621×65; 925×74 → 873×65) | med | Webflow style |
| N6 | Community Impact, Careers › Meet Our Employees | intro paragraph #112135 → #3e5570, width 641 → 788 (line breaks differ) | med | Webflow style |
| N7 | Community Impact › investment statement | 6 → 7 lines ("jobs," drops a line), section +48 | med | style or text-fill |
| N8 | Community Impact › investment scene, 992–1280 | worker cut-out rises into the statement's last two lines | med | Webflow style |
| N9 | Careers › Your Benefits | heading→grid 64 → 112, boxes 208 → 228, images 279×176 → 261×194 | med | Webflow style |
| N10 | Closed-Loop Cooling › Operations | section 876 → 794, darker (sunset glow and lower coolers lost) | med | Webflow style |
| N11 | Project Overview › Cooling promo | gap above 200 → 121; heading 434 → 505 wide (wraps differently); button default, design Small | med | Webflow style |
| N12 | News › search field | 512 → 384 wide, placeholder cut ("…media conte") | med | Webflow style |
| N13 | News Article › Related | heading 40 → 24 (D5 class); card titles 24 → 20, no 2-line clamp; card bg #f5f5f5 → Frost | med | Webflow style |
| N14 | Event template › hero | 82px bottom padding under the Detail Bar missing (hero 788 → 700) | med | Webflow style |
| N15 | everywhere › default buttons | 46 → 42 tall (hero buttons, Explore More, Show more, Submit a question) | med | Webflow style |
| N16 | /news, /events, templates, /404 at 390 | H1/breadcrumb 1–2px under the nav when the announcement wraps to two lines | med | Webflow style |
| N17 | /faq, /news at 390 | filter pills cut mid-word at the 20px gutter, no bleed or fade | med | Webflow style |
| N18 | Community Impact › rates row at 390 | scrollable region has no keyboard access (axe serious) | med | Webflow attribute |
| N19 | everywhere › accordions | trigger row 33 vs 30: +5px per item (Barker, Grid, Operations, FAQ, RD) | low | Webflow style |
| N20 | Testimonials (CI, Careers) | section padding 80 → 120 | low | Webflow style |
| N21 | section paddings | 100 → 120 on Home intro and Explore, PO About the Project, Events past, Cooling Photo Band; PO About TeraWulf 150 → 120 | low | Webflow style |
| N22 | Article quote, Event callout | padding 40/48 → 60/72, radius 8 → 12 | low | Webflow style |
| N23 | Event template › Other events | card titles 24 → 20, card bg | low | Webflow style |
| N24 | C \| Empty Card | heading 34 → 40 (FAQ closing card, Events empty state) | low | Webflow style |
| N25 | /faq › answers | #3e5570 → #112135 | low | Webflow style |
| N26 | Nav | pill shadow and blur missing; Part of TeraWulf logo 124×26 → 101×21; Contact Us 35 → 30 | low | Webflow style |
| N27 | Footer | link columns ±5px; dividers 10% → 20% white; bottom row wraps with hanging dividers at 992–1050 | low | Webflow style |
| N28 | Event Detail Bar | LOCATION label 10–25px above DATE/TIME when the location wraps | low | Webflow style |
| N29 | Mobile menu | current item Storm on navy, ~3.3:1 | low | Webflow style |
| N30 | Small text at 992–1440 | event card location and badge month 9.4px; chips 10.3px | low | Webflow style |
| N31 | Event perk at 390 | "$28 – 36 / hr" wraps "hr" alone | low | content/style |

### New — content (CMS)

| # | Where | What |
| --- | --- | --- |
| C1 | News › Built for the Future, Understanding Energy Pricing | live-site posts with full bodies; staging has "Placeholder body…" (Built for the Future) and the recycling article's text in Energy Pricing (copied from the Figma frame, which mixes the two). Excerpts empty, so no lead and an empty meta description |
| C2 | News › 200 jobs, Inside an Accelerated AI Data Center Project | on the live site these are links to outside articles (buildwcg.com, datacenterrichness.substack.com); staging shows "Placeholder body" and no Source Name, so the card meta has no "· source" |
| C3 | News | "How data centers are transforming local communities" (Fast Company link) is on the live site, not on staging |
| C4 | Documents (PO, CI) | five items "Description and file from the Documents collection." with Download → `#`; "Town of Lansing Planning Board Presentation" and the Cayuga study are Lake Hawkeye's |
| C5 | Events | "Cayuga Information Session \| Webinar for Lansing Residents" is Lake Hawkeye's |
| C6 | Announcement bar | promotes the 24 July hiring event, now under past events |

## Pre-launch QA

| Check | Result |
| --- | --- |
| `wf:overflow` (11 pages × 13 widths) | 0 findings (the Key Highlights bar, N1, is clipped by the page wrapper so the script can't see it) |
| `wf:a11y` 1440 + 390 | serious: CI rates row (N18); Cooling step cards' faded state (decided 2026-10-28, motion); `#wfc-environment` label (staging-only switcher, not on production). Everything else passes |
| `wf:seo` | /404 no description/og; Built for the Future empty description (C1); long titles on sample posts |
| `wf:outline` | one H1 per page, no skipped levels (doubled heading text is text-fill's sr-only copy, by design) |
| `wf:links --external` | `#` links: footer All Sites, Impact, Investors, Privacy Policy, Cookie Policy; Reserve (N/known); Download on empty Documents (C4); Play Video (CI, Careers: no Video URL on those instances?); Watch Cooling Explained (no video); View All Openings (no portal URL); Google Calendar/ICS on sample events without dates. Share links are filled by JS. Externals 400/403 = bot-blocking (LinkedIn, X, Facebook share) |
| Console / network | no errors or failed requests on any page at 1440 and 390 |
| Mobile menu | opens, 9 links, scroll locked, Escape closes, links navigate |
| Other domains | no link to lakehawkeyedata.com, cayugadatacampus.com, Squarespace or another site's CDN; `6ae24c74…` is this site's own CMS store. Content naming another campus: C4, C5 |
| sitemap.xml | lists only `/design/style-guide` and `/design/media` (check Site settings › SEO before launch) |
| robots.txt | `Disallow: /` (webflow.io staging default) |

## Fixed in this session

_(pending)_

## Client punch list

_(pending)_

## Launch steps that remain

_(pending)_
