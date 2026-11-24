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
| Justified Data | Justified Data (TeraWulf) | `6b05c58e6a2daeafb0769727` | tw-justified.webflow.io | `webflow-tw-justified` | duplicated 2026-11-24, published; still Lake Mariner content |
| Muskie Data | Muskie Data (TeraWulf) | `6b05c5e78050528a5b59dc6a` | tw-muskie.webflow.io | `webflow-tw-muskie` | duplicated 2026-11-24, published; still Lake Mariner content |
| Lake Hawkeye Data | — | — | — | — | not created: the workspace hit its unhosted site limit |
| Chesapeake Data & Energy | — | — | — | — | not created: same limit; its Figma row is still in progress |

Each copy was made with Duplicate site and all three options on (hosting,
SEO, integration settings). It brought every page, component, class,
variable, CMS collection and item, asset, the head and footer code and the
fonts. Checked on both copies after publishing: `/`, `/news` and `/faq`
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
