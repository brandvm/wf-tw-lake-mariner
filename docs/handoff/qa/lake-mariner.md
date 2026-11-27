# Launch QA — Lake Mariner Data

Site `6ae0f7d7bcf5d7622aeac214` · staging https://tw-lake-mariner.webflow.io ·
MCP `webflow-tw-lake-mariner` (site ID checked before the first write: the
server reaches this site only) · Figma `i5kBzV34Xa9qvV7I64FxFZ`, Clean Pages
(`2523:111`), Lake Mariner row (Home `2523:112`, Project Overview `2523:617`,
Community Impact `2523:1235`, Cooling `2523:1696`, Careers `2523:2102`, News
`2594:7635`, News Article `2523:2885`, Events `2523:3252`, Event `2523:3595`,
FAQ `2597:2`). Design check 2026-11-26; fixes published 2026-11-27.

## How it was checked

- **Design (1680), measured.** A read-only Figma script listed every visible
  text node (text, size, family/style, colour, letter spacing, line height,
  case, box) and every image fill of each frame. On staging, Playwright at
  1680×1000 (reduced motion, after scrolling through) listed every text block
  with its computed styles and box, every image with object-fit/position,
  and every section. The lists were matched by text and compared section by
  section (size ±1px, x ±4px, width ±8px, colour, weight; y as a running
  offset, so a jump marks the section whose height differs), plus
  side-by-side crops of the Figma export and the staging shot for what
  numbers miss (photos, crops, overlays, icons). At 1680 the site's body is
  16px, so Figma px = CSS px.
- **Independence.** The findings were written before `FINAL-DESIGN-DIFF.md`
  and the Build Review markers (`2556:2`, row 1) were read; then each was
  sorted as known or new.
- **820 / 390 (no design):** full-page and scroll-through screenshots at
  390, 768, 800, 820, 992, 1100, 1280 and 1440; scripted checks for clipped
  text, overlaps, text under 12px, tap targets, distorted images, blank
  pinned screens, console errors and failed requests; the mobile menu
  driven at 390 and 820.
- **Repo checks:** `wf:links --external` (23 pages), `wf:a11y --all-widths`,
  `wf:seo`, `wf:overflow` (13 widths), `wf:outline`, on every page, both
  CMS templates and the 404.

## Design check — findings

Figma → staging, px at 1680. "Known" = already in `FINAL-DESIGN-DIFF.md`, a
Build Review marker, HANDOFF Decisions or the BUILD-NOTES changes log.

### Known, staying as is (decided)

| Page | Difference | Why it stays |
| --- | --- | --- |
| Home | "Explore the Campus" (design "The") | Chloe: capital C only |
| Project Overview | About the Project statement is the live site's two sentences (design: the 750 MW sentence only) | Chloe, 12 Nov: match lakemarinerdata.com (punch list asks to confirm) |
| Project Overview, Community Impact | Resources & Documents and Initiatives (not in the design) | Chloe: both accordions on both pages, hidden while empty (Community Impact's Resources is hidden now: no documents in it) |
| Project Overview | Explore rail repeats Home's copy (the design gives this page its own) | one prop-less component on all five sites; Chloe's newer wording (D7) |
| Home, Project Overview | Explore Events and News cards have no chips | decided earlier (FINAL-DESIGN-DIFF › Home) |
| Community Impact | hero is one paragraph | Chloe |
| Closed-Loop Cooling | hero line ends at "Lake Ontario." (design adds "— a fully sealed system…") | Chloe's copy |
| News | intro "Read on for project updates and news coverage."; "Sort by:" | Chloe; the control sorts |
| everywhere | Small buttons 28px (design 35) | changes log 2026-11-23 (prototype size) |
| everywhere | Satoshi for Manrope; Steel for Storm on small text; accordion +/− swapped | decisions 2026-10-27/28 |
| Careers | "Meet Our Employees" title case; video frame grows 600 → content width; inactive benefit photos dimmed | D5; decisions 2026-10-27 |

### Known, open → fixed in this QA

| Page | Item | Now |
| --- | --- | --- |
| Event template | Reserve card showed with no RSVP URL (Build Review marker 09-3) | fixed (see below) |

### New

High = a client sees it at a glance. ✔ = fixed in this QA.

| # | Page › section | Figma → staging | Sev | Status |
| --- | --- | --- | --- | --- |
| N1 | Home › aerial Key Highlights bar, 768–840px | ran off both screen edges (x −38 at 768) | high | ✔ |
| N2 | /404 | a bare "404"; the planned page wasn't built; no description | high | ✔ |
| N3 | Home › aerial photo | horizon ~110px higher, more foreground (`object-position 50% 0%`; image box 90px higher) | med | open: designer to confirm the crop |
| N4 | Home › FAQ background | worker photo darker and softer than the design (overlay gradients) | med | open: designer to confirm the overlay |
| N5 | Home › hero fact bar, aerial bar | 12% smaller: padding in em on the 14px font (729×74 → 621×65; 925×74 → 873×65) | med | ✔ height 74 as designed (padding 12/24/10px); widths 627 / 879, item gaps 58 vs 64 left |
| N6 | Community Impact, Careers › Meet Our Employees | intro paragraph Steel #3e5570 and 788 wide (design Ink #112135, 641) | med | open: the same combo (Statement Text Is Narrow) sets Cooling's paragraphs, where the design is 700 wide; one value can't match both |
| N7 | Community Impact › investment statement | 6 → 7 lines ("jobs," drops a line), section +48 | med | open (text-fill word spans; a repo change for all five sites, not made) |
| N8 | Community Impact › investment scene, 992–1280 | worker cut-out rises into the statement's last two lines | med | open |
| N9 | Careers › Your Benefits | heading→grid 64 → 112, boxes 208 → 228, images 279×176 → 261×194 | med | open |
| N10 | Closed-Loop Cooling › Operations | section 876 → 794, darker (sunset glow and lower coolers lost) | med | open |
| N11 | Project Overview › Cooling promo | 200 → 121 above the card; heading 434 → 505 wide (wraps "Closed-Loop Cooling / System"); button default (design Small) | med | open |
| N12 | News › search field | 512 → 384 wide, placeholder cut | med | ✔ 512 (100% on phones) |
| N13 | News Article › Related | heading 40 → 24 | med | ✔ D4, 40px. Card titles 24 → 20 without the 2-line clamp, card bg #f5f5f5 → Frost: open (low) |
| N14 | Event template › hero | 82px under the Detail Bar missing (Detail Bar → lead 182 → 100) | med | ✔ 182 |
| N15 | everywhere › default buttons | 46 → 40 tall: `Button/Height` is 2.875em but the button's font is 14px | med | ✔ 46 (Button Size height 3.2857em; 44px on phones; Small variant unchanged at 28) |
| N16 | /newsroom, /events, templates, /404 at ≤560px | H1/breadcrumb 1px under the nav when the announcement wraps to two lines | med | ✔ 19px (page-head variables +1.125em in the Mobile Landscape and Mobile modes) |
| N17 | /faq, /newsroom at 390 | filter pills cut mid-word at the gutter | med | ✔ pills wrap on phones |
| N18 | Community Impact › rates row at 390 | scrollable region not keyboard-reachable (axe serious) | med | ✔ `tabindex="0"`, `role="region"`, label |
| N19 | everywhere › accordions | trigger row 33 vs 30: +5px per item | low | open |
| N20 | Testimonials (CI, Careers) | section padding 80 → 120 | low | open |
| N21 | section paddings | 100 → 120 on Home intro and Explore, Project Overview About the Project, Events past, Cooling Photo Band; About TeraWulf 150 → 120 | low | open: the design mixes 100 and 120 for the same section type; ask the designer |
| N22 | Event callout | padding 40/48 → 60/72 | low | ✔ 40/48 (181 vs 180 tall). The article quote box (repo CSS) is still 60/72: open |
| N23 | Event template › Other events | card titles 24 → 20, card bg | low | open |
| N24 | C \| Empty Card | heading 34 → 40 (FAQ closing card, Events empty state) | low | open |
| N25 | /faq › answers | #3e5570 → #112135 | low | open |
| N26 | Nav | pill shadow and blur missing; Part of TeraWulf logo 124×26 → 101×21; Contact Us 35 → 28 (Small, decided) | low | open |
| N27 | Footer | link columns ±5px; dividers 10% → 20% white; bottom row wraps with hanging dividers at 992–1050 | low | open |
| N28 | Event Detail Bar | LOCATION label 10–25px above DATE/TIME when the location wraps | low | open |
| N29 | Mobile menu | current item Storm on navy, ~3.3:1 | low | open |
| N30 | Small text at 992–1440 | event card location and badge month 9.4px; chips 10.3px (the fluid scale's floor) | low | open |
| N31 | Event perk at 390 | "$28 – 36 / hr" wraps "hr" alone | low | open |
| N32 | Footer › Part of TeraWulf | All Sites, Impact, Investors → `#` | med | ✔ terawulf.com/our-sites#lake-mariner-data, /our-impact, investors.terawulf.com (as Chesapeake) |

### New — content (CMS)

| # | Where | What | Status |
| --- | --- | --- | --- |
| C1 | News › Built for the Future, Understanding Energy Pricing | placeholder body / the wrong article's text; empty excerpts | ✔ by the migration session (2026-11-27): live bodies, 10 photos, excerpts |
| C2 | News › 200 jobs, Inside an Accelerated AI… | placeholder bodies, no source | ✔ same: link-out posts with Source Name/URL (WCG, Data Center Richness) |
| C3 | News | "How data centers are transforming local communities" missing | ✔ same: added (Fast Company) |
| C4 | Documents (PO, CI) | placeholder descriptions, `#` downloads, Lansing and Cayuga documents | ✔ cleaned (none left on the published pages); Community Impact's Resources section is hidden while empty |
| C5 | Events | Cayuga webinar (Lake Hawkeye's) and sample events | ✔ deleted 2026-11-27 |
| C6 | Announcement bar | promotes the 24 July hiring event, now past | open: client |
| C7 | Energy Pricing post | the live copy says household rates "in Lansing" | open: client |

## Pre-launch QA

| Check | Result |
| --- | --- |
| `wf:overflow` (10 pages × 13 widths, after the fixes) | 0 findings. N1 was invisible to it (clipped by the section); measured separately: the bar now sits inside the screen at 768–992 |
| `wf:a11y` 1440 + 390 (after the fixes) | no violations on /community-impact, /404, /newsroom, the Event template; before: the rates row (fixed), the Cooling step cards' faded state (decided 2026-10-28, motion) and the staging-only environment label (now hidden on webflow.io) |
| `wf:seo` | every page has title, description, og tags and one H1. Fixed: /404 title and description. Notes: long post titles (from their names) |
| `wf:outline` | one H1 per page, no skipped levels (doubled heading text is text-fill's screen-reader copy) |
| `wf:links --external` | no broken internal link. `#` left: Privacy Policy, Cookie Policy (client); Watch "Cooling Explained" ×2 (no video yet). Share, calendar and Play Video links are filled by the bundle. LinkedIn/X/share URLs answer 403/400 to bots |
| Console / network | no errors or failed requests on any page at 1440 and 390 |
| Mobile menu | opens, 9 links, scroll locked, Escape closes, links navigate |
| 404 | any unknown URL answers 404 with the new page (hero over the Cooling rooftop photo, "Page not found", Back to Home, quick links to Project Overview, Community Impact, Closed-Loop Cooling, Careers, News, Events, FAQ); one H1; axe clean |
| Other domains | no link or file from another campus's domain, Squarespace or another site's Webflow CDN (`6ae24c74…` is this site's own CMS store) |
| Sample content | none left: sample posts and events deleted 2026-11-27 |
| sitemap.xml / robots.txt | staging lists only the two `/design/` pages and disallows all (webflow.io defaults); turn the auto sitemap on and check it at launch |

## Fixed in this QA (published to webflow.io, checked)

Batch 1 (2026-11-27, user's go-ahead):
1. **Fact Bar** (N1): `width: max-content; max-width: calc(100% - 4em); white-space: normal`, as on Justified. At 768 the aerial bar is x 28–740 (was −38–806).
2. **Page-head padding on phones** (N16): `Calc/Nav Height + 3.3125em` and `+ 3.375em` 7.3125/7.375 → 8.4375/8.5em in the Mobile Landscape and Mobile modes. Gap under the nav 1 → 19px at 360–520.
3. **Filter Pills** (N17): wrap on phones (`flex-wrap: wrap`, overflow visible).
4. **Rates rail** (N18): `tabindex="0"`, `role="region"`, `aria-label="Key drivers of local electric rates"`.
5. **Footer** (N32): All Sites, Impact, Investors linked to terawulf.com; stale imported `href="#"` attributes removed from those three and from Contact and FAQ (GOTCHAS 2026-11-27, renamed links).
6. **/404** (N2): C | Page Hero (Cooling rooftop photo, "Page not found", "Error 404. …", Back to Home → /) above a Section with a `nav` (Quick Links, `aria-label="Popular pages"`, `width: 100%`) of seven C | Button page links; title "Page not found — Lake Mariner Data" and a description.
7. **Reserve card** (known red): the C | Download Card on the Events template sits in a plain div ("RSVP (shown when RSVP URL is set)"), Visibility Conditional: RSVP URL is set → Visible, else Hidden (Designer, Chrome), as GA/EC/FD/HB on the copies.

Batch 2 (Figma match):
8. **Button Size** height 3.2857em (46px), 3.1429em on phones (44px); the Small variant got its own phone height (2.1875em), so Small buttons stay 28px (N15).
9. **Fact Bar** padding 0.857/1.714/0.714em, min-height 5.286em: 74px tall as designed (N5).
10. **Search Field** width 32em, max-width 100% (100% on phones): /newsroom search 512px (N12).
11. **Related articles** heading D5 → D4 (40px) (N13).
12. **Detail Bar** margin-bottom 5.125em (3em tablet, 2em phones): 182px to the lead as designed (N14).
13. **Callout** padding 1.6667em/2em (40/48px at its 24px font) (N22).
14. **Event template empty states** (found while re-shooting): with only one event on the site, Other events (and Perks on an event without perks) showed Webflow's grey empty box; both DynamoEmpty elements now have the existing class Post Topics Empty (hidden). The "Other events" heading stays until a second event exists (punch list).

The Reserve card condition was tested on the published page: with the hiring event's RSVP URL cleared there was no Reserve card; restored, it came back.

Batch 3 (live-site news content) was already done by the migration session the same morning (C1–C5); checked on staging.

Not done (needs a decision, the designer, or a repo change shared by five sites): N3, N4, N6–N11, N19–N31. They are the red markers on Build Review row 1.

## Build Review row 1

Re-shot 2026-11-27 (all ten pages at 1680/820/390, reduced motion, after the fixes; the Event section now shows the real hiring event, the sample is gone). Markers: existing ones re-read and corrected where stale (footer credit, Resources on Community Impact, the News Featured block); 09-3 Reserve card now green; new markers for this QA, green for what was fixed and red with a one-line reason for what is open (see the table above).

## Client punch list

In `CLIENT-PUNCH-LIST.md` › Lake Mariner, plus the questions for every site at the top of that file. In short:
1. Privacy Policy and Cookie Policy: which pages?
2. Footer All Sites / Impact / Investors: we linked terawulf.com's pages; other ones wanted?
3. Announcement bar: it advertises the 24 July hiring event, which is over. New message, new event, or hide it?
4. The Energy Pricing post (copied from the live site) says rates "in Lansing": should it say Barker?
5. Closed-Loop Cooling: copy for "Maintenance and Longevity" and "Continuous Operations During Maintenance"; the label above "How It Works" (says "Lorem Ipsum"); the "Cooling Explained" video.
6. "About TeraWulf" video for Project Overview.
7. Confirm the "Meet our employees" film, Jesse Rohring's spelling and Dan Heidemann's role.
8. Other events on the event page is empty until there is a second event (only the 24 July hiring event is on the site). Add past or upcoming events?
9. About the Project: keep the live site's two sentences (Chloe, 12 Nov) or the final design's one?
10. Production domain (lakemarinerdata.com with or without www) and the contact address.

Questions for the designer (Brand Vision, not the client): N3 aerial crop, N4 FAQ background overlay, N6 Meet Our Employees paragraph (colour and width), N9 Benefits spacing, N10 Operations height, N11 Cooling promo, N21 section paddings 100 vs 120.

## Launch steps that remain

1. **Site plan** on the Lake Mariner Webflow site (paid; enables the custom domain and sitemap controls). Person.
2. **Domain and DNS:** attach lakemarinerdata.com (+ www) in Webflow, lower the TTL a day ahead, point DNS at Webflow, keep the MX/SPF/DKIM records. Person; Claude checks SSL and the www/https redirects.
3. **Redirects:** the rows in BUILD-NOTES › Redirect map (`/home`, `/insights`, `/news-events`, `/newsroom/category/*`, `/newsroom/tag/*`, the two `/s/` PDFs). The news posts keep their live URLs (`/newsroom/<slug>`), so they need none.
4. **Release:** tag a commit whose CI passed, set `RELEASE` in the head code (loader piece 1), publish; record it in AGENTS.md › Project facts.
5. **Indexing:** turn the auto sitemap on, exclude the outside-article posts from it (BUILD-NOTES › Known issues), check robots.txt allows indexing, `pnpm wf:seo --live --canonical`, submit the sitemap in Search Console.
6. **Samples:** none left on Lake Mariner (deleted 2026-11-27); re-check `/newsroom` and `/events` for placeholder text on launch day.
7. **Client answers** above, then a last `wf:links --external` and a proofread by a person.
8. After publishing to the domain: `pnpm wf:baseline save --live` and commit it.
