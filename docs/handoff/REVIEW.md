# Review phase

Started when the build handoff is done (the webflow-build skill's
`checklists.md` › Build handoff): every page is built and checked, and from
here work is driven by review feedback until launch (the `webflow-launch`
skill). Agents read this file after `HANDOFF.md` once it has a status line.

## Status

2026-11-12 — round 1 feedback received (client PDF "Terawulf - Lake Mariner"). Staging:
`https://tw-lake-mariner.webflow.io`. Waiting on: Designer steps DI/DK (event dates), FAQ page content.

## What is built

One row per page or template, so a reviewer knows what to look at and what
is a known gap.

| Page | URL | Notes |
| --- | --- | --- |
| Home | `/` | <sections, behaviour worth trying (hover, scroll, video)> |
| <Page> | `/<page>` | |
| <Collection> template | `/<collection>/<slug>` | CMS-bound; <which fields drive what> |
| Legal | `/privacy`, `/terms` | <placeholder copy? noindex until it is in> |
| 404 | `/404` | |
| Style guide, media | `/design/style-guide`, `/design/media` | noindex; never linked |

SEO: <titles, descriptions and share images set where; JSON-LD on which
pages (`SEO-PLAN.md`)>.

## How review works

- Feedback comes in rounds. Each round: Claude lists every item in the
  reviewer's own words, fixes them (Designer first; repo CSS only with a
  `repo-css:` tag), publishes to staging, checks at the three widths and
  asks before every commit.
- Anything the API can't do goes in `MANUAL-TODO.md`. Next letter: **DU**.
  Update it here each time one is used.
- Every surprise goes in `GOTCHAS.md`.
- Staging changes on every push. When reviewers need a build that doesn't
  move under them, cut a tag and set `RELEASE` (README › Release).
- A change that alters the approved design goes in `BUILD-NOTES.md` ›
  Changes log, with who approved it.

## Round 1 (2026-11-12, client via Brand Vision)

| # | Item | Where | Status |
| --- | --- | --- | --- |
| 1 | "events page: theres a bug with the dates" | Events › Event Cards, Events template › Detail Bar: every bound date publishes as `MMMM D, YYYY` and the lists are unsorted | waiting on a person: MANUAL-TODO DI (date formats), DK (sorts) |
| 2 | "remove these" (the grey lines above Past events) | the `data-manual-todo` captions: Events (DI, DJ, DK), Events template (DI, DL), and the same kind on /news (CY CZ) and the News template (CY CZ DA DB) | done, on staging 2026-11-12 (the rows stay open in MANUAL-TODO) |
| 3 | "remove body" (Follow band) | C \| Follow Band › Text paragraph and its Text prop removed | done, on staging 2026-11-12 |
| 4 | "add instagram" | C \| Follow Band › new Instagram button + prop (default instagram.com/terawulf); G \| Footer W › Instagram button. Also filled LinkedIn and X with TeraWulf's accounts (were `#`); Facebook stays `#` (TeraWulf has none) | done, on staging 2026-11-12; Facebook URL or removal to decide |
| 5 | "link contact button to main terawulf.com contact form" | G \| Nav W › Contact Us (C \| Button Link prop), G \| Footer W › Contact → `https://www.terawulf.com/connect` | done, on staging 2026-11-12 |
| 6 | "faq page needed" | new page `/faq` (reverses the 2026-10-27 "no FAQ page" decision) | waiting on content: which questions and answers |
| 7 | "make simple like the main site" | Careers › Your Benefits (C \| Benefit Grid): terawulf.com/careers shows four static items, photo + title + line, no timer | to propose |
| 8 | "remove the bubbles on all images here - homepage" | C \| Explore Rail: the 13 Tags removed; the empty Tag Cloud wrappers stay as the cards' flex spacer (Home and Project Overview share it) | done, on staging 2026-11-12 |

<!-- Copy the table for each round; follow-ups from the same reviewer go
under their round as "Round N follow-ups". -->

## Open design decisions

| Item | Now | Options |
| --- | --- | --- |
| | | |

## Before launch

What has to happen between the last round and the `webflow-launch`
skill's Pre-launch QA. Each item has an owner.

- [ ] Client content still missing: <images, copy, legal pages>; every
      placeholder is in `BUILD-NOTES.md` › Known issues.
- [ ] Every `MANUAL-TODO.md` row done, and no `data-manual-todo` note left
      on the style guide page.
- [ ] Noindex off the pages that only had it while their copy was missing.
- [ ] Site plan bought (sitemap and search settings need it).
- [ ] SEO plan done (`SEO-PLAN.md`): titles, descriptions, share images,
      JSON-LD; `pnpm wf:seo` clean.
- [ ] `pnpm wf:overflow` clean on every page template.
- [ ] Custom domain attached; a release tagged from a commit whose CI
      passed and set as `RELEASE` before the domain goes live.
- [ ] Final pass on the release build: `wf:pass`, `wf:anchors`,
      `wf:outline`, `wf:transitions`, `wf:film` at the three widths.
