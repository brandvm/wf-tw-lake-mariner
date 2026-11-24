# Muskie Data: differences from Lake Mariner

Muskie Data (TeraWulf), site `6b05c5e78050528a5b59dc6a`, staging
tw-muskie.webflow.io, MCP server `webflow-tw-muskie`. A duplicate of Lake
Mariner made on 2026-11-24, before SEO batch A (`CAMPUS-PORT.md`).

Compared 2026-11-24: Muskie's row on the Figma page "↪ • Template — Clean
Pages" (y ≈ 24,323) against Lake Mariner's top row, page by page, by text
and by image fill. Live site for real copy and links: muskiedatacampus.com
(FAQ answers, newsroom links, event details). Status column: ☐ to do,
☑ done on staging, — not needed.

## Build status (2026-11-24)

Built and published to tw-muskie.webflow.io in five batches, each with the
user's go-ahead: (1) CAMPUS-PORT rows with Muskie's values (head SEO tags,
Home schema, template schema, page SEO, image priorities; schema files in
`docs/seo/schema/muskie/`); (2) logos, labels, footer line and e-mail,
Cooling links removed, Cooling page set to draft (404), announcement bar
hidden; (3) CMS: 12 FAQs (from muskiedatacampus.com/faq), 10 news posts,
2 past events, 2 documents, Lake Mariner items, perks and unused event
types deleted; (4–5) page copy and photos from Figma, and the section
changes below. Checked at 1440, 820 and 390 (full-page screenshots) and in the
published HTML: no Lake Mariner, Barker or Lake Ontario text left outside
Careers (testimonials kept, Q3).

**Build Review (Figma `2556:2`, row 3, y 26000)**, done-list: add or
refresh a page's section when that page changes on staging. Built
2026-11-24 for all nine Muskie pages (Cooling column empty), each with
Muskie's Clean Pages frame, staging at 1680/820/390 and markers (green ✓
built/matches, red for the open items above): Home `2801:2943`, Project
Overview `2801:3845`, Community Impact `2801:4432`, Careers `2801:5023`,
News `2801:5357`, News Article `2801:6031`, Events `2801:6335`, Event
`2801:6515`, FAQ `2801:6890`. When an open item is fixed, re-shoot that
page and turn its red marker green.

Still open:

- **MANUAL-TODO FA–FD**: done 2026-11-24 in the Designer and Site
  settings and published. The news cards link to their publishers in a new
  tab; the four rich-text links are in; Muskie has its own favicon and
  webclip; the RSVP card hides on events without an RSVP URL (both today).
- **Photo `srcset`**: fixed 2026-11-24. The four page photos and the FAQ
  hero were re-ingested with `asset_tool › upload_image_by_url` (Designer
  app open) as `*-v2` assets and re-pointed; all publish with `srcset`, and
  Home and Project Overview share images use them. The news and event card
  photos are CMS images, which the API never gives responsive sizes
  (GOTCHAS); they stay ≤ 1200 px WebP.
- **MDC Power Fact Sheet**: the item exists without a file (Q7); its
  Download button goes nowhere until the client sends the PDF. When it
  arrives: save it as `Assets/figma/muskie/MDC-Power-Fact-Sheet.pdf`,
  upload it as a site asset through `webflow-tw-muskie` (as the
  Community Info Session PDF was), put the asset URL in the Documents
  item's External URL, publish the item and the site, and check that the
  Download button on /project-overview and /community-impact opens it.
- **Key figures** 800 / 0 / 800 MW built as in Figma (Q2), to confirm.
- **CI card 3 button** reads "View openings" → /careers (Figma says
  "CTA"; Q6 default); EVAPCO button keeps Lake Mariner's brochure link.
- **About the Project** (C | Collage): Figma colours part of sentence 1
  muted and paragraph 2 dark; the component's Statement/Muted split gives
  sentence 1 dark and paragraph 2 muted.
- **Home FAQ order**: one Order field serves Home and /faq, so Home shows
  communities, water, noise, prices (Figma: water first).
- **Highlight tab photos** and the investment scene are Lake Mariner's
  photos, as in Muskie's Figma row.
- **Event pages**: no tagline, no RSVP; the community meeting links the
  presentation (re-hosted on Webflow) and the YouTube replay.
- Checked at 820 too (Home, Community Impact): layout holds; the Info cards become a swipe row.

## Frames

| Page | Lake Mariner | Muskie | Change |
| --- | --- | --- | --- |
| Home | `2523:112` | `2602:11718` | content |
| Project Overview | `2523:617` | `2602:14271` (tab states `2657:10260`–`10380`, accordion states `2657:10420`–`10519`) | content; Cooling promo removed; 4 Responsible Development items |
| Community Impact | `2523:1235` | `2602:12056` (accordion states `2657:10552`–`10732`, `2657:10777`–`10805`, docs `2681:9561`) | content; 4 sections removed; grid accordion replaced |
| Closed-Loop Cooling | `2523:1696` | none | page not in Muskie's row |
| Careers | `2523:2102` | `2602:12382` | branding only |
| News | `2594:7635` | `2602:12725` | CMS (10 real posts) |
| News Article | `2523:2885` | `2602:13233` | branding only |
| Events | `2523:3252` | `2602:13474` | CMS (no upcoming, 2 past) |
| Event | `2523:3595` | `2602:13695` | branding only |
| FAQ | `2597:2` | `2602:13971` | one section of 12, no category pills |
| Logos | | nav `2610:14709` (122×48), footer `2610:14734` (195×118) | exported to `Assets/figma/muskie/` |

## Global (nav, footer, site)

| Item | Lake Mariner | Muskie | Status |
| --- | --- | --- | --- |
| Nav logo (light and dark) | `logo-lmd-horizontal(-dark).svg`, 182×48 | `logo-muskie-horizontal(-dark).svg`, 122×48: Nav Logo Img's `aspect-ratio` changes with it | ☑ |
| Footer logo | `logo-lmd-vertical.svg` | `logo-muskie-vertical.svg` (195×118) | ☑ |
| Label beside the TeraWulf logo | "Part of" | Figma mixes "SITE OF" and "Part of"; keep "Part of" (decision 2026-10-27) | — |
| Closed-Loop Cooling links | nav Insights, footer Insights | none (no Cooling page) | ☑ |
| Footer line, e-mail | Lake Mariner Data — a TeraWulf campus © 2026, info@lakemarinerdata.com | Muskie Data — a TeraWulf campus © 2026, info@muskiedatacampus.com | ☑ |
| Announcement bar | hiring event (Barker) → LM event page | same text in Figma; Muskie has no upcoming event | ☑ hidden (Q4) |
| Domain (SEO, schema) | lakemarinerdata.com | muskiedatacampus.com | ☑ |
| Location (schema, Events) | Barker, NY | EastPark Industrial Park, Grayson, KY (Eastern Kentucky) | ☑ |

## Home

| Section | Muskie | Status |
| --- | --- | --- |
| Hero (C \| Page Hero, Home) | Heading "Your Go-To Source for Information on the Muskie Data Campus" (title case as on LM); text "The Muskie Data Campus establishes one of the largest…by the end of 2028."; facts Location Eastern, KY · Power Market PJM · Status Planning & Permitting; new photo (`2602:11725`) | ☑ |
| Intro + Key Figures | eyebrow Muskie Data; new statement ("Engineered for demanding…heritage."); stats Total Capacity 800 MW, Contracted 0 MW, Open 800 MW (Q2); aerial photo (`2610:18858`) and its bar: Key Highlights: Initial 500 MW targeted by 2H 2028 · Significant expansion capability beyond 1 GW · Utility-scale, redundant transmission infrastructure | ☑ |
| Explore (C \| Explore Rail) | Community Impact card: "How Grayson benefits — reuse of a former coal mining site and long-term regional economic growth"; the other cards and the chips as on Lake Mariner's Home. Figma uses the same rail text on Project Overview | ☑ |
| FAQ preview | 4 FAQs (water, communities, noise, prices): FAQs collection, Show on Home | ☑ |

## Project Overview

| Section | Muskie | Status |
| --- | --- | --- |
| Hero (Page · Long Heading) | same heading as Home; text "Located on approximately 285 acres…in the state."; new photo (`2602:14273`) | ☑ |
| About TeraWulf (C \| Intro Row) | new paragraph (no "sustainably powered"); the text is inside the component, so it is edited there on this site | ☑ |
| About the Project (C \| Collage) | eyebrow Muskie Data; statement "The phased buildout…beginning in 2028."; paragraph "TeraWulf is committed to responsible site stewardship…"; new wide (`2602:14365`) and square (`2602:14366`) photos | ☑ |
| Closed-Loop Cooling promo (C \| Promo Card) | **removed** | ☑ |
| Highlight Tabs | titles Scale & Infrastructure · High-Quality Jobs · Timing · Community Benefits · World-Class Tenants, with new texts (tab 4 ends "Learn more here." → /community-impact). Same photos as LM in Figma | ☑ |
| Responsible Development (light accordion) | **4 items** (LM 5): Closed-Loop Cooling, Ultra Low Noise, Low-Impact Design, Established Industrial Zoning; new photo (`2615:24637`). Item 1 ends "…can be found here." (link: Q1) | ☑ |
| Explore | as Home | ☑ |

## Community Impact

| Section | Muskie | Status |
| --- | --- | --- |
| Hero | Eastern Kentucky text; same photo as LM in Figma | ☑ |
| How Barker Benefits → "How Your Community Benefits" | **6 items** (LM 7): Lasting economic and fiscal impact, Local employment ("…career opportunities HERE." → /careers), Community commitment, Established industrial zoning, Low-noise profile, Closed-loop cooling ("…found HERE.", Q1); new photo (`2602:12230`) | ☑ |
| Protecting Our Environment → "Design and environmental impacts" | 3 cards: Closed-loop cooling (button "Cooling explained", Q1), Ultra low noise (button "EVAPCO's sound solutions", URL needed), Economic & workforce impact (button "CTA" placeholder, Q6); card 3 photo new (`2602:12263`) | ☑ |
| Investment statement over the photo scene | Eastern Kentucky wording; same scene | ☑ |
| Strengthening The Grid (`#grid`, 4 items) | **replaced** by "Ratepayer Protections & Long-Term Value", 3 items: Transmission Upgrades, Protection for Ratepayers, Long-Term Value Creation. Same accordion, same photo | ☑ |
| What actually drives local electric rates? (`#rates`) | **removed** | ☑ |
| Meet Our Employees (video) | **removed** | ☑ |
| Our Team, In Their Own Words (testimonials) | **removed** | ☑ |
| Resources & Documents | 2 documents: "MDC Power Fact Sheet" (Download; file needed, Q7) and "Community Information Session 6/17/26" (presentation PDF and replay video, two buttons in Figma: Download presentation, Watch video). Documents collection | ☑ |
| Community & Partnership Initiatives | **removed** | ☑ |

## Careers, News Article, Event

Branding only in Figma (nav, footer). Careers keeps Lake Mariner's
testimonials in Figma (Q3).

## News

10 real posts (newest first), from muskiedatacampus.com/newsroom; every one
is an external article. Featured block: Oct 8 Kentucky Today (lead), then
Oct 8 Daily Independent, Oct 20 WEKU, Oct 5 TeraWulf. Card photos from
Figma (`2614:2488`, `2614:2520`, `2614:2553`, `2614:2586`, `2614:2618`,
`2602:12829`, `2615:21740`).

| Date | Source | Category | Title |
| --- | --- | --- | --- |
| Oct 20, 2026 | WEKU | Articles | KY Power Will Build New Infrastructure to Support TeraWulf Data Center Project |
| Oct 8, 2026 | Kentucky Today | Articles | KY. Power, TeraWulf Agreement Provides for $100 Million in Customer Benefits |
| Oct 8, 2026 | The Daily Independent | Articles | Plan in Place for Muskie’s 1-Gigawatt Facility: Kentucky Power, TeraWulf Announce Amended Agreement to ‘Accelerate Timeline’ |
| Oct 5, 2026 | TeraWulf | Press Releases | TeraWulf Expands Contracted Power Capacity at Its Muskie Data Campus to 1 GW |
| Jul 15, 2026 | The Daily Independent | Articles | TeraWulf Says It’s Eager to Bring In Local Workforce |
| Jul 15, 2026 | The Daily Independent | Articles | TeraWulf Answers Ashland’s Questions |
| Jun 19, 2026 | The Daily Independent | Articles | TeraWulf: ‘We’re Here for the Long Haul’ |
| Jun 17, 2026 | FOX 56 | Articles | TeraWulf Hosts Job Fair Ahead of Boyd County Data Center Town Hall |
| Jun 3, 2026 | Kentucky Power | Articles | Data Centers Help Support Long-Term Affordability \| Kentucky Power |
| May 26, 2026 | TeraWulf | Press Releases | TeraWulf Expands Infrastructure Platform with Acquisition of 1+ GW Eastern Kentucky HPC Campus |

Source URLs are on the live newsroom. Q5 decides whether cards open the
article page or the source.

## Events

- Upcoming: none. C \| Empty Card text: "No events scheduled right now." /
  "TeraWulf plans to schedule community information sessions in the coming
  months. Check here for updates!"
- Past (Event Types: Community Meeting, Hiring Event):
  - Community Informational Meeting with the TeraWulf Team · Wed 17 June
    2026, 6:00–8:00 PM · Boyd County High School Gymnasium, 14375 Lions
    Lane, Ashland, KY 41102 · presentation PDF and replay on the live site.
  - Job Fair with TeraWulf & Tri State Building Trades (KY) · Tue 16 June
    2026, 10:00 AM–2:00 PM · Ashland Community & Technical College, 902
    Technology Drive, Grayson, KY 41143.
- Photo: `2602:13541` (one past card).
- Follow band: same text as LM.

## FAQ

- Hero line: "Straight answers to the questions we hear most from our
  neighbors in Eastern Kentucky — jobs, water, noise and power." Same photo.
- One section, "General questions", 12 questions (order from Figma and the
  live /faq). No category pills (search only), no Propylene glycol section.
- Answers: from the live muskiedatacampus.com/faq.

## CMS

| Collection | Muskie |
| --- | --- |
| News Posts | replace the 9 LM samples with the 10 posts above |
| News Categories | Articles, Blog Post, Press Releases (unchanged) |
| Topics | unchanged (not shown on cards) |
| Events | replace LM's 5 with the 2 past events |
| Event Types | Community Meeting, Hiring Event (remove the others) |
| Event Perks | none |
| Documents | replace LM's 7 with the 2 above, group Resources & Documents (on both pages: Q8) |
| FAQs | replace with the 12 (Category General; 4 with Show on Home) |
| Testimonials | Careers keeps LM's 3 (Q3) |

## Decisions (2026-11-24, user)

- Q1 Cooling: unpublish `/closed-loop-cooling`, remove its nav and footer
  links; the four Cooling links point at the FAQ water answer.
- Q3 Careers testimonials: keep Lake Mariner's three, as in Figma.
- Q4 Announcement bar: hidden on Muskie until there is a Muskie event.
- Q5 News cards: link straight to the source article in a new tab (as the
  live site does); the /news/<slug> pages stay, unlinked.

## Open questions

Q1, Q3, Q4 and Q5 are decided (above).


1. **Closed-Loop Cooling.** Muskie's Figma row has no Cooling page, but the
   live muskiedatacampus.com has `/closed-loop-cooling`, and four Muskie
   texts point to it (PO item 1 "here", CI benefit "HERE", CI card
   "Cooling explained", the FAQ water answer). Unpublish the page and point
   those links at the FAQ, or keep a Muskie Cooling page?
2. **Key figures** 800 / 0 / 800 MW (total / contracted / open) are as in
   Figma; the hero says "more than 1,000 MW" and the Oct 5 press release
   says contracted capacity is 1 GW. Built as in Figma unless told.
3. **Careers testimonials** are Lake Mariner employees ("Director of
   Operations, Lake Mariner Data"); Figma keeps them. Keep, or hide the
   slider on Muskie?
4. **Announcement bar** links to LM's July hiring event. Hide it on Muskie
   until there is a Muskie event?
5. **News cards**: every post is an external article. Open the article page
   (excerpt + Source card), or link straight to the source in a new tab?
6. **CI card 3 button** reads "CTA" in Figma: label and link (e.g. View
   openings → /careers)? And the URL for "EVAPCO's sound solutions".
7. **MDC Power Fact Sheet** file: not on the live site; needed from the
   client.
8. **Document lists on Project Overview.** LM staging has Resources and
   Initiatives after Explore on Project Overview (Chloe, 23 Sep: both lists
   on both pages), although neither Figma row shows them there. Proposed
   for Muskie: Resources & Documents on both pages with the 2 documents
   (Show on PO and on CI), and the Initiatives section removed from both,
   since Muskie has no initiatives.
