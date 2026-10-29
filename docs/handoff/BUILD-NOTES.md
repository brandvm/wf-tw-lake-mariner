# Build notes

What the build handoff needs (see the skill's `checklists.md` › Build
handoff). Kept current during the build, not written at the end. No
credentials here: name the vault entry instead.

## CMS notes

How to edit what: each collection and its fields, which sections are
conditional on which field, and each component's props.

Collections created 2026-10-28. Sample items from the approved prototype added and published the same day (43: 3 categories, 1 topic, 5 event types, 6 perks, 9 posts, 5 events, 7 documents, 4 FAQs, 3 testimonials). Placeholders say so in their title or text; replace them with real content before launch. The item's Name field is the title, question or person's name.

| Collection / component | How to edit | Notes |
| --- | --- | --- |
| News Posts (`/news/<slug>`) | Category (ref), Topics (multi-ref), Cover Image (alt on the image), Excerpt, Author, Publish Date, Read Time (minutes), Body, Attachment + Attachment Label + Attachment Size, Source Name + Source URL, Featured | No cover: the card shows the shield on the TW gradient. Excerpt is the card text and the article's lead. Attachment fields fill the Download Card; Source fields the Source Card (press coverage). The list sorts by Publish Date. |
| News Categories | Name only | The filter pills and the card chip (Articles, Blog Post, Press Releases). |
| Topics | Name only | The topic line on the card. |
| Events (`/events/<slug>`) | Event Type (ref), Tagline, Start, End, Location, Location Note, Image, Summary, Body, Perks (multi-ref), Callout, RSVP URL, RSVP Provider | Start/End in New York time: upcoming vs past, the date badge and Add to calendar read them. Body ends with Why TeraWulf; the Perk Grid follows, then the Callout line. |
| Event Types | Name only | The chip on cards and the event page. |
| Event Perks | Value, Label | Value is the big line (numbers count up), Label the small one. |
| Documents | Description, File or External URL, Group (Resources & Documents / Community & Partnership), Show on Project Overview, Show on Community Impact, Order | One item can show on both pages. Lower Order first. |
| FAQs | Answer, Show on Home, Order | Home shows 4 (Show on Home) and adds them to the FAQPage schema. |
| Testimonials | Quote, Role, Photo, Order | Careers Quote Slider; the photo sits behind the quote. |
| C \| Page Hero (component) | Image, Heading, Text, Show Text 2 + Text 2, Button Label, Button Link, Button Hook, Video URL | Button Link is typed: `#section` on the page or a URL. Button Hook stays `data-hero-button`; on Cooling set it to `data-video-open` and put the video's URL in Video URL (empty shows "Video coming soon"). |
| C \| Fact Bar (component) | Label/Value 1–3, Show Labels 2 and 3 | The aerial bar on Home turns the labels of items 2–3 off. |
| C \| Statement (component) | Eyebrow, Statement, Statement Muted, Show Text, Text, Show Button, Button Label, Button Link | Statement is the dark first part, Statement Muted the lighter rest. |
| C \| Stat Row (component) | Label, Value, Count 1–3, Suffix | Value is the text shown; Count is the number in it and Suffix what follows while it counts (keep them in step). |
| C \| Intro Row (component) | Logo, Heading, Media, Media Alt | The two paragraphs are edited inside the component (rich text with the TeraWulf Inc. link), not per instance. |
| C \| Collage (component) | Eyebrow, Heading, Wide Image, Square Image, Statement, Statement Muted | Statement Muted starts with a non-breaking space so the two parts don't join. |
| C \| Promo Card (component) | Image, Heading, Text, Button Label, Button Link | |
| C \| Highlight Tabs (component) | Eyebrow; Title, Text, Photo 1–5 | Five tabs, fixed; each Title is also its tab's name. |
| C \| Image Accordion Item / Item Light (components) | Title, (Number), Answer, State | Sit in an Accordion with `data-accordion-autoplay="7000"`; the photos beside it carry `data-accordion-image`, one per item, in order. |
| C \| Doc Accordion Item (component) | Name, Description, Button Label, Link, State | In a Collection List of Documents on Project Overview and Community Impact; bind Link to File or External URL. |
| C \| Photo Band (component) | Eyebrow, Statement, Statement Muted, Text | The three photo layers stay fixed in the component (the cut-out sits on the worker in the photo). |
| C \| Step List (component) | Eyebrow, Heading; Text, Image, Alt 1–3 | Three steps, fixed; the [1]–[3] counter is static. |
| C \| Hover Pair (component) | Image, Alt, Button Label 1–2 | Button Label is what a screen reader hears; the lightbox shows the image itself. |
| C \| Video Frame (component) | Poster, Poster Alt, Button Label, Video URL, Video Title | Empty Video URL shows "Video coming soon" in the dialog. |
| C \| Benefit Grid (component) | Title, Text, Photo 1–4 | Four boxes, fixed. |
| C \| Follow Band (component) | Eyebrow, Heading, Text, Facebook, LinkedIn, X | Social links are `#` until the accounts are decided (HANDOFF Open decisions). Section id `follow` (Subscribe to updates scrolls to it). |
| C \| Empty Card (component) | Label, Heading, Text, Button Label, Button Link, Image | Goes in the Events upcoming list's Empty state. |
| C \| Breadcrumb (component) | Parent Label, Parent Link, Current | On the templates, connect Current to the item's Name. |
| C \| Share Buttons (component) | none | The share module fills the links from the page's URL and title. |
| C \| Download Card (component) | Name, Meta, Button Label, Link | News: the Attachment fields; Event: the RSVP URL. Opens in a new tab. |
| C \| Source Card (component) | Label, Link Text, Link | News: Source Name and Source URL. |
| C \| Accordion Item (component) | Question, Answer, State | State `open` on the item that starts open, `closed` on the others. Sits in an Accordion block. |

Community Impact (`/community-impact`, page 6ae36b2aaf117d0db6644e71, built 2026-10-29): C | Page Hero (hero photo `ci-hero-ci.jpg`), How Barker benefits (page markup: Split Media with 7 photos, Image Accordion title, Accordion with autoplay 7000 and scope `#benefits`, 7 C | Image Accordion Item Light; the first one's State is `open`; edit each item's Title and Answer on the instance), Resources & Documents and Community & Partnership Initiatives (Documents Collection Lists of C | Doc Accordion Item, Name/Description/Link bound to Name, Description, External URL; `data-accordion-open-first` opens the first row). A document that has only a File needs its Link bound to File instead. Until MANUAL-TODO BK both lists show every document.

Careers (`/careers`, page 6ae37c6cfd76d0a366065c7b, built 2026-10-29): C | Page Hero (hero photo `careers-hero-careers.jpg`, button to `#openings`), Meet our employees (page statement + C | Video Frame; put the video's URL in Video URL), Your Benefits (page statement + C | Benefit Grid; edit the four boxes on the instance), Current Openings (the portal screenshot `careers-openings.jpg` and a C | Button "View All Openings", Link `#` until the portal URL is decided), and the Quote Slider (`#testimonials`): two Collection Lists of Testimonials sorted by Order, photos in the section background and quotes in the glass card. Add, reorder or replace testimonials in the CMS (Quote, Name, Role, Photo, Order); the counter and arrows follow the number of items, and each Photo shows behind its own quote.

Events (`/events`, page 6ae24c83d2414ebd88020e64) and the Events template (`/events/<slug>`, 6ae24c79b1163d6f8fbe6961), built 2026-10-29. Events page: page head with the search (Finsweet List instance `events`: the input searches each past card's name, type and location; "No events match" shows when nothing does), Upcoming events (Events list filtered to End today or later; C | Empty Card in the list's Empty state, shown while nothing is upcoming), Past events (End yesterday or earlier; Event Cards two per row on Frost, `data-reveal`), C | Follow Band. An event moves from upcoming to past by itself the day after its End date, at the next publish. Event template: C | Breadcrumb (All Events › the event's Name), Event Type chip, Name, Tagline, C | Share Buttons, the Detail Bar (Date and Time from Start/End, Location Note; Add to calendar reads Start, End, Name, Location and Summary from attributes on the Detail Bar), the Summary as lead, Body, the Perk Grid (the event's Perks; a Value with a number counts up, `data-count="auto"`), the Callout, the RSVP card (C | Download Card: Meta is RSVP Provider, e.g. "Registration via Microsoft Forms"; Link is RSVP URL), Other events (3, newest Start first) and the Follow Band. SEO title and description come from Name and Summary; the share image is the event Image (page head code). Until MANUAL-TODO DI–DL: dates show without their formats, the cards link to /events, the lists are unsorted, and an event lists itself under Other events.

The static News and Events pages share the slugs `news` and `events` with their collections: Webflow accepted both (2026-10-28), so list pages are `/news`, `/events` and items `/news/<slug>`, `/events/<slug>`.

## Integrations

| Service | What it does | Where it's configured | Vault entry |
| --- | --- | --- | --- |
| | | | |

## Changes log

Changes made during the build that differ from the approved design, and
who approved them.

- 2026-10-28 · Button Light and Frost are variants of Button Color (the prototype drew them as combos Is Light and Is Frost on Button Color); the combos stay for card buttons that are not C | Button. Same look. · per HANDOFF components table (variant Solid, Light, Frost, Small)
- 2026-10-28 · Nav and footer icons are DOM `<i>` elements with the Phosphor classes as a class attribute, not Icon component instances (global components, edited rarely). · Claude, for review
- 2026-10-28 · C | Page Hero covers the inner pages only; Home's hero stays page markup with a C | Fact Bar instance. Its overlay (50% vs 70%), width, heading size and the `hero-sequence` hook differ, and component variants can't style the combo-class elements that carry them (lessons/mcp.md). Same look. · Claude, for review
- 2026-10-28 · The hero button is a DOM `<a>` with its href bound to a text prop (Button Link takes `#section` or a URL, not the link picker): an attribute *name* can only be bound on a DOM element, and the Cooling hero needs `data-video-open` switched on by a prop (Button Hook). · Claude, for review
- 2026-10-28 · C | Statement is the Home pattern (eyebrow, two-tone D4, optional line and button). The D2/D3 statements on Cooling and Careers and the News/Events page heads are built with their pages. · Claude, for review
- 2026-10-28 · The Home FAQ is a C | Accordion Item repeated by the FAQs Collection List; the Split head and Accordion wrapper are page markup (a component can't hold a CMS list). · per HANDOFF
- 2026-10-28 · The Image Accordion and Doc Accordion are item components (the lists differ per page and the Doc list is a Collection List); the light Image Accordion item is its own component, since its structure differs (icons, gradient bar, text-secondary rich text) and variants can't change a combo element. Same look. · Claude, for review
- 2026-10-29 · The Quote Slider is built with the Careers page, not as a component (its quotes and photos are two lists from the Testimonials collection). · Claude, per the K2b proposal
- 2026-10-29 · Post Card, Event Card, Detail Bar, Perk Grid, Callout and Article Body are built in each page's Collection List or template, not as components: nested lists (Topics, Perks), links to the current item and date formats can't be set on component props through the API. Same look. · Claude, per the K3 proposal
- 2026-10-29 · The Download Card's button no longer has the `download` attribute (it is also the Event RSVP link); it opens in a new tab instead. · Claude, for review
- 2026-10-29 · Project Overview: the Responsible Development item [5] answer ends "A video of the stack demolition is to come." instead of the prototype's "View the demolition … here" link, which pointed at `#` (no video yet). Put the link back when the video exists. · Claude, for review
- 2026-10-29 · Project Overview: the Doc Accordion Item's Link is bound to the Documents External URL field only (a link reads one field; the API accepts the File field too). A PDF uploaded to File alone shows no link: put the file's URL in External URL, or rebind Link to File in the Designer if the client prefers uploads. Same choice for Community Impact. · Claude, for review
- 2026-10-29 · Closed-Loop Cooling: the hero and Photo Band sections have no `id="top"` / `id="system"` (their section is the component root, which has no id prop); nothing links to them. The Key Benefits list is a bulleted list made in the Designer (MANUAL-TODO BU). · Claude, for review
- 2026-10-29 · Home FAQ: the FAQs list shows the FAQs with Show on Home on, sorted by Order, 4 at most (filter set later the same day, MANUAL-TODO AP). · Claude
- 2026-10-29 · Home hero button: C | Button inside a plain div that carries `data-intro` (an instance can't take attributes). Home's hero texts are page text, edited on the page. · Claude
- 2026-10-29 · Icons: the Phosphor font is subset to the icons in `phosphor.icons` (31, inlined in the stylesheet, no font request). An icon typed into a C | Button Icon prop that isn't in that file draws nothing: add its name there, run `pnpm phosphor --subset` and `pnpm build`, push. · Claude (PageSpeed)
- 2026-10-29 · Head code preloads the Space Grotesk woff2 (the hero H1 font). Re-uploading that font changes its URL: update the preload in `loader.html` piece 1 and the site head code. · Claude (PageSpeed)
- 2026-10-29 · Careers: the Quote Slider slides are the Collection Items themselves (the prototype's `<figure>` and `<blockquote>` are divs, the quote is a Rich Text bound to Quote) and the slide labels "n of 3" are left out (the counter shows the position). The hero photo lacks the prototype's `object-position: 50% 30%` (C | Page Hero has no position option; the crop is ~15px higher). Same look otherwise. · Claude, for review
- 2026-10-29 · Events: the search covers the past list only (Finsweet List instance `events`), so its placeholder says "Search past events…" (the prototype said "upcoming and past"). Upcoming and past are decided by the End date (an event stays upcoming through its last day), not Start. · Claude, for review
- 2026-10-29 · Event Cards and the Event template's Detail Bar and Other events cards are page markup with the default button size: the "View Event", "Read more", "Google Calendar" and "ICS" buttons are a little larger than the prototype's Small buttons (no Small class exists outside C | Button; MANUAL-TODO AO). · Claude, for review
- 2026-10-29 · Event template: the Detail Bar's Time is Start time – End time (two bound spans); the RSVP card's meta line is the RSVP Provider field as written ("Registration via Microsoft Forms"). · Claude

## Redirect map

Every old URL → its closest new page, from the crawl saved in discovery.

| Old URL | New URL | Status |
| --- | --- | --- |
| | | 301 |

## Known issues

### Fix before launch
- Mobile PageSpeed on /careers is 86 (median of 5, range 64–96; desktop 98; 2026-10-29). The LCP is the hero paragraph and ~90% of it is render delay: the full-size Testimonials photos (CMS images, ~690 KB, no `srcset`) and `careers-openings.jpg` (350 KB; uploaded through the API at 17:04, no variants yet, so no `srcset`) load in the same window as the stylesheet and fonts. Next: once the openings asset has variants, build a new Image for it (a plain Image keeps no `srcset`, GOTCHAS); WebP for the CMS photos waits for the user's OK. · Claude
- Footer (G | Footer W) is 142px shorter on staging than in the prototype at 820 and 390, on every page (seen on /careers and /closed-loop-cooling with wf:pass; main content matches). Not checked further. · Claude
- Mobile PageSpeed on /closed-loop-cooling is 85 (median of 5, range 64–87; desktop 96; 2026-10-29). Same cause as Project Overview: the LCP is the hero H1 and 91% of it is render delay behind the intro loader; the rest is ~720 KiB of images without `srcset` (MANUAL-TODO BV). · Claude
- Closed-Loop Cooling vs prototype (wf:pass 1440/820/390): the Photo Band was 115px shorter at 1440 (84 at 820) with the smoke layer's edge showing, and the How It Works heading didn't stick: MANUAL-TODO N–Q (band margins, full bleed now), R (band fade) and S (heading sticks at Nav Height + 2.5em) are done through the API (2026-10-29); recompare. Labels and body text use Space Mono and Satoshi since AA (2026-10-29). Operations and Inside the Loop match in height at all three widths. · Person

- Mobile PageSpeed on /project-overview is 68 (median of 5; desktop 95; 2026-10-29). LCP is the hero paragraph and 91% of its 6.1 s is render delay: the intro loader and the `data-intro` hide keep the hero text invisible until the intro plays. Site-wide (every hero), so it needs a change in the intro module or loader, not on a page. Also on this page: `po-rd-servers.jpg` loads at full size (265 KB, no responsive variants); WebP/AVIF conversion is waiting for the user's OK. · Claude
- Style guide Components rows 6–34 are inert previews (markup copies, script hooks stripped, buttons imported as links, the Small button variant shown at the default size). Swap each for its component instance in the components step; nothing is built from these copies. · Claude — K2a (2026-10-28): Page Hero, Fact Bar, Stat Row and Accordion · Glass are now live instances; Statement and Explore Rail rows added; K2b-1: Intro Row, Collage, Promo Card, Highlight Tabs, Image Accordion (dark and light) and Accordion · Line are live instances; K2b-2: Photo Band, Steps, Hover Pair, Video Frame, Benefits too. K3: Follow Band, Empty Card, Breadcrumb, Share Buttons, Download Card, Source Card too. Still inert, each swapped for a live Collection List or the template part in its page session: Quick Links, Event Card, Detail Bar, Perk Grid, Callout, List Toolbar, Post Card (Is Row), Article Body, Quote Slider
- Classes the components need that the styles plan left out (repo CSS only): Sr Only (visually hidden label/legend, News search and pills), Accordion Icon Plus and Accordion Icon Minus (the open/closed icon swap). Propose them with the components. · Claude — done in K1 (2026-10-28)
- Style guide Buttons section: add a "Button Size · Small" row once the Small variant's styles are in (MANUAL-TODO AC). · Claude
- Explore Rail: the cursor pill is the raw Button Size markup at the default size; the prototype uses Button Size's Small variant. Swap each pill's Button Color/Size for instances set to Small (after MANUAL-TODO AO). · Claude
- C | Stat Row values are transparent until MANUAL-TODO AF (the gradient the text is clipped to) is done. · Person — done 2026-10-29 (AF through the API, literal colours)
- Home FAQ: with a Collection List every item takes the same State, so none starts open (the prototype opens the first). Either an "Open first" option in the accordion module or a CMS switch bound to State; decide with the Home page. · Claude — done 2026-10-29: the FAQ Accordion has `data-accordion-open-first` (and `data-faq-schema`, FAQPage JSON-LD from the items shown)
- Style guide specimens of absolutely positioned or full-bleed parts (Fact Bar, Explore Rail) are clipped by their row at 820 and 390; on the pages they span the section. · Claude
- The Intro Loader classes (Intro Loader, Inner, Mark, Bar, Bar Fill) and the `intro-seen` tile on the style guide are unused since the loader was removed (2026-10-29): remove their style-guide tiles, then clean up unused styles. · Claude

### Fix after launch

- <issue> · <owner>
