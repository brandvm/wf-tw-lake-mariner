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

## Redirect map

Every old URL → its closest new page, from the crawl saved in discovery.

| Old URL | New URL | Status |
| --- | --- | --- |
| | | 301 |

## Known issues

### Fix before launch

- Style guide Components rows 6–34 are inert previews (markup copies, script hooks stripped, buttons imported as links, the Small button variant shown at the default size). Swap each for its component instance in the components step; nothing is built from these copies. · Claude
- Classes the components need that the styles plan left out (repo CSS only): Sr Only (visually hidden label/legend, News search and pills), Accordion Icon Plus and Accordion Icon Minus (the open/closed icon swap). Propose them with the components. · Claude
- Style guide Buttons section: add a "Button Size · Small" row once the Small variant's styles are in (MANUAL-TODO AC). · Claude

### Fix after launch

- <issue> · <owner>
