# Lake Mariner Data — development plan

Written 2026-10-27 from a full pass over the Figma page
"↪ • Template — Clean Pages" (node `2523:111`): 9 desktop pages at 1680px,
54 sections, about 30 of them distinct. `HANDOFF.md` holds the decisions,
CMS, component and module tables this plan refers to.

Lake Mariner is the first of five campus sites built from one template.
Everything below is built generic, so the other campuses are a site
duplicate plus content, with optional sections switched off. They should
not need a rebuild.

## Design system read from Figma

**Type** (four families):

| Role | Font | Desktop sizes seen |
| --- | --- | --- |
| Display and headings | Space Grotesk Medium, tracking −2% (−4% at 72) | 72, 64, 56, 48, 40, 34, 24, 22 |
| Body | Manrope Regular, 164% / −1% | 18, 16, 15, 14 |
| Body, second face | Satoshi Regular and Medium | 18, 16, 14 (cards, meta) — see open decisions |
| Labels, chips, buttons, nav | Space Mono Regular, uppercase, +2% | 14, 13, 12, 11 |

The logo lettering (Geom Graphic) is part of the SVG logo, not a web font.

**Colours** (primitives; the roles are proposed at the variables step):

| Name | Hex | Used for |
| --- | --- | --- |
| Navy 900 | `#112135` | dark sections, footer, headings on light, announcement bar |
| Navy 700 | `#002552` | accents |
| Slate 600 | `#3E5570` | buttons, secondary text, chips (also at 60% and 10%) |
| Slate 400 | `#5C7592` | muted headline words, meta |
| Mist 100 | `#EBF0F5` | light section and card backgrounds |
| Mist 50 | `#EFF3F6` | cards on mist |
| Mist 200 | `#D4DDE7` | borders, dividers |
| White | `#FFFFFF` | |

**Layout:** 1680 frame, 1280 content width (200px side padding), 120px
section rhythm. The repo's fluid scaling already defaults to ideal 1680 /
min 1440 / max 1680, so the type scales on desktop as designed.

## Section inventory

The **Built as** column names the component or class family each section
becomes. A name used on two or more pages is generic (`conventions.md` §3).

### Global (every page)

| Section | Built as | Notes |
| --- | --- | --- |
| Announcement bar | inside G \| Nav W | One line of text + link, close ×. Dismissal remembered (`data-announcement`). Content from a CMS item or site setting, so it can be turned off. |
| Nav | G \| Nav W | Campus logo · "Part of TeraWulf" logo (→ terawulf.com) · pill menu: Project Overview, Insights ▾ (Community Impact, Closed-Loop Cooling, FAQ → terawulf.com), News & Events ▾ (News, Events), Careers · Contact Us (→ terawulf.com). Light and dark versions: over a hero photo it is white text; on News/Events/templates it is dark text on white. |
| Footer | G \| Footer W | Logo, 3 link columns + Follow (Facebook, LinkedIn, X), bottom bar (copyright, campus email, Privacy, Cookie, credit). |
| Follow us band | C \| Follow Band | News article, Events, Event. Mist card, heading, text, social buttons, decorative 3D fan image on the right. |

### 01 Home

| Section | Built as | Notes |
| --- | --- | --- |
| Hero | C \| Page Hero (Is Home) | Full-bleed photo + dim overlay, campus shield, h1, line, Explore More button, **Fact Bar** pinned to the bottom (Location · Power Market · Status). |
| Intro + Key Figures | Section Is Mist | Eyebrow, two-tone statement (navy + slate words), Read Full Overview button, **Stat Row** (Total Capacity / Contracted / Open), full-bleed aerial with a **Fact Bar** of key highlights over its bottom edge. |
| Explore the Campus | C \| Explore Rail | Sticky intro on the left; 4 large image cards (Community Impact, Careers, Events, News) in a horizontal rail with floating tags. Shared with Project Overview. |
| FAQ Preview | Section Is Dark + C \| Accordion (Is Glass) | Photo background, eyebrow (placeholder), "FAQs", intro (placeholder), All Questions → terawulf.com FAQ; 4 questions from the FAQs collection. FAQPage JSON-LD. |

### 02 Project Overview

| Section | Built as | Notes |
| --- | --- | --- |
| Hero | C \| Page Hero | "Inside the Campus" anchors to the next section. |
| About TeraWulf | Split Head + Media | TeraWulf logo, h2, two paragraphs, wide image (Figma has a video fill: an autoplay loop, or the poster image). |
| About the Project | C \| Media Collage | Two offset images + statement (two-tone). |
| Closed-Loop Cooling Teaser | C \| Promo Card | Wide image card with title, text, "Cooling Explained" → /closed-loop-cooling. Reused on other campuses only when water-cooled (optional). |
| Scale & Infrastructure | C \| Highlight Tabs | Full-bleed photo; 5 numbered tabs along the bottom; each tab swaps the background and the text (Figma "Project Highlights Section Animation", frames `2295:7514…7671`). |
| Responsible Development | C \| Image Accordion (Is Dark) | Accordion of 5 numbered items, progress line on the open item; the image on the right changes with the open item (Figma "1.1V … Animation"). |
| Explore the Campus | C \| Explore Rail | As on Home. |
| Resources & Documents | C \| Doc Accordion | Left: eyebrow, h2, intro. Right: line accordion; each item has a description, a link and a Download pill. From the Documents collection. |
| Community & Partnership Initiatives | C \| Doc Accordion | Same component, other group. |

### 03 Community Impact

| Section | Built as | Notes |
| --- | --- | --- |
| Hero | C \| Page Hero | Two intro paragraphs. |
| How Barker Benefits | C \| Image Accordion (Is Light) | 7 items, image half bleeds to the right edge (Figma "light version"). |
| Resources & Documents | C \| Doc Accordion | |
| Community & Partnership Initiatives | C \| Doc Accordion | |

### 04 Closed-Loop Cooling

| Section | Built as | Notes |
| --- | --- | --- |
| Hero | C \| Page Hero | "Watch Cooling Explained" opens the YouTube video in a modal. |
| Intro | Section Head + full-bleed image | Centred eyebrow + two-tone h2 + paragraph; wide photo fades in under the text. |
| How It Works | C \| Step List | Sticky title on the left; 3 numbered step cards (text + image) on the right. |
| Operations, Maintenance & Longevity | Section Is Dark + C \| Accordion (Is Glass) | Same glass accordion as the Home FAQ. |
| Inside the Loop | C \| Hover Pair | Two blueprint images; the hovered one widens (Figma "On Hover", `2498:9831`). On touch: tap or a plain stack. |

### 05 Careers

| Section | Built as | Notes |
| --- | --- | --- |
| Hero | C \| Page Hero | "See Current Openings" → `#openings`. |
| Meet Our Employees | C \| Scroll Video | Centred head; video poster with Play Video. On scroll the frame grows to near full width (Figma "Transition by scroll", `2301:11857`). Play opens the video. |
| Your Benefits | C \| Benefit Grid | 2×2 cards (image + title + line). Static content, shared with the Explore rail tags. |
| Current Openings | Embed | The TeraWulf careers portal (the Figma frame is a screenshot of it) in an iframe or its official widget. Source is an open decision. |
| Testimonials | C \| Quote Slider | Dark photo section; glass card with quote, name, role, prev/next and 1/3 counter; the photo changes with each slide (Figma "Slider", frames `2299:11727`, `2299:11776`). From the Testimonials collection. |

### 06 News

| Section | Built as | Notes |
| --- | --- | --- |
| Hero | Section Is Top + Section Head | h1, line, search field. |
| Post List | C \| Post Card in a CMS list | Category filter pills (All / Articles / Blog Post / Press Releases), Clear all, sort (New to Old), 3-column grid, Show More. Filter, sort, search and load more with Finsweet Attributes (`recipes/finsweet/`). Empty state needed (designed: no). |

### 07 News Article (CMS template)

| Section | Built as | Notes |
| --- | --- | --- |
| Article Hero | Breadcrumb + cover + head | Breadcrumb (All News › title), cover image, category chip, h1, author · date · read time, share buttons (Facebook, LinkedIn, X, native share). |
| Article Content + Related | Rich text + sidebar | Rich text with images, h3, bullet list, pull quote; **Download Card** (file name, type · size, Download); **Source Card** (Originally published on … →, for media coverage). Sidebar: Related articles, 3 horizontal Post Cards (same category, current item excluded). |
| Follow Us | C \| Follow Band | |

### 08 Events

| Section | Built as | Notes |
| --- | --- | --- |
| Hero | Section Is Top + Section Head | h1, line, search field. |
| Upcoming Events | CMS list (future dates) + empty state | The design shows the empty state: chip, heading, text, Subscribe to Updates, image. A filled state (event card, wide) is not designed: I'll make it from the Past Events card. |
| Past Events | C \| Event Card in a CMS list | 2-column grid; image with date chip (month + day), type chip, title, date · time, location note, View Event. |
| Follow Us | C \| Follow Band | |

### 09 Event (CMS template)

| Section | Built as | Notes |
| --- | --- | --- |
| Event Hero | Breadcrumb + head + Detail Bar | Breadcrumb (All Events › title), type chip, h1, tagline, share buttons; **Detail Bar**: Date, Time, Location, Google Calendar and ICS buttons. |
| Event Content | Rich text + sidebar | Rich text + image, "In this role" list, **Perk Grid** (6 stat cards), callout, **RSVP Card** (Reserve your spot, provider line, Reserve →). Sidebar: Other events, 3 horizontal Event Cards. |
| Follow Us | C \| Follow Band | |

## Tablet and mobile (my call, reviewed on staging)

There are no tablet or mobile designs, so I'll set these rules and send
screenshots at 991, 767 and 479 with each page for review.

- **Nav:** below 992, logo + Contact icon + menu button; the menu opens
  as a full-height sheet with the dropdown groups expanded. Announcement
  bar wraps to two lines.
- **Hero:** full viewport height kept; h1 steps down a size per
  breakpoint. The Fact Bar becomes a 3-row list (tablet: one row that
  wraps) under the hero text instead of over the photo edge.
- **Splits** (head left / content right): stack, head first. Sticky
  columns stop being sticky.
- **Stat Row:** 3 across down to 767, then stacked with dividers.
- **Explore Rail:** native horizontal scroll with snap, one card plus a
  peek of the next; the tags stay on the image.
- **Highlight Tabs:** the 5 tabs become a scrollable pill row; the swap
  stays.
- **Image Accordion:** the image moves above the accordion (one image,
  follows the open item).
- **Step List, Benefit Grid, Event grid, Post grid:** 3 → 2 → 1 columns;
  Benefit and Event cards go image-on-top below 767.
- **Hover Pair:** stacked, no hover widen.
- **Scroll Video:** no scroll growth below 992 (full width from the
  start); reduced motion turns it off everywhere.
- **Quote Slider:** photo on top, card below, swipe enabled.
- **Article and Event templates:** the sidebar moves under the content.
  The Detail Bar stacks, and the calendar buttons go full width.
- **Footer:** link columns 2 × 2 on tablet, stacked on mobile.

## Build phases

Each phase ends with a staging publish and a check. Webflow writes go in
batches with names and values shown first (`conventions.md`).

0. **Audit the Webflow site** (read-only): pages, existing classes,
   variables and components (whether it came from the template's starter
   site), fonts. Report what can be reused.
1. **Foundations:** upload fonts (Satoshi needs its own file; the other
   three are on Google Fonts); Colors, Colors Semantic (Base + Dark
   modes), Typography and Layout variables in em, proposed old → new for
   approval; tag styles (manual Designer step); utility and type classes
   (D0–D6, Body L/S, Label Text, Chip).
2. **Style guide page** at `/design/style-guide`, with every class from
   step 1.
3. **Global components:** Nav (light and dark, announcement bar,
   dropdowns, mobile sheet), Footer, C \| Button (Solid, Light, Ghost,
   Small), Icon (Phosphor), Section Head, Fact Bar, Follow Band, Social
   Buttons, Breadcrumb.
4. **CMS:** create the collections in `HANDOFF.md`, then enter Lake
   Mariner's content from the live Squarespace site (no new copy), with
   images and alt text.
5. **Pages, section by section,** in this order, each at 3 widths:
   Home → Project Overview → Community Impact → Closed-Loop Cooling →
   Careers → News + News template → Events + Event template → 404 →
   Privacy and Cookie pages (if they stay local).
6. **Modules** (repo JS, built alongside the section that needs them):
   accordion, image accordion, highlight tabs, explore rail, quote
   slider, scroll video, hover pair, video modal, announcement, share,
   calendar links, Finsweet list filters, reveals. See `HANDOFF.md` ›
   Modules.
7. **Page done** per page (`checklists.md`): `wf:pass`, `wf:outline`,
   `wf:anchors`, `wf:a11y`, `wf:links`; SEO fields, OG images, schema
   (FAQPage on Home, NewsArticle and Event on the templates,
   Organization site-wide).
8. **Build handoff**, then `webflow-launch`: redirects from every
   Squarespace URL, one Search Console property per domain, and fixing
   the shared Cayuga meta description and og:image.
9. **Rolling out to the other four campuses:** duplicate the finished
   site per campus; swap the logo, campus facts, colours (if any) and CMS
   content; switch off optional sections (Cooling teaser and page only on
   water-cooled campuses: Lake Mariner and Lake Hawkeye). Each campus gets
   its own repo from wf-template, or shares this bundle; decide before
   the first duplicate.

## Content gaps found in the design

- Lorem ipsum: Home FAQ eyebrow and intro (placeholder, agreed); the
  Resources & Documents and Community & Partnership intros; the "How It
  Works" eyebrow; "[X] Lorem ipsum" tags in the Explore rail and Benefit
  cards.
- "Who Beowulf Is" eyebrow on Careers: probably meant "Who TeraWulf Is".
- News card categories differ between the list (Articles, Blog Post,
  Press Releases) and Related articles (Videos, News, Press Releases).
- Past events all show the same placeholder event; real events are on
  the live site.
- No designed state for: News empty list or no search results, an
  upcoming event (filled), a long title, an article without a cover, or
  the 404 page.
