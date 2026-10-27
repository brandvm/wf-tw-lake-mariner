# Lake Mariner Data — design handoff → Webflow build

The brief every build session starts from. Written when the design is
approved (by the designer, or at the end of the prototype phase) and kept
current during the build. Agents read it after `AGENTS.md` and `GOTCHAS.md`.

## Read first

1. `AGENTS.md`, `GOTCHAS.md`, and the skill's `conventions.md`.
2. This file, then `MANUAL-TODO.md` and `BUILD-NOTES.md` in this folder;
   after the build handoff, `REVIEW.md` (feedback rounds until launch) and
   `SEO-PLAN.md`.
3. The approved design: <prototype folder and its URL, Figma file, or both>.

## Status

2026-10-27 — Loader installed on staging. Clean design reference made in Figma (page "↪ • Template — Clean Pages", node 2523:111): 9 desktop (1680) pages. Webflow build not started; waiting on tablet/mobile direction and the build approach.

## Ground rules for this project

- <Who gives the go-ahead for Webflow writes, and how.>
- <Anything that differs from conventions.md, agreed with the designer.>
- <Which repo or folders are read-only, if any.>

## Pages

| URL | Design source | Webflow page | Notes |
| --- | --- | --- | --- |
| `/` | <prototype file or Figma frame> | Home | |
| `/<page>` | | | |
| `/<collection>/<item>` | | <Collection> template | CMS template |
| `/design/style-guide` | | Style guide (folder `design`) | first page built; excluded from search |
| `/design/media` | | Media (folder `design`) | only when a page plays a video; excluded from search |

Breakpoints: 991 (tablet), 767 (mobile landscape), 479 (mobile). Checked at
<widths>.

## Variables and classes

- Variable changes, as old → new, grouped for approval: <file or list>.
- New classes, with what each is for: <CLASSES.md or list>.
- Approval state: <approved / pending, by whom, when>.

## CMS

| Collection | Fields | Used on |
| --- | --- | --- |
| <Name> | <field (type)…> | <pages, lists, limits and sort> |

## Components to make

| Component | Used on | Props | Behaviour inside |
| --- | --- | --- | --- |
| Nav | every page | — | <modules> |
| Footer | every page | — | — |
| <Name> | | | |

## Modules

| Module | `data-*` hooks | What it does |
| --- | --- | --- |
| <name> | `data-…` | |

## Decisions

- 2026-10-27 · Nav: option "2V (with Part of TeraWulf logo clickable)" (Figma 2292:6818). The "Part of TeraWulf" logo links to terawulf.com. Every page already used its layout; the clean pages now carry its "Part of" label instead of "Site of".
- 2026-10-27 · No FAQ or Contact page on the campus site. FAQ links (Home "All questions", footer "FAQ") and Contact links (nav "Contact Us", footer "Contact") go to the matching pages on terawulf.com.
- 2026-10-27 · Build from the Figma page "↪ • Template — Clean Pages" (2523:111), not the working Template page.

## Open decisions

| Item | Now | Options |
| --- | --- | --- |
| | | |

## Stand-in assets and placeholders

- Home FAQ section intro is lorem ipsum: keep it as a placeholder for now (owner: client copy).
- terawulf.com FAQ and Contact page URLs: to confirm before wiring the links.
