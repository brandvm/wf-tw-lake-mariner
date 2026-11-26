# Justified Data vs Lake Mariner — design diff and build plan

Site: Justified Data (TeraWulf), `6b05c58e6a2daeafb0769727`,
tw-justified.webflow.io, MCP server `webflow-tw-justified`. A Webflow
duplicate of Lake Mariner (2026-11-24, before SEO batch A), so it starts
with Lake Mariner's content everywhere.

Source: Figma `i5kBzV34Xa9qvV7I64FxFZ`, page "↪ • Template — Clean Pages",
Justified row (y ≈ 12,434), compared frame by frame with Lake Mariner's top
row (text diff, image fills, section lists; 2026-11-24). Where Figma shows
only the first open accordion item, the other items' copy is in the state
frames beside the page (listed below) or, for the FAQ, on the live
Squarespace site www.justifieddatacampus.com (13 questions, word for word
the same where Figma shows them).

## Frames

| Page | Justified frame | Lake Mariner frame | Extra state frames (Justified) |
| --- | --- | --- | --- |
| Home | `2591:1225` | `2523:112` | nav menu `2591:2667` |
| Project Overview | `2594:3266` | `2523:617` | tabs `2656:9452/9492/9532/9572`, Responsible Development `2657:9752/9785/9818` |
| Community Impact | `2601:9927` | `2523:1235` | Barker accordion `2657:9851…10106`, grid accordion `2657:10157/10191/10225` |
| Closed-Loop Cooling | **none** | `2523:1696` | — |
| Careers | `2594:5029` | `2523:2102` | — |
| News | `2594:5435` | `2594:7635` | — |
| News Article | `2594:5809` | `2523:2885` | — |
| Events | `2594:6174` | `2523:3252` | — |
| Event | `2594:6517` | `2523:3595` | — |
| FAQ | `2594:6915` | `2597:2` | — |
| Logos | nav `2591:1269`, footer `2592:3248`; logo sheet section "Justified Data" (x ≈ −87,148) | | |

Exports in `Assets/figma/justified/`: `logo-jd-horizontal.svg` (white, dark
heroes), `logo-jd-horizontal-dark.svg` (TW-gradient text, light pages),
`logo-jd-vertical.svg` (footer), `home-hero.png` (Home hero photo),
`home-full.png` (whole Home frame for comparison). Justified has its own
shield mark (signal arcs, not Lake Mariner's waves), so the favicon and
webclip change too.

## Questions (Brand Vision / client)

| # | Question | Figma | Proposal |
| --- | --- | --- | --- |
| J1 | Closed-Loop Cooling page | no Cooling frame in the Justified row; nav Insights lists Community Impact and FAQ only; footer has no Cooling link. The live justifieddatacampus.com does have `/closed-loop-cooling` | **Decided 2026-11-24 (user): drop it.** Set the page to draft, remove nav and footer links. The "closed-loop cooling … found here/HERE" links (PO Responsible Development 1, CI Barker 1) and CI's first environment card button then need a target |
| J2 | Target of those cooling links and of the CI card button labelled "CTA" | not given | the FAQ answer on water (`/faq`) until decided |
| J3 | Nav parent label | Home, PO, CI, Careers, FAQ show "SITE OF"; News, Article, Events, Event show "Part of" (the Lake Mariner row has the same mix the other way round) | keep "Part of" everywhere, as decided for Lake Mariner (HANDOFF 2026-10-27) |
| J4 | CI "No emissions" card links "NYISO 2025 report" | a New York grid report on a Kentucky (MISO) campus | keep the label, link `#` until the client gives a MISO source; or drop the button |
| J5 | Careers testimonials | identical to Lake Mariner (Jim Spoon etc., "Lake Mariner Data" in their roles); the live Justified site shows the same | keep, as designed |
| J6 | Explore card "Careers" text | "apart of" (typo) | "a part of", as fixed on Lake Mariner |
| J7 | Highlight tab and Responsible Development photos | tabs: same photos as Lake Mariner; RD: one new photo | as designed; tab photos stay Lake Mariner's until the client sends Justified ones |

## Site-wide

- **Name and contact:** "Justified Data" everywhere; footer line "Justified Data — a TeraWulf campus © 2026"; e-mail `info@justifieddatacampus.com`. Location Hawesville, KY; power market MISO; status Development.
- **Logos:** nav (white + dark), footer (vertical), favicon/webclip with the Justified shield.
- **Nav:** Insights dropdown = Community Impact, FAQ (no Closed-Loop Cooling). Announcement bar text unchanged.
- **Footer:** Insights column = Community Impact, FAQ, News, Events (no Closed-Loop Cooling).
- **SEO:** page titles "… — Justified Data", `og:site_name` "Justified Data", schema with Hawesville, KY and the justifieddatacampus.com domain (production domain to confirm).

## Pages

### Home — content only
- Hero: H1 "Site of the Justified Data Campus"; lead "The Justified Data Campus represents the evolution of a legacy infrastructure site into a forward-looking center for research and digital innovation. Located on the site of the recently retired Hawesville Smelter, the project breathes new life into critical infrastructure once used for aluminum smelting."; facts Location Hawesville, KY · Power Market MISO · Status Development; new photo (`home-hero.png`).
- Intro + key figures: heading "Justified Data"; text "Engineered for demanding, high-reliability workloads, the campus demonstrates how adaptive reuse can power the future. By building on existing assets instead of greenfield development, Justified Data advances sustainable growth while honoring the region’s environmental and agricultural heritage."; Total Capacity 401 MW, Contracted 401 MW, Open 0 MW; Key Highlights: Immediate power availability · Additional scalable capacity beyond 401 MW · Recognized economic anchor project for the State.
- Explore (component, also on PO): Community Impact card "How Hawesville benefits — reuse of the former smelter site, built on existing infrastructure."
- FAQ preview: from the FAQs collection (Show on Home): the Ohio River question, Hawesville community, noise, electricity prices.

### Project Overview — content + one section out, one in
- Hero: H1 "Former Century Aluminum smelter site"; lead "Located on the site of the former Century Aluminum Smelter (retired in 2022), the project redevelops a 790-acre legacy industrial site into a technologically advanced campus for research and digital innovation."; new photo.
- About TeraWulf (C | Intro Row, text in the component): drops "sustainably powered" ("…develops and operates high-performance data centers…").
- About the Project (C | Collage): heading "Justified Data"; statement "TeraWulf is committed to responsible site stewardship, including demolition and environmental remediation of former aluminum smelting infrastructure."; text "Leveraging existing infrastructure rather than greenfield development, the phased buildout is expected to deliver approximately 480 MW of data center capacity beginning in 2027, while creating hundreds of jobs, generating significant new tax revenue, expanding high-speed fiber, strengthening transmission infrastructure, and driving long-term economic growth across Hancock County and the broader region."; new wide and square photos.
- **Cooling promo (C | Promo Card) removed.**
- Highlight Tabs: [1] Scale & Infrastructure "Redevelopment of the 790 acre property with phased buildout, starting with ~480 MW of data center capacity." [2] High-Quality Jobs "The project will create a significant number of full-time positions once operational, supported by education and apprenticeship opportunities. AI/HPC tenants and vendors supporting the site are anticipated to generate additional local employment across operations, services, and supporting industries." [3] **Timing** "Construction is expected to commence in the first half of 2026, with a phased buildout extending through 2027, subject to site planning and permitting approvals." [4] Community Benefits "Meaningfully increases local tax base, supporting schools and community services, plus ongoing partnerships with local charities and organizations. Learn more here." (→ /community-impact) [5] World-Class Tenants "Designed for long-term (10-15+ year) data center leasing agreements with highly rated global technology companies, leveraging TeraWulf’s experience supporting mission-critical digital infrastructure customers."
- Responsible Development: **4 items** (Lake Mariner 5), one new photo: No River Water Use "Our data campus will use a closed-loop cooling system that is completely independent of the community’s natural water sources. More information about our closed-loop cooling system can be found here." (J1/J2) · Ultra Low Noise "Advanced cooling technology keeps sound levels below 55 dBA – about the volume of a normal conversation or household refrigerator – ensuring no noise impact at the property line." · Sustainable Design "Incorporates LED lighting, energy efficient building materials, demand-response capabilities and more. See our post HERE for more information on TeraWulf’s sustainability initiatives." (link not given) · Smart Land Reuse "Built on existing infrastructure assets instead of greenfield development, the campus demonstrates how adaptive reuse can power the future. TeraWulf is committed to leaving the campus better than they found it, with plans for full demolition and environmental remediation of the former aluminum smelting infrastructure."
- **Resources & Documents (new on the design, exists on staging):** one document, "Justified Information Session Presentation" — "View or download our Justified Information Session Presentation from our community meeting on 2.24.26." Download. Initiatives list empty (hidden while empty, as Chloe asked).

### Community Impact — content + four sections out
- Hero lead: "…As we expand operations in Hawesville, …".
- Barker accordion → heading "How Your Community benefits", 7 items: No river water usage for cooling · No greenfield or farmland conversion · Low-noise profile · Local employment · Regional connectivity · Community commitment · **Lasting economic and fiscal impact** (replaces "No combustion or stack emissions"); copy from the state frames. Same single photo as PO Responsible Development (new).
- Protecting our environment: Closed-loop cooling "The Data Campus will use a closed-loop system, independent from the river, requiring only a few gallons of utility water daily." button "CTA" (J2) · Ultra low noise "Advanced technology keeps sound levels below 55 dBA – about the volume of a normal conversation or household refrigerator." EVAPCO’s sound solutions · No emissions "Located in an energy-rich region with abundant power and facilities designed to support grid stability." NYISO 2025 report (J4).
- Investment statement: "Hawesville’s future … collaborating with …".
- Strengthening The Grid: Grid Connection "The Justified Data Campus connects to the regional grid instead of the local power distribution system. …" · Privately Funded Upgrades · Supporting Grid Stability · The Result (copy from the state frames).
- **Removed:** What Actually Drives Local Electric Rates (rates row), Meet Our Employees, Our Team testimonials, Community & Partnership Initiatives.

### Closed-Loop Cooling — dropped (J1, user 2026-11-24): page to draft, nav and footer links removed

### Careers — branding only (J5)

### News — CMS only
- Same layout. 17 posts from the live newsroom (Fluor EPC contract, fire trucks, noise levels, noise study, $4B Hancock County, Commission approval, ENR, Beshear requirements, PSC 482 MW, smelter demolition, 14 News, 20-year lease, Owensboro Times, FOX 56, Anthropic lease, Kentucky Power, Feb 2 acquisitions, plus "TeraWulf starts construction" which the live sitemap lists and Figma doesn't). Categories Articles and Press Releases; source names as on the cards.

### News Article, Event — branding only (templates; the content comes from the CMS)

### Events — CMS + one line
- Upcoming intro: "TeraWulf plans to schedule community information sessions in the coming months. Check here for updates!"
- Upcoming: Hancock County Career Fair (22 Oct 2026, 11:00 AM – 2:00 PM, Hancock County Career Center) shown as upcoming in Figma, though its date has passed; past: Community Informational Event (21 Oct), Local Contractor Event with TeraWulf and Fluor (GC) (20 Oct), Hancock County Opportunity Expo (20 Mar), Local Contractor Outreach Event (12 Mar), Local Hiring Event with GRADD (25 Feb), Community Informational Event (24 Feb). Event types Community Meeting, Contractor Event, Career Expo, Hiring Event. Details from the live event pages.

### FAQ — CMS + structure
- Hero line: "Straight answers to the questions we hear most from our neighbors in Hawesville — jobs, water, noise and power."
- **One section** (General, 13 questions); no Propylene glycol section and no filter pills (toolbar = search only).
- 13 FAQs from the live site, in its order.

## Build plan (each batch waits for the user's go-ahead)

1. **Port:** CAMPUS-PORT rows with Justified's values (head code piece 1 with `og:site_name` "Justified Data", Home/News/Event schema from `docs/seo/schema/justified/`, FAQ OG image and hero re-ingest, Empty Card loading props, Featured lead eager). The Cooling poster row is n/a (page dropped, J1).
2. **Branding:** logos (upload with `upload_image_by_url`), nav/footer text and links, footer line and e-mail, favicon/webclip (manual, EA), page SEO titles.
3. **CMS:** News Posts, Events (+ types), FAQs, Documents replaced; Testimonials kept.
4. **Page content and photos:** Home, PO, CI, FAQ, Events as above.
5. **Sections:** PO promo out and Responsible Development to 4 items; CI four sections out; FAQ Propylene section and pills out; Cooling page to draft and its links removed (J1, decided).

## Status (2026-11-24, evening)

Built and published on tw-justified.webflow.io (batches 1–5, user's go-ahead):

- **Batch 1, port:** every CAMPUS-PORT row for Justified (head code with `og:site_name` "Justified Data", Home/News/Event schema from `docs/seo/schema/justified/`, FAQ share image and re-ingested hero, Empty Card loading props, eager /news lead image). The Cooling poster row is n/a.
- **Batch 2, branding:** nav logos (white and dark, 144×49, Nav Logo 9em / 7.5em), footer logo (vertical), Justified's shield on every hero (Hero Mark) and on news cards without a photo, footer line and e-mail, Cooling links out of the nav and footer, page titles and descriptions "… — Justified Data", template titles. Favicon files ready (`Assets/favicon/favicon-jd-512.png`, `webclip-jd-256.png`): MANUAL-TODO EA.
- **Batch 3, CMS:** 13 FAQs (General; Show on Home: community, water, noise, electricity), 1 Document (the info-session PDF, re-hosted on Webflow; Resources group, Project Overview only), 18 news posts (17 from the design plus "TeraWulf starts construction", 23 Nov, from the live newsroom; covers from the Figma cards; featured: Fluor, fire trucks, noise levels, noise study), 7 events (types Hiring Event, Community Meeting, Contractor Event, Career Expo; the design's single event photo on all). Lake Mariner's posts, documents and events are deleted; Testimonials kept (J5); the unused Event Perks and the Webinar type stay in the collections.
- **Batch 4, content:** Home (hero, facts, statement, 401/401/0 MW, highlights, aerial photo, Explore card), Project Overview (hero and photo, About TeraWulf without "sustainably powered", About the Project, five tabs, four Responsible Development items, photo), Community Impact (hero line, How Your Community Benefits ×7, environment cards, investment statement, grid answers), FAQ hero line, Events empty-state line, announcement bar → /events.
- **Batch 5, sections:** Project Overview: Cooling promo and Initiatives out, Responsible Development to 4 items. Community Impact: rates row, Meet Our Employees, testimonials, Resources and Initiatives out. FAQ: Propylene glycol section and category pills out. Closed-Loop Cooling page set to draft (404 on staging).

Checked at 1440, 820 and 390 (full-page captures of all nine pages): no Lake Mariner, Barker, Ontario or NYISO text left except where noted below.

Figma Build Review row 2 (y 13000): all nine pages, each with Justified's Clean Pages frame, staging at 1680/820/390 (captured 2026-11-24 after the shield swap) and markers: green where it matches, red for L2–L6 and L10 below; the Cooling column is empty.

**Sample event — delete or replace before launch.** "Sample Event — Justified Data Hiring Day" (`/events/sample-justified-hiring-day`, item `6b060b8fc06b4ed42be7e874`), added 2026-11-24 at the user's request so the Event template could be checked with every field filled. Hiring Event, 18 March 2027 9:00 AM–3:00 PM (site time zone, Eastern), Justified text marked as sample in the tagline, summary, body, location note, callout and RSVP line; image the events photo already used on the site; perks Career growth, 401(k) match, Health insurance, Generous PTO (existing items; no starting pay); RSVP URL https://www.terawulf.com/connect. The RSVP card condition (EC) was tested on it: with RSVP URL cleared the published page had no Reserve card, restored it came back. While it is upcoming, /events shows it instead of the "No events scheduled" card. Build Review row 2: Event (`2800:5670`) shot with it, Events (`2800:5397`) re-shot and its marker (the passed Career Fair, L4) now green. Delete it in the CMS (or overwrite it with a real event) before launch.

**Launch QA 2026-11-26:** `docs/handoff/qa/justified.md` (independent design check, pre-launch checks, fixes, client punch list, redirect map). Corrections to this file: the Home hero still showed Lake Mariner's coolers photo until then (fixed); the fire-trucks cover was the wrong image fill (fixed); the Events frame gives each past card its own photo, not one shared photo (open, client). Batch 4's "Home (hero …)" is now true.

## Left / differences from the design

| # | What | Why / next step |
| --- | --- | --- |
| L1 | ~~Favicon and webclip still Lake Mariner's shield~~ Justified's own shield and navy webclip, 2026-11-24 (MANUAL-TODO EA) | — |
| L2 | ~~Six links inside rich-text props~~ done 2026-11-24 (MANUAL-TODO EB) | — |
| L3 | ~~Reserve card with no RSVP link~~ hidden when RSVP URL is empty, 2026-11-24 (MANUAL-TODO EC) | — |
| L4 | Upcoming events: the design shows the 22 Oct career fair as upcoming; it has passed, so it is under Past. Since 2026-11-24 the sample event fills Upcoming (see the sample-event note); without it /events shows the empty card | data-driven, correct for today; the sample goes before launch |
| L5 | Home FAQ order: the design shows water first; the list sorts by Order, so the community question (Order 1, as on the live FAQ page) comes first | change Order if the client wants water first |
| L6 | News posts from other publishers have a one-line body and a Source card linking out; excerpts are generic ("Coverage of the Justified Data Campus from …") | the live site links out without text; client can add summaries |
| L7 | Careers testimonials and roles are Lake Mariner's (as in the design and the live Justified site) | J5 |
| L8 | Announcement bar keeps the design's text (hiring event for data center operators), now linking to /events | confirm text with the client |
| L9 | CI environment card 1 button says "Read the FAQ" (design: "CTA"), card 3 keeps "NYISO 2025 report" | J2, J4 |
| L10 | Project Overview hero photo is 1024 px wide in the design export | ask for a larger file |
| L11 | Highlight tab photos and the About TeraWulf video still are Lake Mariner's (same in the design) | J7 |

## Files moved off the live site (2026-11-24)

justifieddatacampus.com (Squarespace) goes down soon, so every file it hosts that the new site uses or may need now lives in Justified's Webflow asset panel. Local copies of the originals are in `Assets/justified/live-site/`. Method: crawled the sitemap (37 URLs), every page, and the `?format=json` feeds and items for the newsroom (18) and events (7). Images were converted to WebP (q82, at most 2400 px; originals kept locally) and uploaded through the assets API. With the Designer MCP app open, each upload got its responsive sizes (500–2000 px) within a minute, so no `upload_image_by_url` re-import was needed.

| Live file | Webflow asset id | Webflow URL | Used on the live site |
| --- | --- | --- | --- |
| `Century-Hawesville-1024x685-1.jpg` | `6b05f0bb48f6556a085473ab` | [jd-live-century-hawesville-1024x685-1.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0bb48f6556a085473ab_jd-live-century-hawesville-1024x685-1.webp) | /, /project-overview |
| `hpc5.png` | `6b05f0bfeabbd7eacf466244` | [jd-live-hpc5.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0bfeabbd7eacf466244_jd-live-hpc5.webp) | /events |
| `Image_Jerry+Goodenough+(1).png` | `6b05f0c0d43074405dd22aee` | [jd-live-image_jerry-goodenough-1.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0c0d43074405dd22aee_jd-live-image_jerry-goodenough-1.webp) | — |
| `closed+loop.png` | `6b05f0bdb9ccec54f9ed75cd` | [jd-live-closed-loop.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0bdb9ccec54f9ed75cd_jd-live-closed-loop.webp) | /community-impact |
| `DS3.png` | `6b05f0bef2fafba334d0b07d` | [jd-live-ds3.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0bef2fafba334d0b07d_jd-live-ds3.webp) | /community-impact |
| `hpc1.png` | `6b05f0bfda76c176da96c022` | [jd-live-hpc1.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0bfda76c176da96c022_jd-live-hpc1.webp) | /community-impact |
| `community-1.png` | `6b05f0bef9358ece711f31ba` | [jd-live-community-1.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0bef9358ece711f31ba_jd-live-community-1.webp) | /community-impact |
| `DS5.png` | `6b05f0be800325db86958174` | [jd-live-ds5.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0be800325db86958174_jd-live-ds5.webp) | /careers |
| `jesse+rohring.png` | `6b05f0c1a34ded0a62a079f7` | [jd-live-jesse-rohring.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0c1a34ded0a62a079f7_jd-live-jesse-rohring.webp) | /careers |
| `jim+spoon+1.png` | `6b05f0c1800325db869581ff` | [jd-live-jim-spoon-1.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0c1800325db869581ff_jd-live-jim-spoon-1.webp) | /careers |
| `Dan+H+2.png` | `6b05f0be48f6556a08547429` | [jd-live-dan-h-2.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0be48f6556a08547429_jd-live-dan-h-2.webp) | /careers |
| `Project+Highlights.png` | `6b05f0c25cbf576966d9bc8f` | [jd-live-project-highlights.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0c25cbf576966d9bc8f_jd-live-project-highlights.webp) | /project-overview |
| `about+terawulf.png` | `6b05f08f48f6556a08546f08` | [jd-live-about-terawulf.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f08f48f6556a08546f08_jd-live-about-terawulf.webp) | /project-overview |
| `coolers.png` | `6b05f0bed107b920e173cd69` | [jd-live-coolers.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0bed107b920e173cd69_jd-live-coolers.webp) | /closed-loop-cooling |
| `lakefront+view.png` | `6b05f0c10dae7614efad7ebb` | [jd-live-lakefront-view.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0c10dae7614efad7ebb_jd-live-lakefront-view.webp) | /closed-loop-cooling |
| `rear+door+heat+exchangers.png` | `6b05f0c2f803353ba4b4779d` | [jd-live-rear-door-heat-exchangers.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0c2f803353ba4b4779d_jd-live-rear-door-heat-exchangers.webp) | /closed-loop-cooling |
| `coolers2.png` | `6b05f0be6a8e83579adb4d83` | [jd-live-coolers2.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0be6a8e83579adb4d83_jd-live-coolers2.webp) | /closed-loop-cooling |
| `data+hall.png` | `6b05f0be604921bea5875748` | [jd-live-data-hall.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0be604921bea5875748_jd-live-data-hall.webp) | /closed-loop-cooling |
| `closed+loop+BP+data+center+side.png` | `6b05f0bdb9ccec54f9ed759d` | [jd-live-closed-loop-bp-data-center-side.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0bdb9ccec54f9ed759d_jd-live-closed-loop-bp-data-center-side.webp) | /closed-loop-cooling |
| `closed+loop+BP+air+cooler+side.png` | `6b05f0bc48f6556a085473c8` | [jd-live-closed-loop-bp-air-cooler-side.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0bc48f6556a085473c8_jd-live-closed-loop-bp-air-cooler-side.webp) | /closed-loop-cooling |
| `JDC+Hero+Image.png` | `6b05f0c1d107b920e173ce58` | [jd-live-jdc-hero-image.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0c1d107b920e173ce58_jd-live-jdc-hero-image.webp) | — |
| `hpc3.png` | `6b05f0bf6a8e83579adb4e2c` | [jd-live-hpc3.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0bf6a8e83579adb4e2c_jd-live-hpc3.webp) | / |
| `Image_Construction-1.png` | `6b05f0bfc7087b237fc35135` | [jd-live-image_construction-1.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0bfc7087b237fc35135_jd-live-image_construction-1.webp) | /project-overview |
| `vlcsnap-2025-09-16-15h02m18s180.png` | `6b05f0c29a5f5d63a44a7f9e` | [jd-live-vlcsnap-2025-09-16-15h02m18s180.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0c29a5f5d63a44a7f9e_jd-live-vlcsnap-2025-09-16-15h02m18s180.webp) | /project-overview |
| `Image_Ops+Team.png` | `6b05f0c1d107b920e173ce42` | [jd-live-image_ops-team.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0c1d107b920e173ce42_jd-live-image_ops-team.webp) | /faq |
| `LMD+team+shot+9+EDITED.png` | `6b05f0c2c7087b237fc351df` | [jd-live-lmd-team-shot-9-edited.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0c2c7087b237fc351df_jd-live-lmd-team-shot-9-edited.webp) | /community-impact |
| `justifieddata_logo2.png` | `6b05f0c15cbf576966d9bc52` | [jd-live-justifieddata_logo2.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0c15cbf576966d9bc52_jd-live-justifieddata_logo2.webp) | /, /careers, /closed-loop-cooling, /community-impact, /events, /events/community-hiring-session, /events/community-hiring-session-rmb7b, /events/community-information-session, /events/community-information-session-pjte5, /events/contractor-outreach, /events/contractor-outreach-gsfrt, /events/hancock-county-opportunity-expo, /faq, /newsroom, /newsroom/20-year-lease-signed-for-terawulf-data-center-in-hawesville, /newsroom/4b-data-center-in-hancock-county-expected-online-in-2027, /newsroom/a-data-center-developer-says-it-is-committing-to-beshears-data-center-requirements, /newsroom/anthropic-signs-19b-20-year-lease-for-terawulfs-data-center-in-hancock-county, /newsroom/category/Articles, /newsroom/category/Blog+Post, /newsroom/category/Media+Coverage, /newsroom/category/Press+Releases, /newsroom/cowj3pcg7it5lgv4y3oz1pz4vcvlhm, /newsroom/data-center-noise-levels-at-the-justified-data-campus, /newsroom/data-centers-help-support-long-term-affordability-kentucky-power, /newsroom/fluor-signs-epc-contract-with-terawulf-for-large-scale-data-center-campus-in-kentucky, /newsroom/former-aluminum-smelter-demolition-marks-first-step-toward-future-for-hawesville-site, /newsroom/kentucky-pdc-approves-482-mw-power-agreement-for-terawulfs-justified-data-campus, /newsroom/noise-study-concludes-data-center-wont-produce-excessive-noise, /newsroom/terawulf-advances-4b-data-center-at-former-kentucky-smelter, /newsroom/terawulf-announces-anthropic-lease-at-justified-data-campus, /newsroom/terawulf-announces-new-lease-at-hawesville, /newsroom/terawulf-anthropic-donate-fire-trucks-to-county, /newsroom/terawulf-expands-digital-and-power-infrastructure-portfolio-with-strategic-acquisitions-in-kentucky-and-maryland, /newsroom/terawulf-shares-new-information-about-data-center-planned-for-hawesville, /newsroom/terawulf-starts-construction-at-kentucky-data-center-campus, /project-overview |
| `WEHT_CENTURY20NEGOTIATIONS_V_1440630390568_4520782_ver1.0.webp` | `6b05f0c2c7087b237fc3522c` | [jd-live-weht-century-negotiations.webp](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05f0c2c7087b237fc3522c_jd-live-weht-century-negotiations.webp) | /project-overview |
| `/s/Hawesville-Community-Info-Session-Presentation-Feb-2026vF.pdf` | `6b05d2de33ab8e1d3ea40c1c` | [Justified-Information-Session-Presentation-Feb-2026.pdf](https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05d2de33ab8e1d3ea40c1c_Justified-Information-Session-Presentation-Feb-2026.pdf) | /, footer, Project Overview (Documents) |

Not moved, and why:
- **Post and event covers:** every newsroom and event item's `assetUrl` on static1.squarespace.com is a Squarespace placeholder (`contentType` text/html), not an image. The new site's covers came from Figma.
- **`Cayuga-1.png`** (old og:image): already 404 on Squarespace.
- **Squarespace's own CSS, JS and fonts:** not content.
- **`www.evapco.com/…/650H.low_sound_brochure.pdf`** (linked from the noise-levels blog post): a third-party file, not hosted by the live site.
- **Videos:** the live Careers "Meet Our Employees" film (2:12, with sound) is byte-identical to Lake Mariner's (MD5 29ea0f87…). Since 2026-11-24 it is a Justified asset as Lake Mariner's 28 MB web re-encode (1080p, under the 30 MB asset limit) with Lake Mariner's English captions: `6b05faa482c4b02a2305c711_jd-meet-our-employees.mp4` and `6b05faa4ee6de2379532cdbd_jd-meet-our-employees-captions.vtt`. Justified's Careers Video Frame plays it in the native player instead of the YouTube topping-out video (user's choice); C \| Video Frame got the Captions URL prop and `data-video-captions` binding (CAMPUS-PORT). Checked on staging: plays unmuted, 2:12, captions track attached. Local copies in `Assets/justified/live-site/` (`video-careers.mp4` the 51 MB original, `video-careers-web.mp4`, `video-careers-captions.vtt`). The 35 s Home hero aerial (`video-home.mp4`, the title burned in) stays local only.

Links repointed:
- **Project Overview › Responsible Development › item 3 "HERE":** stays on `https://www.cayugadatacampus.com/newsroom/built-for-the-future-how-terawulf-is-redefining-sustainable-infrastructure`. The Cayuga site is staying (user, 2026-11-24), so no Cayuga files were moved. The link was briefly pointed at Lake Hawkeye's /news/ URL the same day, then restored and republished.
- **Style guide** (component defaults): C | Doc Accordion Item › Link and C | Source Card › Link now point to Justified's own info-session PDF (Source Card › Link Text "Justified Information Session Presentation (PDF)"), not lakehawkeyedata.com.
- **CMS:** no field points at the old domain, Squarespace or another campus site (checked every item in News, Events, Documents, FAQs, Testimonials, Perks). The Documents item already used the Webflow copy of the info-session PDF (same bytes, MD5 279f2c2a…).

Checked: all 35 published pages of tw-justified.webflow.io, grepped for justifieddatacampus.com/s/, squarespace, sqspcdn, lakehawkeyedata, lakemarinerdata and muskiedata: no hits. The Cayuga article link above is intended. The remaining justifieddatacampus.com references are the new site's own canonical and schema URLs, which become live when the domain moves to Webflow.

301 redirects for files (add in Site settings › Publishing › 301 redirects when the domain moves):

| Old path | Redirect to |
| --- | --- |
| `/s/Hawesville-Community-Info-Session-Presentation-Feb-2026vF.pdf` | `https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b05d2de33ab8e1d3ea40c1c_Justified-Information-Session-Presentation-Feb-2026.pdf` |

The live site's page paths (`/newsroom/<slug>` → `/news/<slug>`, `/events/<old-slug>`, `/home`, `/closed-loop-cooling`) belong in the site's redirect map at launch. They are not files, so they are not listed here.
