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

From `pnpm wf:styles` (2026-10-28), in class creation order. Values are written with Designer variable names; type `calc(` and insert the variables with the picker. Check each against `prototype/src/css/new-classes.css` when doing it.

| ID | Where (page › element or class) | Breakpoint | Set | Why the API can't | Done |
| --- | --- | --- | --- | --- | --- |
| A | .nav-menu | Desktop | border: 1px solid Colors/Ink Tint/Ink 12 | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| B | .nav-menu | Tablet | padding-top: calc(Layout/Nav/Height + 3.5em) | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| C | .nav-link | Tablet | border-bottom: 1px solid Colors/Paper Tint/Paper 12 | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| D | .nav-dropdown-list | Desktop | border: 1px solid Colors/Ink Tint/Ink 12 | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| E | .media-below | Mobile landscape | margin-right: calc(Layout/Section/Padding H * -1) | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| F | .media-below | Mobile landscape | margin-left: calc(Layout/Section/Padding H * -1) | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| G | .media-below-fade | Desktop | background-image: linear-gradient(180deg, Colors Semantic/Background/Page 17%, rgba(235, 240, 245, 0) 46%) | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| H | .tag | Desktop | border: 1px solid Colors/Paper Tint/Paper 12 | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| I | .accordion-item | Desktop | border: 1px solid Colors Semantic/Border/Subtle | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
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
| T | .search-input | Desktop (focus-visible) | outline: 2px solid Colors/Brand/Accent | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| U | .select-input | Desktop (focus-visible) | outline: 2px solid Colors/Brand/Accent | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| V | .article-aside | Desktop | top: calc(Layout/Nav/Height + 2em) | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| W | .section.is-frost | Desktop | --_colors-semantic---background--page: variable mode Colors Semantic: Frost (Background/Page → Frost, Background/Surface → White) | a variable declared on a class: the API sets values, not variable modes | ☐ |
| X | .section.is-split-media | Desktop | padding-bottom: calc(Layout/Section/Padding V + 1em) | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| Y | .section.is-page-head | Desktop | padding-top: calc(Layout/Nav/Height + 3.3125em) | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
| Z | .section.is-article-head | Desktop | padding-top: calc(Layout/Nav/Height + 3.375em) | a variable inside calc(), a gradient or a border shorthand: the API stores only the first variable | ☐ |
