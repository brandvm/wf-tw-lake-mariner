# Final design vs staging — Lake Mariner (2026-11-23)

The Figma page "↪ • Template — Clean Pages" (`2523:111`) now holds the final
design for all five campuses, one row per site. Lake Mariner is the top row
(y ≈ 0). This file lists what differs from staging, page by page, and the
build plan. Justified (y ≈ 12.4k), Muskie (24.2k), Lake Hawkeye (35.8k) and
Chesapeake (48.4k, in progress) are built later by duplicating this site and
repo.

Chloe's comments (checked 2026-11-23) also settle: the Community Impact hero stays one paragraph ("let's consolidate into ONE paragraph"), the Cooling hero line and the News intro stay as on staging (her exact copy), Responsible Development goes light ("let's go light."). These show green on the Figma Build Review page.

Audit method: each Figma frame against tw-lake-mariner.webflow.io at 1680,
section by section, screenshots plus text dumps. Screenshots in the session
scratchpad (`audit-*`).

## Frames

| Page | Figma frame | Staging |
| --- | --- | --- |
| Home | `2523:112` | `/` |
| Project Overview | `2523:617` (+ tab states `2615:24676/24716/24756/24796`, accordion states `2648:16359`, `2651:8882/8921/8960`) | `/project-overview` |
| Community Impact | `2523:1235` (+ states beside it) | `/community-impact` |
| Closed-Loop Cooling | `2523:1696` | `/closed-loop-cooling` |
| Careers | `2523:2102` | `/careers` |
| News & Media | `2594:7635` | `/news` |
| News Article | `2523:2885` | `/news/<slug>` |
| Events | `2523:3252` | `/events` |
| Event | `2523:3595` | `/events/<slug>` |
| **FAQ (new)** | `2597:2` (+ item states `2597:217`) | none (404) |

## Decisions needed (client or Brand Vision)

| # | Question | Design says | Staging now |
| --- | --- | --- | --- |
| D1 | Resources & Documents on Project Overview and Community Impact, Initiatives on Project Overview | gone from both pages (CI keeps Initiatives only) | built; Resources holds Cayuga/Lansing documents (another campus). **Chloe (Figma, 23 Sep): "Resources" and "Community & Partnership Initiatives" accordions on ALL Project Overview and Community Impact pages, hidden while empty** → keep unless she says the final design replaces that |
| D2 | FAQ page | new `/faq` page; supersedes "FAQ links go to terawulf.com" (2026-10-27) | **2026-11-23:** empty placeholder page `/faq` (page 6b04680d2d3b401c29151b65, nav and footer only); Home "All Questions" and the footer FAQ link go to it. The page content is still to build |
| D3 | "Submit a question" button target (FAQ hero and CTA) | not given | **Chloe (23 Sep): links to the main contact form** → terawulf.com/connect, as the other Contact links |
| D4 | Footer Insights | "News" and "Events" as two links | **done 2026-11-23**: two links, legal row spacing as the design (499 vs 498px at 1680); the credit stays "Site by Brand Vision Marketing" → brandvm.com, new tab (user) |
| D5 | Title case | Barker accordion titles in sentence case; hero H1s, "Explore The Campus", "About The Project", "Meet Our Employees" in title case | Barker titles title case (client round 1); headings sentence case |
| D6 | PO Highlights tab 5 | "(10+ years)" | "(15-20+ years)" — **Chloe's comment (12 Nov), keep staging** |
| D7 | Explore card copy | older wording | newer wording from client comments; keep staging, fix "apart of" → "a part of" |
| D8 | News Featured posts | featured block above the grid, posts repeated in the grid | none |
| D9 | CI electric-rates card titled "Hyperscale AI Infrastructure" with a natural-gas body | probably "Natural Gas Prices" | — |
| D10 | Missing URLs | demolition video ("HERE" on PO item 5 and CI Barker item 2), EVAPCO sound solutions, NYISO 2025 report, sustainability post (FAQ), the videos | — |

## Changes by page

### Home — small
- Footer: done 2026-11-23 (D4).
- FAQ "All Questions" → `/faq`: done 2026-11-23 (placeholder page).
- Copy case only (D5): hero H1, "Explore The Campus". Keep "Setting…" (design's lowercase s is a typo).
- No action: Explore tag bubbles, Instagram, accordion icon direction, Events/News cards (all decided earlier).

### Project Overview — medium
- **About the Project:** no change. The design shows only the 750 MW sentence, but Chloe asked to "match copy to lakemarinerdata.com project overview page" (Figma, 12 Nov), and staging is the live site's two sentences word for word.
- **Responsible Development:** light theme (white section, Frost cards, dark text), "+" icons instead of [1]–[5], one lake/plant photo for all items (`2615:24560`). Designer combo + C | Image Accordion Item (dark) icon.
- Resources / Initiatives removed (D1).
- Tab 5 wording (D6). Cooling promo frame is named "Animation": ask whether the photo becomes a loop.

### Community Impact — large (design grew from ~4,400 to ~9,000px)
Design order: Hero · How Barker Benefits · Protecting our environment (new) · statement over photo scene (new) · Strengthening the grid accordion (new) · What actually drives local electric rates? (new) · Meet Our Employees (new) · Testimonials (new) · Community & Partnership Initiatives · Footer. Resources removed.
- **Hero:** text in two paragraphs at "As we expand…".
- **Barker accordion:** item 1 "No lake water usage for cooling"; answers 2–7 now written in the design (full text in the audit; staging says "Text to come…"); item 2 ends with the demolition "HERE" link (D10). Autoplay with one photo, as built.
- **Protecting our environment (new):** H2 + 3 cards (300px photo, Frost body, H3, text, gradient "+" button): Closed-loop cooling → Cooling page; Ultra low noise → EVAPCO; No emissions → NYISO report. Swipe row on mobile. New card pattern (component).
- **Statement over a photo scene (new):** two-tone text-fill statement ("Our data center investment contributes directly to Barker's future…") over a 3-layer scene (photo, smoke, worker cut-out). C | Photo Band needs image props (or a sibling component) to take this scene.
- **Strengthening the grid (new):** dark photo background + 4 glass accordion items (Grid Connection, Privately Funded Upgrades, Supporting Grid Stability, The Result) — the Cooling Operations pattern.
- **What drives local electric rates (new):** two-tone H2, intro, "Key Drivers…" H3, a horizontal row of 420×420 tiles: an infographic image (IPPNY pie chart) + 3 Frost cards with bold phrases (D9). Swipe/hscroll rail.
- **Meet Our Employees (new):** Careers pattern (statement + C | Video Frame, media-grow). Video URL missing.
- **Testimonials (new):** Careers Quote Slider (two Testimonials lists by Order). Design note "Transition by scroll" between the two.
- **Initiatives:** drop the "EXPLORE MORE" eyebrow and the lorem line.

### Closed-Loop Cooling — small
- Hero text: "…protects Lake Ontario — a fully sealed system that draws no local water and discharges none."
- Photo Band: new "Watch "Cooling Explained"" button (video dialog hook) — needs Show Button + label props on C | Photo Band.
- Inside the Loop: the design matches the new two-mode diagram switcher.
- Still placeholders in the design: How It Works eyebrow "Lorem Ipsum", the two Operations answers.

### Careers — tiny
- Heading "Meet Our Employees" (D5). Testimonials match. Check Dan Heidemann's quote ("AES Somerset", "Director of Operations" in the quote vs "VP of Construction" role).

### News & Media — medium
- Intro: "Project updates, announcements and coverage from around the region."
- **Featured (new):** one large card + 3 stacked row cards above the toolbar, from News Posts with Featured on (D8). Outside Finsweet List.
- **Card:** topic line → "date · source" (Publish Date `MMM D, YYYY` · Source Name); no excerpt on listing cards. The nested Topics list goes, so the card can become a whole-card link.
- "Filter by:" label in the design; staging keeps "Sort by:" (it sorts).
- Related cards in the article frame still show topics: ask whether they follow the new card.

### News Article — none
Matches (the Follow band body line was removed in round 1 on purpose).

### Events / Event — small
- Card date line `ddd, D MMMM YYYY`, times `h:mm A` with an en dash; badge month uppercase.
- Detail Bar times uppercase with an en dash; RSVP meta in mixed case (not all caps); button icons → (design) instead of ↗ / ↓.
- Other events: heading at the design size.
- **Bug:** the Follow band 3D fan doesn't render (image 0px tall) on Events, Event and probably News.

### FAQ — new page
Source note: "lakemarinerdata.com/faq · Dev: add FAQPage JSON-LD schema".
1. C | Page Hero: shield, "FAQ", "Straight answers to the questions we hear most from our neighbors in Barker — water, traffic, power and the environment.", glass "+ Submit a question" (D3). New hero photo.
2. Toolbar: pills ALL / GENERAL / PROPYLENE GLYCOL + "Search questions…" (News toolbar pattern, Finsweet List).
3. General (white): split head (eyebrow, H2 "General questions", "7 questions") + accordion of 7, Frost cards, first open.
4. Propylene glycol (Frost section, white cards): "Propylene glycol FAQs", "4 questions · data from the product's Safety Data Sheet (SDS)", 4 items.
5. "Still have a question?" C | Empty Card with "+ Submit a question".
CMS: FAQs gets a Category option (General, Propylene glycol); answers from the live lakemarinerdata.com/faq (rich text with lists and links). faq-schema must cover both lists in one FAQPage block. Repoint nav, footer and Home FAQ links to `/faq`.

## Build plan (Lake Mariner)

1. **Quick fixes batch:** Cooling hero text + Photo Band button; Careers heading; PO Collage statement; CI hero split, Barker answers and item 1 title, Initiatives cleanup; event date/time formats and badge case; RSVP meta case; Other events heading; Follow fan bug; "a part of".
2. **Decisions D1–D10** with the client (one message), then removals and footer.
3. **Community Impact new sections:** Grid accordion and Testimonials and Meet Our Employees (reuse) → Protecting our environment (new card) → Photo Band with image props → electric-rates rail.
4. **FAQ page** (CMS category + content, page, toolbar, schema, links).
5. **News:** card change, then Featured.
6. **PO Responsible Development** light theme.

For the other four campuses: keep every campus-specific text, photo and link in
CMS items or component props (not page text), so the duplicate site needs
content changes only.
