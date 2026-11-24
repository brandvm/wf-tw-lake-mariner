# Campus port: Webflow changes to repeat on each copy

Justified and Muskie were duplicated from Lake Mariner on 2026-11-24
(`CAMPUSES.md`). Every Webflow-side change made on Lake Mariner after
that is listed here, newest last, with how to repeat it on a copy. Repo
changes (`src/`, `dist/`) need no porting: every site loads the same
bundle. Tick a site's column when the change is repeated there.

Lake Hawkeye and Chesapeake were duplicated later on 2026-11-24, after
the five SEO batch A rows below were live, so they already have those
changes, with Lake Mariner's values. On those two, change the values
(campus name, domain, address, assets) rather than adding the code a
second time. Rows added after this note apply to all four copies.

Write to a copy only through its own MCP server, after checking its site
ID (`AGENTS.md` › Project facts).

| Date | Page / component | What changed on Lake Mariner | How to repeat it on a copy | Justified | Muskie | Lake Hawkeye | Chesapeake |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-11-24 | Site settings › Custom code › Head code | SEO block at the top of `loader.html` piece 1: `og:site_name`, `og:locale` `en_US`, `twitter:site` `@terawulfinc` (SEO-PLAN step 5) | Paste piece 1 from `loader.html` into the copy's head code with `og:site_name` set to the campus name (the only per-site line; keep the copy's own `RELEASE`), publish, `pnpm wf:install` against the copy (it reports `og:site_name` as different, expected) | ☐ | ☐ | ☐ | ☐ |
| 2026-11-24 | Home › Page settings › Schema markup | Organization (campus, parent TeraWulf) + Organization (TeraWulf Inc., sameAs) + WebSite, from `docs/seo/schema/lake-mariner/home.jsonld` | Copy the folder to `docs/seo/schema/<campus>/`, change name, domain (every `@id` and `url`), description, email, address and logo URL (the copy's own favicon asset), then write it with `bulk_update_pages_schema_markup` on the copy's Home page and read it back | ☐ | ☐ | ☐ | ☐ |
| 2026-11-24 | News Posts Template › Page settings › Custom code (head) | `og:image` / `twitter:image` from Cover Image (already there) + NewsArticle and BreadcrumbList JSON-LD with field tokens | Change the domain in `<campus>/news-post.jsonld`, run `node docs/seo/schema/build-template-head.mjs <campus> news-post`, write the output with `set_page_freeform_code` (location head) on the copy's News Posts Template, publish, check every post with `pnpm wf:seo` | ☐ | ☐ | ☐ | ☐ |
| 2026-11-24 | Events Template › Page settings › Custom code (head) | `og:image` / `twitter:image` from Image (already there) + Event and BreadcrumbList JSON-LD with field tokens | As above with `event`; also change the address (town, region) in `<campus>/event.jsonld` | ☐ | ☐ | ☐ | ☐ |
| 2026-11-24 | FAQ › Page settings › Open Graph image | was none; now the FAQ hero photo (`faq-hero-faq.webp`) | Set the copy's FAQ OG image to its own FAQ hero asset (`update_page_settings` › `openGraph.imageAssetId`), or the campus default share image once approved | ☐ | ☐ | ☐ | ☐ |

Pending on Lake Mariner (client approval, `SEO-PLAN.md`), to be added here
when done: page titles and descriptions, the default 1200×630 share image
on Home, FAQ and 404.
