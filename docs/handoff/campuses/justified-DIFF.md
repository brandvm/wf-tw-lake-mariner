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

## Status

Nothing written to Webflow yet (2026-11-24): waiting for the `webflow-tw-justified` sign-in and the go-ahead per batch.
