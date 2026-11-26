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

## Live-site files moved to Webflow (2026-11-24)

The Squarespace site www.chesapeakedatacampus.com is going away, so every file it hosts was crawled (sitemap, every page, the `?format=json` feeds: 1 news post, 0 events). The files were saved locally in `Assets/chesapeake/live-site/` as originals (the PNG/JPEG first uploaded to Squarespace); `inventory.json` there lists the pages each file is on. They were then uploaded to Chesapeake's own Webflow assets (user's choice, 2026-11-24: Chesapeake files only).

- Images: `asset_tool › upload_image_by_url`, so they get responsive variants. The three over Webflow's 4 MB image limit (DS3, DS5, hpc1) went up as WebP q90.
- The PDF and the 32 px favicon: through the assets API.
- None of these images is placed on a page yet: they are kept for the build and the client.

| Old URL | Webflow asset id | New URL / note |
| --- | --- | --- |
| https://images.squarespace-cdn.com/content/v1/696faaa0c3b11975cca24e4c/1768925874881-D19HZGC7OGPEEBXTU929/favicon.ico | `6b05f0c6760e45008c13fc8b` | https://s3.amazonaws.com/webflow-prod-assets/6b05cb19b2bc6f51aa8e5019/6b05f0c6760e45008c13fc8b_live-favicon.png |
| https://static1.squarespace.com/static/696faaa0c3b11975cca24e4c/t/69ab473cecdee5129be2baa0/1772832572140/morgantown-2019-alanlehmanphoto-potomacriverkeeper1.jpg | `6b05f077fdef96de907edb3f` | https://s3.amazonaws.com/webflow-prod-assets/6b05cb19b2bc6f51aa8e5019/6b05f077fdef96de907edb3f_live-morgantown-2019-alanlehmanphoto-potomacriverkeeper1.jpg |
| https://images.squarespace-cdn.com/content/v1/696faaa0c3b11975cca24e4c/df07d741-18a9-456e-9d6e-2691ac48a4f2/Chesapeake+Data+%26+Energy+Logo.png | `6b05f0783165aef5b9316edc` | https://s3.amazonaws.com/webflow-prod-assets/6b05cb19b2bc6f51aa8e5019/6b05f0783165aef5b9316edc_live-chesapeake-data-energy-logo.png |
| https://images.squarespace-cdn.com/content/v1/696faaa0c3b11975cca24e4c/1768925874190-PYQJFS3RS381LLXOSNJ2/Cayuga-1.png | — | not uploaded: Lake Hawkeye's Cayuga plant (the live site's share image); local copy only |
| https://images.squarespace-cdn.com/content/v1/696faaa0c3b11975cca24e4c/1768925859605-DMLSS6J991V9WAT94LAT/coolers.png | `6b05f0a336d35bb8a356c669` | https://s3.amazonaws.com/webflow-prod-assets/6b05cb19b2bc6f51aa8e5019/6b05f0a336d35bb8a356c669_live-coolers2.png |
| https://images.squarespace-cdn.com/content/v1/696faaa0c3b11975cca24e4c/16c5f76f-3280-46c8-87de-526a262039c0/CDC+Logo.png | `6b05f07beb06209c3732b633` | https://s3.amazonaws.com/webflow-prod-assets/6b05cb19b2bc6f51aa8e5019/6b05f07beb06209c3732b633_live-cdc-logo.png |
| https://static1.squarespace.com/static/696faaa0c3b11975cca24e4c/t/69ab489cecdee5129be2bc2e/1772832924019/Image_Construction_2.png | `6b05f07c8eb513527a19e62e` | https://s3.amazonaws.com/webflow-prod-assets/6b05cb19b2bc6f51aa8e5019/6b05f07c8eb513527a19e62e_live-image_construction_2.png |
| https://images.squarespace-cdn.com/content/v1/696faaa0c3b11975cca24e4c/1768925865004-00ZZFUAV689NWH4LQ5GA/about+terawulf.png | `6b05f07e4bf869d2721a1aa5` | https://s3.amazonaws.com/webflow-prod-assets/6b05cb19b2bc6f51aa8e5019/6b05f07e4bf869d2721a1aa5_live-about-terawulf.png |
| https://images.squarespace-cdn.com/content/v1/696faaa0c3b11975cca24e4c/1768925865023-D902YFPKEP402IMBPVKH/Project+Highlights.png | `6b05f082b15b51e3e21508ab` | https://s3.amazonaws.com/webflow-prod-assets/6b05cb19b2bc6f51aa8e5019/6b05f082b15b51e3e21508ab_live-project-highlights.png |
| https://images.squarespace-cdn.com/content/v1/696faaa0c3b11975cca24e4c/1768925865033-OME9YE2DIBFB9A0O2HD7/lake+view.png | `6b05f05e2c5ab8afece9439f` | https://s3.amazonaws.com/webflow-prod-assets/6b05cb19b2bc6f51aa8e5019/6b05f05e2c5ab8afece9439f_live-lake-view.png |
| https://images.squarespace-cdn.com/content/v1/696faaa0c3b11975cca24e4c/1768925870237-5USJONGGEJ99Y6I70I3V/DS5.png | `6b05f1ef86eb942bbbe8e6b1` | https://cdn.prod.website-files.com/6b05cb19b2bc6f51aa8e5019/6b05f1ef86eb942bbbe8e6b1_live-ds5.webp |
| https://images.squarespace-cdn.com/content/v1/696faaa0c3b11975cca24e4c/1768925870284-2LXTHH9YCPYIH29PPTIP/jesse+rohring.png | `6b05f08441d6352215154303` | https://s3.amazonaws.com/webflow-prod-assets/6b05cb19b2bc6f51aa8e5019/6b05f08441d6352215154303_live-jesse-rohring.png |
| https://images.squarespace-cdn.com/content/v1/696faaa0c3b11975cca24e4c/1768925870301-8ZRZ1P255NO6F0SRP3W0/jim+spoon+1.png | `6b05f08681518eec55a370c9` | https://s3.amazonaws.com/webflow-prod-assets/6b05cb19b2bc6f51aa8e5019/6b05f08681518eec55a370c9_live-jim-spoon-1.png |
| https://images.squarespace-cdn.com/content/v1/696faaa0c3b11975cca24e4c/1768925870318-QTPRFYMGO8UT72G65HYO/Dan+H+2.png | `6b05f08770240dba02b93803` | https://s3.amazonaws.com/webflow-prod-assets/6b05cb19b2bc6f51aa8e5019/6b05f08770240dba02b93803_live-dan-h-2.png |
| https://static1.squarespace.com/static/696faaa0c3b11975cca24e4c/t/69ab47987eda616e4f07e13d/1772832664310/nil+Foundation+Scale+Summit+Nikki+A+Rae+02.27.2024+all-233.jpg | `6b05f088ca33fa7f3755c56c` | https://s3.amazonaws.com/webflow-prod-assets/6b05cb19b2bc6f51aa8e5019/6b05f088ca33fa7f3755c56c_live-nil-foundation-scale-summit-nikki-a-rae-02-27-2024-all-233.jpg |
| https://static1.squarespace.com/static/696faaa0c3b11975cca24e4c/t/69ab47bbc384586fa00b9376/1772832699812/community-1.png | `6b05f08a1623809fafc434be` | https://s3.amazonaws.com/webflow-prod-assets/6b05cb19b2bc6f51aa8e5019/6b05f08a1623809fafc434be_live-community-1.png |
| https://static1.squarespace.com/static/696faaa0c3b11975cca24e4c/t/69ab4752c384586fa00b930d/1772832594025/closed+loop.png | `6b05f0a81460b227c94c406d` | https://s3.amazonaws.com/webflow-prod-assets/6b05cb19b2bc6f51aa8e5019/6b05f0a81460b227c94c406d_live-closed-loop-bp-air-cooler-side.png |
| https://images.squarespace-cdn.com/content/v1/696faaa0c3b11975cca24e4c/1768925859615-QSRNK8KV4Y6WVGXEBED8/lakefront+view.png | `6b05f09f8d34141223d67ec7` | https://s3.amazonaws.com/webflow-prod-assets/6b05cb19b2bc6f51aa8e5019/6b05f09f8d34141223d67ec7_live-lakefront-view.png |
| https://images.squarespace-cdn.com/content/v1/696faaa0c3b11975cca24e4c/1768925859625-UM42563DYOX1NNGGQRWL/rear+door+heat+exchangers.png | `6b05f0a1eb06209c3732bb4f` | https://s3.amazonaws.com/webflow-prod-assets/6b05cb19b2bc6f51aa8e5019/6b05f0a1eb06209c3732bb4f_live-rear-door-heat-exchangers.png |
| https://images.squarespace-cdn.com/content/v1/696faaa0c3b11975cca24e4c/1768925859635-F10FO5DUZLSPFXQK5W3W/coolers2.png | `6b05f0a336d35bb8a356c669` | https://s3.amazonaws.com/webflow-prod-assets/6b05cb19b2bc6f51aa8e5019/6b05f0a336d35bb8a356c669_live-coolers2.png |
| https://images.squarespace-cdn.com/content/v1/696faaa0c3b11975cca24e4c/1768925859645-FL0CBF61UV65FGRJUG1Z/data+hall.png | `6b05f0a56059042813c91e73` | https://s3.amazonaws.com/webflow-prod-assets/6b05cb19b2bc6f51aa8e5019/6b05f0a56059042813c91e73_live-data-hall.png |
| https://images.squarespace-cdn.com/content/v1/696faaa0c3b11975cca24e4c/1768925859702-IFF9MMN8YHITPHVKYBTL/closed+loop+BP+data+center+side.png | `6b05f0a6ac352db12f6a5fc5` | https://s3.amazonaws.com/webflow-prod-assets/6b05cb19b2bc6f51aa8e5019/6b05f0a6ac352db12f6a5fc5_live-closed-loop-bp-data-center-side.png |
| https://images.squarespace-cdn.com/content/v1/696faaa0c3b11975cca24e4c/1768925859718-UFTA9FTRX0QCXAIQQ9LV/closed+loop+BP+air+cooler+side.png | `6b05f0a81460b227c94c406d` | https://s3.amazonaws.com/webflow-prod-assets/6b05cb19b2bc6f51aa8e5019/6b05f0a81460b227c94c406d_live-closed-loop-bp-air-cooler-side.png |
| https://static1.squarespace.com/static/696faaa0c3b11975cca24e4c/t/69ab484c0630042b7362d09d/1772832844089/vlcsnap-2025-09-16-15h02m18s180.png | `6b05f0ab7cd4c717bb75ae36` | https://s3.amazonaws.com/webflow-prod-assets/6b05cb19b2bc6f51aa8e5019/6b05f0ab7cd4c717bb75ae36_live-vlcsnap-2025-09-16-15h02m18s180.png |
| https://images.squarespace-cdn.com/content/v1/696faaa0c3b11975cca24e4c/a2a27fac-d1ba-45a6-aa4d-20efd0adc15d/Screenshot+2026-01-20+131830.png | `6b05f0adae2e8aa5acb96105` | https://s3.amazonaws.com/webflow-prod-assets/6b05cb19b2bc6f51aa8e5019/6b05f0adae2e8aa5acb96105_live-screenshot-2026-01-20-131830.png |
| https://images.squarespace-cdn.com/content/v1/696faaa0c3b11975cca24e4c/1768925872705-7VVQU1NOG4JORXN2VJ1H/DS3.png | `6b05f203c75ce964e46cecf2` | https://cdn.prod.website-files.com/6b05cb19b2bc6f51aa8e5019/6b05f203c75ce964e46cecf2_live-ds3.webp |
| https://images.squarespace-cdn.com/content/v1/696faaa0c3b11975cca24e4c/6056707e-5665-44c9-895e-f1f4cd018807/Image_Jerry+Goodenough.png | `6b05f0b0291da8d505ac94ed` | https://s3.amazonaws.com/webflow-prod-assets/6b05cb19b2bc6f51aa8e5019/6b05f0b0291da8d505ac94ed_live-image_jerry-goodenough.png |
| https://images.squarespace-cdn.com/content/v1/696faaa0c3b11975cca24e4c/1768925872714-ZMGG2T76PC7R3WDPY1AL/hpc1.png | `6b05f204ab815878f782d137` | https://cdn.prod.website-files.com/6b05cb19b2bc6f51aa8e5019/6b05f204ab815878f782d137_live-hpc1.webp |
| https://static1.squarespace.com/static/696faaa0c3b11975cca24e4c/t/69ab4829c384586fa00b93e4/1772832809482/hpc3.png | `6b05f0b26059042813c91f9b` | https://s3.amazonaws.com/webflow-prod-assets/6b05cb19b2bc6f51aa8e5019/6b05f0b26059042813c91f9b_live-hpc3.png |
| https://static1.squarespace.com/static/696faaa0c3b11975cca24e4c/t/6ab530d5750e7226dba470fb/1790266767190/ | — | same file as the Chesapeake logo (post thumbnail); see the logo row |
| https://www.chesapeakedatacampus.com/s/MDE-Letter-of-Support.pdf | `6b05ebc45b65a4aba96ba98d` | https://s3.amazonaws.com/webflow-prod-assets/6b05cb19b2bc6f51aa8e5019/6b05ebc45b65a4aba96ba98d_MDE-Letter-of-Support.pdf |
| video.squarespace-cdn.com/…/1768925862484-K5SMTJ0GVMC8RS0A8F7K (Home hero video "Cayuga Website Hero.mp4") | — | not uploaded: Lake Hawkeye's Cayuga plant; local copy `home-hero-video.mp4` (8.9 MB) |
| video.squarespace-cdn.com/…/1768925870270-OMXH0LCFFDYUTW0AS4MA (Careers video) | — | not uploaded: Lake Mariner employees ("Dan Heidemann, Site Lead, Lake Mariner"); local copy `careers-video.mp4` (50 MB, over the 30 MB upload limit) |

Other campus files the copy still loaded, now Chesapeake's own:
- Closed-Loop Cooling › Inside the Loop: the two loop videos and posters came from Lake Mariner's CDN (`cdn.prod.website-files.com/6ae0f7d7…`). They now use Chesapeake's copies, which came with the duplicate (`6b05cb19b2bc6f51aa8e5098`, `…5099`; posters `…509a`, `…509b`).
- Style guide: the Source Card and Doc Accordion Item defaults linked to lakehawkeyedata.com; they now link to terawulf.com and the MDE PDF.
- Favicon and webclip: Chesapeake's (MANUAL-TODO HA), so no icon loads from Lake Mariner's CDN. The Home schema logo is the Chesapeake logo above.

Checked after publishing, on all 12 published pages (`/design/*` and `/404` included): no reference to the Squarespace CDN, chesapeakedatacampus.com/s/, lakehawkeyedata, cayugadatacampus, lakemarinerdata, justifieddatacampus, muskiedatacampus or another campus's Webflow asset CDN. The only chesapeakedatacampus.com URLs left are the schema's canonical `@id` and `url` values, which name the production domain (kept, user 2026-11-24).

### 301 redirects for launch (old Squarespace paths)

| Old path | New path |
| --- | --- |
| `/s/MDE-Letter-of-Support.pdf` | `https://cdn.prod.website-files.com/6b05cb19b2bc6f51aa8e5019/6b05ebc45b65a4aba96ba98d_MDE-Letter-of-Support.pdf` |
| `/home` | `/` |
| `/newsroom` | `/news` |
| `/newsroom/terawulf-expands-digital-and-power-infrastructure-portfolio-with-strategic-acquisitions-in-kentucky-and-maryland` | `/news/terawulf-expands-portfolio-kentucky-and-maryland` |

`/project-overview`, `/community-impact`, `/closed-loop-cooling`, `/careers`, `/events` and `/faq` keep their paths.

## Notes from the build

- Home FAQ order: the list sorts by Order, shared with /faq, so Home shows noise, net provider, workforce, water; the design puts water first. Change Order if the client wants the design's order (as on Justified, L5).
- /news after batch 3: the Featured block's lists are empty ("No items found") because the one post isn't Featured; batch 5 hides the block. /events still has Lake Mariner's "Past sessions are below" line and an empty past list: batch 4/5.

- Cooling › Key Benefits keeps Lake Mariner's first bullet "Zero water withdrawal or discharge to local sources" (the design says "to the Bay or any local source"): the list lives in a rich-text prop, so changing it means re-pasting the list in the Designer. Left as is; it is true for Chesapeake too.
- Careers testimonials name Lake Mariner roles, as in the Chesapeake design (and on Justified, J5).

- /news keeps its category pills and sort with one post; /events keeps the past-events search although the past list is hidden while empty (both work again as soon as items exist).
- Cards 5 and 6 (Infrastructure, Regional Connectivity) share the substation photo, as in the design. Cards 4–7 photos are 1000 px WebP without responsive sizes (the Designer import timed out; they show at ~416 px).

## Left after the Build Review (2026-11-24)

The Build Review found five red pages; four were fixed the same day, published, re-shot and turned green:

- **Home:** the FAQs show in the design's order (water, noise, workforce, net provider). FAQs have a new Number field **Home Order** (1–4 on the four Show on Home items), and the Home list sorts by it; /faq still sorts by Order. A new Home FAQ needs a Home Order.
- **Project Overview:** Explore the Campus moved below Resources & Documents (and the hidden Initiatives); the About the Project square photo is the design's cooler shot at dusk (`po-cde-square`, uploaded with `upload_image_by_url`, publishes with `srcset`; local copy in `Assets/figma/chesapeake/`).
- **News:** lead line "Project updates, announcements and coverage from around the region."; the filter and sort toolbar carries `data-hide-single` and hides while the list has fewer than two posts (repo CSS `:has()` rule, fdb5531; it comes back with the second post).
- **News Article:** the Related articles aside carries `data-hide-empty`, so it is left out while no other post exists.

- **Event:** shot with a sample event (below) and green. The RSVP card condition (HB) was tested: with RSVP URL cleared the published page had no Reserve card, with it restored the card came back. The Other events column now carries `data-hide-empty`, so it is left out while there is no other event.

**Sample event — delete or replace before launch.** "Sample Event — Chesapeake Hiring Day" (`/events/sample-chesapeake-hiring-day`, item `6b0604db08a0966b48ce62fd`), added 2026-11-24 at the user's request so the Event template could be checked. Hiring Day, 18 March 2027 9:00 AM–3:00 PM New York, Chesapeake text marked as sample in the summary, body, location note, callout and RSVP line; image the Home aerial; perks Career growth, 401(k) 5% match, 80% health insurance, Generous PTO (no starting pay); RSVP URL https://www.terawulf.com/connect. While it is upcoming, /events shows it instead of the "No events scheduled" card. Delete it in the CMS (or overwrite it with a real event) before launch.

Still open:
- Client questions C1 (footer e-mail) and C3 (Chesapeake's own accordion photo).

**Launch QA (2026-11-26):** `docs/handoff/qa/chesapeake.md` — design re-check, pre-launch checks, fixes N1–N7 (statement width, aerial height, Key Highlights bar at tablet widths, CI heading, a Lake Mariner alt, footer links, the Careers film), the client punch list and the launch steps.

## Status

| Batch | What | State |
| --- | --- | --- |
| 1 · port and SEO | head code `og:site_name` "Chesapeake Data & Energy"; Home schema and the News and Event template heads from `docs/seo/schema/chesapeake/` (chesapeakedatacampus.com, Charles County, MD; no e-mail in the schema until C1 is answered); SEO titles and descriptions on all pages and both templates; FAQ share image is the copy's, which is also the Chesapeake design's FAQ hero | done 2026-11-24, published, read back on staging |
| 2 · branding | nav logos (white for dark heroes, TW-gradient for light pages; Nav Logo 12.125em / 10.125em below 768, Nav Logo Img aspect 194/48), footer vertical logo (Footer Logo 13.0625em, aspect 209/139), the Chesapeake shield as Hero Mark (aspect 79/90) and the 3D shield on news cards without a photo (`news-post-shield-cde.webp`, Post Card Mark aspect 400/425); logo link aria-labels; footer line "Chesapeake Data & Energy — a TeraWulf campus"; footer e-mail and its divider hidden until C1; announcement bar → /events. Files in `Assets/figma/chesapeake/`. Favicon and webclip files made (`Assets/favicon/*-cde-*`): MANUAL-TODO HA | done 2026-11-24, published, checked at 1440/820/390 |
| 3 · CMS | FAQs: Lake Mariner's 11 replaced by Chesapeake's 22 (General, word for word from chesapeakedatacampus.com/faq, its bold kept, Order = the live order); Show on Home on water (Potomac), noise, workforce, net provider. Documents: Lake Mariner's 7 replaced by "MDE Letter of Support" (PDF re-hosted on Webflow from the Squarespace site; Resources group, Project Overview only). News: the 9 samples replaced by the 2 Feb 2026 press release (Press Releases, source TeraWulf → investors.terawulf.com, no cover, so the card shows the Chesapeake shield as in Figma; not Featured). Events: Lake Mariner's 5 deleted; Event Types and Perks left in the collections, unused. Testimonials kept | done 2026-11-24, published |
| 4 · page copy and photos | Photos from the Chesapeake row uploaded with `upload_image_by_url` (srcset): Home hero (Morgantown on the Potomac) and aerial with stacks, three Community benefits card photos. Home: hero heading, lead, facts (C \| Page Hero defaults too), statement, 800/0/800 MW, highlights, aerial, share image. Explore: Community Impact card line (C4). Project Overview: hero (aerial photo), Collage eyebrow, statement and wide photo, Cooling promo text (C4), tab titles and texts 1–4, Responsible Development items 1–4 and photo (C3). Community Impact: hero line, "What This Means For Maryland" items 1–6 and photo (C3; "contruction" typo fixed), "Community benefits" heading and cards 1–3 (Local Employment button → Careers, C5), investment statement (Charles County, C4). Cooling: hero line and Photo Band (the Bay). FAQ hero line. Events empty-card line | done 2026-11-24, published; no Lake Mariner, Barker, Ontario or NYISO text left outside the sections batch 5 removes and the Careers testimonials |
| 5 · section differences | Project Overview: C \| Highlight Tabs has 4 tabs on this site (tab 5 removed from Chesapeake's copy; Highlights Tabs uses auto columns so any count fits; repo CSS gives the pinned section a 4-tab pre-bundle height, cd289b9), tab 1 text is a rich-text prop (Text 1 Rich) for the "Learn more here" link; Responsible Development 4 items; C \| Collage got a Body prop (Collage Copy wrapper, Collage Body) for the second About the Project line; Resources and Initiatives carry `data-hide-empty`, so the empty Initiatives list is gone. Community Impact: 7th accordion item, Strengthening The Grid, rates row, Meet Our Employees, testimonials, Resources and Initiatives removed; "Community benefits" is a 7-card rail with ← → arrows (Info Grid + Is Rail, Info Card + Is Rail, Rail Head / Rail Controls / Rail Button; module `card-rail` with `data-card-rail`, `-track`, `-prev`, `-next`, 53bcae9), cards 4–7 from the design (Economic & workforce impact, Infrastructure & regional investment, Regional Connectivity, Closed-loop cooling → /closed-loop-cooling), the NYISO button gone. FAQ: Propylene glycol section and the category pills removed (search only). /news Featured block and /events past section carry `data-hide-empty` (hidden while empty; they come back when items exist) | done 2026-11-24, published; rail checked at 1440/820/390 (one card per click, end arrows light) |
| 6 · Designer steps | Events RSVP card in a plain div with conditional visibility (RSVP URL is set), MANUAL-TODO HB; Project Overview tab 1 "Learn more here" → /community-impact, HC | done 2026-11-24, published; link read back on staging; RSVP condition unseen until an event exists |
| 7 · Build Review | Figma Build Review row 5 (`2556:2`, y 57000): one section per page with Chesapeake's Clean Pages frame, staging at 1680/820/390 (shot with reduced motion, so pinned sections and reveals show at rest) and one marker each: Home `2828:4823`, Project Overview `2828:5154`, Community Impact `2828:5418`, Closed-Loop Cooling `2828:5589`, Careers `2828:5723`, News `2828:6262`, News Article `2828:6453`, Events `2828:6602`, Event `2828:6762` (sample event), FAQ `2828:6938`. Green: all ten (Home, Project Overview, News and News Article fixed and re-shot the same day; Event shot with the sample event, Events re-shot with its card) | done 2026-11-24 |
