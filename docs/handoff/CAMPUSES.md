# Campus sites

Five TeraWulf campus sites from one design (Figma `i5kBzV34Xa9qvV7I64FxFZ`,
page "↪ • Template — Clean Pages", one row per campus) and one code repo.
Lake Mariner Data is the master: it was built first and the others are
Webflow duplicates of it.

## Decisions (2026-11-24, user)

- **One shared repo and bundle.** Every site's head and footer code loads
  `https://brandvm.github.io/wf-tw-lake-mariner/` (the loader in
  `loader.html`, copied with the site). A fix or speed gain pushed here
  reaches all five. The repo keeps its name, since renaming it would change
  the bundle URL on every site.
- **A section only one campus has** gets its own module in `src/modules/`
  with its own `data-*` hook. Modules no-op when their markup is absent, so
  the other sites are not affected. Its repo CSS is scoped to that hook.
  Never branch on the hostname.
- **Duplicated now**, before the PageSpeed and SEO work on Lake Mariner
  finished. Webflow-side changes made on Lake Mariner after 2026-11-24 must
  be repeated on each copy: they are listed in `CAMPUS-PORT.md`.

## Sites

| Campus | Webflow name | Site ID | Staging | MCP server | Status |
| --- | --- | --- | --- | --- | --- |
| Lake Mariner Data | Lake Mariner Data (TeraWulf) | `6ae0f7d7bcf5d7622aeac214` | tw-lake-mariner.webflow.io | `webflow-tw-lake-mariner` | built; launch prep |
| Justified Data | Justified Data (TeraWulf) | `6b05c58e6a2daeafb0769727` | tw-justified.webflow.io | `webflow-tw-justified` | Justified content built and published 2026-11-24 (batches 1–5); Cooling page dropped; Build Review row 2 done; open: favicon (MANUAL-TODO EA; EB, EC done), `campuses/justified-DIFF.md` |
| Muskie Data | Muskie Data (TeraWulf) | `6b05c5e78050528a5b59dc6a` | tw-muskie.webflow.io | `webflow-tw-muskie` | Muskie content built and published 2026-11-24 (batches 1–5): SEO and schema, logos, CMS, page copy and photos, Cooling page unpublished; open items in `campuses/muskie-DIFF.md` (MANUAL-TODO FA–FD, fact sheet file) |
| Lake Hawkeye Data | Lake Hawkeye Data (TeraWulf) | `6b05cabde86e14300445c161` | tw-lake-hawkeye.webflow.io | `webflow-tw-lake-hawkeye` | duplicated 2026-11-24 (after SEO batch A), published; still Lake Mariner content |
| Chesapeake Data & Energy | Chesapeake Data & Energy (TeraWulf) | `6b05cb19b2bc6f51aa8e5019` | tw-chesapeake.webflow.io | `webflow-tw-chesapeake` | duplicated 2026-11-24 (after SEO batch A), published; still Lake Mariner content; Figma row still in progress |

Lake Hawkeye and Chesapeake were made later the same day, after slots were freed in the workspace, so they already carry SEO batch A (`CAMPUS-PORT.md`).

Each copy was made with Duplicate site and all three options on (hosting,
SEO, integration settings). It brought every page, component, class,
variable, CMS collection and item, asset, the head and footer code and the
fonts. Checked on every copy after publishing: `/`, `/news` and `/faq`
return 200, load the shared bundle with no script errors, and list the CMS
items.

## Connecting a copy (once per site)

1. `.mcp.json` (workspace and repo) has a server per site, all pointing at
   `https://mcp.webflow.com/mcp`. A new server shows up in a new Claude
   session.
2. Sign in to it once and authorise **only that site**. Before the first
   write, list the sites the server reaches and check the ID matches the
   table above.

## Turning a copy into its campus

Content first, then whatever the campus's Figma row changes:

1. **Site and SEO:** page titles and descriptions, the Open Graph image,
   and the per-site head-code values the SEO plan defines.
2. **Global components:** nav and footer logos, campus name, footer text
   ("<Campus> — a TeraWulf campus"), the announcement bar.
3. **CMS:** replace Lake Mariner's items (News, Events, Documents, FAQs,
   Testimonials) with the campus's, or empty them.
4. **Page content:** hero props, statements, facts, photos, the Explore
   cards. These are component props or page text.
5. **Section differences:** compare the campus's Figma row with Lake
   Mariner's, page by page. Keep the shared component where only content
   differs. Build what is new as campus-only components or modules.
6. **Pages the campus doesn't have**, such as Closed-Loop Cooling where the
   campus isn't water-cooled: unpublish them and remove their nav and
   footer links.

## Compare page in Figma (Build Review)

Figma page "↪ • Build Review — Staging vs Design" (`2556:2`) holds **one
horizontal row per site**. Pages run left to right in page order, and each
page's column lines up across rows. When a page is finished on a site, add
its section to that site's row, built the same way as Lake Mariner's
sections.

| Row | Site | Row top (y) | Row label node |
| --- | --- | --- | --- |
| 1 | Lake Mariner Data | 0 | `2560:3` |
| 2 | Justified Data | 13000 | `2789:2009` |
| 3 | Muskie Data | 26000 | `2789:2010` |
| 4 | Lake Hawkeye Data | 39000 | `2789:2011` |
| 5 | Chesapeake Data & Energy | 52000 | `2789:2012` |

Columns (section x, the same in every row; each section is 5410 wide with
a 400 gap): 01 Home 0 · 02 Project Overview 5810 · 03 Community Impact 11620 ·
04 Closed-Loop Cooling 17430 · 05 Careers 23240 · 06 News 29050 ·
07 News Article 34860 · 08 Events 40670 · 09 Event 46480 · 10 FAQ 52290.
A page a campus doesn't have leaves its column empty. A page only that
campus has goes after FAQ, at x 58100, then 63910 and so on.

**One section per page** (copy Lake Mariner's, e.g. `2691:3923` for FAQ,
and replace its contents):
- section name `NN Page — /path`;
- inside: the page title (x 120, y 60) and a staging URL line with the
  build date (y 190);
- at y 360: "Design (Figma, Clean Pages) · 1680", a copy of the campus's
  own Clean Pages frame for that page (x 120);
- staging screenshots at 1680 (x 2000), 820 (x 3880) and 390 (x 4900),
  each with its label at y 310;
- mismatch markers over the design copy, as on Lake Mariner's sections:
  red while something differs, ✓ green with a one-line note once it
  matches.

If a section is taller than 12,400 it runs into the next row: move the rows
below it down, and update the table above.
