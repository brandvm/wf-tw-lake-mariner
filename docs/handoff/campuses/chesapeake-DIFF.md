# Chesapeake Data & Energy vs Lake Mariner Data — design diff and build plan

Site: Chesapeake Data & Energy (TeraWulf), `6b05cb19b2bc6f51aa8e5019`,
tw-chesapeake.webflow.io, MCP server `webflow-tw-chesapeake` (checked
2026-11-24: it reaches this site only). A Webflow duplicate of Lake Mariner,
made after SEO batch A, so it starts with Lake Mariner's content and
Lake Mariner's SEO values everywhere.

Sources:
- Figma `i5kBzV34Xa9qvV7I64FxFZ`, page "↪ • Template — Clean Pages", the
  section "Chesapeake Data & Energy [in progress]" (`2633:12320`, frames from
  y ≈ 48,500). Compared 2026-11-24 with Lake Mariner's top row: text diff,
  image fills, section lists, and screenshots at 1680.
- The live Squarespace site www.chesapeakedatacampus.com (linked from
  terawulf.com/our-sites). It has the full FAQ answers (Figma shows only two),
  the one newsroom post, and no events.

The Figma row is marked **in progress**: it was started as a copy of
Lake Hawkeye's row, and several Lake Hawkeye strings are still in it (footer
line and e-mail, "Lansing", "Lake Hawkeye is designed…", Cayuga photos).
Those are listed under Questions with what the build does instead.

## Frames

| Page | Chesapeake frame | Lake Mariner frame | Extra state frames (Chesapeake) |
| --- | --- | --- | --- |
| Home | `2633:12101` | `2523:112` | nav menu `2633:12321` |
| Project Overview | `2633:13769` | `2523:617` | tabs `2657:11685/11730/11775`; Responsible Development `2657:11955/11988/12021` |
| Community Impact | `2633:12334` | `2523:1235` | accordion `2657:12099/12144/12189/12234/12279`; cards `2665:12642`, `2665:12653` |
| Closed-Loop Cooling | `2679:8912` | `2523:1696` | — |
| Careers | `2633:12588` | `2523:2102` | — |
| News | `2633:12700` | `2594:7635` | — |
| News Article | `2633:13241` | `2523:2885` | — |
| Events | `2633:13377` | `2523:3252` | — |
| Event | `2633:13525` | `2523:3595` | — |
| FAQ | `2633:13694` | `2597:2` | — |
| Logos | horizontal `2591:2124` (outlined `2591:2633`), vertical `2591:1870` (outlined `2591:2394`), section "Chesapeake Data & Energy" (`2591:2664`, x ≈ −76,037) | | |

Chesapeake has its **own shield** (a globe over chevrons), not Lake
Mariner's waves: hero mark, news-card fallback, favicon and webclip change,
as on Justified.

New photos in the Chesapeake row (not in the Lake Mariner or Lake Hawkeye
rows): the Home hero aerial of the Morgantown plant on the Potomac (`2633:12107`, also
PO About the Project wide), the Home aerial with the stacks (`2633:12141`,
also the PO hero), and the News card image (`2679:9480`).

## Campus facts

| | Lake Mariner | Chesapeake |
| --- | --- | --- |
| Name | Lake Mariner Data | Chesapeake Data & Energy (Figma and terawulf.com); the copy says "Chesapeake Data Campus" / "Chesapeake Data" |
| Town | Barker, NY | Charles County, MD (the Morgantown Generating Station site, on the Potomac) |
| Site | former coal plant on Lake Ontario | retired coal-fired power plant |
| Power market | NYISO | PJM |
| Status | Operating | Permitting |
| Capacity (Home stats) | 600 / 438 / 162 MW | 800 / 0 / 800 MW (Total / Contracted / Open; terawulf.com agrees) |
| Key highlights | zero-carbon power, latency, funded | Bring Your Own Generation (BYOG) model · On-site generation and battery storage · Designed to support Maryland grid reliability |
| Domain | lakemarinerdata.com | www.chesapeakedatacampus.com (Squarespace today) |
| Footer e-mail | info@lakemarinerdata.com | **unknown** (Figma shows Lake Hawkeye's; the live site shows none) — C1 |
| Footer line | Lake Mariner Data — a TeraWulf campus | Chesapeake Data & Energy — a TeraWulf campus |

## Questions (Brand Vision / client)

| # | Question | Figma | What the build does |
| --- | --- | --- | --- |
| C1 | Footer e-mail | `info@cayugadatacampus.com` (Lake Hawkeye's, left from the copy) | `info@chesapeakedatacampus.com` if confirmed; until then the e-mail link is hidden |
| C2 | Production domain for the schema and canonical URLs | — | `https://www.chesapeakedatacampus.com` (the live site's) |
| C3 | Photos the row reuses from Lake Hawkeye (the Cayuga plant on the PO Responsible Development and CI accordion, the CI card photos) | Cayuga photos | use the Morgantown aerial (`2633:12141`) for both accordions; keep Lake Mariner's card photos until Chesapeake ones come |
| C4 | Leftover Lake Hawkeye text | "Lake Hawkeye is designed around…" (PO Cooling promo), "Lansing's future" (CI statement), "How [Town] benefits" (Explore card) | "Chesapeake Data is designed around…", "Charles County's future", "How Charles County benefits" |
| C5 | Buttons labelled "CTA" (CI cards Local Employment, Our Commitment, Regional Connectivity) | no target | Local Employment → Careers; the other two without a button until targets come |
| C6 | Nav parent label "SITE OF" vs "Part of" | mixed, as on the other rows | "Part of" everywhere (HANDOFF 2026-10-27) |
| C7 | Follow band body line and Facebook | still shown | Lake Mariner's version (no Facebook, no line, Instagram), as on every campus |
| C8 | Careers "apart of" (Explore card) | typo | "a part of" (already on staging) |

## Site-wide

- **Name and contact:** "Chesapeake Data & Energy"; footer line "Chesapeake Data & Energy — a TeraWulf campus © 2026"; e-mail C1.
- **Logos:** nav (white for dark heroes, TW gradient for light pages), footer (vertical), the Chesapeake shield on heroes and news fallbacks; favicon and webclip (Designer, MANUAL-TODO).
- **Nav:** the same links. Closed-Loop Cooling stays: Chesapeake has a Cooling frame, its nav menu frame lists it, and the live site has `/closed-loop-cooling`. The Figma footer leaves it out (copied from Lake Hawkeye's); the build keeps Lake Mariner's footer links.
- **Announcement bar:** the same text as Lake Mariner (hiring event). Chesapeake has no events, so it links to /events, as on Justified.
- **SEO:** `og:site_name` "Chesapeake Data & Energy", page titles "… — Chesapeake Data & Energy", schema with Charles County, MD and the chesapeakedatacampus.com domain (C2).

## Pages

### Home — content only
- Hero: H1 "This Is Your Go-To Source For Information On The Chesapeake Data Campus"; lead "The Chesapeake Data Campus represents the transformation of a retired coal-fired power plant into a next-generation, multi-phase AI and high-performance computing campus designed to anchor Maryland’s clean, reliable, and competitive digital economy."; facts Location Charles County, MD · Power Market PJM · Status Permitting; new photo (`2633:12107`).
- Intro statement: eyebrow "Chesapeake Data & Energy"; two-tone "Engineered for mission-critical, high-density workloads, the campus leverages existing transmission infrastructure and optional gas firming to provide resilient, dispatchable power." + muted "This adaptive reuse strategy shortens development timelines and reduces environmental impact — showing how historic industrial sites can be thoughtfully repurposed to serve today’s technology-driven economy."
- Stats 800 / 0 / 800 MW; aerial photo (`2633:12141`); key highlights as above.
- Explore (component): Community Impact card text (C4).
- FAQ preview: Potomac water; noise, lighting and visual impacts; workforce; net consumer or provider (Show on Home on those four).

### Project Overview — content, plus two section changes
- Hero: the Home H1; lead "Chesapeake Data represents the transformation of…"; photo `2633:12141`.
- About TeraWulf: unchanged (the design keeps "sustainably powered").
- About the Project (C | Collage): heading "About the Project", eyebrow "Chesapeake Data & Energy", statement = the Home statement (two-tone), body = the adaptive-reuse line; wide photo `2633:12107`. The Collage Body prop exists only on Lake Hawkeye's copy, so here the second line goes in the statement's muted part, as on Home.
- Cooling promo: C4 text; rest unchanged.
- **Highlight Tabs: 4 tabs instead of 5 (section change).** Community Benefits ("The project supports local jobs and apprenticeships, partners with community colleges for workforce training, and strengthens regional infrastructure through fiber, road, and pier improvements. Learn more here." → /community-impact) · High-Quality Jobs · World Class Tenants (10+ year hosting agreements) · Project Phasing. C | Highlight Tabs has 5 fixed tabs: Chesapeake's copy gets a Show Tab 5 prop bound to the fifth tab and panel, off here. Repo CSS gets the 4-tab pre-bundle height (`:has()` on a missing fifth panel).
- Responsible Development: **4 items** (Smart Land Reuse, Sustainable Design, Infrastructure Improvements, Designed With The Community In Mind), copy from the state frames; one photo (C3).
- Resources & Documents: one document, "MDE Letter of Support" — "Maryland Department of the Environment Letter of Support", Download (file: to find; the live site has none). Initiatives list empty, hidden while empty.

### Community Impact — content, one section changed, five out
- Hero lead: "…As we expand operations in Maryland, …".
- How Barker Benefits → "What This Means For Maryland", **6 items** (Jobs, Investment, and Local Prosperity · Smarter Reuse, Less Disruption · Reliable Power · Cleaner Energy & Smarter Infrastructure · Maryland on the Innovation Map · A New Economic Chapter), copy from the state frames; photo C3.
- **Protecting our environment → "Community benefits", a card row with ← → arrows (section change).** 7 cards of the same Info Card kind: Local Employment · Ultra Low Noise (EVAPCO's sound solutions) · Our Commitment · Economic & workforce impact · Infrastructure & regional investment · Regional Connectivity · Closed-loop cooling (Cooling explained). Three show at 1680; the arrows move the row a card at a time. Built as the Info Grid in a scroll-snap row plus a small campus module (`card-rail`, own `data-card-rail` hook, repo CSS scoped to it).
- Investment statement over the photo scene: "Our data center investment contributes directly to Charles County’s future…" (C4).
- **Removed:** Strengthening The Grid, What Actually Drives Local Electric Rates, Meet Our Employees, Our Team testimonials, Community & Partnership Initiatives, Resources & Documents.

### Closed-Loop Cooling — content only
- Hero line: "The campus is designed with a fully sealed, closed-loop cooling system that continuously recirculates the same fluid without drawing from or discharging to local water sources. The system employs air-cooled dry coolers instead of evaporative towers and uses only food-grade, non-toxic glycol for freeze protection."
- Photo Band: "Sustainable, water-responsible design that protects The Bay"; text "Fluid renewal occurs only every 7–15 years…".
- Key Benefits list: first bullet "Zero water withdrawal or discharge to the Bay or any local source".
- How It Works, Operations, Inside the Loop: as Lake Mariner.

### Careers — branding only

### News — CMS only
- One post: "TeraWulf Expands Digital and Power Infrastructure Portfolio with Strategic Acquisitions in Kentucky and Maryland" (Feb 2, 2026, Press Releases, source TeraWulf). No Featured block (it needs four featured posts; the design shows the grid only). The card image from Figma (`2679:9480`).

### News Article, Event — branding only (templates)

### Events — CMS only
- No events: the upcoming list shows its empty card with "TeraWulf plans to schedule community information sessions in the coming months. Check back here for updates!" and the past section hides while empty.

### FAQ — CMS + structure
- Hero line: "Straight answers to the questions we hear most from our neighbors in Charles County — water, environment, power and local jobs."
- **One section** (General, 22 questions; answers from chesapeakedatacampus.com/faq, word for word). The Propylene glycol section is empty in Figma: removed with its pill, as on Justified (toolbar = search only).

## CMS to replace

| Collection | Lake Mariner items | Chesapeake |
| --- | --- | --- |
| FAQs | 7 General + 4 Propylene glycol | 22 General |
| Documents | 7 | 1 (MDE Letter of Support) |
| News Posts | 9 | 1 |
| Events | 5 | 0 |
| Testimonials | 3 | kept (Careers unchanged) |

## Build plan (each batch waits for the user's go-ahead)

1. **Port and SEO:** CAMPUS-PORT rows with Chesapeake's values: head code `og:site_name`, Home / News / Event schema from `docs/seo/schema/chesapeake/` (C2, Charles County, MD), FAQ Open Graph image; page titles and descriptions "… — Chesapeake Data & Energy". The other rows came with the copy.
2. **Branding:** nav and footer logos and the hero shield (uploaded with `upload_image_by_url`), footer line and e-mail (C1), announcement link. Favicon and webclip: MANUAL-TODO (Designer).
3. **CMS:** FAQs, Documents, News, Events as above; Testimonials kept.
4. **Page content and photos:** Home, PO, CI, Cooling, FAQ, Events as above.
5. **Sections:** PO Highlight Tabs to 4, Responsible Development to 4; CI card rail (module + repo CSS), five sections out; FAQ Propylene glycol out.
6. **Designer (Chrome):** rich-text links (Highlight Tabs "Learn more here" → /community-impact), the RSVP card wrapper on the Events template; favicon and webclip.
7. **Build Review:** Figma row 5 (y 57000, label `2789:2012`), one section per page.

## Status

| Batch | What | State |
| --- | --- | --- |
| 1 · port and SEO | head code `og:site_name` "Chesapeake Data & Energy"; Home schema and the News and Event template heads from `docs/seo/schema/chesapeake/` (chesapeakedatacampus.com, Charles County, MD; no e-mail in the schema until C1 is answered); SEO titles and descriptions on all pages and both templates; FAQ share image is the copy's, which is also the Chesapeake design's FAQ hero | done 2026-11-24, published, read back on staging |
| 2 · branding | nav logos (white for dark heroes, TW-gradient for light pages; Nav Logo 12.125em / 10.125em below 768, Nav Logo Img aspect 194/48), footer vertical logo (Footer Logo 13.0625em, aspect 209/139), the Chesapeake shield as Hero Mark (aspect 79/90) and the 3D shield on news cards without a photo (`news-post-shield-cde.webp`, Post Card Mark aspect 400/425); logo link aria-labels; footer line "Chesapeake Data & Energy — a TeraWulf campus"; footer e-mail and its divider hidden until C1; announcement bar → /events. Files in `Assets/figma/chesapeake/`. Favicon and webclip files made (`Assets/favicon/*-cde-*`): MANUAL-TODO HA | done 2026-11-24, published, checked at 1440/820/390 |
| 3–7 | — | waiting for the go-ahead |
