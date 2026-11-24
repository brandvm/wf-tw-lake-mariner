# SEO plan: metadata, Open Graph, canonical and schema

Written before launch (the `webflow-launch` skill › SEO plan) and kept
current until every row is done. The rule is the same as for CSS:
whatever Webflow does natively stays in Webflow (page settings, CMS
bindings); only what it can't do goes into custom code, and that code is
kept in this repo as the source of truth.

**Five sites, one setup.** This site is the reference for Justified,
Muskie, Lake Hawkeye and Chesapeake, which are duplicated from it and load
this repo's bundle. Everything campus-specific is kept where it is easy to
swap per site: page settings and CMS bindings first, then the marked
per-site block in the head code (`loader.html` piece 1), then the per-site
schema folder `docs/seo/schema/<campus>/`. The list of what to change on a
duplicate is in `CAMPUS-PORT.md` and in "Per-site values" below.

## Status

2026-11-24 — Inventory done (below). Drafted: titles and descriptions for
every static page and the 404 (waiting on the client), the default share
image (`Assets/seo/lake-mariner-og-1200x630.jpg`, waiting on the client),
schema for Home, the News Posts template and the Events template
(`docs/seo/schema/lake-mariner/`, `templates.md`), and the site-wide
head tags (per-site block in `loader.html` piece 1). Structural Webflow
settings that need no client copy are proposed as batch A (see Steps);
written only after the project lead's go-ahead. Canonical waits for
launch. What waits on the client is at the end.

## What staging outputs today

Read from the published HTML on 2026-11-24 (`pnpm wf:seo`, and a fuller
read of every tag with `curl`), not from the page settings.

| Tag | Webflow does it? | Now |
| --- | --- | --- |
| `<title>`, meta description | Yes, page settings (templates: bound fields) | Set on every page; Home's title is 71 characters, every description is under 140 (95–147). Templates bind Name and Excerpt / Summary |
| `og:title`, `og:description`, `twitter:*` | Yes, page settings ("same as SEO") | "Same as SEO" on every page except `/design/media`; `twitter:card` is `summary_large_image` everywhere |
| `og:image` | Yes, page settings (upload, or bind an image field on templates) | Static pages: each page's hero photo; **FAQ, 404 and the style guide have none**. Templates: Cover Image / Image through page head code (`og:image` and `twitter:image` tokens) |
| `og:type` | Webflow writes `website` on every page | Articles and events are `website` too; a second `og:type` in head code would duplicate it, so left as is |
| `<link rel="canonical">` | Yes, once Site settings › SEO › Global canonical URL is set | Not on staging (correct; set at launch) |
| `og:site_name`, `og:locale`, `twitter:site` | No: head code in `loader.html` | Missing everywhere. Drafted in the per-site block of `loader.html` piece 1 (batch A) |
| JSON-LD schema | No: page settings › custom code, from `docs/seo/schema/` | **None in the served HTML.** FAQPage is added by the `faq-schema` module in the browser (Home, /faq), so `wf:seo`, which reads served HTML, doesn't see it |
| `lang` | Yes, from the primary locale | `en` on every page |
| `robots` noindex | Page head code | `/design/style-guide` and `/design/media` only (`noindex, nofollow`) |
| `sitemap.xml` | Yes, Site settings › SEO | **Stale on staging:** lists only `/`, `/design/style-guide` and `/design/media`, lastmod Oct 27–28. Site settings › SEO has no API; check "Auto-generate sitemap" in the dashboard at launch (and exclude `/design/*` once the site plan is on, `lessons/mcp.md`) |
| `robots.txt` | Yes, Site settings › SEO | `Disallow: /` on webflow.io (subdomain indexing off), as it should be on staging |

## Inventory

Lengths in characters. Static pages as served on 2026-11-24; for the
templates one real and one sample item each.

| Page | Path | Title (len) | Description (len) | OG image | Robots | JSON-LD | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Home | `/` | Lake Mariner Data — TeraWulf’s flagship high-performance compute campus (71) | Lake Mariner Data is TeraWulf’s data center campus on the shores of Lake Ontario in Barker, NY. (95) | hero-home.jpg | — | FAQPage (browser only) | title long, description short |
| Project Overview | `/project-overview` | Project Overview — Lake Mariner Data (36) | Inside the Lake Mariner campus: TeraWulf, the project, closed-loop cooling, project highlights and responsible development. (123) | po-hero | — | — | description short |
| Community Impact | `/community-impact` | Community Impact — Lake Mariner Data (36) | How Barker benefits from the Lake Mariner campus: water, emissions, land use, noise, local jobs and community commitment. (121) | ci-hero | — | — | description short; mentions topics the rebuilt page no longer has (emissions, land use) |
| Closed-Loop Cooling | `/closed-loop-cooling` | Closed-Loop Cooling — Lake Mariner Data (39) | How the Lake Mariner campus cools its data halls … discharges none. (147) | cooling-hero | — | — | fine; title short |
| Careers | `/careers` | Careers — Lake Mariner Data (27) | Work at Lake Mariner Data: meet the team, … in Barker, New York. (133) | careers-hero | — | — | straight `'` in TeraWulf's (publishes `&#x27;`, harmless in a meta tag) |
| News | `/news` | News — Lake Mariner Data (24) | Project updates, announcements and coverage … Barker, New York. (103) | explore-news | — | — | both short |
| FAQ | `/faq` | FAQ — Lake Mariner Data (23) | Straight answers to the questions … and the environment. (120) | **none** | — | FAQPage (browser only) | no share image |
| News Posts template | `/news/<slug>` | `{Name} — Lake Mariner Data`: 65–119 on today's items | `{Excerpt}`: **empty on 8 of 9 items**; the one filled is 400+ | Cover Image (head code) | — | — | real post names run long (the 200-jobs post: 110). A post with no Cover Image publishes an empty `og:image` |
| Events template | `/events/<slug>` | `{Name} — Lake Mariner Data`: 65 (real), 88 (sample) | `{Summary}`: 152 on the real event, empty on the 4 samples | Image (head code) | — | — | fine for real events |
| 404 | `/404` | Not Found (9) | none | none | — | — | utility page; the API reaches its SEO title and description |
| Style guide | `/design/style-guide` | Style Guide (11) | none | none | noindex, nofollow | — | 3 H1s (specimens); excluded from search: keep |
| Media | `/design/media` | Media (5) | Internal page … (75) | none | noindex, nofollow | — | keep excluded |

Unpublished CMS templates (News Categories, Topics, Event Types, Event
Perks, Documents, FAQs, Testimonials) answer 404 and need nothing.

## Titles and descriptions (drafts for the client)

Draft copy, not written to Webflow until the client approves it. Target
50–60 / 140–160 characters; the suffix " — Lake Mariner Data" is 20 of
them. Campus-specific by nature (they live in each site's page settings).

| Page | Title draft (len) | Description draft (len) |
| --- | --- | --- |
| Home | Lake Mariner Data — TeraWulf’s HPC Campus in Barker, NY (55) | Lake Mariner Data is TeraWulf’s high-performance compute campus on Lake Ontario in Barker, NY, with closed-loop cooling, local jobs and community investment. (157) |
| Project Overview | Project Overview: The Barker Campus — Lake Mariner Data (55) | Inside the Lake Mariner campus in Barker, NY: who TeraWulf is, how the project is built, closed-loop cooling and our approach to responsible development. (153) |
| Community Impact | Community Impact in Barker, NY — Lake Mariner Data (50) | How the Lake Mariner campus benefits Barker and Niagara County: no lake water for cooling, a stronger grid, local jobs, our team and community partnerships. (156) |
| Closed-Loop Cooling | Closed-Loop Cooling, No Lake Water — Lake Mariner Data (54) | How the Lake Mariner campus cools its data halls with a sealed, closed-loop system that draws no water from Lake Ontario and discharges none back into it. (154) |
| Careers | Careers at TeraWulf in Barker, NY — Lake Mariner Data (53) | Work at Lake Mariner Data, TeraWulf’s campus in Barker, New York: meet the team, see the benefits, hear from our employees and browse current openings. (151) |
| News | News, Press and Project Updates — Lake Mariner Data (51) | Project updates, announcements, press releases and media coverage of the Lake Mariner data center campus in Barker, New York, from TeraWulf and the press. (154) |
| Events | Events, Hiring Days and Meetings — Lake Mariner Data (52) | Hiring days, community meetings, information sessions and open houses at the Lake Mariner campus in Barker, NY. RSVP and add each one to your calendar. (151) |
| FAQ | FAQ: Lake Water, Traffic and Power — Lake Mariner Data (54) | Straight answers to the questions we hear most from our neighbors in Barker about the Lake Mariner campus: lake water, traffic, power and the environment. (154) |
| 404 | Page Not Found — Lake Mariner Data (34) | This page doesn’t exist or has moved. Go back to the Lake Mariner Data home page, or find project news, events and answers to common questions. (143) |

Templates keep their bindings: title `{Name} — Lake Mariner Data`,
description `{Excerpt}` (News) / `{Summary}` (Events). Two things to
decide with the client, since both fields also show on the page:

- **News Excerpt** is the card text, the article lead and the meta
  description. Today 8 of 9 posts have none (empty description) and the
  one real excerpt is 400+ characters (Google cuts it at ~160).
  Recommended: keep one field, ask editors for a 140–160 character
  excerpt on every post (help text on the field says so). Alternative: a
  separate "Meta Description" field, required, bound instead of Excerpt
  (one more field to fill on every post, on five sites).
- **Long post names** (the 200-jobs post: 110 characters with the
  suffix): Google shows ~60. Accept the cut (the suffix goes first), or
  drop the suffix on the News template. Recommended: accept.

## Open Graph

- "Same as SEO" (title and description copied) on every page: already so,
  except `/design/media` (noindex, nothing to share).
- Static pages keep their own hero photo as `og:image` (page-specific,
  already set). Pages without one get the **default share image**:
  `Assets/seo/lake-mariner-og-1200x630.jpg` (1200×630, the Home hero
  under a navy shade with the Lake Mariner Data logo; draft for the
  client). Used on Home (replacing the raw hero crop), FAQ and 404. Per
  campus: the same layout from that campus's hero and logo.
- Templates: Cover Image (News) and Image (Events) through the page head
  code, already published. A post without a cover publishes an empty
  `og:image`; Webflow can't fall back to a default there, so editors add a
  cover to every post that will be shared.
- `twitter:image` is written only on the templates; on static pages X
  falls back to `og:image`, which is enough.

## Steps

1. **Inventory** — done 2026-11-24 (above).
2. **Titles and descriptions** — drafted (above); the client approves →
   Claude writes them through the pages API.
3. **Open Graph** — default share image drafted; the client approves →
   upload it as an asset and set it on Home, FAQ and 404.
4. **Canonical** (Webflow, at launch): Site settings › SEO › Global
   canonical URL = the production domain. Not on staging.
5. **Site-wide head tags** (batch A): `og:site_name`, `og:locale`,
   `twitter:site` in the per-site block at the top of `loader.html`
   piece 1, written to the site head code and published.
6. **Schema** (batch A): Home's Organization + WebSite in the page
   settings' Schema markup (static page: the pages API stores it); the
   News Posts and Events templates' NewsArticle / Event + BreadcrumbList
   in each template's head code with field tokens (`templates.md`; the
   API can't store tokens in a template's Schema markup field,
   `lessons/designer.md`).
7. **Verify:** `pnpm wf:seo` on staging (now with the template items as
   paths, since the staging sitemap is stale), every News and Event page
   checked, not a sample; then Google's Rich Results Test on one page of
   each type (needs the page reachable: paste the HTML, staging is
   `Disallow: /`). At launch, `pnpm wf:seo --live --canonical`.

Batch A (structural, no client copy; needs the project lead's go-ahead):
site head code (step 5), Home schema, the two template head codes
(step 6), `seo.noindexOk` / `seo.noSchemaOk` in
`webflow-build.config.json`, then one publish to webflow.io.

## Schema per page

Files in `docs/seo/schema/lake-mariner/` (one folder per campus; the
other campuses copy it and change the values in "Per-site values").
`@id`s are written on the production domain from the start
(`https://lakemarinerdata.com/`, to confirm: www or apex).

| Page(s) | Types | File | Key data |
| --- | --- | --- | --- |
| Home | `Organization` (the campus, `parentOrganization` TeraWulf), `Organization` (TeraWulf Inc., with `sameAs`), `WebSite` | `home.jsonld` | name, url, logo (the 512px shield icon), email info@lakemarinerdata.com, address (locality only until the street address is confirmed), TeraWulf's LinkedIn, X, Instagram as TeraWulf's `sameAs` (they are TeraWulf's accounts, not the campus's) |
| News Posts template | `NewsArticle`, `BreadcrumbList` (News › post) | `news-post.jsonld`, `templates.md` | headline Name, image Cover Image, datePublished Publish Date, author Author, publisher → the campus Organization |
| Events template | `Event`, `BreadcrumbList` (Events › event) | `event.jsonld`, `templates.md` | name, startDate Start, endDate End, location Place {Location} in Barker NY, image Image, description Summary, organizer → the campus Organization |
| Home, FAQ | `FAQPage` | — | Already generated in the browser by the `faq-schema` module from the FAQs shown. Not duplicated here |
| Project Overview, Community Impact, Cooling, Careers, News, Events, FAQ | none planned | — | content pages with no rich-result type; listed in `seo.noSchemaOk` |
| 404, style guide, media | none | — | `seo.noSchemaOk` |

Not added on purpose: `LocalBusiness` (the campus takes no visitors and
has no opening hours; Organization with an address fits), `Review` /
`AggregateRating`, `JobPosting` (openings live on TeraWulf's portal).

Rules that cost time before:
- Every item points at the one Organization by `@id`
  (`https://lakemarinerdata.com/#organization`), written out with the
  production domain from the start.
- Webflow inserts CMS values into custom code raw: a line break or `"` in
  a bound field breaks the JSON, and an apostrophe comes out as `&#39;`
  (`wf:seo` fails on both). Bind single-line fields only (Name, Author,
  Location, Summary are PlainText), use ’ not `'`, and check every CMS
  page after a schema change, not a sample.
- No `Review` or `AggregateRating` about the business itself (not
  eligible); `FAQPage` only where the content really is a FAQ.
- Known limits of the template schema: an event's `location` is always a
  Place in the campus town, so an online event (the Cayuga webinar sample)
  is marked as in person; a post without Cover Image or Author publishes
  empty values. A per-event "Attendance" option field would fix the
  first, if online events are common.

## Per-site values

What a duplicated campus changes for SEO (also in `CAMPUS-PORT.md`):

| Value | Lake Mariner | Where |
| --- | --- | --- |
| Site name | Lake Mariner Data | `og:site_name` (loader piece 1, per-site block); title suffixes in page settings; template title bindings; `home.jsonld` |
| Production domain | lakemarinerdata.com (to confirm) | every `@id` and `url` in the schema; canonical at launch |
| Town / region | Barker, NY | page descriptions; `home.jsonld` address; `event.jsonld` address |
| Email | info@lakemarinerdata.com | `home.jsonld` |
| Logo / icon | the site's 512px favicon | `home.jsonld` logo |
| Default share image | `Assets/seo/lake-mariner-og-1200x630.jpg` | Home, FAQ, 404 OG image |
| X handle | @terawulfinc (TeraWulf's, shared by all five) | `twitter:site` (shared part of piece 1) |

## Needed from the client

- [ ] Approval of the drafted titles and descriptions (table above).
- [ ] Approval of the default share image.
- [ ] The production domain, www or apex (lakemarinerdata.com assumed).
- [ ] The campus street address and postcode for the schema (and a phone
      number, if one should be public).
- [ ] Excerpts of 140–160 characters on every real news post (or the
      separate Meta Description field), and a cover image on each.
- [ ] Whether online events are common enough for an Attendance field.
