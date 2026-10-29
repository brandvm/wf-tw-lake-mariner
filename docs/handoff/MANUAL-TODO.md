# Manual Designer steps

Everything the Webflow MCP can't do, for a person to do in the Designer.
Claude adds a row the moment it hits a limit, with *why* the API can't;
the person marks it done; Claude then reads the result back (or checks it on
the canvas when the API can't read it) and says so.

Common reasons, so they don't need re-explaining (see the skill's
`lessons/mcp.md`):
- a value mixing a variable with `calc()`, a gradient or a shadow;
- conditional visibility on a CMS field; a list sourced from a
  multi-reference or multi-image field; "exclude current item";
- a link to the current CMS item, in a list or a component prop;
- tag styles that have never been set; reserved class names;
- placeholders, slot names, variant props exposed from nested instances.

How to enter a value with variables: select the class, switch to the
breakpoint, type `calc(` in the field and insert variables with the
variable picker. Gradients: Backgrounds → gradient, pick each stop from the
variables.

Letters run A, B, C… then AA, AB… and are never reused, so a letter
mentioned in GOTCHAS or a commit stays unambiguous. The next free letter is
also kept in `REVIEW.md` once the review phase starts.

Rows that change something visible on a page also get a marker there, so
the step is found on the canvas and nobody mistakes the unfinished state
for the design: a small Caption next to the element (on the style guide,
next to its specimen) with the attribute `data-manual-todo="<letter>"` and
the text "Manual step <letter>: <what>". When the row is done, Claude
removes the marker in the same batch that ticks the row. Before the build
handoff and before launch, no `data-manual-todo` may be left on any
published page (search the published HTML for it).

Categories to expect on every build. Go through them at the start and
again at each gate, so the steps are found early and not at the end:

1. **Values with variables in a calc, gradient or shadow** (negative
   section padding, nav height + padding, gradient stops).
2. **Reserved class names** (Label, Form) and **tag styles** never set
   before (All H1–H6 Headings, All Paragraphs, All Links): one property
   set by hand, then the API can do the rest.
3. **CMS bindings:** lists from a multi-reference or multi-image field,
   "exclude current item", links to the current item, conditional
   visibility, decimal number formats, date bindings.
4. **Component wiring:** slots made and named, variant props exposed from
   a nested instance, variant styles on an element with a combo class,
   conditional classes (typed text: check the published class list).
5. **Forms:** field names (type a value that differs from the one shown),
   placeholders, the notification address, the success and error states.
6. **Page settings:** sitemap and search exclusion, the 404 and password
   pages (the API can't reach utility pages), Open Graph images for CMS
   templates.
7. **Site settings:** fonts uploaded, head and footer code pasted, the
   staging password.

From `pnpm wf:styles` (2026-10-28), in class creation order. Borders and outlines (`1px solid ⟨variable⟩`) are set through the API as longhands instead (confirmed on .button-color and the nav classes); the border rows are ticked when their class batch is written. Rows AF–AL are classes not created yet: do them after their batch. Values are written with Designer variable names; type `calc(` and insert the variables with the picker. Check each against `prototype/src/css/new-classes.css` when doing it.

| ID | Where (page › element or class) | Breakpoint | Set | Why the API can't | Done |
| --- | --- | --- | --- | --- | --- |
| A | .nav-menu | Desktop | border: 1px solid Colors/Ink Tint/Ink 12 | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☑ through the API as per-side longhands (border-*-width/style/color), 2026-10-28 |
| B | .nav-menu | Tablet | padding-top: calc(Layout/Nav/Height + 3.5em) | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| C | .nav-link | Tablet | border-bottom: 1px solid Colors/Paper Tint/Paper 12 | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☑ through the API as per-side longhands (border-*-width/style/color), 2026-10-28 |
| D | .nav-dropdown-list | Desktop | border: 1px solid Colors/Ink Tint/Ink 12 | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☑ through the API as per-side longhands (border-*-width/style/color), 2026-10-28 |
| E | .media-below | Mobile landscape | margin-right: calc(Layout/Section/Padding H * -1) | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| F | .media-below | Mobile landscape | margin-left: calc(Layout/Section/Padding H * -1) | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| G | .media-below-fade | Desktop | background-image: linear-gradient(180deg, Colors Semantic/Background/Page 17%, rgba(235, 240, 245, 0) 46%) | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| H | .tag | Desktop | border: 1px solid Colors/Paper Tint/Paper 12 | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☑ through the API as per-side longhands (border-*-width/style/color), 2026-10-28 |
| I | .accordion-item | Desktop | border: 1px solid Colors Semantic/Border/Subtle | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☑ through the API as per-side longhands (border-*-width/style/color), 2026-10-28 |
| J | .highlights-panels | Desktop | margin-top: calc(Spacing/32 - Layout/Content/Gap) | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| K | .highlights-tabs | Tablet | margin-right: calc(Layout/Section/Padding H * -1) | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| L | .split-media | Tablet | margin-right: calc(Layout/Section/Padding H * -1) | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| M | .split-media | Tablet | margin-left: calc(Layout/Section/Padding H * -1) | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| N | .band | Desktop | margin-right: calc(Layout/Section/Padding H * -1) | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| O | .band | Desktop | margin-left: calc(Layout/Section/Padding H * -1) | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| P | .band-scene | Desktop | margin-right: calc(Layout/Section/Padding H * -1) | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| Q | .band-scene | Desktop | margin-left: calc(Layout/Section/Padding H * -1) | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| R | .band-fade | Desktop | background-image: linear-gradient(180deg, Colors Semantic/Background/Page 21%, rgba(255, 255, 255, 0) 66%) | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| S | .steps-head | Desktop | top: calc(Layout/Nav/Height + 2.5em) | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| T | .search-input | Desktop (focus-visible) | outline: 2px solid Colors/Brand/Accent | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☑ through the API as outline longhands (outline-width/style/color), 2026-10-28 |
| U | .select-input | Desktop (focus-visible) | outline: 2px solid Colors/Brand/Accent | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☑ through the API as outline longhands (outline-width/style/color), 2026-10-28 |
| V | .article-aside | Desktop | top: calc(Layout/Nav/Height + 2em) | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| W | .section.is-frost | Desktop | --_colors-semantic---background--page: variable mode Colors Semantic: Frost (Background/Page → Frost, Background/Surface → White) | a variable declared on a class: the API sets values, not variable modes | ☑ through the API (set_style_variable_mode, Colors Semantic: Frost), 2026-10-28 |
| X | .section.is-split-media | Desktop | padding-bottom: calc(Layout/Section/Padding V + 1em) | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| Y | .section.is-page-head | Desktop | padding-top: calc(Layout/Nav/Height + 3.3125em) | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| Z | .section.is-article-head | Desktop | padding-top: calc(Layout/Nav/Height + 3.375em) | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| AA | Site settings › Fonts | — | Space Mono 400 (Google Fonts) and Satoshi 400 and 500 (woff2 from Fontshare, free licence). The Typography Scale family variables already name them (2026-10-28). Space Grotesk is done: uploaded through the fonts API on 2026-10-28 at the user's request (variable 300–700, Latin subset, `Assets/fonts/space-grotesk/`) | Google Fonts can't be added through the API; a font uploaded through the API publishes from a second host (`lessons/mcp.md`, font replacement; the head code now preconnects to it) | ☐ Space Mono, Satoshi · ☑ Space Grotesk (API, 2026-10-28) |
| AB | .button-color | Desktop | background-image: linear-gradient(270deg, Colors/Brand/Storm, Colors/Brand/Accent) (P8, the TW gradient; hover already removes it) | a gradient with variables: the API stores only the first variable | ☐ |
| AC | C \| Button › variant Small › .button-size | Desktop | height 2.1875em; padding left/right Spacing/16; font-size Typography Scale/Size/13; line-height Typography Scale/Line Height/Solid; letter-spacing −0.008em (P8) | a style on a component variant: the style API has no variant scope | ☑ through the API (component variants tool, set_variant_styles on Button Size › Small), 2026-10-28 |
| AD | .section.is-hero | Desktop | padding-bottom: calc(Layout/Section/Padding V + 4.625em) (P10; Mobile landscape already Section/Padding V) | a variable inside calc() | ☐ |
| AE | .nav-link (Current state) | Desktop | color: pick Colors/Brand/Storm with the variable picker. It is set and publishes, but as a typed `var()` (the importer created the state), so the Designer shows no variable | the style API has no Current state; the WHTML importer writes it without binding the variable | ☐ |
| AF | .stat-value | Desktop | background-image: linear-gradient(270deg, Colors/Brand/Storm, Colors/Brand/Accent) | a gradient with variables | ☐ |
| AG | .social-button | Desktop | background-image: linear-gradient(270deg, Colors/Brand/Storm, Colors/Brand/Accent) | a gradient with variables | ☐ |
| AH | .steps-progress-bar | Desktop | background-image: linear-gradient(270deg, Colors/Brand/Storm, Colors/Brand/Accent) | a gradient with variables | ☐ |
| AI | .benefit-progress | Desktop | background-image: linear-gradient(270deg, Colors/Brand/Storm, Colors/Brand/Accent) | a gradient with variables | ☐ |
| AJ | .read-progress-bar | Desktop | background-image: linear-gradient(270deg, Colors/Brand/Storm, Colors/Brand/Accent) | a gradient with variables | ☐ |
| AK | .accordion-progress.is-gradient | Desktop | background-image: linear-gradient(270deg, Colors/Brand/Storm, Colors/Brand/Accent) | a gradient with variables | ☐ |
| AL | .post-card-media.is-fallback | Desktop | background-image: linear-gradient(180deg, Colors/Brand/Storm 5%, Colors/Brand/Accent 97%) | a gradient with variables | ☐ |
| AM | Site settings › Custom code › Head code | — | re-paste piece 1 of `loader.html` (it now also sets `html.intro-seen` from sessionStorage, so the intro loader shows on the first page of a visit only); keep `RELEASE` as installed, then publish to webflow.io | loader snippets are not versioned: a push updates the bundles only | ☑ written through the MCP (site head code, set_site_freeform_code), read back and published to webflow.io, 2026-10-28 |
| AN | Pages › each CMS template: News Categories, Topics, Event Types, Event Perks, Documents, FAQs, Testimonials | — | Page settings › switch off "Publish this Collection Template page" (they have no item pages in the design; News Posts and Events keep theirs). Then Claude reads back `shouldPublish: false` | the API has no setting for it (`lessons/mcp.md`, keep a CMS template off with its toggle, not with draft) | ☐ |
| AO | Components › C \| Button | — | Select the Button Color instance inside C \| Button › Variant › "Link to new prop", name it Color; inside Button Color select Button Size › Variant › link to new prop Size, then link that again in C \| Button. Then: Nav (G \| Nav W) Contact Us → Size Small; style guide Buttons: add the "Button Size · Small" row (C \| Button, Size Small) and remove the AO marker | a nested instance's variant can't be exposed as a prop through the API (`lessons/mcp.md`, nested button components) | ☐ |
| AP | Home › FAQ › FAQs List (by Order, first 4) | — | Filter "Show on Home" is On, once Webflow accepts it. Until then the list shows the first 4 FAQs by Order (sort and limit are set), which is the same 4 today | every `isOn` filter on the Switch field `show-on-home` fails with "[Conflict] The operation could not be applied to the component map", through the API and in the Designer, and afterwards the list refuses other query writes; sort by Order and limit work on a list that never got the filter (GOTCHAS 2026-10-29) | ☐ blocked (Webflow) |
| BA | Project Overview › Resources (`#resources`) and Initiatives (`#initiatives`) › Documents Collection Lists | — | Resources list: Filter "Show on Project Overview" is On and Group equals Resources & Documents; Initiatives list: "Show on Project Overview" is On and Group equals Community & Partnership; both Sort Order ascending. Then remove the two "Manual step BA" captions (`data-manual-todo="BA"`) in the Split heads; Claude checks the published lists (6 and 1 items, Third-Party Independent Study first) | every `filters`/`sort` write failed with "[Conflict] The operation could not be applied to the component map", on fresh lists at body level (same as AP); `source` took. Until then each list shows all 7 Documents | ☐ |
| BB | Project Overview › Responsible Development › item [1] No Lake Water Use › Answer | — | Select "closed-loop system" and link it to the Closed-Loop Cooling page, as in the prototype | a rich-text prop value takes plain text through the API (no links) | ☐ |
