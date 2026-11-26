# Launch QA — Muskie Data

Site `6b05c5e78050528a5b59dc6a` (Muskie Data (TeraWulf)), staging
https://tw-muskie.webflow.io, MCP server `webflow-tw-muskie` (checked: it
reaches only this site). QA run 2026-11-26 by Claude. Muskie has no
Closed-Loop Cooling page (DIFF Q1).

Design source: Figma `i5kBzV34Xa9qvV7I64FxFZ`, Clean Pages (`2523:111`),
Muskie row: Home `2602:11718`, Project Overview `2602:14271`, Community
Impact `2602:12056`, Careers `2602:12382`, News `2602:12725`, News Article
`2602:13233`, Events `2602:13474`, Event `2602:13695`, FAQ `2602:13971`.

## How the design check was done

Done before reading `campuses/muskie-DIFF.md` or the Build Review markers.

- **Measured:** every page loaded at 1680 × 1000 (reduced motion, so pinned
  sections sit in place), each text element's box and computed font size,
  weight, family, line height, letter spacing and colour read from the
  browser, and matched by text against every visible text node of the
  page's Figma frame (font, size, weight, fill, letter spacing, line
  height, box). Differences over 0.5 px (size), 0.3 px (tracking), 1.5 px
  (line height), 8 px (x), 24 px (width), and vertical gaps that change by
  more than 10 px were listed; text in Figma but not on staging (and the
  reverse) was listed as copy differences.
- **Looked at:** full-page Figma render and staging screenshot side by side
  at the same scale, section by section (images, crops, icons, buttons).
- **820 and 390** (no design): full-page captures of every page, the
  repo's overflow check at 13 widths from 2560 to 360, smallest text size
  per page.

## Design check: findings

### New (not in the DIFF or on the markers)

| # | Page | Finding | Status |
| --- | --- | --- | --- |
| N1 | Home, Project Overview, Community Impact, Careers, FAQ | The hero shield (C \| Page Hero › Hero Mark) was Lake Mariner's zigzag shield; the design shows Muskie's (circuit lines). | **Fixed**: `shield-mdc.svg` (exported from Figma `2610:18763`, asset `6b088d35664a553b2c33e050`), Hero Mark aspect 80 / 90 |
| N2 | News (Featured and grid), News Article › Related, style guide | Cards without a photo showed Lake Mariner's 3D zigzag shield; the design shows Muskie's 3D shield. | **Fixed**: `news-post-shield-mdc.webp` (cut from the design's card bitmap, transparent, asset `6b088d35b342a76c8889d2c1`; files in `Assets/figma/muskie/`), Post Card Mark aspect 327 / 375 |
| N3 | News | Subhead read "Read on for project updates and news coverage."; the design says "Project updates, announcements and coverage from around the region." | **Fixed**. Lake Mariner and Justified staging show the old line too (their designs say the same as Muskie's): see the note for the other QA sessions |
| N4 | Home | Intro statement box 965 px wide (11 lines); the design's is 1240 px (8 lines). | **Fixed**: C \| Statement variant **Wide** (`max-width: 77.5em`) on the Home instance; measured 1221 px, 8 lines. Other instances keep the base |
| N5 | Community Impact | Resources & Documents on white; the design puts it on Frost. | **Fixed**: section Is Frost |
| N6 | Community Impact | "How Your Community Benefits" wrapped to 3 lines (375 px box); design 2 lines. | **Fixed**: Image Accordion Title `max-width` 6.7em → 9.6em; 2 lines; "Responsible Development" (Project Overview) unchanged at 2 lines |
| N7 | Event template | Events without perks (both real Muskie events) showed Webflow's grey "empty list" box under the body. | **Fixed**: new class Perk Grid Empty (`display: none`) on the Perks list's empty state, as on Lake Hawkeye |
| N8 | News Article template | Byline read " · 20 October 2026 · min read": Muskie's posts have no Author or Read Time. | **Fixed** in repo CSS (`src/styles.css`, 41626dd, user's OK): an empty Author or Read Time drops with its dot. Lake Mariner's full byline unchanged (checked) |
| N9 | Style guide | Doc Accordion and Source Card default links still went to lakehawkeyedata.com (the CAMPUS-PORT row not done on Muskie). | **Fixed**: defaults → Muskie's fact sheet and terawulf.com; `/design/style-guide` has no other campus's domain now |
| N10 | Project Overview › Highlights tab 1 | The design breaks the text before "Phase I…" and "Phase II…"; staging runs it as one paragraph (Text 1 is a plain-text prop). | Open, minor |
| N11 | Community Impact | In the design "sealed, closed-loop system" (card 1) and "Muskie Data Campus Electricity & Rates Fact Sheet" (document text) are links; plain text on staging. | Open, minor (would go to /faq and the fact sheet) |
| N12 | Events › community meeting | The lead (Summary) repeats the body's first paragraph word for word. | Open, content (CMS) |
| N13 | Events › job fair | "&" in the event name arrives HTML-escaped (`&amp;`) in the Event JSON-LD (`wf:seo`). | Open, minor: "and" in the name would avoid it |
| N14 | Home, Project Overview | The design writes "Explore The Campus", "About The Project" and the hero heading "…For Information On The…" in full title case; staging keeps Lake Mariner's case ("the", "for", "on"). | Not changed (same on every campus; DIFF built the hero "title case as on LM") |

Template-wide differences seen on Muskie that come from the shared build,
not from Muskie (Lake Mariner has the same, so they belong in its QA, not
here): document rows' Download is a text link (design: white pill) and the
row title is Ink (design `#002552`); the muted half of statements is solid
Storm (design Storm at 60–64 % opacity, visually close); "Learn More" and
"Project Highlights" eyebrows at 64 % white (design 100 %); /news search
field 384 px wide (design 512); footer column labels set to weight 500
(only Space Mono 400 is loaded, so it renders as designed).

### Known (DIFF, decisions or existing markers)

- Announcement bar hidden (Q4); "Part of" beside the TeraWulf logo (design
  mixes "Site of" and "Part of"; decision 2026-10-27).
- Home FAQ order: Home opens on the communities question, the design on
  water; but Muskie's FAQ page design opens on communities and one Order
  field serves both. Client to pick one order (punch list).
- Key figures 800 / 0 / 800 MW as in Figma (Q2), to confirm.
- About the Project split (DIFF): **fixed** in this QA (C \| Collage: new
  props Show Text + Text, off by default; the Project Overview instance:
  "…one gigawatt of data center" dark, "capacity over time, with initial
  operations beginning in 2028." muted, the stewardship paragraph as body
  text 600 px wide below it).
- Community Impact card 3 button "View openings" (design "CTA", Q6);
  EVAPCO button links the manufacturer's low-sound brochure PDF.
- Resources & Documents on Project Overview: not in Muskie's design;
  built per DIFF Q8 (proposed). Red marker, client to confirm.
- Careers keeps Lake Mariner's three testimonials ("Director of
  Operations, Lake Mariner Data"; photos at the Lake Mariner campus) and
  its employees film, as Muskie's Figma does (Q3).
- News cards link to the publishers (Q5); article pages stay, reachable
  only from Related articles. Article and Event designs show Lake
  Mariner's sample content (branding-only frames).
- Explore cards: chips only on Community Impact and Careers (round-1
  decision); Muskie's Figma also has chips on Events and News, some
  reading "[X] Lorem ipsum".
- Footer and Follow band: LinkedIn, X, Instagram (no Facebook, 2026-11-24);
  "Site by Brand Vision Marketing"; Follow band without its line.
- News: "Sort by" (design "Filter by"), Clear All only while filtering,
  6 cards then Show more. Events: the sample event fills Upcoming (design:
  the empty card).
- Accordion body text Steel instead of Storm (contrast, 2026-10-28).
- Fact sheet: the PDF is on Webflow since 2026-11-24; Download returns the
  PDF (200, 127 KB) on both pages. Marker turned green.

### 820 and 390

Layout holds on all nine pages and the 404: nothing passes the right edge
at any of 13 widths (2560–360), nothing overlaps (except Webflow's staging
badge), the smallest text is 11 px (date badge month, event address line,
Explore chips at 820: as designed for those labels). Rows that run off
the right edge on purpose are swipe rows: Explore cards, Community Impact
cards, the highlight tab row and the news category pills.

## Pre-launch QA (webflow-launch checklist)

Checked on staging with the repo scripts (config pointed at
tw-muskie.webflow.io), every published page and both templates.

| Check | Result |
| --- | --- |
| `wf:links --external` (crawl from /, 18 pages) | No broken internal link. `#` links: footer All Sites, Impact, Investors, Privacy Policy, Cookie Policy (every page, every campus); Careers View All Openings (portal URL not decided). Share and calendar buttons on event pages read `#` until the script fills them (filled: checked). External: publishers returned 403/429 to the bot (Daily Independent, FOX 56); not confirmed by hand |
| `wf:a11y` 1440 and 390, 11 pages + 404 | No failures except one on staging only: the Webflow "Staging" badge's label contrast (`#wfc-environment`), which production doesn't have |
| `wf:seo` (15 pages crawled) | Titles and descriptions on every page; one H1 per page; long titles on some news posts (from their names); 404 has no description or share image; job fair JSON-LD `&amp;` (N13) |
| `wf:outline` | One H1 per page, H2/H3 in order. Headings with text-fill read twice in the plain text dump (letters plus the readable copy), same on every campus |
| `wf:overflow` 13 widths | Nothing passes the right edge on 11 pages |
| Console | No errors on any page (the 404 page logs its own 404, expected) |
| 404 | `/zz-not-a-page` returns 404 with nav and footer, but the page shows only "404": the planned 404 design (hero, Back to Home, quick links) isn't built, on any campus. Utility page, Designer only |
| Other campuses' text | None on public pages except the kept Careers testimonials (Q3). `/design/style-guide` (published, noindex) still holds Lake Mariner sample copy (Barker, Lake Ontario, NYISO) |
| Other domains, Squarespace, other sites' CDN | None on any page or template (all assets on Muskie's CDN `6b05c5e7…`); muskiedatacampus.com only in JSON-LD and the e-mail (the production domain) |
| Sitemap | `/sitemap.xml` returns 404 on Muskie (and on Justified, Lake Hawkeye, Chesapeake); Lake Mariner's returns 200. The copies don't have Site settings › SEO › auto-generate sitemap on (the API can't read it: plan-gated). Turn on at launch |
| CAMPUS-PORT | Every row ticked for Muskie (the Doc Accordion / Source Card row done today) |
| `pnpm test` (repo) | Passes |

Sample content to remove before launch:
- Event "Sample Event — Muskie Data Hiring Day" (`/events/sample-muskie-hiring-day`, item `6b060a42df813d92fad55cd8`) and the four Event Perks made for it (DIFF).
- The Careers testimonials if the client doesn't keep Lake Mariner's (Q3).
- `/design/style-guide` and `/design/media`: internal pages, noindex; unpublish them or keep them out of the sitemap at launch (same decision as Lake Mariner).
- Closed-Loop Cooling page: draft, still Lake Mariner's copy and SEO title; leave it unpublished or delete it.

## What was fixed (2026-11-26)

All with the user's go-ahead (batches A and B, and the repo CSS), written
through `webflow-tw-muskie`, published to webflow.io only, and checked on
the published pages (HTML and measurements at 1680):

- **Batch A:** N1, N2 (assets uploaded with `create_asset` + S3; hero
  mark in C \| Page Hero; Post Card Mark on /news × 3, Related, style
  guide), N3, N5, N7, N9.
- **Batch B:** About the Project split (C \| Collage props Show Text, Text
  and classes Collage Copy, Collage Body), N4 (C \| Statement variant
  Wide), N6.
- **Repo:** N8 (`src/styles.css`, 41626dd; GOTCHAS 2026-11-26 on nested
  `:has()`).
- **Build Review row 3:** Home, Project Overview, Community Impact,
  Careers, News, News Article and FAQ re-shot at 1680/820/390 (full page,
  reduced motion); markers: Project Overview 2 and Community Impact 3
  turned green; new green markers for each fix above; Home 2 reworded;
  new red marker on Project Overview for the Resources section (Q8).

## Client punch list

Plain-language questions for TeraWulf before Muskie goes live:

1. **Key figures.** Home shows Total capacity 800 MW, Contracted 0 MW,
   Open 800 MW, as in the design. The hero text says more than 1,000 MW and
   your 5 October press release says contracted capacity is 1 GW. Which
   numbers should we show?
2. **Testimonials and video on Careers.** The three quotes are Lake Mariner
   employees (their titles say "Lake Mariner Data") and the employees film
   was shot at Lake Mariner. Keep them on the Muskie site, replace them
   with Muskie people, or hide them?
3. **Current openings.** The careers section shows a picture of the job
   portal with Barker, NY and West Palm Beach jobs, and the "View All
   Openings" button has no link yet. Which page should it open, and should
   we show a live list instead?
4. **Documents on Project Overview.** We added the Fact Sheet and the
   information-session presentation under Project Overview as well as
   Community Impact. Keep them on both pages?
5. **"View openings" button** on Community Impact (third card): the design
   left this as a placeholder; is a link to Careers right?
6. **FAQ order.** On the home page the design opens with the water
   question, on the FAQ page with "How will the Eastern Kentucky
   communities benefit?". One order has to serve both: which question
   comes first?
7. **Footer links.** Where should "All Sites", "Impact" and "Investors"
   (under Part of TeraWulf) and "Privacy Policy" and "Cookie Policy" go?
   (terawulf.com has a privacy policy with a cookie section.)
8. **Domain.** Is the site going live at muskiedatacampus.com (with or
   without www)? The search-engine data is written for that address.
9. **Events.** There are no upcoming events. Should the "Nothing scheduled"
   card show, or do you have an event to list? The community meeting page
   repeats its first sentence; may we trim it?
10. **Announcement bar.** It is switched off on Muskie. Turn it on when
    there is a Muskie event?
11. **"Who Beowulf Is"** is the small label above "Meet Our Employees" on
    Careers, as in the design. Is that wording right?

## Launch steps still to do (not done in QA)

1. **Site plan** on the Muskie Webflow site (paid plan) — person.
2. **Domain and DNS:** attach the production domain in Webflow, point DNS,
   keep the e-mail records; SSL and www/apex redirect checked after —
   person (DNS), Claude checks.
3. **Sitemap:** Site settings › SEO › auto-generate sitemap on; check
   `/sitemap.xml` lists the pages (noindex on `/design/`).
4. **Redirects:** the two 301 rows in `campuses/muskie-DIFF.md`
   (`/s/MDC-Power-Fact-Sheet.pdf`, `/s/Muskie-Community-Info-Session-Presentation.pdf`)
   in Site settings › Publishing › 301 redirects; and the old site's other
   paths (`/newsroom`, `/home`) to their new pages, crawled before launch.
5. **Release:** tag the repo release and set `RELEASE` in Muskie's head
   code (README › Release), shared with the other campuses.
6. **Remove samples:** the sample event and its perks; decide on the
   testimonials (punch list 2) and the `/design/` pages.
7. **404 page:** build the planned 404 in the Designer (utility page), as
   on Lake Mariner.
8. **Robots/noindex:** staging robots.txt disallows all; check production
   allows indexing after publishing to the domain (`wf:seo --live --canonical`).
9. Proofread every page, real-device check, GA4/consent if wanted — person.
