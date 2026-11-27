# Launch QA — Lake Hawkeye Data

Site `6b05cabde86e14300445c161` (Lake Hawkeye Data (TeraWulf)), staging
https://tw-lake-hawkeye.webflow.io, MCP server `webflow-tw-lake-hawkeye`
(checked before the first write: it reaches only this site). QA run
2026-11-26 by Claude. Every Webflow write was published to webflow.io only.

Design source: Figma `i5kBzV34Xa9qvV7I64FxFZ`, Clean Pages (`2523:111`),
Lake Hawkeye row: Home `2615:21805`, Project Overview `2615:23469`,
Community Impact `2615:22095`, Closed-Loop Cooling `2621:3251`, Careers
`2615:22304`, News `2615:22475`, News Article `2615:22810`, Events
`2615:22993`, Event `2615:23122`, FAQ `2615:23338`.

## How the design check was done

Done before reading `campuses/lake-hawkeye-DIFF.md` or the Build Review
markers.

- **Measured:** each page at 1680 × 1000 with reduced motion (pinned
  sections sit in place), every visible text element's box and computed
  font size, weight, family, colour, letter spacing and line height, matched
  by text against the visible text nodes (per styled segment) of the page's
  Figma frame. Listed: size > 0.6 px, any weight or family change, colour
  > 14/255 per channel or > 12 % opacity, tracking > 0.3 px, line height
  > 1 px, x > 6 px, width > 12 px, plus text only in Figma or only on
  staging (copy differences). Section heights compared frame by frame.
- **Looked at:** the full Figma render and a staging screenshot side by side
  at the same scale, page by page (images, crops, icons, buttons). Image
  files compared by name and, for marks, rendered next to the Figma nodes.
- **820 and 390** (no design): full-page captures of every page, text and
  image boxes checked for anything past the viewport or under 11 px,
  `wf:overflow` at 13 widths (2560–360), and a width sweep of the Home fact
  bars from 768 to 1280 (the overflow check misses it: the section clips).

## Design check: findings

### New (not in the DIFF or on the markers)

| # | Page | Finding | Status |
| --- | --- | --- | --- |
| N1 | Home, Project Overview, Community Impact, Cooling, Careers, FAQ | The hero shield (C \| Page Hero › Hero Mark, `shield.svg`) was Lake Mariner's zigzag shield. The design shows Lake Hawkeye's three-curve shield (Figma `2624:8069`). The DIFF said the hero shield was the same as Lake Mariner's; it isn't. | **Fixed**: `shield-lhd.svg`, cut from the site's own vertical logo (asset `6b08926d65297c06c791f425`), Hero Mark aspect 71.4058 / 81.2402 |
| N2 | News (Featured and grid), News Article › Related, style guide | Cards without a photo showed Lake Mariner's 3D zigzag shield; the design shows Lake Hawkeye's 3D shield (Figma `2628:11899`). | **Fixed**: `news-post-shield-lhd.webp` (exported at full size from the design, 400 × 427, asset `6b08926d6f8be13faa133c2d`) on all five Post Card Mark images, Post Card Mark aspect 400 / 427. Files in `Assets/figma/lake-hawkeye/brand/` |
| N3 | Home › hero | Heading capped at 936 px (3 lines) and the line at 752 px; the design's frames are 996 px (2 lines) and 900 px. | **Fixed**: Heading Max Width `--figma-size:996`, Text Max Width `--figma-size:904`. Measured: heading 996 px, 2 lines; line 904 px, 4 lines, as in the design |
| N4 | Home › intro statement | Statement box 990 px (8 lines); the design's is 1240 px (6 lines). | **Fixed**: new combo Statement + Is Wide (`max-width: 77.5em`) on the C \| Statement root (used on Home and the style guide only). Measured 1203 px |
| N5 | Home, Project Overview › Explore | The design puts chips on the Events card (Hiring Events, Community Meetings) and the News card (Articles, Blog Posts, Press Coverage); staging had chips on Community Impact and Careers only. | **Fixed**: 5 chips in C \| Explore Rail at the design's positions (`--x/--y` from the Figma frames). Measured within 1 px of the design horizontally |
| N6 | Community Impact › Community benefits | Card photos 2 and 3 were Lake Mariner's (cooler fans from above, a substation); the design shows a crew by the pipework and a worker looking over the water. | **Fixed**: both photos exported from the design (`Assets/figma/lake-hawkeye/community-impact/ci-benefit-*.webp`), alt texts rewritten. They have no responsive sizes yet (see LA) |
| N7 | Community Impact › Community benefits | The design has 5 cards in a slider with prev/next arrows (Economic & workforce impact, Infrastructure & regional investment are cards 4–5); staging shows the first 3 as static cards. | Open (client punch list, user's call): a slider needs new shared code |
| N8 | Closed-Loop Cooling › hero | The line read "Sustainable, water-responsible design that protects Cayuga Lake." The design says "Lake Hawkeye is designed around a closed-loop, air-cooled cooling system that continuously recirculates cooling fluid through a sealed system." | **Fixed** |
| N9 | Home › aerial Key Highlights bar (768–1200 px) | The bar ran off both screen edges (left edge at −304 px at 768): Lake Hawkeye's highlight texts are longer than Lake Mariner's and `.fact-bar` was absolute and `nowrap`. | **Fixed**: Fact Bar `width: max-content; max-width: calc(100% - 4em); white-space: normal`. Measured inside the screen at 768–1280; the hero fact bar is unchanged |
| N10 | All pages at 360–390 | The announcement text wrapped to 3 lines and pushed the nav down, so the News, Events and 404 headings sat 18 px under the nav. | **Fixed**: text shortened to "Lake Hawkeye Open House \| Tuesday, December 1, Lansing Middle School" (2 lines). The heading now touches the nav with no gap, the same as on Lake Mariner (shared, see below) |
| N11 | Home › schema | The Organization logo in the JSON-LD was Lake Mariner's `Favicon.png` (copied asset). | **Fixed**: `logo-lhd-shield-512.png` (asset `6b0893698cd43e01b7ce9adb`, 512 × 512); `docs/seo/schema/lake-hawkeye/home.jsonld` updated to match |
| N12 | Style guide | C \| Doc Accordion Item and C \| Source Card defaults still linked to lakehawkeyedata.com (the CAMPUS-PORT row was not done). | **Fixed**: Doc Accordion Link → Lake Hawkeye's own study PDF asset; Source Card → terawulf.com, "Originally published on terawulf.com" |
| N13 | FAQ › hero | The hero image (`faq-hero-faq-v2.webp.webp`) publishes with one 2400w `srcset` entry: no responsive sizes, so phones load the full file. | Done 2026-11-27 (MANUAL-TODO LA) |
| N14 | Community Impact › Initiatives | The design's open NYSERDA row has a "Learn More" button; staging's says "Download" (the Doc Accordion button label is shared by every row). | Open, minor |
| N15 | Community Impact › Grid accordion item 1; Project Overview › Water | The design bolds "not impact local power availability or reliability" and links "closed-loop" in the Water answer; both are plain on staging (rich-text props, Designer only). | Open, minor |
| N16 | Community Impact › investment statement | The dark part of the two-tone statement ends at "…high-quality jobs,"; the design keeps it dark through "generating tax revenue,". | Open, minor |
| N17 | Closed-Loop Cooling › Inside the Loop | The design shows "Below 60°F" as the active tab; staging starts on "Warmer days" (the module alternates them anyway). | Not changed |

### Known (in the DIFF or on the markers)

- Community Impact: Tax base and Aesthetic cards have no button and the
  rates intro has no Learn More: the design's buttons read "CTA" with no
  target (DIFF open question; marker ✗ 2).
- Community Impact › Topping Out line calls Lake Mariner the flagship;
  Careers and Community Impact testimonials are Lake Mariner employees
  (roles "… Lake Mariner Data"), as in the design (DIFF).
- Community & Partnership Initiatives › Local Contractors Letters of
  Support reads "…at the Lake Mariner facility", as in the design's open
  state (DIFF).
- Key Benefits keeps "to local sources" (design slip: Lake Ontario); FAQ hero
  line names Lansing (design repeats a Barker paragraph); Events search says
  "Search past events…" (DIFF).
- Upcoming event card shows the type ("Open House"); the design shows
  "Upcoming · Tue, Dec 1, 2026" (DIFF, needs a Designer date format).
- Resources & Documents and Initiatives sections are on Project Overview and
  Community Impact although this design row doesn't show them (D1, kept on
  purpose). Five Resources documents read "Description and file to come
  from the Documents collection." (DIFF batch 2).
- Facebook button and the Follow band's Facebook line are gone (Lake
  Mariner's review round 1); "Part of TeraWulf" instead of "Site of".
- Inside the Loop shows the two cooling videos with tabs, not the design's
  drawings (Lake Mariner client decision, 2026-11-12).

### Shared with Lake Mariner (the template, not Lake Hawkeye)

Seen here, but Lake Mariner and the other copies have the same, so they
belong to the Lake Mariner QA: dark-section eyebrows ("Learn More",
"Project Highlights") at 64 % white (design 100 %); News Article "Related
articles" heading 24 px (design 40 px); Event body headings 48 px (design
40 px); C \| Empty Card heading 40 px (design 34 px); FAQ rows about 5 px
taller each; "Sort by:" instead of "Filter by:"; footer credit "Site by Brand
Vision Marketing"; body copy in Satoshi where the design has Manrope
leftovers; Meet Our Employees and Topping Out video frames shown at full size
(the media-grow end state; the design shows the 600 px start); the page-head
H1 touches the nav at 360–390 when the announcement bar is on (0 px gap on
Lake Mariner too).

## Pre-launch QA

Run against tw-lake-hawkeye.webflow.io with the deployed bundle (`--live`),
config pointed at the site from a scratch `webflow-build.config.json`.

| Check | Result |
| --- | --- |
| `wf:links` (31 pages, 48 external links) | No broken internal link. External: one real 404, the Town of Lansing moratorium PDF in the post "Lansing Hires Legal Counsel…" (client content). The rest are bot blocks or timeouts that open fine in a browser (LinkedIn, X, governor.ny.gov, Bloomberg, dps.ny.gov, tompkinsweekly.com, ithaca.com 429, nyseg.com, YouTube). `#` links: footer All Sites, Impact, Investors, Privacy Policy, Cookie Policy (every page); Careers › View All Openings; Cooling › Watch Cooling Explained (no video yet); Download on the 5 Resources documents without a file. Share, calendar and Play Video links are filled by the bundle at runtime |
| `wf:a11y` 1440 and 390 (12 pages) | Serious only: the staging environment pill's contrast (`#wfc-environment`, staging only, not on production); Cooling step cards' faded "not reached yet" text (Lake Mariner decision, left as designed); Community Impact rates rail not keyboard-focusable at 390 (`scrollable-region-focusable`, shared component) |
| `wf:seo` and `--canonical` | No canonical on any page: set the global canonical URL with the domain at launch. Three posts without a cover have an empty `og:image` (Pace Ralli, TeraWulf Secures Long-Term Ground Lease, Understanding Energy Pricing). Long titles/descriptions on posts are notes only. `/sitemap.xml` is 404 (auto sitemap off on the copies) |
| `wf:overflow` (12 pages × 13 widths) | 0 findings; plus N9, found by hand and fixed |
| `wf:outline` | One H1 per page. Two heading skips inside CMS rich text: the open-letter post (H4 after H2) and the sample event ("What to expect") |
| Console | No errors or failed requests on 10 pages at 1680 and 11 at 390 |
| 404 | Unknown URLs return a real 404, but the page shows only the word "404" (same on every campus; not built in this QA, user's call) |
| Lake Mariner / Barker / Ontario / NYISO text | Lake Mariner: testimonials (roles, 2 photo alts), the Topping Out line, the Letters of Support document, and news bodies that are about TeraWulf's Lake Mariner site (legitimate). Barker only in the open-letter post and the style guide; Ontario only on the style guide (noindex). NYISO is Lake Hawkeye's own power market (New York) and stays |
| Other sites' files | No `lakehawkeyedata.com` file link left (only the planned production domain in schema and canonical values), no Squarespace URL, no Lake Mariner or other campus CDN: every asset loads from this site's CDN. cayugadatacampus.com e-mail kept (parent decision) |
| Sample content to remove | Event "Sample Event — Lake Hawkeye Careers Open House" (`/events/sample-lake-hawkeye-careers-open-house`, item `6b060a508e7c9af05afd2d29`); the 5 placeholder Resources descriptions; Cooling "Copy to come" answers (2) and "Lorem Ipsum" eyebrow; style guide page (internal, noindex) |

## What was fixed (published 2026-11-26, checked on staging)

N1–N6, N8–N12 above, in three batches with the user's go-ahead:

1. Brand and quick fixes: Lake Hawkeye's hero shield and 3D news shield,
   Home hero widths, Cooling hero line, Home schema logo, component defaults,
   shorter announcement text.
2. Design gaps: Explore chips on Events and News, Community benefits photos,
   Home statement width.
3. Key Highlights bar at tablet widths.

Checked after publishing: hero `<img>` is `shield-lhd.svg` on every hero,
20 news cards use the new shield (two hidden placeholder images still name
the old file; they are `w-dyn-bind-empty`, never shown or loaded), Home
measurements as in the table, CI cards show the new photos, Cooling line,
nav gap at 360/390/820, fact bars at 768–1280, style guide has no
lakehawkeyedata.com link.

CAMPUS-PORT, Lake Hawkeye column: every row is now done or checked in the
copy (FAQ OG image is this site's own copy of the design's FAQ photo; Empty
Card props checked on /faq; Featured Lead eager/high and Loop Modes
`data-poster` checked in the published HTML; component defaults done today).
The FAQ hero `srcset` is still missing (LA).

Build Review row 4 (`2556:2`): Home, Project Overview, Community Impact,
Cooling, Careers, News, News Article and FAQ re-shot at 1680/820/390 after
the fixes, every note rewritten to what is true now (green where it
matches, red with the client question where not). Events and Event were
unchanged by this QA and their green notes still hold.

## Client punch list

Plain-language questions for TeraWulf about the Lake Hawkeye site:

1. **Community benefits cards.** The design shows five cards in a slider
   (adding "Economic & workforce impact" and "Infrastructure & regional
   investment"). Do you want all five, and where should the buttons on the
   tax-base, aesthetics and new cards go? The design's buttons say "CTA".
2. **"Learn more" under "What actually drives local electric rates?"** Where
   should it link?
3. **Employee stories.** The three testimonials on Careers and Community
   Impact are Lake Mariner employees (Jim Spoon, Dan Heidemann, Jesse
   Rohring). Keep them, or do you have Lake Hawkeye voices?
4. **Topping Out Ceremony.** The text calls Lake Mariner "our flagship
   site". Is that right for the Lake Hawkeye site?
5. **Letters of support.** The document text says "…at the Lake Mariner
   facility". Should it say Lake Hawkeye, or are these letters from Lake
   Mariner's contractors?
6. **Documents.** Five Resources & Documents entries have no description
   or file yet (Independent Advisory Council Agreement, Understanding Energy
   Prices, Local Contractors Letters of Support, Closed-loop cooling
   explained, Town of Lansing Planning Board Presentation). Please send the
   text and PDFs, or tell us which to remove.
7. **Closed-Loop Cooling page.** "Maintenance and Longevity" and "Continuous
   Operations During Maintenance" have no text yet, and "How It Works" has a
   placeholder label above it. Please send the copy. We also need the
   "Cooling Explained" video.
8. **Careers.** Where should "View All Openings" go (your careers portal)?
9. **Footer.** Which pages should "Privacy Policy" and "Cookie Policy" open?
   (terawulf.com has a privacy policy with a cookie section.)
10. **Photos.** Many photos are shared with the other campus sites. Do you
    have Lake Hawkeye photos for the heroes and event cards?
11. **One broken source link.** The Town of Lansing's moratorium PDF linked
    from "Lansing Hires Legal Counsel…" no longer exists on the town's site.
    Is there a new link?
12. **Sample event.** "Sample Event — Lake Hawkeye Careers Open House" is
    for review only and will be deleted before launch, unless you want a
    real careers event in its place.

## Launch steps that remain

- **Site plan** on Lake Hawkeye Data (TeraWulf) (paid Webflow plan, needed
  for the custom domain).
- **Domain and DNS:** connect www.lakehawkeyedata.com (and the apex) in
  Site settings › Publishing; DNS records at the registrar; set the global
  canonical URL; turn on the auto-generated sitemap (`/sitemap.xml` is 404
  now).
- **Redirects:** the 15 rows of the redirect map in
  `campuses/lake-hawkeye-DIFF.md` (Site settings › Publishing › 301
  redirects), the specific `/newsroom/` row above the wildcard.
- **Release:** tag a release in the repo and set `RELEASE` in this site's
  head code (the installed value is `null` today, which loads the staging
  bundle).
- **Remove samples:** the sample event; resolve the placeholder copy listed
  above before going live.
- **Footer links:** All Sites, Impact, Investors (terawulf.com/our-sites#lake-hawkeye-data,
  /our-impact, investors.terawulf.com, as on Chesapeake), Privacy, Cookie;
  not changed in this QA (user's call).
- **404 page:** build it (Justified's approach works through the API); not
  changed in this QA (user's call).
- **FAQ hero and Community benefits photos:** responsive sizes (LA).
- Client answers above.
