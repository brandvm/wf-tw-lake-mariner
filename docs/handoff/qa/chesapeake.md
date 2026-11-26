# Launch QA — Chesapeake Data & Energy

Site `6b05cb19b2bc6f51aa8e5019` · staging https://tw-chesapeake.webflow.io ·
MCP `webflow-tw-chesapeake` (checked 2026-11-26: it reaches this site only) ·
Figma `i5kBzV34Xa9qvV7I64FxFZ`, Clean Pages (`2523:111`), Chesapeake row
(y ≈ 48,500; Home `2633:12101`). QA session 2026-11-26.

Status: **design check and pre-launch QA done; three fix batches (A–C)
published to webflow.io and checked.** What is left is client copy and
answers (punch list) and the launch steps at the end.

## How it was checked

- **Design (1680):** every visible text node of the ten Chesapeake frames
  was read with the Plugin API (font, size, weight, colour with opacity,
  box) and matched by text to the computed styles and boxes on staging at
  a 1680 viewport (body 16 px, so Figma px = CSS px; reduced motion, so
  pinned sections and reveals sit at rest). Only differences came back:
  size, family, weight, colour, x, and the running y offset per section.
  Image boxes were read the same way. Then side-by-side crops of each page
  (Figma left, staging right) for crops, icons and layout.
- **Frame changes since the build:** each Clean Pages frame was compared
  with its copy on the Build Review page (made 2026-11-24): same height,
  node count, visible text and image fills on all ten. **No Chesapeake
  frame changed since 2026-11-24.**
- **820 / 390 (no design):** full-page screenshots of all ten pages at both
  widths, plus a width sweep of the Home fact bars (390 → 1680).
- **Repo checks** against tw-chesapeake (a scratch config with
  `stagingUrl` = tw-chesapeake): `wf:links --external`, `wf:a11y
  --all-widths` (1440 and 390), `wf:seo`, `wf:overflow` (13 widths),
  `wf:outline`, on all pages and both CMS templates. Console errors from
  the same Playwright loads.
- Findings were formed first, then sorted against
  `campuses/chesapeake-DIFF.md` and the row 5 Build Review markers.

## Design check — findings

"Known" = already in `campuses/chesapeake-DIFF.md`, a row 5 marker, HANDOFF
Decisions or the BUILD-NOTES changes log.

### Known, staying as is

| Page | Difference | Why |
| --- | --- | --- |
| all | Nav "Part of" (design: "SITE OF") | C6, HANDOFF 2026-10-27 |
| all | Footer: Closed-Loop Cooling link, Instagram instead of Facebook, "Site by Brand Vision Marketing", no e-mail | Lake Mariner footer; C1 (e-mail); C7 |
| all | Follow band without its body line and Facebook | C7 (every campus) |
| Home, PO | "Explore the Campus" (design: "The") | Chloe on Lake Mariner: capital C only (same component) |
| Home | Fact and stat labels at 75 % / 64 % opacity (design 40 %) | WCAG AA, HANDOFF 2026-10-28 |
| PO, CI | Responsible Development and "What This Means For Maryland" photo is the Morgantown aerial; the design shows Lake Hawkeye's Cayuga plant | C3 |
| PO, CI | Cooling card "Chesapeake Data is designed…", investment statement "Charles County's future", Explore "How Charles County benefits" (design: Lake Hawkeye text) | C4 |
| CI | Community benefits: "View Careers" on Local Employment; no button on Our Commitment (design: "CTA") | C5 |
| CI | Investment statement wraps to 6 lines (design 5): same 1178 px box, longer town name | C4 copy |
| Careers | Video frame shown full size in the shots; on screen it grows from the design's 600 px | HANDOFF 2026-10-27 |
| Careers | Testimonial roles "…, Lake Mariner Data" | as in the design (DIFF notes) — client question below |
| Careers | Current Openings has a View All Openings button (design: none) | HANDOFF open decision (portal URL) |
| News, Article | One post, no cover: shield card, no Related aside | DIFF batch 3/5 |
| Events, Event | Sample event instead of the "No events scheduled" card; no Other events aside | sample, delete before launch |
| Cooling | Inside the Loop tabs + videos (design: two drawings labelled with file names) | client, review round 1 (Lake Mariner) |
| Cooling | Key Benefits first bullet "…to local sources" (design: "to the Bay or any local source") | DIFF notes |
| Home | FAQ questions wrap to two lines (design: one line overlapping the +/− icon) | the design's text box overruns the icon |
| all | Body text in Steel (design: Storm) in accordions | WCAG AA |

### New — fixed in this session (published, checked)

| # | Page | Was (staging) | Design | Fix |
| --- | --- | --- | --- | --- |
| N1 | Home › intro statement | 990 px box: 5 + 5 lines, section 78 px taller | 1144 px box (4 + 3 lines) | combo **Statement › Is Wide** (max-width 71.5em) on the C \| Statement root |
| N2 | Home › aerial photo | 971 px tall (Lake Mariner's) | 883 px | Media Below height 55.1875em, Section › Is Media Below padding-bottom 41em. Section now 1377 px vs 1364 in the design (was 1545) |
| N3 | Home › Key Highlights bar, 768–1200 px | ran off both screen edges (x −286 at 768, −91 at 992); Chesapeake's three highlights are longer than Lake Mariner's | — (no design below 1680) | Fact Bar: width max-content, max-width calc(100vw − 8em) (Tablet −5em), white-space normal: one row, item text wraps inside its column. Hero facts unchanged. `wf:overflow` did not see it (GOTCHAS 2026-11-26) |
| N4 | CI › "What This Means For Maryland" | 375 px box, 3 lines, items 58 px lower | 537 px, 2 lines | Image Accordion Title max-width 6.7em → 9.6em (also PO Responsible Development: still 2 lines) |
| N5 | PO › About the Project wide photo | alt "Aerial view of the Lake Mariner campus beside the former power plant and Lake Ontario" | — | C \| Collage alt: "Aerial view of the Chesapeake campus site, the former Morgantown power plant on the Potomac River" |
| N6 | Footer › Part of TeraWulf | All Sites, Impact, Investors → `#` | — | terawulf.com/our-sites#chesapeake-data-energy, terawulf.com/our-impact, investors.terawulf.com (imported `href` attribute removed, link set) |
| N7 | Careers › Meet Our Employees | played Lake Mariner's YouTube "Topping Out Ceremony" (superseded on Lake Mariner 2026-11-24) | — | CAMPUS-PORT row: the self-hosted film on Chesapeake's CDN (`6b088d4b1a5cb0a1d9570179`, 28 MB) with English captions (`6b088d4bb342a76c8889d871`); C \| Video Frame got its Captions URL prop and `data-video-captions`. Checked: native player, 2:12, captions track |

### New — open

| # | Page | Difference | Owner |
| --- | --- | --- | --- |
| N8 | Cooling › How It Works | eyebrow reads "Lorem Ipsum" — the design's placeholder, live on the page | client copy (or remove) — punch list |
| N9 | Cooling › Operations | "Maintenance and Longevity" and "Continuous Operations During Maintenance" open to "Copy to come" | client copy — punch list |
| N10 | FAQ closing card, Events empty card | C \| Empty Card heading 40 px; design 34 px | shared: every campus (Lake Mariner QA N24); fix once decided there |
| N11 | PO Cooling card "Cooling explained", PO Download | button label 14 px; design 13 px (Small) | shared components, every campus |
| N12 | PO › Project Highlights eyebrow | 64 % white; design 100 % | shared component |
| N13 | FAQ | one-line rows 99 px, design 94 px (the 35 px icon sets the row height): +5 px a row, ~+60 px over the list | shared C \| Accordion Item FAQ variant |
| N14 | Footer | column headings weight 500, design 400 | shared, minor |
| N15 | Cooling › intro photo band | 65 px taller than the design | shared, minor |

Build Review row 5 now says this: green notes updated on every page (QA
2026-11-26), Home and Community Impact re-shot at 1680/820/390 after the
fixes, red markers for N8 and N9 (Cooling) and N10 (FAQ).

## 820 and 390

Every page holds at both widths: no horizontal scroll, nothing clipped or
overlapping, type readable (smallest is the 11–12 px Space Mono labels).
The one break was the Home Key Highlights bar (N3), fixed. The staging-only
"Staging" pill and the Webflow badge overlap content at 390; neither exists
in production.

## Pre-launch QA

| Check | Result |
| --- | --- |
| `wf:links --external` | 10 pages crawled. `#` links left: Privacy Policy, Cookie Policy (open decision, all sites), View All Openings (portal URL), Watch Cooling Explained ×2 (no video yet). Share, calendar, Play Video and Download links are `#` in the HTML and filled by JS or hidden. LinkedIn and X answer 403 to bots (fine in a browser). Placeholder text: "Lorem Ipsum" on /closed-loop-cooling (N8). Footer All Sites/Impact/Investors fixed (N6) |
| `wf:a11y` 1440 + 390 | no serious failures from the site. Flags: `#wfc-environment .label` (the staging-only environment pill, not on production) and the Cooling step cards' faded "not reached yet" state (motion, decided, HANDOFF 2026-10-28) |
| `wf:seo` | every page has title, description, og tags and one H1, except: **/404** no description or og:image (utility page, noindex in practice; as on Lake Mariner); **news post** og:image empty because the post has no Cover Image (punch list). Notes: Home title 77 characters, news post title 139 (the press-release title) |
| `wf:overflow` | nothing passes the right edge at 13 widths (but see N3: it cannot see content clipped on both sides) |
| `wf:outline` | one H1 per page, no skipped levels, no glued words |
| Console | no errors on any page (Playwright, reduced motion and normal) |
| 404 | `/nope-404-check` answers 404 with the site's 404 page; `/404` 200 |
| Other campus text | none on the public pages after N5, except the Careers testimonials (3 roles "Lake Mariner Data", alts of two testimonial photos and the video poster "Lake Mariner data halls") — as in the design, client question. `/design/style-guide` still holds Lake Mariner sample text (internal, noindex): unpublish or leave as is at launch |
| Other domains / CDNs | no lakemarinerdata, lakehawkeyedata, cayugadatacampus, justified/muskie domains, Squarespace or another site's Webflow CDN in any published page. chesapeakedatacampus.com appears only in the schema `@id`/`url` (the production domain) |
| CMS templates | News Posts and Events templates checked as above with the one post and the sample event |
| CAMPUS-PORT | all rows now done for Chesapeake: FAQ OG image is Chesapeake's own asset; FAQ hero publishes with `srcset`; Empty Card Image Loading/Priority props present (/faq lazy; /events instance eager/high, unseen while the sample event hides the card); Featured Lead row n/a while the Featured block is hidden; Cooling posters on `data-poster`; Doc Accordion and Source Card defaults link to the MDE PDF and terawulf.com; Video Frame Captions URL (N7) |

Sample content to remove before launch: the event "Sample Event —
Chesapeake Hiring Day" (`/events/sample-chesapeake-hiring-day`, item
`6b0604db08a0966b48ce62fd`). Event Types and Event Perks still hold Lake
Mariner's items (unused on pages; delete or keep for real events).

## Client punch list

Plain-language questions for the client (C-numbers are in the DIFF):

1. **Footer e-mail (C1).** Which address should the footer show? The design
   still has Lake Hawkeye's (info@cayugadatacampus.com). Until you tell us,
   no e-mail is shown.
2. **Photos (C3).** The design uses a Lake Hawkeye plant photo on Project
   Overview › Responsible Development and Community Impact › What This
   Means For Maryland. We used the Morgantown aerial. Do you have
   Chesapeake photos for these, and for the Community benefits cards?
3. **Closed-Loop Cooling › How It Works.** The small heading above "How It
   Works" says "Lorem Ipsum" in the design. What should it say, or should
   it go?
4. **Closed-Loop Cooling › Operations.** "Maintenance and Longevity" and
   "Continuous Operations During Maintenance" have no text yet. Please send
   two or three sentences each.
5. **Community benefits buttons (C5).** "Our Commitment" and "Regional
   Connectivity" have a button placeholder in the design. Where should they
   link, or should they have none?
6. **Careers testimonials.** The three quotes are Lake Mariner employees
   (their roles say "Lake Mariner Data"), as in the design. Keep them, or
   do you have Chesapeake people?
7. **Careers video.** It plays TeraWulf's "Meet our employees" film, filmed
   at Lake Mariner (the same film is on the current Chesapeake site). Keep
   it?
8. **News share image.** The press release has no cover photo, so links to
   it shared on social media show no picture. Send a photo (or we use the
   Chesapeake aerial).
9. **Privacy and Cookie Policy.** Link to terawulf.com/legal/privacy-policy
   (with its #cookie section), or will the campus have its own pages?
10. **Current Openings.** Where should "View All Openings" go?
11. **Cooling video.** A file or YouTube link for "Watch Cooling Explained".
12. **Production domain (C2).** We assume www.chesapeakedatacampus.com.

## Launch steps that remain

All outside this QA (Brand Vision / client):

1. **Site plan** for Chesapeake Data & Energy (TeraWulf) in Webflow.
2. **Domain and DNS:** attach www.chesapeakedatacampus.com (C2), point DNS
   from Squarespace (keep the e-mail records), www/https redirects.
3. **301 redirects** from the DIFF › "301 redirects for launch":
   `/s/MDE-Letter-of-Support.pdf` → the Webflow PDF, `/home` → `/`,
   `/newsroom` → `/news`, the newsroom post → `/news/terawulf-expands-portfolio-kentucky-and-maryland`.
4. **Remove samples:** delete the sample event; decide on the unused Lake
   Mariner Event Types and Perks; answer punch-list items 3 and 4 (or
   remove the placeholders) — they would otherwise go live.
5. **Release:** cut the repo release tag and set `RELEASE` in Chesapeake's
   head code (README › Release); the shared bundle needs no change for
   this site.
6. **Publish to the custom domain**, then `noindex` off / robots, sitemap
   in Search Console, `wf:baseline save --live`, `wf:links --live`.
7. Optional: unpublish `/design/style-guide` and `/design/media` or leave
   them noindex.
