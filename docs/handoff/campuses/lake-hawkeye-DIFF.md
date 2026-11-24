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

## Redirect map (lakehawkeyedata.com, Squarespace → Webflow)

For launch: enter these in Site settings › Publishing › 301 redirects, in this order (the specific `/newsroom/` row above the wildcard). Built 2026-11-24 from the live sitemap, `/newsroom?format=json` and `/events?format=json`; every target was checked on tw-lake-hawkeye.webflow.io (200).

| Old URL | New URL | Status |
| --- | --- | --- |
| `/newsroom` | `/news` | 301 |
| `/newsroom/jhukiy18z424qr4zd0cnrj61uabjzo` | `/news/protecting-lansings-future-starts-with-progress` | 301 |
| `/newsroom/(.*)` | `/news/%1` | 301 |
| `/home` | `/` | 301 |
| `/s/110125-WULF-Letter-to-C-Pettograsso-and-K-Heath.pdf` | https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05e46b004d35a1750ca7f3_110125-WULF-Letter-to-C-Pettograsso-and-K-Heath.pdf | 301 |
| `/s/Anna-Kelles-Request-for-Information_NYSEGC.pdf` | https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05e46b05e33fd43343e986_Anna-Kelles-Request-for-Information_NYSEGC.pdf | 301 |
| `/s/Couch-White-Energy-Paper_Cayuga-Data-Campus-Dec-2025.pdf` | https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05e46bd0a72c1c181023c1_Couch-White-Energy-Paper_Cayuga-Data-Campus-Dec-2025.pdf | 301 |
| `/s/Independent-Assessment-of-the-Proposed-Cayuga-Data-Campus.pdf` | https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05e46b7c7961f459f494b3_Independent-Assessment-of-the-Proposed-Cayuga-Data-Campus.pdf | 301 |
| `/s/Lake-Hawkeye-Fact-vs-Fiction-Oct-2026-V2.pdf` | https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05e46c58b29500634e8438_Lake-Hawkeye-Fact-vs-Fiction-Oct-2026-V2.pdf | 301 |
| `/s/Lake-Hawkeye-Open-House-Presentation-November-2026-2yn6.pdf` | https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05e46cd0a72c1c1810244d_Lake-Hawkeye-Open-House-Presentation-November-2026.pdf | 301 |
| `/s/Letters-of-Support_Local-Contractors.pdf` | https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05cabde86e14300445c1e3_Letters-of-Support_Local-Contractors.pdf | 301 |
| `/s/TCF-Donation-Letter_Lansing-Community-Council-2025-10-29.pdf` | https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05e46df845a5dc2ad64efa_TCF-Donation-Letter_Lansing-Community-Council-2025-10-29.pdf | 301 |
| `/s/Lake-Hawkeye-Data-Campus-Site-Plan-Design-Refinements-November-3-2026.pdf` | https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f0b1bfc922646bf94599_Lake-Hawkeye-Data-Campus-Site-Plan-Design-Refinements-November-3-2026.pdf | 301 |
| `/s/Independent-Advisory-Council-Agreement-10_23_25_Redacted.pdf` | https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f0b1a36936cb4add5346_Independent-Advisory-Council-Agreement-10_23_25_Redacted.pdf | 301 |
| `/s/TeraWulf-Lansing-Proposed-Zoning-Amendment-Comments-111326.pdf` | https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f0b119614353e575226b_TeraWulf-Lansing-Proposed-Zoning-Amendment-Comments-111326.pdf | 301 |

The other 15 newsroom posts keep their slugs under `/news/`, so the wildcard covers them. Unchanged paths, no redirect needed: `/project-overview`, `/community-impact`, `/closed-loop-cooling`, `/faq`, `/events` and the 6 event pages (`/events/<slug>`, same slugs). The `/s/` rows send old links to the PDFs (shared in emails, letters and other sites) to the Webflow copies; if Webflow refuses an absolute target, leave those rows out (nothing on the site links to `/s/` any more).

## Live-site files on Webflow (lakehawkeyedata.com, 2026-11-24)

lakehawkeyedata.com (Squarespace) is going down, so every file it hosts is now a Lake Hawkeye Webflow asset. Found by crawling the live sitemap, every page's links and the `?format=json` feeds of the newsroom and events. Local copies are in `Assets/lake-hawkeye/live-site/` (`pdfs/`, `images/`, `videos/`, with `pdfs.tsv` and `images.tsv` listing each file's old URL). cayugadatacampus.com stays (parent decision), so its links and `info@cayugadatacampus.com` were left alone.

After the move nothing on the site points at the old domain: a check of every CMS item (16 posts, 6 events, 10 documents, 19 FAQs, 3 testimonials, 6 perks) and all 30 published pages found only the schema `@id`, breadcrumb and canonical URLs, which name the production domain on purpose.

**PDFs** (12 links on the live site, 11 files; the `/s/` rows in the redirect map above send the old links here):

| Old URL | Asset id | Webflow URL |
| --- | --- | --- |
| `/s/110125-WULF-Letter-to-C-Pettograsso-and-K-Heath.pdf` | `6b05e46b004d35a1750ca7f3` | see the redirect map |
| `/s/Anna-Kelles-Request-for-Information_NYSEGC.pdf` | `6b05e46b05e33fd43343e986` | see the redirect map |
| `/s/Couch-White-Energy-Paper_Cayuga-Data-Campus-Dec-2025.pdf` | `6b05e46bd0a72c1c181023c1` | see the redirect map |
| `/s/Independent-Assessment-of-the-Proposed-Cayuga-Data-Campus.pdf` | `6b05e46b7c7961f459f494b3` | see the redirect map |
| static1.squarespace.com `…/Independent+Assessment+of+the+Proposed+Cayuga+Data+Campus+.pdf` | `6b05e46b7c7961f459f494b3` | same file as the row above (same MD5) |
| `/s/Lake-Hawkeye-Fact-vs-Fiction-Oct-2026-V2.pdf` | `6b05e46c58b29500634e8438` | see the redirect map |
| `/s/Lake-Hawkeye-Open-House-Presentation-November-2026-2yn6.pdf` | `6b05e46cd0a72c1c1810244d` | see the redirect map |
| `/s/Letters-of-Support_Local-Contractors.pdf` | `6b05cabde86e14300445c1e3` | see the redirect map |
| `/s/TCF-Donation-Letter_Lansing-Community-Council-2025-10-29.pdf` | `6b05e46df845a5dc2ad64efa` | see the redirect map |
| `/s/Lake-Hawkeye-Data-Campus-Site-Plan-Design-Refinements-November-3-2026.pdf` | `6b05f0b1bfc922646bf94599` | see the redirect map (new 2026-11-24) |
| `/s/Independent-Advisory-Council-Agreement-10_23_25_Redacted.pdf` | `6b05f0b1a36936cb4add5346` | see the redirect map (new 2026-11-24) |
| `/s/TeraWulf-Lansing-Proposed-Zoning-Amendment-Comments-111326.pdf` | `6b05f0b119614353e575226b` | see the redirect map (new 2026-11-24) |

**Videos** (Squarespace HLS streams, saved as MP4 at 1080p):

| On the live site | Asset id | Webflow URL |
| --- | --- | --- |
| Home hero video (24 s loop) | `6b05f0b1c7087b237fc34ae1` | [cayuga-website-hero.mp4](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f0b1c7087b237fc34ae1_cayuga-website-hero.mp4) |
| Community Impact video | `6b05f0b18110748db1fa0acc` | [community-impact-video.mp4](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f0b18110748db1fa0acc_community-impact-video.mp4) (re-encoded 51 → 30 MB to fit the 30 MiB upload limit; the original is in `videos/community-impact-video-original.mp4`) |

**Images** (54 on the live site: pages, posts and events; uploaded with `upload_image_by_url`, so they have responsive sizes, except the three WebPs, which went through the assets API). The old URL of each is in `images.tsv`; these copies are not placed on any page (the pages use the Figma exports); they are there for posts, events and later edits:

| File on the live site | Asset id | Webflow asset |
| --- | --- | --- |
| favicon.ico | — | not uploaded: the old Squarespace favicon; the site favicon is set in Site settings |
| CEO MAG - TEAM-4.png | `6b05f1374d59ac9ca32c1055` | [lh-live-ceo-mag-team-4.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f1374d59ac9ca32c1055_lh-live-ceo-mag-team-4.png) |
| Lake Hawkeye Data Logo.png | `6b05f1161f3b661059c1925b` | [lh-live-lake-hawkeye-data-logo.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f1161f3b661059c1925b_lh-live-lake-hawkeye-data-logo.png) |
| Cayuga-1.png | `6b05f139811e53aed1379fd3` | [lh-live-cayuga-1.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f139811e53aed1379fd3_lh-live-cayuga-1.png) |
| Lake Mariner Recycling - 4.jpg | `6b05f13a62691160f2a52827` | [lh-live-lake-mariner-recycling-4.jpg](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f13a62691160f2a52827_lh-live-lake-mariner-recycling-4.jpg) |
| Lake Mariner Recycling -5.jpg | `6b05f13c49b846d4a54d5652` | [lh-live-lake-mariner-recycling-5.jpg](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f13c49b846d4a54d5652_lh-live-lake-mariner-recycling-5.jpg) |
| pallet recycle.png | `6b05f13ebe558dfa98b93131` | [lh-live-pallet-recycle.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f13ebe558dfa98b93131_lh-live-pallet-recycle.png) |
| epe foam melter.jpg | `6b05f13f8138a4cd3e4da7d3` | [lh-live-epe-foam-melter.jpg](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f13f8138a4cd3e4da7d3_lh-live-epe-foam-melter.jpg) |
| CEO MAG - TEAM-3.png | `6b05f141490c13f2b481923c` | [lh-live-ceo-mag-team-3.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f141490c13f2b481923c_lh-live-ceo-mag-team-3.png) |
| Image_Ops Team-8.png | `6b05f143375e4ff96e5b5c5e` | [lh-live-image-ops-team-8.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f143375e4ff96e5b5c5e_lh-live-image-ops-team-8.png) |
| on site dual batch plant 2.png | `6b05f145a1b68b664f5c0440` | [lh-live-on-site-dual-batch-plant-2.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f145a1b68b664f5c0440_lh-live-on-site-dual-batch-plant-2.png) |
| on site dual batch plant.png | `6b05f147df75801487cb673f` | [lh-live-on-site-dual-batch-plant.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f147df75801487cb673f_lh-live-on-site-dual-batch-plant.png) |
| closed loop.png | `6b05f14980b557a081469f48` | [lh-live-closed-loop.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f14980b557a081469f48_lh-live-closed-loop.png) |
| Paul Prager.jpg | `6b05f14bca33fa7f3755e47e` | [lh-live-paul-prager.jpg](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f14bca33fa7f3755e47e_lh-live-paul-prager.jpg) |
| TERAWULF LANSING 2.jpg | `6b05f14c5128d9a0893ae5ac` | [lh-live-terawulf-lansing-2.jpg](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f14c5128d9a0893ae5ac_lh-live-terawulf-lansing-2.jpg) |
| lake hawkeye open house_1 | `6b05f14c5128d9a0893ae5ac` | same file as TERAWULF LANSING 2.jpg (same MD5), not uploaded twice |
| TERAWULF LANSING 12.jpg | `6b05f15da12e5aa9f28d91f6` | [lh-live-terawulf-lansing-12.jpg](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f15da12e5aa9f28d91f6_lh-live-terawulf-lansing-12.jpg) |
| TERAWULF LANSING 33.jpg | `6b05f15fa8884e9eeb3000df` | [lh-live-terawulf-lansing-33.jpg](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f15fa8884e9eeb3000df_lh-live-terawulf-lansing-33.jpg) |
| TERAWULF LANSING 71.jpg | `6b05f1603d454b00e1d31196` | [lh-live-terawulf-lansing-71.jpg](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f1603d454b00e1d31196_lh-live-terawulf-lansing-71.jpg) |
| TERAWULF LANSING 46.jpg | `6b05f161d57390821840dfe4` | [lh-live-terawulf-lansing-46.jpg](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f161d57390821840dfe4_lh-live-terawulf-lansing-46.jpg) |
| hpc5.png | `6b05f1630f1b2ee3b5100eb4` | [lh-live-hpc5.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f1630f1b2ee3b5100eb4_lh-live-hpc5.png) |
| Screenshot 2026-10-29 150320.png | `6b05f1641460b227c94c7101` | [lh-live-screenshot-2026-10-29-150320.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f1641460b227c94c7101_lh-live-screenshot-2026-10-29-150320.png) |
| imgg-od3-agw8jcae.png | `6b05f166c75ce964e46cd3f7` | [lh-live-imgg-od3-agw8jcae.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f166c75ce964e46cd3f7_lh-live-imgg-od3-agw8jcae.png) |
| Image_Jerry Goodenough (1).png | `6b05f168ae2e8aa5acb978b7` | [lh-live-image-jerry-goodenough-1.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f168ae2e8aa5acb978b7_lh-live-image-jerry-goodenough-1.png) |
| data center image.png | `6b05f16bd3310c8c7c173391` | [lh-live-data-center-image.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f16bd3310c8c7c173391_lh-live-data-center-image.png) |
| Cayuga-2.png | `6b05f16d8d34141223d69fe7` | [lh-live-cayuga-2.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f16d8d34141223d69fe7_lh-live-cayuga-2.png) |
| Project Highlights.png | `6b05f16f3a38869b41cc41d8` | [lh-live-project-highlights.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f16f3a38869b41cc41d8_lh-live-project-highlights.png) |
| Lake Hawkeye Rendering_Updated 4.15.26.png | `6b05f1713877a8a8cedd6f46` | [lh-live-lake-hawkeye-rendering-updated-4-15-26.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f1713877a8a8cedd6f46_lh-live-lake-hawkeye-rendering-updated-4-15-26.png) |
| Cayuga Rendering 1.png | `6b05f1747cda229ad8dc2c23` | [lh-live-cayuga-rendering-1.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f1747cda229ad8dc2c23_lh-live-cayuga-rendering-1.png) |
| Cayuga Rendering 2.png | `6b05f187c463c6c273ddb278` | [lh-live-cayuga-rendering-2.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f187c463c6c273ddb278_lh-live-cayuga-rendering-2.png) |
| View 03.2 without Stack.png | `6b05f188ca33fa7f37560a6b` | [lh-live-view-03-2-without-stack.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f188ca33fa7f37560a6b_lh-live-view-03-2-without-stack.png) |
| lake view.png | `6b05f18be09287fab2ddefd1` | [lh-live-lake-view.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f18be09287fab2ddefd1_lh-live-lake-view.png) |
| about terawulf.png | `6b05f18d41d63522151591fc` | [lh-live-about-terawulf.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f18d41d63522151591fc_lh-live-about-terawulf.png) |
| community-3.png | `6b05f1b8760e45008c1426db` | [lh-live-community-3.webp](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f1b8760e45008c1426db_lh-live-community-3.webp) (WebP from the original PNG: the URL import refused it) |
| community impact-2.png | `6b05f19089fc135a06df0efa` | [lh-live-community-impact-2.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f19089fc135a06df0efa_lh-live-community-impact-2.png) |
| tax base.png | `6b05f1923877a8a8cedd735a` | [lh-live-tax-base.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f1923877a8a8cedd735a_lh-live-tax-base.png) |
| lakefront view.png | `6b05f194376c2942b3775479` | [lh-live-lakefront-view.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f194376c2942b3775479_lh-live-lakefront-view.png) |
| jobs.png | `6b05f195e504558e6c017642` | [lh-live-jobs.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f195e504558e6c017642_lh-live-jobs.png) |
| hpc1.png | `6b05f1b87abab49174853707` | [lh-live-hpc1.webp](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f1b87abab49174853707_lh-live-hpc1.webp) (WebP from the original PNG: the URL import refused it) |
| community-1.png | `6b05f1987cda229ad8dc324c` | [lh-live-community-1.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f1987cda229ad8dc324c_lh-live-community-1.png) |
| ippny graphic.jfif | `6b05f199490c13f2b481a4ba` | [lh-live-ippny-graphic.jpg](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f199490c13f2b481a4ba_lh-live-ippny-graphic.jpg) |
| DS5.png | `6b05f1b8f803353ba4b4bc08` | [lh-live-ds5.webp](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f1b8f803353ba4b4bc08_lh-live-ds5.webp) (WebP from the original PNG: the URL import refused it) |
| jesse rohring.png | `6b05f1c72c5ab8afece9a089` | [lh-live-jesse-rohring.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f1c72c5ab8afece9a089_lh-live-jesse-rohring.png) |
| jim spoon 1.png | `6b05f1c9d4c045a0cd22315a` | [lh-live-jim-spoon-1.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f1c9d4c045a0cd22315a_lh-live-jim-spoon-1.png) |
| Dan H 2.png | `6b05f1ca6059042813c95435` | [lh-live-dan-h-2.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f1ca6059042813c95435_lh-live-dan-h-2.png) |
| Image_Ops Team 3.png | `6b05f1cc8eb513527a1a23c2` | [lh-live-image-ops-team-3.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f1cc8eb513527a1a23c2_lh-live-image-ops-team-3.png) |
| coolers.png | `6b05f1cea970ed0996a184ec` | [lh-live-coolers.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f1cea970ed0996a184ec_lh-live-coolers.png) |
| rear door heat exchangers.png | `6b05f1d0c463c6c273ddbfdf` | [lh-live-rear-door-heat-exchangers.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f1d0c463c6c273ddbfdf_lh-live-rear-door-heat-exchangers.png) |
| coolers2.png | `6b05f1d5e48e776dc06c44fe` | [lh-live-coolers2.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f1d5e48e776dc06c44fe_lh-live-coolers2.png) |
| data hall.png | `6b05f1d73fe128baf2037ffd` | [lh-live-data-hall.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f1d73fe128baf2037ffd_lh-live-data-hall.png) |
| Cooling Loops - Cooler Days (Below 60F) Simulation.gif | `6b05f1d8e48e776dc06c4580` | [lh-live-cooling-loops-cooler-days-below-60f-simulation.gif](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f1d8e48e776dc06c4580_lh-live-cooling-loops-cooler-days-below-60f-simulation.gif) |
| Cooling Loops - Warmer Days Simulation.gif | `6b05f1d92c5ab8afece9a717` | [lh-live-cooling-loops-warmer-days-simulation.gif](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f1d92c5ab8afece9a717_lh-live-cooling-loops-warmer-days-simulation.gif) |
| closed loop BP data center side.png | `6b05f1db8d34141223d6afd8` | [lh-live-closed-loop-bp-data-center-side.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f1db8d34141223d6afd8_lh-live-closed-loop-bp-data-center-side.png) |
| closed loop BP air cooler side.png | `6b05f1dc376c2942b377663e` | [lh-live-closed-loop-bp-air-cooler-side.png](https://cdn.prod.website-files.com/6b05cabde86e14300445c161/6b05f1dc376c2942b377663e_lh-live-closed-loop-bp-air-cooler-side.png) |


## Status

| Batch | What | State |
| --- | --- | --- |
| 1 · site and global | og:site_name, Home schema, News and Event template head code (lakehawkeyedata.com, Lansing NY), SEO title and description on every page and both templates, nav logos (light and dark) and footer logo from the Figma nav/footer (`Assets/figma/lake-hawkeye/`), logo classes sized to the new files (Nav Logo 11.8125em / 9.875em small, aspect 189/48; Footer Logo 12.75em, aspect 204/141), footer campus line and e-mail, logo link aria-labels | done 2026-11-24, published |
| 2 · CMS | FAQs: Lake Mariner's 7 General replaced by Lake Hawkeye's 15 (lakehawkeyedata.com/faq), 4 on Home; the 4 propylene glycol FAQs kept. News: the 9 sample posts replaced by the 16 from lakehawkeyedata.com/newsroom (bodies cleaned from Squarespace markup, body images re-hosted by Webflow as WebP), categories + Media Coverage, Videos, Podcasts with their pills on /news, newest 4 Featured; covers for 10 posts exported from the Figma News frame (`Assets/figma/lake-hawkeye/news/`), the other 6 show the shield fallback as in Figma; Source Name is the outlet, or Lake Hawkeye Data with the post's lakehawkeyedata.com URL. Events: the 5 samples replaced by Lake Hawkeye's 6 (Dec 1 open house upcoming), types Open House, Webinar, Town Board, Info Session; the empty perks list hidden (class Perk Grid Empty). Documents: NYSERDA, Lansing Community Council and Lansing CSD donation added to Initiatives, Letters of Support linked. Announcement bar → the Dec 1 open house | done 2026-11-24, published |
| 3 · page content and photos | Project Overview: hero (heading, line, the Home aerial), About TeraWulf text (in C \| Intro Row, Lake Hawkeye's copy of the component), About the Project eyebrow, statement and both photos, Cooling promo text, Highlight Tabs texts 1–5 (Scale, Clean Energy, Jobs, Community Benefits, Tenants; Timing is batch 4), Responsible Development as 4 items (Water, Noise, Design, Land) with the plant aerial. Community Impact: hero line, Project Impacts (6 items, the plant aerial), Community benefits cards (Closed-loop cooling, Tax base restoration, Aesthetic improvements), Lansing statement, Grid accordion copy, rates line (Central New York). Cooling: hero line and Photo Band (Cayuga Lake). FAQ hero line (Lansing). News intro from the design. C \| Page Hero fact defaults Lansing, NY / Permitting. RSVP card on the Events template wrapped in a div shown only when RSVP URL is set (MANUAL-TODO GA, done in the Designer). New photos uploaded with `upload_image_by_url` (responsive sizes) | done 2026-11-24, published |
| 4 · section differences | Project Overview: C \| Highlight Tabs got a 6th tab (Tab 6 props; Timing is tab 4, Tenants tab 6, photo as in Figma), Text 1 is now rich text (Text 1 Rich), the tab row fits any number of tabs (Highlights Tabs: auto columns), repo CSS gives the pinned section a sixth half-screen before the bundle runs (`:has()` on a 6th panel, 2578eb8); C \| Collage got a Body rich-text prop (Collage Copy wrapper, Collage Body) for the two About the Project paragraphs, heading "About The Project", Lake Hawkeye alt texts. Community Impact: Topping Out Ceremony section (`#topping-out`, statement + C \| Video Frame, the design's poster, video = the Topping Out video already used for Meet Our Employees). Events: the upcoming list shows a wide card (Event Grid Is Single, Event Card / Media / Body / Title Is Wide, Date Badge Is Wide hidden, Event Card Summary bound to Summary, Frost background, dark View event button with +). Explore chips already matched the design (Water Use, Noise, Local Jobs, Grid & Rates; Careers' four) | done 2026-11-24, published |

Done-list for every page: when a page is finished on tw-lake-hawkeye.webflow.io, add its section to row 4 (Lake Hawkeye, y 39000) of the Figma Build Review page (`2556:2`), in that page's column, as `CAMPUSES.md` › "Compare page in Figma" describes: Lake Hawkeye's Clean Pages frame, staging screenshots at 1680, 820 and 390, and red or ✓ green markers. Built 2026-11-24 for all ten pages (row 4 runs to y 55705, so Chesapeake's row label moved to 57000): Home `2807:3872`, Project Overview `2807:4201`, Community Impact `2807:4460`, Closed-Loop Cooling `2807:4817`, Careers `2807:4952`, News `2807:5480`, News Article `2807:6075`, Events `2807:6236`, Event `2807:6402`, FAQ `2807:6589`. Each has Lake Hawkeye's Clean Pages frame, staging at 1680/820/390 and one marker: green where it matches, red on Community Impact (missing CTA targets, a client question). When an open item is fixed, re-shoot that page and turn its marker green.

**Sample event — delete or replace before launch.** "Sample Event — Lake Hawkeye Careers Open House" (`/events/sample-lake-hawkeye-careers-open-house`, item `6b060a508e7c9af05afd2d29`), added 2026-11-24 at the user's request so the Event template could be checked with every field filled. Type Open House, 22 October 2026 4:00–7:00 PM New York, Lansing Middle School; Lake Hawkeye text marked as sample in the tagline, summary, body, location note, callout and RSVP line; image the live site's TERAWULF LANSING 12 photo; perks Career growth, 401(k) 5% match, 80% health insurance, Generous PTO (no starting pay); RSVP URL https://www.terawulf.com/connect. It is dated in the past on purpose: /events shows one upcoming event (the Dec 1 open house) as the single wide card, and a second upcoming event would sit beside it, so the sample lands second in the past list (6 cards, three rows of two) and the upcoming card is unchanged. The RSVP card condition (GA) was tested: with RSVP URL cleared the published page had no Reserve card, with it restored the card came back. Build Review: Event re-shot with the sample (URL label and marker updated, green) and Events re-shot with it in the past list (green). Delete it in the CMS (or overwrite it with a real event) before launch.

Left from batch 4:
- Rates Learn More: still not built; neither Figma nor the live site gives a target.
- Upcoming card chip: shows the event type ("Open House"); the design shows "Upcoming · Tue, Dec 1, 2026", which needs a date format set in the Designer.
- Done 2026-11-24 (evening): Careers and Community Impact › Meet Our Employees play the site's own copy of the employees film (asset `6b05f0b18110748db1fa0acc`, the live site's Community Impact video) with English captions (`6b05fc394e5fbcce8f730aab`, the same cues as Lake Mariner's; the film is the same 2:12.48 cut) instead of the YouTube topping-out video, which stays on the Topping Out section. C | Video Frame got the Captions URL prop (CAMPUS-PORT). Checked on staging: plays with sound, captions track loaded. Both frames' Poster Alt no longer name Lake Mariner ("Aerial view of TeraWulf data halls under construction" on Careers, "Aerial view of a TeraWulf data campus on the lakeshore" on Community Impact; published). Both posters, like the film, show the Lake Mariner site on Lake Ontario: a Lake Hawkeye frame or photo is the client's call. The testimonial photo alts still say Lake Mariner (Dan Heidemann, Jesse Rohring), which is accurate for those people.
- Done 2026-11-24 (evening): MANUAL-TODO GB and GC in the Designer (d8c0f9d); the Topping Out poster re-ingested with `upload_image_by_url` and set on the Video Frame (publishes with `srcset`). Build Review: Project Overview re-shot and its marker green; Community Impact's red marker now lists only the missing CTA targets.

Left from batch 3:
- The Tax base restoration and Aesthetic improvements cards have no button: Figma's buttons read "CTA" with no target, and Lake Mariner's EVAPCO and NYISO buttons were removed (open question above). Duplicate the Closed-loop cooling card's C | Button when targets come.
- Links the design shows inside rich-text props are plain text until set in the Designer (GOTCHAS 2026-11-12): Highlight Tab 3 "letters of support" (the Lake Hawkeye PDF), Community Impact Grid item 2 "HERE" (NYSEG's RFI response), Community benefits card 1 "closed-loop system" (/closed-loop-cooling; a plain paragraph, can be linked by the API).
- The Responsible Development photo (`po-lh-responsible`) is the Figma render at 716px wide, so it only has a 500px variant. A larger export or the original photo would be sharper on retina screens.
- Done 2026-11-24: the Inside the Loop videos and posters loaded from Lake Mariner's asset CDN (`6ae0f7d7…`). This site already had the same files (copied with the site; `create_asset` matched them by MD5): `6b05cabde86e14300445c1e6_cooling-warm-days.mp4`, `…c1e7_cooling-cool-days.mp4`, `…c1e8_cooling-warm-days-poster.webp`, `…c1e9_cooling-cool-days-poster.webp`. The two Loop Video elements' `src` and `data-poster` now point at them; published, and the warm-days loop plays from this site's CDN. The only Lake Mariner files left on any page are the 48, 180 (apple-touch) and 192 px favicon links: the site favicon is still Lake Mariner's shield, set in Site settings.
- Event photos: the Figma events use the same sample photos as the copy (vest crowd, orange shirts, the UTV), so nothing changed. Real photos from the client are still an open question.

Left from batch 2:
- ~~Document links and several post links point at lakehawkeyedata.com/s/… PDFs on Squarespace~~ done 2026-11-24: the 8 PDFs are Webflow assets (originals in `Assets/lake-hawkeye-pdfs/`; Letters of Support was already on the site from the Lake Mariner copy), and every link points at them: Documents (4 items, URL and the study's description), news bodies (energy pricing, open letter, open-house recap, webinar), the webinar event body, Project Overview tab 3 and the Community Impact grid "HERE" (Designer). Published: no lakehawkeyedata.com/s/ link left on staging, all 8 files 200.
- ~~News Source links to lakehawkeyedata.com/newsroom/~~ done 2026-11-24: the 5 posts from Lake Hawkeye's own newsroom (energy pricing, Built for the Future, open letter, open-house recap, webinar) have no Source Name or URL, so their Source card is hidden (the card shows only for posts from other outlets). Published and checked. The launch redirect for old inbound links is in the Redirect map above.
- The 6 Resources & Documents items are the copy's (Cayuga study, Lansing planning board…) with placeholder descriptions.

Left from batch 1: the FAQ Open Graph image is still Lake Mariner's FAQ photo (changes with the FAQ hero).
