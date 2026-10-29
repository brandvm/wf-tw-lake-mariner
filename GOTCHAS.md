# Gotchas

A running log of things that cost time on this project. Agents read it at
the start of every session and add to it when they hit something new (see
the Session protocol in `AGENTS.md`). Never delete an entry — update its
`Status` instead.

Lessons from earlier builds are in the skill, not here:
`.claude/skills/webflow-build/lessons/` (one file per area). Read the file
for the area you work in. Entries tagged `Scope: template-candidate` are
collected from client repos into those files.

## Entry format

```md
### YYYY-MM-DD · Short title
- Area: designer | css | loader | release | mcp | ci | js | perf
- Scope: project | template-candidate
- Symptom: what was observed
- Cause: why it happened
- Fix: what was done, or the workaround
- Status: open | fixed <sha> | upstreamed wf-template <sha>
- Found by: claude | codex | human
```

## This project

<!-- Add new entries here, newest first. -->

### 2026-10-27 · Prototype mobile values lost to the Body tag's breakpoint modes
- Area: css
- Scope: template-candidate
- Symptom: below 992px the prototype showed the starter's fonts and sizes although proposed.css overrode the role variables at each breakpoint.
- Cause: the starter applies breakpoint variable modes on the Body tag style, so webflow.css sets the role and layout variables on `body` inside each @media block; a proposal on `:root` is overridden for everything inside body.
- Fix: write breakpoint proposals on `:root, body` (prototype/src/css/proposed.css says so). The proposed.css template comment should say this.
- Status: open
- Found by: claude

### 2026-10-27 · Prototype starter has no fluid scaling
- Area: css
- Scope: template-candidate
- Symptom: at 1440 the prototype rendered at 16px = 1em while staging renders at 13.7px (the repo's §01 scaling), so prototype and staging would never match at the check width.
- Cause: the prototype doesn't load the repo's src/styles.css, and prototype.css has no copy of §01.
- Fix: a stand-in of §01 in prototype/src/css/prototype.css with the same ideal/min/max.
- Status: open
- Found by: claude

### 2026-10-27 · check:drift reports padding shorthands as drift
- Area: css
- Scope: template-candidate
- Symptom: 12 "values that differ" on an untouched starter site (G | Footer W, Skip Link, Chip padding).
- Cause: Webflow publishes `padding: var(a) var(b)` with no spaces between the var() calls; the parser reads the whole shorthand as each side's value.
- Fix: none yet; the findings are false positives. Split shorthands on `)var(` in scripts/check-drift.mjs. Seen again 2026-10-28 with a number after the variable (`.tag`: `var(--_spacing---8).625em`): split after every closing `)` at depth 0, not only before `var(`.
- Status: open
- Found by: claude

### 2026-10-27 · check:states reports a pressed state missing after a control removes itself
- Area: js
- Scope: template-candidate
- Symptom: "a.button: no pressed state" on the style guide, although every a.button has an :active rule.
- Cause: the check reloads the page per control and finds it by index; the announcement's close button remembers dismissal in localStorage, so after it is clicked the bar is gone and every later index points at another element.
- Fix: none in the script yet (clear storage before each load, or find controls by a stable key). Verified by hand that every a.button has :active. Seen again on /closed-loop-cooling (button.hover-card), /careers (button.quote-button) and /news (a.button, button.button), each pressed as another element after the shift; their :active rules are in place. It now costs a debug run on every page: worth fixing in the template's check-states.mjs.
- Status: open
- Found by: claude

### 2026-10-28 · Anchor to a pinned section lands a screen short
- Area: js
- Scope: template-candidate
- Symptom: arriving at /project-overview#highlights left the Highlights section 924px below the top of the screen.
- Cause: anchor-scroll counts every sticky element whose parent contains the target as a bar covering it. The section's own sticky pin frame (inside the target, so its parent is the target) was counted as a 900px bar.
- Fix: in pinnedBottom, skip a sticky element the target contains (`target.contains(el)`). Done in prototype/src/modules/anchor-scroll.ts; the recipe in the template (recipes/anchor-scroll) needs the same line.
- Status: fixed in this project's prototype; not upstreamed
- Found by: claude

### 2026-10-28 · Design colours that fail WCAG AA contrast
- Area: css
- Scope: project
- Symptom: axe flagged small text in Storm (#5C7592) on Frost (#EBF0F5), 4.15:1, and labels at 40% opacity (2.4:1).
- Cause: the Figma uses Storm and low-opacity labels for secondary text at 13–14px, below AA's 4.5:1.
- Fix: post topics and the Community Impact accordion text use Steel (6.7:1); the breadcrumb's current item drops its extra 60% opacity; stat labels 64%, fact labels 75%; the mobile fact bar is solid Steel. Listed in HANDOFF Decisions for the designer.
- Status: fixed in the prototype
- Found by: claude

### 2026-10-28 · wf:styles splits CSS comments on semicolons
- Area: css
- Scope: template-candidate
- Symptom: the styles plan listed rules like "items past the page size and filtered-out items are hidden. .clear-all { visibility: hidden; }" — comment text glued onto a selector.
- Cause: styles.mjs splits declarations on `;` before it strips comments, so a `;` inside a `/* repo-css: … */` comment ends a "declaration" and the rest of the comment becomes part of the next selector.
- Fix: no semicolons in CSS comments (22 comments reworded in prototype/src/css/new-classes.css). The script should strip comments first.
- Status: worked around; not upstreamed
- Found by: claude

### 2026-10-28 · Component prop bindings: what binds where
- Area: mcp
- Scope: template-candidate
- Symptom: building C | Page Hero, C | Statement and C | Fact Bar: (1) binding an attribute *name* to a prop failed on a Link ("name bindings are not supported on this element yet") and on a Block root; (2) `text` was "not applicable" on the text Spans the importer makes from `<span>`; (3) `image` was not a setting key on an Image; (4) an image prop has no default, so the instance showed no photo; (5) the Fact Bar specimen (position absolute) rendered at the bottom of the style guide page.
- Cause: name bindings exist only on DOM elements; importer Spans have no text setting; the Image's key is `assetId`; image props take no default group; Sg Demo is not a positioned box.
- Fix: (1) the hero button rebuilt as a DOM `a` (style Button), href bound to a text prop, the hook name bound to a text prop (Button Hook, `data-video-open` on Cooling); a Block keeps static attribute names, values bind fine (data-count, data-state); 2026-10-29: attribute values also bind on a Link (C | Video Frame's data-video-src and data-video-title). Replacing a Link's attribute list drops its imported href attribute: set the link with `set_settings` key `link` afterwards. (2) a DOM `span` has a bindable `text`: two DOM spans (the second styled Text Muted) for the two-tone statement. (3) `set_settings` key `assetId` with a prop binding. (4) set the instance's image prop with `type: "string"` and the asset id. (5) the specimen sits in a Media Frame (position relative) over a photo.
- Status: worked around
- Found by: claude

### 2026-10-28 · A 40-action element batch times out half-applied; a new Rich Text arrives full of sample content
- Area: mcp
- Scope: template-candidate
- Symptom: rebuilding 8 importer Links as DOM buttons in one `data_element_tool` call (41 set_attributes/move/remove actions) returned "The operation timed out"; reading back showed the first 25 actions applied and the rest not. Separately, every `RichText` made with the element builder came with Webflow's sample content (Heading 1–6, lists, a block quote).
- Cause: the call has a time limit and applies actions in order without rolling back. The builder's Rich Text is the Designer's default element.
- Fix: keep element batches to about 20 actions and read back after a timeout before retrying the rest (the remaining moves and removals were sent again). Bind the Rich Text to a rich-text prop at once (the prop's text replaces the sample), or remove the sample children.
- Status: worked around
- Found by: claude

### 2026-10-27 · pnpm classes crashes on .w--current
- Area: css
- Scope: template-candidate
- Symptom: gen-class-list.mjs threw "Cannot read properties of undefined (reading 'toUpperCase')".
- Cause: a rule for the Current state (`.nav-link.w--current`) splits into an empty word.
- Fix: skip `.w-` selectors in prototype/scripts/gen-class-list.mjs (they are Webflow states, not classes to create).
- Status: fixed in this project's prototype; not upstreamed
- Found by: claude


### 2026-10-28 · A breakpoint mode without its own value follows Base
- Area: mcp
- Scope: template-candidate
- Symptom: after Typography Role Size/Label and Size/Button were changed in Base only, staging published 14px at every breakpoint too, while the prototype snapshot still listed the starter's per-mode values (12 and 16); check:drift reported 6 differences.
- Cause: a mode that was never given its own value resolves to the Base value, and `get_variables` with all modes returns that resolved value, so a snapshot written per mode looks like an override that isn't one.
- Fix: write the snapshot from a fresh `get_variables` read (all modes) after each batch instead of patching only the changed modes; check:drift confirms it.
- Status: worked around
- Found by: claude

### 2026-10-28 · wf:styles splits a shorthand with calc() on its spaces
- Area: css
- Scope: template-candidate
- Symptom: the styles plan gave Nav Menu at Tablet `padding-right: +` and `padding-bottom: 3.5em)` for `padding: calc(var(--nav-height) + 3.5em) var(--nav-padding-h) 2em`.
- Cause: styles.mjs splits shorthand values on whitespace without keeping parentheses together.
- Fix: values set by hand for this one rule (top is MANUAL-TODO B; right/left Nav/Padding H, bottom 2em). styles.mjs should tokenise shorthands with bracket depth.
- Status: worked around; not upstreamed
- Found by: claude

### 2026-10-28 · Borders with a variable work as longhands; the importer's Current state is unbound
- Area: mcp
- Scope: template-candidate
- Symptom: wf:styles listed every `border: 1px solid ⟨variable⟩` as a manual step (MANUAL-TODO A, C, D, H, I and five more). Separately, Nav Link's Current state could only be written by importing a temporary element, and the class came back named `nav-link` with `color: var(--…)` typed in, not bound.
- Cause: the API keeps only the first variable of a shorthand value, but `border-<side>-width/style/color` with `variable_as_value` on the colour is four plain bindings; Webflow then publishes them merged as `border: 1px solid var(…)`. The WHTML importer names a new class after its selector slug and doesn't map `var()` to a variable.
- Fix: borders written as per-side longhands (confirmed on .button-color and the C1 nav classes; A, C, D ticked). Nav Link: imported, temporary element removed, class renamed to "Nav Link" (selector unchanged), Current colour left as typed `var()` with MANUAL-TODO AE to bind it. styles.mjs should emit border longhands instead of a by-hand row.
- Status: worked around; not upstreamed
- Found by: claude

### 2026-10-28 · Prototype modules fail the repo's type check on `hidden`
- Area: js
- Scope: template-candidate
- Symptom: `pnpm check` failed on a module copied unchanged from the prototype: `open(list.hidden)` → "Argument of type 'string | boolean' is not assignable to parameter of type 'boolean'".
- Cause: the repo pins TypeScript 7, whose DOM types give `HTMLElement.hidden` the type `boolean | "until-found"`; the prototype starter uses TypeScript 5, where it is `boolean`. So "modules move into the repo unchanged" breaks on any code that passes `hidden` on as a boolean.
- Fix: `open(list.hidden !== false)` in custom-select.ts, in both copies. The prototype starter should pin the same TypeScript as the repo, so the prototype's own `pnpm check` catches it.
- Status: worked around; not upstreamed
- Found by: claude

### 2026-10-28 · CMS image fields copy the image even when it is already a site asset
- Area: mcp
- Scope: template-candidate
- Symptom: images uploaded as site assets (create_asset + presigned S3 POST) and then set on CMS Image fields by their hosted URL and fileId came back with a new fileId and URL under the CMS's own asset path, re-encoded as .jpeg; rich-text `<img>` sources were rewritten the same way.
- Cause: Webflow re-hosts every CMS image from the URL it is given; the asset library and CMS images are separate stores.
- Fix: none needed, but uploading to the asset library first only serves as a public URL source: for CMS-only images, pass any public URL straight to the item. The 15 site assets uploaded for the sample items are duplicates (they can go at the unused-assets cleanup).
- Status: worked around
- Found by: claude

### 2026-10-28 · A new font from the fonts API also publishes from the second host
- Area: mcp
- Scope: template-candidate
- Symptom: `create_font` for Space Grotesk returned a `hostedUrl` on cdn.prod.website-files.com, but the published CSS loads it (and the starter's Geist) from webflow-files-prod.global.ssl.fastly.net.
- Cause: the font API stores files there, for new fonts as for replaced ones (lessons/mcp.md "Replacing a font through the API moves it to another host"); the `hostedUrl` in the API result is not the URL that publishes.
- Fix: a `preconnect` (crossorigin) to the fastly host in loader piece 1, written to the site head code and published. Check font URLs in the published CSS, not in the API result.
- Status: worked around
- Found by: claude

### 2026-10-28 · Style variable ids need their `variable-` prefix
- Area: mcp
- Scope: template-candidate
- Symptom: `create_style` with `variable_as_value` failed with "An internal error occurred" for every action in the batch.
- Cause: the ids were taken without the `variable-` prefix that `query_variables` returns; the style tool needs the full id and gives no useful error.
- Fix: pass ids exactly as `query_variables` returns them (`variable-<uuid>`).
- Status: worked around
- Found by: claude

### 2026-10-28 · The WHTML importer drops a plain space between two inline elements
- Area: mcp
- Scope: template-candidate
- Symptom: `<span>Text / Secondary.</span> <a>A link</a>` published as "Secondary.A link." on the style guide's Themes rows.
- Cause: the importer treats a whitespace-only text node between two inline elements as formatting and removes it (the same family as the trimmed space before `<br>`).
- Fix: `&nbsp;` between the elements before importing (re-imported the Themes section).
- Status: worked around
- Found by: claude

### 2026-10-28 · The style guide page already holds the starter's page, out of sight
- Area: mcp
- Scope: template-candidate
- Symptom: `get_all_elements` on /design/style-guide showed G | Page W with an empty G | Main slot, which looked like an empty page; `query_elements` found the starter's whole style guide (about 1,000 elements) in it.
- Cause: the page tree read doesn't descend into slot content (lessons/mcp.md "Filled slots read back empty"); scoped queries (`scope_element_id`) inside the slot return nothing either.
- Fix: replace the starter's sections one by one: import the new section `before` the old one (a plain element in the slot is a valid anchor), remove the old one, re-point its sidebar link (`set_link`, linkType element). Keep the starter's instance-based Buttons, Forms and Components rows. Compare the published page's class lists before removing anything (here only Sg Preview and Sg Preview Screen were unique to the old Other classes and got tiles).
- Status: done for sections 1–6 and 10
- Found by: claude

### 2026-10-28 · WHTML importer: images, icon classes and variant classes
- Area: mcp
- Scope: template-candidate
- Symptom: style guide component previews (29 rows, 43 images, 36 icons). (1) Every `<img>` came in without its asset ("not found in the asset library") whether `src` was the prototype path, the asset's hosted URL or its file name; alt text was kept. (2) `<i class="icon-glyph ph ph-arrow-left">` made the importer create empty combo classes `ph` and `ph-arrow-left` on Icon Glyph. (3) A `w-variant-…` token (a component variant, copied from published HTML) would be created the same way; so would repo-CSS-only classes (`sr-only`, `accordion-icon-plus`).
- Cause: the importer matches images against the asset library by something other than URL or name, and turns every unknown class token into a new class.
- Fix: (1) `set_image_asset` on each image after the import; they come back from `query_elements` (type Image) in document order. `width`/`height` can't be set on an Image (internal error); Webflow takes them from the asset. (2) Import icons as `class="icon-glyph"` only, then `set_attributes` `class="icon-glyph ph ph-<name>"` on the DOM `<i>`: it publishes merged as `icon-glyph icon-glyph ph ph-<name>` and the glyph draws. The stray combos were removed (`remove_style`, deepest first). (3) Strip `w-variant-*` and repo-only tokens before importing; check every token against the site's classes first. A global class placed second (`accordion-body rich-text`) becomes an empty combo; that is how Webflow stacks classes and is harmless.
- Status: worked around
- Found by: claude

### 2026-10-28 · Prototype List Toolbar specimen is cut off inside its form
- Area: css
- Scope: project
- Symptom: the regenerated style guide's List Toolbar row had an unclosed `<form>` and no Clear All button.
- Cause: the `sg:end` marker on prototype/news/index.html sits before the end of the toolbar form, so the specimen stops mid-form; the browser closes it silently.
- Fix: closed by hand for the Webflow import. The marker should move after `</form>` in the prototype.
- Status: open
- Found by: claude

### 2026-10-28 · Ported `@media` one-liners lost their braces
- Area: css
- Scope: project
- Symptom: on staging at 390px the mobile menu stayed `display: none` although the nav module set `data-state="open"`.
- Cause: three repo-CSS rules copied from the styles plan as `@media (max-width: 991px) .g-nav-w[data-state="open"] .nav-menu { display: flex; }`, without braces around the rule; browsers drop the whole at-rule. Also hit: the article blockquote padding and the open accordion trigger padding below 768px.
- Fix: wrapped the three rules (`@media (…) { rule }`) in src/styles.css; checked with a grep for `@media` lines whose selector isn't inside braces. styles.mjs should emit the braces when it flattens a media block.
- Status: fixed dfb90cc
- Found by: claude

### 2026-10-28 · Component variant styles do work through the API
- Area: mcp
- Scope: template-candidate
- Symptom: MANUAL-TODO AC said a style on a component variant needs the Designer ("the style API has no variant scope").
- Cause: the style tool has no variant scope, but the component variants tool does: `set_variant_styles` with `variant_id`, `style_name` and optional `pseudo` (hover), with variable bindings.
- Fix: Button Size › Small styles and the new Button Color variants Light and Frost (hover included) were set that way and read back with `get_variant_styles`. Works when the variant's element has a single class (lessons/mcp.md "Variant overrides on a combo element never apply").
- Status: worked around
- Found by: claude

### 2026-10-29 · Collection List filter and sort writes refused at body level too
- Area: mcp
- Scope: template-candidate
- Symptom: on Project Overview, `filters` (switch `isOn`, option `equals`, alone or together) and then `sort` on two fresh Documents Collection Lists, built at body level as `lessons/mcp.md` advises, failed with "[Conflict] The operation could not be applied to the component map". `source`, classes, attributes, the item's component instance and its CMS prop bindings all took.
- Cause: unknown Webflow-side. Update the same day, after the Home finding ("A Switch filter on a Collection List breaks the list"): on two new lists, source then sort by Order (one call each, in sequence) took; an Option filter (`group` `equals` the option id) alone then failed the same way, so it isn't only the Switch: on this site no filter write takes. A failed filter also blocks later query writes on that list.
- Fix: new lists with source and sort first; the filters stay a Designer step (MANUAL-TODO BA, AP, BK); mark the unfiltered list on the page with a `data-manual-todo` caption. The bound item instance can be moved from a stuck list into the new one (bindings kept), then the stuck list removed.
- Status: worked around (sort through the API, filters by hand) Update 2026-10-29 (later): on the Project Overview lists and the Home FAQ list the Option and Switch filters now take through `set_settings` and publish; see "List filters take on some lists and not on others".
- Found by: claude

### 2026-10-29 · A Switch filter on a Collection List breaks the list
- Area: mcp
- Scope: template-candidate
- Symptom: the Home FAQ list's filter "Show on Home is On" failed with "[Conflict] The operation could not be applied to the component map", through the API (`filters` with `isOn`) and in the Designer alike. After the failed write the same list refused its sort too, which looked like "this list refuses every query write".
- Cause: unknown Webflow-side; isolated with test lists on Home: source + sort by name or by the Number field Order work on FAQs and Testimonials; the `isOn` filter on the Switch field is the write that fails (`equals` is rejected as invalid for a Switch).
- Fix: rebuild the list and write source, sort, limit first; leave the Switch filter out (Home shows the first 4 FAQs by Order; MANUAL-TODO AP keeps the filter for when Webflow accepts it). Try the filter last on any list, so a failure can't block the rest; never send query writes to one list in parallel.
- Status: worked around; update 2026-10-29: the `isOn` filter took on the rebuilt Home list later the same day (MANUAL-TODO AP), so the conflict is intermittent, not permanent: retry it last, alone, with the page open in the Designer Update 2026-10-29 (later): on the Project Overview lists and the Home FAQ list the Option and Switch filters now take through `set_settings` and publish; see "List filters take on some lists and not on others".
- Found by: claude

### 2026-10-29 · A page made with `duplicateOf` brings the source page's slot content, out of sight
- Area: mcp
- Scope: template-candidate
- Symptom: Community Impact, created as a duplicate of the Media page for its shell, published with a second H1 ("Media") and the Media page's instructions inside `main`, although `get_all_elements` showed G | Main empty.
- Cause: the duplicate copies the slot content too; the page tree read doesn't descend into slots (`lessons/mcp.md`, Filled slots read back empty).
- Fix: find it with `query_elements` (style filter) and remove it. Useful on purpose: that copied plain element is the anchor `lessons/mcp.md` asks for, so the page was built in a body-level wrapper, the wrapper moved `before` it into the slot, the sections moved out `before` the wrapper, and wrapper and copy removed. No person had to drag anything.
- Status: worked around
- Found by: claude

### 2026-10-29 · Imported Images refuse attributes; Collection List queries refused on Community Impact
- Area: mcp
- Scope: template-candidate
- Symptom: on Community Impact, `set_attributes` (`data-accordion-image`, `data-parallax`, `loading`) on 7 imported Images, sent after `set_image_asset` in one batch, reported success and stored nothing; retried alone, they failed with "[Conflict] The operation could not be applied to the component map". The same write on a div on that page worked. Every `filters` and `sort` write on its two Documents lists failed the same way (Home row AP hit the same). The Designer had Home open the whole time (another session was working there).
- Cause: unconfirmed; writes that touch images or CMS queries seem to need the page open in the Designer. The API does check the value shapes before refusing: a Switch filter is `{"fieldSlug": "<slug>", "operator": "isOn"}` (or `isOff`), an Option filter `{"fieldSlug", "operator": "equals", "value": "<option id>"}`, a sort `{"fieldSlug", "direction": "ascending"}`.
- Fix: MANUAL-TODO BK (filters, sort) and BL (image attributes), to retry through the API with the page open in the Designer first. Read image attributes back after every write; "success" is not proof. Update: on fresh lists rebuilt at body level (after the Switch-filter entry above), `source` and `sort` took, but an Option filter (`group` equals) reported "applied" and read back `[]` on one list and was refused on the other, and `curatedItemIds` was refused after `queryMode` curated took. So it isn't only the Switch filter: on this page no item-level query write sticks. Update 2: with the Designer open on the page it was no better. Even `sort` (by Order, then by name) was refused on a brand-new list, after the two broken lists were deleted. The image writes failed because the Images came from the WHTML importer: Images made with `data_element_builder` (type Image, `set_image_asset`, then `set_attributes`) took `data-accordion-image`, `data-parallax` and `loading` at once. Fix for images: build them, don't import them. Update 3 (16:30): on a brand-new blank draft page (ZZ List Test), `sort` was refused on fresh lists of Documents (by Order) and of FAQs (by name, which took on Home in the morning), before and after a Designer reload; the person's filter in the Designer was refused too. So by the afternoon every Collection List query write was refused site-wide, not per page or per collection.
- Status: open
- Found by: claude

### 2026-10-29 · A list inside a component's rich-text prop can't get text through the API
- Area: mcp
- Scope: template-candidate
- Symptom: the Cooling "Key Benefits" answer (C | Accordion Item › Answer, rich text) needed a bulleted list. `data_whtml_builder` into the prop (parent = instance + `prop`) failed ("Failed to create element from WHTML"). `data_element_builder` with `BY_CUSTOM_TAG` `ul` and the instance + `prop` as parent did create a List, but it came with three default items, and `li` children took no `set_text` (published as empty `<li>`); `set_text` on an item with the prop id answered "Element not found"; `query_elements` can't see inside the prop at all.
- Cause: text inside a rich-text prop is reachable only as the whole prop value (`rich_text_inner_text`, plain paragraphs and line breaks).
- Fix: set the paragraphs with `rich_text_inner_text` (blank line between items), then a person selects them in the Designer and clicks the bulleted-list button (done 2026-10-29, published as `<ul role="list">` with 6 items). Setting the prop value again also clears a half-built list.
- Status: worked around
- Found by: claude

### 2026-10-29 · The canvas draws a grid with no columns at half width
- Area: designer
- Scope: template-candidate
- Symptom: on the Cooling canvas the open accordion answer filled only the left half of the Accordion Item; on the published page it is full width (656 of 658px at 1440).
- Cause: `.accordion-panel` is `display: grid` with only `grid-template-rows` set (the 0fr → 1fr open animation). The published CSS has no columns, so the browser makes one; the Designer shows Webflow's default two-column grid for it.
- Fix: `.accordion-panel` got `grid-template-columns: 1fr` with the user's OK (2026-10-29); published CSS reads it back and the live answer is unchanged (656 of 658px). Any class ported from the prototype as a grid without columns does the same: set its columns.
- Status: fixed (Webflow, 2026-10-29)
- Found by: claude

### 2026-10-29 · An intro loader that fades the hero in costs the LCP
- Area: perf
- Scope: template-candidate
- Symptom: Home scored 80 on mobile PageSpeed (desktop 96): LCP 4.0 s, of which 3 s "render delay"; the LCP element was the hero H1.
- Cause: Lighthouse always loads as a first visit, so it always sees the intro loader, and the intro set the hero parts to `opacity: 0` under it. An element at opacity 0 isn't an LCP candidate, so LCP waited for the curtain to lift; a covered but painted element does count.
- Fix: the hero parts only move (`y`), never fade, under the loader (src/modules/intro.ts, d1097d7). Mobile 93 (LCP 2.7 s), desktop 95; the reveal looks the same because the curtain covers the start. What is left of LCP is the render-blocking bundle stylesheet and the web-font swap.
- Status: fixed d1097d7
- Found by: claude

### 2026-10-29 · calc() values with variables: a computed variable with a value per mode
- Area: mcp
- Scope: template-candidate
- Symptom: 17 MANUAL-TODO rows (B, E, F, J, K–Q, S, V, X, Y, Z, AD) were class values like `calc(Section/Padding H * -1)` or `calc(Nav/Height + 3.5em)`, which the style API collapses to the first variable.
- Cause: the style API keeps one variable per value. The variable tool now lists `custom_value` (MCP 2.2.0), but `create_size_variable` and `update_size_variable` with `custom_value` both fail with "An internal error occurred", even for `calc(100vh - 60px)` without any variable.
- Fix: one Size variable per calc in the same collection as its inputs (Layout), with static values: Base plus its own value in every breakpoint mode (Tablet, Mobile Landscape, Mobile), each worked out from the input's value in that mode. Negative values are accepted (`Section/Padding H Negative` = -4 / -2.5 / -1.5 / -1.25em; `Calc/Nav Height + 3.5em` = 9 / 8 / 7.5 / 7.5em). Bind the class property with `variable_as_value`. The published CSS declares each variable in `:root` and in each breakpoint's `body` block, so the value follows the breakpoint. Trade-off: the values are copies, not formulas. When Nav/Height, Section/Padding V/H or Content/Gap change, update the `Calc/…` variables too (the names say which input they follow).
- Status: worked around
- Found by: claude

### 2026-10-29 · Gradients with variables: literal colours through the API, and check every variant
- Area: mcp
- Scope: template-candidate
- Symptom: 10 MANUAL-TODO rows (G, R, AB, AF–AL) were `linear-gradient()` values using colour variables (the TW gradient, fades to Background/Page). A gradient with `var()` keeps only its first variable, and a Color variable can't hold a gradient (`custom_value` fails on create and update anyway).
- Cause: the style API collapses any value containing a Webflow variable to a binding; Color variables are single colours.
- Fix: `update_style` `background-image` with the variables' literal values (`linear-gradient(270deg, #5c7592, #3e5570)`; for fades to Background/Page, the colour that mode resolves to in that section: Frost on Home's media-below section, Paper on the Cooling band). Published as given, same look; the gradients don't follow a later change of Storm, Accent or the page colour, so a palette change means updating them too (or binding the stops in the Designer). Setting it on a class shared by a component (Button Color) also reaches every variant that doesn't override it: Light and Frost already had `background-image: none`, Secondary didn't and got it through `set_variant_styles`. Check each variant with `get_variant_styles` before publishing.
- Status: worked around
- Found by: claude

### 2026-10-29 · Fonts through the API: check the licence before subsetting
- Area: mcp
- Scope: template-candidate
- Symptom: MANUAL-TODO AA (Space Mono, Satoshi) was left for the Designer because Google Fonts can't be added through the API.
- Cause: —
- Fix: download the files and upload them as custom fonts: `create_font` (family name exactly as the Typography Scale family variables name it; `axes` for a variable font, which publishes as `font-weight: 300 900`), then POST the returned `upload.fields` plus `file` as multipart to `upload.url` (201 = done), publish, check the `@font-face` in the published CSS and `document.fonts` on a page. The files publish from the fastly host (see "A new font from the fonts API also publishes from the second host"). Licence first: OFL fonts (Google Fonts) may be subset (Space Mono, Latin, 99 → 16 KB), but Fontshare's FFL forbids subsetting and format conversion, so Satoshi went up as Fontshare's own `Satoshi-Variable.woff2` (42.6 KB, one file for 400 and 500). Keep the originals and licence texts in `Assets/fonts/`.
- Status: worked around
- Found by: claude

### 2026-10-29 · The template's update-skills test assumes the full Phosphor font
- Area: ci
- Scope: template-candidate
- Symptom: after `pnpm phosphor --subset`, `pnpm test` failed in tests/update-skills.check.mjs: "src/phosphor has a .woff2" was false.
- Cause: the test copies the icon font from this repo as if it were the template, and `--subset` (an option the template documents) inlines the font into src/phosphor.css and removes the .woff2.
- Fix: the test now expects the source's own font files (none after a subset) and the same phosphor.css (d707883). The template's copy of the test needs the same change.
- Status: fixed d707883; not upstreamed
- Found by: claude

### 2026-10-29 · A Collection List inside a flex wrapper loses the wrapper's gap
- Area: designer
- Scope: template-candidate
- Symptom: the Home FAQ items sat flush against each other on staging although the Accordion is `display: flex` with a 1em row gap (found by the Community Impact session).
- Cause: the Collection List adds two block wrappers (`.w-dyn-list` › `.w-dyn-items`) between the Accordion and its items, so the gap spaces the one wrapper, not the items.
- Fix: the existing Accordion class also on the list's items wrapper (DynamoList), no new class: gaps 13.7px at 1440, 16px at 820 and 390. Any list built inside a flex/grid wrapper (Doc Accordions, cards) needs the same.
- Status: fixed (Home, published)
- Found by: claude

### 2026-10-29 · List filters take on some lists and not on others
- Area: mcp
- Scope: template-candidate
- Symptom: the same `filters` write (`group` equals the option id, then with `show-on-project-overview` isOn) was stored, read back and published on both Project Overview Documents lists, and the Home FAQ list reads back `show-on-home` isOn and publishes 4 items, while on the two Community Impact Documents lists `filters` and even `sort` were refused with `[Conflict] … component map`, also after moving the list to body level.
- Cause: unknown. The difference seen: the PO and Home lists carry their classes and `data-accordion` attributes on the Collection List itself and had sort written earlier without a failure; the CI lists sit inside a separate Accordion wrapper and had already had refused writes (lessons/mcp.md: a list that refused a write once refuses later writes).
- Fix: try the filter on each list once, alone (one key per `set_settings`), read it back, check the published list. A list that refused once is a Designer step (or rebuild it and write source, sort, filters one at a time before anything fails). Earlier entries that said "no filter write takes on this site" were too broad.
- Status: worked around (BA and AP done through the API, BK left to the Designer)
- Found by: claude

### 2026-10-29 · API-uploaded images get their variants late; a plain Image keeps no srcset
- Area: mcp
- Scope: template-candidate
- Symptom: three images uploaded through the assets API at 15:50 had size 0 and no variants, so the Community Impact and Cooling heroes published without `srcset` (MANUAL-TODO BN, BV asked a person to re-pick them). At 16:32 all three had variants (500 to 2000px). The heroes (C | Page Hero image prop) then published with `srcset` with no other change. The Operations background, a plain Image element set while its asset had no variants, still published without `srcset`, also after `set_image_asset` with the same asset.
- Cause: Webflow makes the variants asynchronously, here about 40 minutes after the upload (all three in the same minute; a re-post of one file's bytes to its S3 key just before may or may not have set it off). A component image prop resolves the variants at publish; a plain Image element seems to keep what it had when it was set.
- Fix: check `get_asset` variants before asking a person to re-pick an image; wait and republish first. A plain Image whose asset got its variants later still needs a re-pick in the Designer (or set it after the variants exist). `get_asset` keeps reporting size 0 even with variants.
- Status: worked around
- Found by: claude

### 2026-10-29 · A hero entrance from opacity 0 holds the LCP, even in pure CSS
- Area: perf
- Scope: template-candidate
- Symptom: after the intro loader was replaced by a CSS entrance (`@keyframes` from `opacity: 0`, starting at first paint), mobile LCP went to 4.5 s although FCP was 2.8 s; the LCP element was the hero H1.
- Cause: an element painted at opacity 0 isn't an LCP candidate, and the opacity animation runs on the compositor, so the H1 was only counted after the animation, not at its first frame.
- Fix: start from a partial opacity (0.6) with a small rise (12px): the H1 counts from first paint (mobile median 93, LCP 3.1 s). Never animate the LCP element from opacity 0, in JS or CSS.
- Status: fixed a9e60d6
- Found by: claude
