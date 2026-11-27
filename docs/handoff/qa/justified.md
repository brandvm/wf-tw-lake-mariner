# Launch QA — Justified Data

Site `6b05c58e6a2daeafb0769727`, staging https://tw-justified.webflow.io,
MCP server `webflow-tw-justified` (site ID checked before the first write:
the server reaches this site only). QA run 2026-11-26. Justified has no
Closed-Loop Cooling page (J1); `/closed-loop-cooling` returns 404.

Design: Figma `i5kBzV34Xa9qvV7I64FxFZ`, "↪ • Template — Clean Pages", the
Justified row (Home `2591:1225`, Project Overview `2594:3266`, Community
Impact `2601:9927`, Careers `2594:5029`, News `2594:5435`, News Article
`2594:5809`, Events `2594:6174`, Event `2594:6517`, FAQ `2594:6915`).

## How the design check was done

Independent of the DIFF and the Build Review markers (read only afterwards,
to sort the findings):

- **Measured, not eyeballed.** For each frame, a read-only Figma script
  listed every visible text node (text, box, size, weight, family, colour,
  line height, letter spacing, case) and every image fill. On staging, a
  Playwright script at 1680×1000 (reduced motion, after scrolling through)
  listed every text block with its box and computed styles, every image
  (file, box, object-fit/position, alt), every section and every link.
  The two lists were compared section by section.
- **Paired screenshots.** Figma export of each frame and a full-page
  staging capture at 1680, cut into the same 1400px bands and set side by
  side, for photos, crops and anything the text lists miss.
- **820 and 390**: full-page captures of all nine pages and the 404,
  `wf:overflow` at 13 widths (2560–360), and a sweep of the Home key
  highlights bar from 1366 to 480.
- Lake Mariner staging measured the same way where a difference looked
  shared (Explore spacing, footer, News subtitle, 404), to tell
  template-wide differences from Justified-only ones.

## Design check: findings

### New (not in the DIFF or on the markers)

| # | Page › section | Finding (measured) | Status |
| --- | --- | --- | --- |
| N1 | Home › hero | Photo was Lake Mariner's rooftop coolers (`hero-home`), not the design's aerial of the Hawesville smelter site. Home share image was the same LM photo. The marker said "Hero as designed" | **Fixed**: `jd-home-hero.webp` from the Figma export, hero + Home og:image |
| N2 | Home › hero lead | Figma text frame 900px (3 lines); staging 752px (4 lines) | **Fixed**: Text Max Width `--figma-size:900`, now 900px, 3 lines |
| N3 | Home › key highlights bar | Clipped off both edges from 768 to ~1110px (first item at x −225 at 820): Justified's highlights are longer than Lake Mariner's and `.fact-bar` is absolute + nowrap | **Fixed**: Fact Bar `width: max-content; max-width: calc(100% − 4em); white-space: normal`; no clipping 1680–768, hero bar unchanged |
| N4 | Home/PO › Explore rail | Events and News cards had no chips; the design has Hiring Events, Community Meetings / Articles, Blog Posts, Press Coverage | **Fixed**: five chips added to Justified's C \| Explore Rail at the Figma positions |
| N5 | PO › hero heading | Figma heading frame 777px ("Former Century Aluminum / smelter site"); staging 1033px broke as "…Smelter / Site" | **Fixed**: Heading Max Width `--figma-size:777` |
| N6 | PO › About the Project | Design: 24px two-tone statement (dark to "including", muted after) and a separate 16px paragraph ("Leveraging…") 80px below. Staging put both in the 24px statement | **Fixed**: C \| Collage got a Text prop and a Collage Note paragraph (16px, 5em above; 2em on tablet); statement split as designed |
| N7 | PO › About the Project | Wide photo alt "Aerial view of the Lake Mariner campus … Lake Ontario" (component default alt) | **Fixed**: "Aerial view of the former Hawesville smelter site beside the Ohio River" |
| N8 | CI › How Your Community Benefits | Heading 3 lines in a 375px measure (design 2 lines, 537px); items started 86px low | **Fixed**: combo Is Wide (max-width 9.6em) on this heading only |
| N9 | CI › investment statement | Muted part started at "generating tax revenue"; design starts it at "and collaborating…" | **Fixed** |
| N10 | CI › Strengthening The Grid | Grid Connection answer: design sets "not impact local power availability or reliability" in bold; staging regular | **Fixed** 2026-11-27 in the Designer (JA) |
| N11 | News › page head | Line read "Read on for project updates and news coverage." (Lake Mariner's); design "Project updates, announcements and coverage from around the region." | **Fixed** |
| N12 | News › fire-trucks post | Cover was a dark data-hall interior: the Figma node stacks four image fills and the build took the bottom one. Design shows the group photo with the two fire trucks | **Fixed**: cover replaced with the visible fill (768px; the article cover is soft at full width — a larger file from the client would help) |
| N13 | Noise-levels post | Source card "Justified Data Campus" linked to `#` (Source Name set, no URL) | **Fixed**: Source fields cleared (it's Justified's own post); the card hides. The card meta no longer shows "· Justified Data Campus" |
| N14 | Careers › video, testimonials | Alt texts named Lake Mariner (Video Frame default "…Lake Mariner data halls…", two testimonial photos) | **Fixed** (Video Frame default, two CMS photo alts). Roles still say "Lake Mariner Data": client (J5) |
| N15 | Events › past cards | Every card uses the same stand-in photo (`event-justified`); the design gives each card its own photo (stand-ins from other pages). The DIFF says "the design's single event photo" — that is not what the frame shows | Open: client to send event photos (punch list) |
| N16 | PO › Explore rail | Design gives this page its own heading and texts ("Explore the campus", "Everything about the project, the community and working here — in one place.", Careers "Construction and trade roles…"); staging shows Home's. The rail is one prop-less component, same on Lake Mariner | Open, low: needs props on the component (all sites) |
| N17 | /404 | Only a bare "404" heading between nav and footer (same on every campus) | **Fixed** (built through the API, see below) |
| N18 | Event template | Sample event body uses an H3 ("Why TeraWulf") under the H1: skipped level | Goes with the sample event |
| N19 | Home › hero photo sizes | The new hero asset was uploaded through the assets API without the Designer app open, so it had no responsive variants | **Done** 2026-11-27 (JB): variants arrived once the Designer was open; the hero publishes with `srcset` |
| N20 | Every page hero (all five sites) | C \| Page Hero's image publishes `sizes="250px"`, so a 1440@2× screen loads the 500 px file for a 1656 px-wide hero (soft); phones get `-p-800`. Static full-width images publish `100vw` correctly | **Open**, cross-site: GOTCHAS 2026-11-27 lists what was tried and the options |

Smaller differences, accepted or shared with Lake Mariner (no action):
headings in title case where Figma uses sentence or TITLE case ("Site of
the…", "Community Impact", "Explore the Campus", CI accordion titles — the
Lake Mariner decision); Explore section 20px more top space, Home about
section +53px (image runs further under the figures) and the footer 52px
shorter — identical on Lake Mariner staging; FAQ eyebrow at 64% white and
footer text opacities (accessibility pass); fact-bar gaps 4–9px tighter;
footer "Site by Brand Vision Marketing" (design "© by …"), Instagram instead
of Facebook (decisions); News "Sort by" and hidden Clear All (decisions);
News grid shows 6 + Show more (design lists all); event cards show Location
· Location Note (design: Location only).

### Known (DIFF, decisions or existing markers)

| Ref | What | Status |
| --- | --- | --- |
| J3 | Nav label "Part of" everywhere (design mixes "Site of") | decided |
| J4 / L9 | CI card 3 "NYISO 2025 report" (New York grid report on a MISO campus), card 1 "Read the FAQ" where the design says "CTA" | kept as designed (user, 2026-11-26); client punch list |
| J5 / L7 | Careers testimonials are Lake Mariner's employees with "Lake Mariner Data" roles | client punch list; the only Lake Mariner text left on the public pages |
| L4 | Upcoming events shows the sample event | sample goes before launch |
| L5 | Home FAQ order (design: river water first) | client |
| L6 | Outside-publisher posts have one-line bodies | client |
| L8 | Announcement bar text | client |
| L10 | PO hero photo is the design's 1024px export | client |
| L11 | Highlight tab photos and About TeraWulf still are Lake Mariner's, as in the design | client |

### 820 and 390

Layout holds on all nine pages and the 404: nothing passes the right edge
at any of 13 widths (`wf:overflow`), no clipped or overlapping text, type
readable (smallest body text 13–14px; chips at 390 flow along the card
bottom). The one break was N3 (key highlights bar clipped 768–1110px),
fixed. The highlights bar now wraps to two lines per item from ~1100px
down to 768; below 768 it stacks as before.

## Pre-launch QA (webflow-launch checklist)

| Check | Result |
| --- | --- |
| `wf:links` (22 pages crawled, external links checked) | No broken internal link. `#` links: footer All Sites, Impact, Investors (same on Lake Mariner), Privacy Policy, Cookie Policy (open decision), Careers "View All Openings" (open decision); Play Video, share buttons, Google Calendar/ICS are filled by the bundle; the noise post's Source card fixed (N13). External 403/400 are bots blocked (LinkedIn, X, Fluor, DCD, share URLs) |
| `wf:a11y` 1440 and 390 | No failures except the Webflow "Staging" badge label contrast (`#wfc-environment`), staging only. Re-run after the fixes on /, /project-overview, /community-impact, /404: clean |
| `wf:seo` (34 pages) | Titles, descriptions, OG on every page; one H1 each. Notes: 7 posts without a cover have an empty og:image (template binds Cover Image); long titles on posts (from their names); 404 has no description (not indexed) |
| `wf:overflow` | 0 findings, 13 widths, 11 page types |
| `wf:outline` | One H1 per page; the event template's sample body skips to H3 (N18) |
| Console | No errors on any page at 1680 (pageerror and console.error captured) |
| 404 | `/zz-qa-missing` returns 404 with the new page: hero (campus photo, shield, "Page not found", "Error 404. …", Back to Home) and quick links to Project Overview, Community Impact, Careers, News, Events, FAQ |
| No Lake Mariner / Barker / Ontario / NYISO | Public pages: only the Careers testimonial roles (J5) and the CI "NYISO 2025 report" button and its nyiso.com link (J4, kept as designed). The style guide (`/design/style-guide`, noindex) is full of Lake Mariner specimen text |
| Other domains / CDNs | No lakemarinerdata.com, lakehawkeyedata.com, muskie, chesapeake, Squarespace or other-site Webflow CDN references in any published page (36 fetched). cayugadatacampus.com: the PO "HERE" article link only (allowed) |
| Sitemap | `/sitemap.xml` 404 (no site plan yet; auto-sitemap to turn on at launch) |
| CAMPUS-PORT | Every row ticked for Justified (Cooling poster row n/a) |
| Sample content | Sample Event — Justified Data Hiring Day (`/events/sample-justified-hiring-day`, item `6b060b8fc06b4ed42be7e874`); unused Event Perks and the Webinar event type in the CMS; style-guide specimens with Lake Mariner text |

## What was fixed (2026-11-26, user's go-ahead for batch A and the 404)

Published to webflow.io and checked on staging (measurements re-taken):

1. Home hero photo → Justified aerial (`6b088d43954df1a49d14f68f`), Home og:image the same; lead width 900px.
2. Home key highlights bar wraps instead of clipping (Fact Bar class).
3. Explore rail: chips on the Events and News cards.
4. PO hero heading width 777px; About the Project two-tone split + 16px paragraph (C \| Collage: new Text prop, Collage Copy wrapper, Collage Note class); wide-image alt; Collage defaults now Justified text.
5. CI heading on two lines (combo Is Wide); investment statement split.
6. News page-head line; fire-trucks cover (CMS); noise-levels post Source card removed (CMS).
7. Alt texts without Lake Mariner: Video Frame poster default, two testimonial photos; C \| Page Hero defaults now Justified text.
8. /404 built through the API (the 404 utility page is reachable by the element and component tools): C \| Page Hero + Quick Links nav with six C \| Button links; Quick Links class `width: 100%`.
9. Build Review row 2: Home, Project Overview, Community Impact and News re-shot at 1680/820/390 (2026-11-26, motion on, as before); markers updated — see below.

Build Review row 2 markers now: Home 1 ✓ hero, 2 ✗ FAQ order, 3 ✓
Explore, 4 ✓ intro/highlights · PO 1 ✗ hero photo soft, 2 ✓ tabs, 3 ✓
Responsible Development, 4 ✓ hero heading + About the Project, 5 ✗ Explore
texts · CI 1 ✓ benefits, 2 ✗ CTA/NYISO buttons, 3 ✓ statement, 4 ✗ bold
phrase · Careers 1 ✗ testimonials (Lake Mariner) · News 1 ✓ featured, 2 ✗
newer post leads, 3 ✓ page head · Article 1 ✗ one-line bodies · Events 1 ✓
upcoming (sample), 2 ✗ one photo for all past cards · Event 1 ✓ · FAQ 1 ✓.

MANUAL-TODO JA (bold phrase) and JB (hero responsive sizes) done 2026-11-27 in the Designer; CI marker 4 is green. Found then: N20, every hero's `sizes="250px"` (open, all sites).

## Client punch list

1. **Careers testimonials.** The three quotes are Lake Mariner employees (Jim Spoon, Dan Heidemann, Jesse Rohring) and their roles read "… Lake Mariner Data", as in the design and on today's justifieddatacampus.com. Keep them, or send quotes and photos from Justified's own team?
2. **"NYISO 2025 report" button** on Community Impact › No emissions links to a New York grid report, but Justified is in the MISO market. Should it link to a MISO or Kentucky source, or be removed?
3. **"Read the FAQ" button** on Community Impact › Closed-loop cooling (the design says "CTA"): is the FAQ the right place, or is there a page you want it to open?
4. **Footer links "All Sites", "Impact", "Investors"** under Part of TeraWulf go nowhere yet. Which terawulf.com pages should they open?
5. **Privacy Policy and Cookie Policy:** link to terawulf.com's privacy policy, or will Justified have its own pages?
6. **"View All Openings"** on Careers: which careers portal URL?
7. **Home FAQ order:** the design shows "Will the campus use water from the Ohio River?" first; the site follows the FAQ page order (community benefit first). Which first?
8. **Photos:** a larger Project Overview hero photo (the design file has a 1024px one); a full-size fire-trucks photo for that news post; real photos for each past event; Justified photos for the Project Highlights tabs and About TeraWulf (they are Lake Mariner's today).
9. **Announcement bar:** keep "TeraWulf Hiring Event for Data Center Operators | Reserve Your Spot Today", or change it now that there's no upcoming event?
10. **News summaries:** posts from other publishers show one line and a link to the original. Add short summaries?
11. **Production domain and e-mail:** confirm justifieddatacampus.com (www or not) and info@justifieddatacampus.com.

## Launch steps still to do (not done in QA)

1. **Site plan** on the Justified Webflow site (needed for the custom domain, sitemap and redirects).
2. **Domain and DNS:** attach justifieddatacampus.com, move DNS from Squarespace (keep the e-mail records), SSL, www/apex redirect to the canonical host.
3. **301 redirects** (Site settings › Publishing), in this order:

   | Old path | New path |
   | --- | --- |
   | `/home` | `/` |
   | `/newsroom` | `/news` |
   | `/closed-loop-cooling` | `/faq` |
   | `/newsroom/fluor-signs-epc-contract-with-terawulf-for-large-scale-data-center-campus-in-kentucky` | `/news/fluor-signs-epc-contract-with-terawulf` |
   | `/newsroom/cowj3pcg7it5lgv4y3oz1pz4vcvlhm` | `/news/terawulf-energy-plan-power-agreement-approved` |
   | `/newsroom/a-data-center-developer-says-it-is-committing-to-beshears-data-center-requirements` | `/news/developer-committing-to-beshears-data-center-requirements` |
   | `/newsroom/kentucky-pdc-approves-482-mw-power-agreement-for-terawulfs-justified-data-campus` | `/news/kentucky-psc-approves-482-mw-power-agreement` |
   | `/newsroom/former-aluminum-smelter-demolition-marks-first-step-toward-future-for-hawesville-site` | `/news/smelter-demolition-first-step-for-hawesville-site` |
   | `/newsroom/terawulf-expands-digital-and-power-infrastructure-portfolio-with-strategic-acquisitions-in-kentucky-and-maryland` | `/news/terawulf-expands-portfolio-kentucky-and-maryland` |
   | `/newsroom/category/(.*)` | `/news` |
   | `/newsroom/(.*)` | `/news/%1` (the other 12 live slugs are identical on Webflow) |
   | `/events/community-hiring-session-rmb7b` | `/events/hancock-county-career-fair` |
   | `/events/community-information-session-pjte5` | `/events/community-informational-event-october-2026` |
   | `/events/contractor-outreach-gsfrt` | `/events/local-contractor-event-with-terawulf-and-fluor` |
   | `/events/contractor-outreach` | `/events/local-contractor-outreach-event` |
   | `/events/community-hiring-session` | `/events/local-hiring-event-with-gradd` |
   | `/events/community-information-session` | `/events/community-informational-event-february-2026` |
   | `/s/Hawesville-Community-Info-Session-Presentation-Feb-2026vF.pdf` | the info-session PDF on Justified's CDN (DIFF, Files) |

   Built from the live sitemap and `?format=json` feeds (2026-11-26); every
   target answers 200 on staging. `/events/hancock-county-opportunity-expo`,
   `/project-overview`, `/community-impact`, `/faq`, `/careers` and `/events`
   keep their paths. If Webflow won't take the `%1` wildcard, list the 12
   unchanged newsroom slugs one by one.
4. **Remove samples:** delete the sample event; unpublish or password the style guide and media pages (`/design/*`), or replace their Lake Mariner specimen text.
5. **Sitemap:** turn on auto-generate, exclude `/design/style-guide` and `/design/media`; submit in Search Console.
6. **Release:** tag the bundle and set `RELEASE` in Justified's head code (shared bundle).
7. **Launch checks:** `wf:install --live`, `wf:seo --live --canonical`, noindex off, forms (none on this site), GA4 if wanted.
8. N20: hero `sizes="250px"` on all five sites (GOTCHAS 2026-11-27).
