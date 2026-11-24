# Lake Hawkeye Data vs Lake Mariner Data

The Webflow site Lake Hawkeye Data (TeraWulf) (`6b05cabde86e14300445c161`,
tw-lake-hawkeye.webflow.io, MCP `webflow-tw-lake-hawkeye`) is a duplicate
of Lake Mariner. It was copied after SEO batch A. This file lists how
Lake Hawkeye's Figma row differs from Lake Mariner's, and what is left to do.

Sources:
- Figma `i5kBzV34Xa9qvV7I64FxFZ`, page "↪ • Template — Clean Pages". Lake Hawkeye's row starts at y ≈ 35,892; Lake Mariner's is the top row.
- The live Squarespace site www.lakehawkeyedata.com, which has the full news and event texts. lakehawkeyedata.com and cayugadatacampus.com both redirect there.

Compared 2026-11-24 from layer text and screenshots at 1680.

## Campus facts

| | Lake Mariner | Lake Hawkeye |
| --- | --- | --- |
| Town | Barker, NY (Niagara County) | Lansing, NY (Tompkins County) |
| Site | former coal plant on Lake Ontario | former Cayuga Power Plant on Cayuga Lake |
| Status | Operating | Permitting |
| Capacity (Home stats) | 600 / 438 / 162 MW | Total capacity 320 MW, Contracted 0 MW, Open 320 MW |
| Power figure in copy | up to 750 MW | up to approximately 300 MW (planning concept) |
| Cooling | closed loop, Lake Ontario | closed loop, air-cooled, no water from Cayuga Lake |
| Footer e-mail | info@lakemarinerdata.com | info@cayugadatacampus.com |
| Domain | lakemarinerdata.com | www.lakehawkeyedata.com (Squarespace today; cayugadatacampus.com redirects to it) |
| Footer line | Lake Mariner Data — a TeraWulf campus | Lake Hawkeye Data — a TeraWulf campus |

## Frames

| Page | Lake Mariner | Lake Hawkeye |
| --- | --- | --- |
| Home | `2523:112` | `2615:21805` |
| Project Overview | `2523:617` | `2615:23469` (tab states `2657:10834`–`11126`, accordion states `2657:11204`–`11270`) |
| Community Impact | `2523:1235` | `2615:22095` (accordion states `2657:11303`–`11483`, more beside them) |
| Closed-Loop Cooling | `2523:1696` | `2621:3251` |
| Careers | `2523:2102` | `2615:22304` |
| News | `2594:7635` | `2615:22475` |
| News Article | `2523:2885` | `2615:22810` |
| Events | `2523:3252` | `2615:22993` |
| Event | `2523:3595` | `2615:23122` |
| FAQ | `2597:2` | `2615:23338` |
| Nav / footer (own components) | — | nav `2624:6258`, footer `2624:6246`; logo frames in the "Lake Hawkeye Data" logo section (`2591:2655`) |

## Global

- **Logos:** the nav (light and dark versions) and footer (vertical) use the Lake Hawkeye Data wordmark. The shield mark in the heroes is the same as Lake Mariner's.
- **Footer:** the e-mail address and the campus line change. The links and columns are the same.
- **Follow band and footer social links:** the Figma row still shows the Facebook button and the line "Community sessions and hiring days are announced on the campus Facebook page first." Lake Mariner removed both in review round 1 at the client's request. **We keep Lake Mariner's version** (no Facebook, no body line, Instagram added).
- **Nav:** the same links. Closed-Loop Cooling stays, because Lake Hawkeye has its own Cooling page.
- **Announcement bar:** the same text as Lake Mariner ("TeraWulf Hiring Event for Data Center Operators"). It links to an event; the link needs pointing at a Lake Hawkeye event, or the bar hidden.

## Pages

### Home — content only
- **Hero:**
  - heading "Your Go-To Source For Information On Lake Hawkeye Data";
  - a long lead paragraph (Lansing community, former Cayuga Power Plant);
  - facts: Location Lansing, NY; Power Market NYISO; Status Permitting.
- **Intro statement:** eyebrow "Lake Hawkeye Data", a two-tone statement "By redeveloping an established industrial site…", button "Read Full Overview".
- **Stat row:** Total Capacity 320 MW, Contracted 0 MW, Open 320 MW.
- **Aerial photo:** the Cayuga plant on the lake. Its fact bar reads "Key highlights:" then three items: 183-acre former industrial site under long-term lease · Triple-redundant 115 kV transmission · Predominantly zero-carbon grid power.
- **Explore rail:** the same 4 cards. Only the Community Impact card text changes ("How Lansing benefits — closed-loop cooling and reuse of the former Cayuga Power Plant site.").
- **FAQ preview:** 4 new questions (cooling system; traffic in Lansing; how Lansing benefits; electricity prices), from the FAQs CMS.

### Project Overview — content, plus one section change
- **Hero:** the same heading as Home, and the line "Lake Hawkeye Data is a proposed digital infrastructure campus located at the former Cayuga Power Plant property in Lansing, New York."
- **About TeraWulf:** a new paragraph pair (publicly traded digital infrastructure company…).
- **About the Project:**
  - heading "About The Project";
  - statement "The current planning concept centers on one principal hilltop data center building…";
  - two paragraphs (about 300 MW; reduced grading, tree clearing and wetland disturbance);
  - new photos.
- **Cooling promo card:** new text ("Lake Hawkeye is designed around a closed-loop, air-cooled cooling system…").
- **Highlight Tabs: 6 tabs instead of 5 (section change).**
  - Tabs: Scale & Infrastructure, Clean Energy Advantage, High-Quality Jobs, **Timing** (new), Community Benefits, World-Class Tenants.
  - C | Highlight Tabs has 5 fixed tabs. A 6th tab must be added to Lake Hawkeye's copy of the component, with a Show Tab 6 prop, off by default.
  - The repo CSS's pre-bundle height assumes 5 tabs. It needs a variant scoped to a 6-tab hook, or the page jumps once on load.
- **Responsible Development:** 4 items (Water, Noise, Design, Land) instead of 5; new copy.
- **Resources / Initiatives document lists:** not in either Figma row. They stay, and show only while they have items (D1).

### Community Impact — content, plus two section changes
- **Hero:** "Community impact", with a paragraph about Lansing.
- **How Barker Benefits → "Project Impacts":** 6 items instead of 7 (Smart Land Reuse; Lasting Economic & Fiscal Impact; Noise & Acoustic Design; Local Employment; Existing Infrastructure & Grid Connection; Community Commitment).
- **Protecting our environment → "Community benefits":** the same card layout with 3 new cards:
  - Closed-loop cooling (button Cooling Explained);
  - Tax base restoration;
  - Aesthetic improvements.
  - The last two buttons read "CTA" in Figma, and the targets are unknown.
- **Investment statement:** says Lansing; same photo scene.
- **Strengthening the Grid:** new copy. The first item is "Grid Connection" ("connects to the regional grid instead of the local power distribution system").
- **What Actually Drives Local Electric Rates? (section change, small):**
  - a **Learn More** button under the intro (target unknown);
  - "Central New York" instead of "Upstate New York";
  - new cards: Hyperscale AI Infrastructure, Utility Costs, State Energy Infrastructure… The chart image is the same IPPNY one.
- **Meet Our Employees:** the same as Lake Mariner.
- **New section: TeraWulf's Topping Out Ceremony.**
  - Eyebrow, heading, line and a second C | Video Frame, below Meet Our Employees.
  - It is built from existing parts (statement + C | Video Frame). It needs no new module.
  - The line talks about Lake Mariner ("our flagship site, Lake Mariner Data"), as in the design.
- **Testimonials:** the same.
- **Community & Partnership Initiatives:** 4 Documents:
  - NYSERDA's Just Transition Site Reuse Planning Program (with text and Learn More);
  - Partnership with the Lansing Community Council;
  - Donation to the Lansing Central School District;
  - Local Contractors Letters of Support.
  - Its open state in Figma keeps Lake Mariner's line "View letters of support from our local contracting partners at the Lake Mariner facility" (frame `2657:12513`), so the Documents item keeps it.

### Closed-Loop Cooling — content only
- **Intro:** "Sustainable, water-responsible design that protects Cayuga Lake", with new text (air-cooled, no withdrawal or discharge).
- **Key Benefits list:** the Figma says "Lake Ontario" in the first bullet. This is a slip in the design; the build keeps Lake Mariner's "Zero water withdrawal or discharge to local sources", which is right for Lake Hawkeye.
- Everything else is the same text as Lake Mariner's: How It Works, Operations, Inside the Loop.

### Careers — no difference
The same text, photos and testimonials as Lake Mariner.

### News — content, plus categories
- The same layout: Featured block, toolbar, grid.
- **Pills:** All, Articles, Blog Post, Press Releases, **Media Coverage, Videos, Podcasts**. That is three new News Categories, and three new static pills on /news.
- **Posts:** 19, from lakehawkeyedata.com/newsroom. They replace Lake Mariner's 9 posts.

### News Article, Event — no layout difference
CMS templates; the content comes from the items.

### Events — content, plus the upcoming card
- **Upcoming:** one event, the Lake Hawkeye Community Open House on Tue, Dec 1, 2026, Lansing Middle School.
  - Figma shows it as a wide card: text on the left, photo on the right, like C | Empty Card.
  - On staging, the upcoming list has only an empty state. Check its item layout in Webflow and match the Figma card.
- **Past:** 5 events:
  - Lake Hawkeye Community Open House, 5 Nov;
  - Cayuga Information Session webinar, 9 Dec 2025;
  - Lansing Town Board Meeting, 19 Nov 2025;
  - Cayuga Data Campus Information Session, 29 Oct 2025;
  - Lansing Community Open House, 7 Oct 2025.
- **Event Types:** Open House, Webinar, Town Board, Info Session.
- **Search placeholder:** Figma says "Search upcoming and past events…". Lake Mariner's says "Search past events…", since the search covers the past list only. Keep Lake Mariner's.

### FAQ — content only
- **Hero:** Figma repeats Lake Mariner's Community Impact paragraph ("As we expand operations in Barker…"), a slip. The build keeps Lake Mariner's FAQ line with Lansing: "Straight answers to the questions we hear most from our neighbors in Lansing — water, traffic, power and the environment."
- **General:** 15 questions.
- **Propylene glycol:** 4 questions (the same questions as Lake Mariner; the answers to check).
- The answers come from the design and lakehawkeyedata.com/faq.

## Pages missing or new
None. Lake Hawkeye has the same 10 pages, the Cooling page included.

## CMS to replace

| Collection | Lake Mariner items | Lake Hawkeye |
| --- | --- | --- |
| News Posts | 9 | 19 (lakehawkeyedata.com/newsroom) |
| News Categories | 3 | 6 (+ Media Coverage, Videos, Podcasts) |
| Events | 5 | 6 (1 upcoming, 5 past; lakehawkeyedata.com/events) |
| Event Types | 5 | Open House, Webinar, Town Board, Info Session |
| Documents | 7, some of them Cayuga/Lansing (FINAL-DESIGN-DIFF D1) | the 4 Initiatives above, plus the Cayuga/Lansing items already in the copy |
| FAQs | Lake Mariner's | 15 General + 4 Propylene glycol |
| Testimonials | 3 | the same 3 (Careers is unchanged) |

## Open questions (client)
- CTA targets on the Tax base restoration and Aesthetic improvements cards, and on the rates Learn More button.
- The Topping Out line names Lake Mariner as the flagship. Is that intended on the Lake Hawkeye site?
- Lake Hawkeye's own photos for heroes and sections, where Figma reuses Lake Mariner's.

## Status

| Batch | What | State |
| --- | --- | --- |
| 1 · site and global | og:site_name, Home schema, News and Event template head code (lakehawkeyedata.com, Lansing NY), SEO title and description on every page and both templates, nav logos (light and dark) and footer logo from the Figma nav/footer (`Assets/figma/lake-hawkeye/`), logo classes sized to the new files (Nav Logo 11.8125em / 9.875em small, aspect 189/48; Footer Logo 12.75em, aspect 204/141), footer campus line and e-mail, logo link aria-labels | done 2026-11-24, published |
| 2 · CMS | FAQs: Lake Mariner's 7 General replaced by Lake Hawkeye's 15 (lakehawkeyedata.com/faq), 4 on Home; the 4 propylene glycol FAQs kept. News: the 9 sample posts replaced by the 16 from lakehawkeyedata.com/newsroom (bodies cleaned from Squarespace markup, body images re-hosted by Webflow as WebP), categories + Media Coverage, Videos, Podcasts with their pills on /news, newest 4 Featured; covers for 10 posts exported from the Figma News frame (`Assets/figma/lake-hawkeye/news/`), the other 6 show the shield fallback as in Figma; Source Name is the outlet, or Lake Hawkeye Data with the post's lakehawkeyedata.com URL. Events: the 5 samples replaced by Lake Hawkeye's 6 (Dec 1 open house upcoming), types Open House, Webinar, Town Board, Info Session; the empty perks list hidden (class Perk Grid Empty). Documents: NYSERDA, Lansing Community Council and Lansing CSD donation added to Initiatives, Letters of Support linked. Announcement bar → the Dec 1 open house | done 2026-11-24, published |
| 3 · page content and photos | Project Overview: hero (heading, line, the Home aerial), About TeraWulf text (in C \| Intro Row, Lake Hawkeye's copy of the component), About the Project eyebrow, statement and both photos, Cooling promo text, Highlight Tabs texts 1–5 (Scale, Clean Energy, Jobs, Community Benefits, Tenants; Timing is batch 4), Responsible Development as 4 items (Water, Noise, Design, Land) with the plant aerial. Community Impact: hero line, Project Impacts (6 items, the plant aerial), Community benefits cards (Closed-loop cooling, Tax base restoration, Aesthetic improvements), Lansing statement, Grid accordion copy, rates line (Central New York). Cooling: hero line and Photo Band (Cayuga Lake). FAQ hero line (Lansing). News intro from the design. C \| Page Hero fact defaults Lansing, NY / Permitting. RSVP card on the Events template wrapped in a div shown only when RSVP URL is set (MANUAL-TODO GA, done in the Designer). New photos uploaded with `upload_image_by_url` (responsive sizes) | done 2026-11-24, published |
| 4 · section differences | Project Overview: C \| Highlight Tabs got a 6th tab (Tab 6 props; Timing is tab 4, Tenants tab 6, photo as in Figma), Text 1 is now rich text (Text 1 Rich), the tab row fits any number of tabs (Highlights Tabs: auto columns), repo CSS gives the pinned section a sixth half-screen before the bundle runs (`:has()` on a 6th panel, 2578eb8); C \| Collage got a Body rich-text prop (Collage Copy wrapper, Collage Body) for the two About the Project paragraphs, heading "About The Project", Lake Hawkeye alt texts. Community Impact: Topping Out Ceremony section (`#topping-out`, statement + C \| Video Frame, the design's poster, video = the Topping Out video already used for Meet Our Employees). Events: the upcoming list shows a wide card (Event Grid Is Single, Event Card / Media / Body / Title Is Wide, Date Badge Is Wide hidden, Event Card Summary bound to Summary, Frost background, dark View event button with +). Explore chips already matched the design (Water Use, Noise, Local Jobs, Grid & Rates; Careers' four) | done 2026-11-24, published |

Done-list for every page: when a page is finished on tw-lake-hawkeye.webflow.io, add its section to row 4 (Lake Hawkeye, y 39000) of the Figma Build Review page (`2556:2`), in that page's column, as `CAMPUSES.md` › "Compare page in Figma" describes: Lake Hawkeye's Clean Pages frame, staging screenshots at 1680, 820 and 390, and red or ✓ green markers. Built 2026-11-24 for all ten pages (row 4 runs to y 55705, so Chesapeake's row label moved to 57000): Home `2807:3872`, Project Overview `2807:4201`, Community Impact `2807:4460`, Closed-Loop Cooling `2807:4817`, Careers `2807:4952`, News `2807:5480`, News Article `2807:6075`, Events `2807:6236`, Event `2807:6402`, FAQ `2807:6589`. Each has Lake Hawkeye's Clean Pages frame, staging at 1680/820/390 and one marker: green where it matches, red on Community Impact (missing CTA targets, a client question). When an open item is fixed, re-shoot that page and turn its marker green.

Left from batch 4:
- Rates Learn More: still not built; neither Figma nor the live site gives a target.
- Upcoming card chip: shows the event type ("Open House"); the design shows "Upcoming · Tue, Dec 1, 2026", which needs a date format set in the Designer.
- Done 2026-11-24 (evening): MANUAL-TODO GB and GC in the Designer (d8c0f9d); the Topping Out poster re-ingested with `upload_image_by_url` and set on the Video Frame (publishes with `srcset`). Build Review: Project Overview re-shot and its marker green; Community Impact's red marker now lists only the missing CTA targets.

Left from batch 3:
- The Tax base restoration and Aesthetic improvements cards have no button: Figma's buttons read "CTA" with no target, and Lake Mariner's EVAPCO and NYISO buttons were removed (open question above). Duplicate the Closed-loop cooling card's C | Button when targets come.
- Links the design shows inside rich-text props are plain text until set in the Designer (GOTCHAS 2026-11-12): Highlight Tab 3 "letters of support" (the Lake Hawkeye PDF), Community Impact Grid item 2 "HERE" (NYSEG's RFI response), Community benefits card 1 "closed-loop system" (/closed-loop-cooling; a plain paragraph, can be linked by the API).
- The Responsible Development photo (`po-lh-responsible`) is the Figma render at 716px wide, so it only has a 500px variant. A larger export or the original photo would be sharper on retina screens.
- The Inside the Loop videos and posters load from Lake Mariner's asset CDN (`6ae0f7d7…`). They work, but would break if those assets were deleted from Lake Mariner: re-upload them to this site before launch.
- Event photos: the Figma events use the same sample photos as the copy (vest crowd, orange shirts, the UTV), so nothing changed. Real photos from the client are still an open question.

Left from batch 2:
- ~~Document links and several post links point at lakehawkeyedata.com/s/… PDFs on Squarespace~~ done 2026-11-24: the 8 PDFs are Webflow assets (originals in `Assets/lake-hawkeye-pdfs/`; Letters of Support was already on the site from the Lake Mariner copy), and every link points at them: Documents (4 items, URL and the study's description), news bodies (energy pricing, open letter, open-house recap, webinar), the webinar event body, Project Overview tab 3 and the Community Impact grid "HERE" (Designer). Published: no lakehawkeyedata.com/s/ link left on staging, all 8 files 200.
- ~~News Source links to lakehawkeyedata.com/newsroom/~~ done 2026-11-24: the 5 posts from Lake Hawkeye's own newsroom have Source URL `/news/<slug>` (relative, accepted by the Link field), so the Source card points at the post on this site. Published: no lakehawkeyedata.com/newsroom link left. Still worth a launch redirect `/newsroom/(.*)` → `/news/%1` for old inbound links.
- The 6 Resources & Documents items are the copy's (Cayuga study, Lansing planning board…) with placeholder descriptions.

Left from batch 1: the FAQ Open Graph image is still Lake Mariner's FAQ photo (changes with the FAQ hero).
