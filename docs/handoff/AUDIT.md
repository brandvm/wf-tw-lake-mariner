# Phase 0 — Webflow site audit

Read-only audit of **Lake Mariner Data (TeraWulf)**, site
`6ae0f7d7bcf5d7622aeac214`, through the `webflow-tw-lake-mariner` MCP on
2026-10-27. I made no writes and published nothing. The comparison targets
are `BUILD-PLAN.md` (design system, phases) and the skill's
`starter-site.md`.

**Verdict:** the site is an unchanged duplicate of the wf-template starter
site (built 2026-10-13). The shell, the base classes, the control
components, the style guide layout and the variable structure are all
there and are reused as they are. What changes is the starter's neutral
**values** (Geist, ink/paper greys, blue accent, generic type scale).
Everything specific to Lake Mariner is still to be created. The only
change since duplication is the loader install (head code and Embed 2a
now point at `wf-tw-lake-mariner`).

Not covered: the Designer app wasn't connected, so the breakpoint list
comes from the Body tag style's breakpoint keys. The site plan has no
sitemap controls (that API call returns 403).

## 1. Pages and folders

| Page | id | Path | Draft | SEO title / description | OG | Page head code |
| --- | --- | --- | --- | --- | --- | --- |
| Home | `6ae0f7d7bcf5d7622aeac20f` | `/` | no | empty / empty | empty | none |
| Style Guide | `6ae0f7d7bcf5d7622aeac211` | `/design/style-guide` | no | "Style Guide" / empty | copies SEO | `noindex, nofollow` |
| Media | `6ae0f7d7bcf5d7622aeac213` | `/design/media` | no | "Media" / "Internal page: videos are uploaded here…" | empty | `noindex, nofollow` |
| 404 | `6ae0f7d7bcf5d7622aeac212` | `/404` | no | "Not Found" / empty | copies SEO | none |

- Folder `design` (`6ae0f7d7bcf5d7622aeac210`) holds Style Guide and
  Media.
- **`/design/style-guide` exists.** It has the fixed layout with 9
  sections (Colors, Themes, Typography, Utilities, Spacing, Buttons, Form
  elements, Components, Other classes) and 64 rows.
- Every page is the starter shell: `G | Components` + `G | Page W`. The
  `G | Main` slot on Home is empty.
- Sitemap exclusion for `/design/*` can't be set on this plan (403). Both
  pages carry `noindex` meanwhile, as the starter intends.

## 2. Components

| Component | Group | Props | Variants | Instances |
| --- | --- | --- | --- | --- |
| G \| Components | Global | — | Base | 4 (every page) |
| G \| Page W | Global | Slot "G \| Main" | Base | 4 |
| G \| Nav W | Global | — | Base | 4 |
| G \| Footer W | Global | — | Base | 4 |
| C \| Button | Button | Label, Link, Icon, Icon Before, Icon After | Base | 4 |
| Button Color | Button | Variant + pass-through | Primary, Secondary | 7 |
| Button Size | Button | Variant + pass-through | Default, Small | 7 |
| Button Content | Button | Label, Icon, Icon Before, Icon After | Base | 7 |
| C \| Icon Button | Button | Variant, Icon, Accessible Name, Hook | Primary, Secondary | 1 |
| Icon | Controls | Variant, Icon | Inherit, Primary, Secondary, Accent, Success, Warning, Error | 7 |
| Icon Size | Controls | Variant, Icon | 12, 16 (base), 20, 24, 32, 48, 64px | 29 |
| C \| Video | Controls | MP4, Poster, WebM, Has WebM, Autoplay, Muted, Loop, Plays Inline | Base | 1 |
| Section Head | Sections | Chip, Show Chip, Heading, Text | Base | 1 |

The instances outside the Global group are all specimens on the style
guide.

- **G \| Components** holds an empty "site code" Embed, then 2a and 2b
  (installed today, see below).
- **G \| Page W** contains: Skip Link "Skip to content", G \| Nav W,
  G \| Main W › `main#main` (slot, class G \| Main), G \| Footer W.
- **G \| Nav W** is still a placeholder: `nav` G \| Nav (aria-label
  "Main") holding one link, "Site name".
- **G \| Footer W** is still a placeholder: `footer` G \| Footer ›
  S Wrapper Is Wide › Body S "© Site name".
- **C \| Button** exposes no Color/Size prop, so the starter's manual
  "Link to new prop" step on the inner variants **was never done**. The
  same is true of Icon's Size.

**Matches the starter:** yes, component for component (`starter-site.md`
D and D2).

## 3. Variables

10 collections. The structure matches the starter exactly. All values
are the starter's neutral placeholders, all in em.

| Collection | Modes | Contents now |
| --- | --- | --- |
| Base collection | Base | empty (can't be deleted) |
| Colors | Base | Brand/Ink `#111111`, Brand/Paper `#ffffff`, Brand/Accent `#2f5bff`; Ink Tint 4/12/24/48/64; Paper Tint 12/24/48/64; Status Success/Warning/Error, each with an On Dark twin |
| Colors Semantic | Base, Dark | Background Page/Surface/Overlay; Text Primary/Secondary/Accent; Border/Subtle; Button Background/Text/Background Hover; Form/Focus; Link/Hover; Status ×3. All are aliases (Base: ink on paper; Dark: paper on ink) |
| Typography Scale | Base | Family/Base = **Geist**; Size/12–96 (12, 14, 16, 18, 20, 24, 32, 40, 48, 64, 80, 96); Weight Thin–Black; Line Height Tight 1.1 / Snug 1.25 / Normal 1.5; Letter Spacing Tight −0.02em / Normal 0 / Wide 0.08em |
| Typography Role | Base, Tablet, Mobile Landscape, Mobile | Family/Size/Weight/Line Height/Letter Spacing for Display, H1–H6, Body, Body Large, Body Small, Label, Button. Every family → Family/Base. Base sizes: Display 96, H1 80, H2 64, H3 48, H4 32, H5 24, H6 20, Body 16, Body L 20, Body S 14, Label 12, Button 16 |
| Typography Styles | Base + Display, H1–H6, Body Large, Body Small, Label, Button | Family, Size, Weight, Line Height, Letter Spacing (alias of a role per mode) |
| Layout | Base, Tablet, Mobile Landscape, Mobile | Section Padding V 8/6/5/4em, Padding H 4/3/2/1.25em; Container Max Width 90em; Content Gap 3/2.5/2/1.5em; Nav Height 5/4.5/4/4em; Nav Padding H 4/3/2/1.25em; Button Height 3em |
| Spacing | Base | None, Hairline, 2, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 |
| Radius | Base | None, 2, 4, 8, Pill |

**Compared with BUILD-PLAN › Design system:**

| Plan | Site now | Gap |
| --- | --- | --- |
| Navy 900 `#112135`, Navy 700 `#002552`, Slate 600 `#3E5570` (+60%/10%), Slate 400 `#5C7592`, Mist 50 `#EFF3F6` / 100 `#EBF0F5` / 200 `#D4DDE7`, White | Ink `#111`, Paper `#fff`, Accent `#2f5bff` + ink/paper tints | None of the palette exists. Rename/revalue Brand/*, add Navy/Slate/Mist primitives, re-point the semantics (Mist surfaces, Slate buttons, Navy Dark mode) |
| 4 families: Space Grotesk (display/headings), Manrope (body), Satoshi (body 2), Space Mono (labels/buttons/nav) | One family, Geist | Needs `Family/Display`, `Family/Body`, `Family/Body Alt`, `Family/Mono` in the Scale, and the Role families re-pointed |
| Sizes 72, 64, 56, 48, 40, 34, 24, 22 / 18, 16, 15, 14 / 14, 13, 12, 11 | 12–96 scale (no 11, 13, 15, 22, 34, 56, 72) | Add the missing sizes, re-point the roles (Display 72, H1 64, H2 56, H3 48…) |
| Body line height 164%, tracking −1%; headings −2% (−4% at 72); mono +2% | 1.5 / 0 / Wide 8% | Add LH 1.64 and tracking −1%, −2%, −4%, +2% |
| 1280 content width at 1680 (200px sides), 120px rhythm | Max 90em, Padding V 8em, H 4em | Revalue the Layout variables (to be measured against the fluid scale, base 16px at 1680) |

## 4. Classes and styles

**161 styles**: 11 tag selectors, 105 global classes, 45 combos.

| Family | Classes |
| --- | --- |
| Shell | G \| Components, G \| Page W, G \| Nav W, G \| Nav, G \| Main W, G \| Main, G \| Footer W, G \| Footer, Skip Link, To Slot, Utility Page Wrap/Content |
| Section | Section + Is Hero, Is Top, Is Media, Is Dark; S Bg, S Bg Media, S Bg Overlay; S Wrapper + Is Wide |
| Type | D0–D6, Body L, Body S, Label Text, Chip, Section Head |
| Utilities | Weight Regular/Medium/Bold; Leading Tight/Snug/Normal; Tracking Tight/Wide; Text Secondary/Accent/Uppercase/Center/Balance; Max Width Text (+ combo on Body L) |
| Controls | Button, Button Color, Button Size, Button Content, Button Icon, Icon Button Box, Icon, Icon Color, Icon Glyph, Video |
| Forms | Form, Label (reserved, both exist), Form Field, Form Input + Is Textarea |
| Style guide | 48 `Sg …` classes + 38 of the combos (Sg Swatch Color ×18, Sg Bar ×13, Sg Radius ×5, Sg Section Is First, Sg Table Row Is Head) |

**Tag styles already set** (the manual starter step B was done):
- Body: bound to Typography Styles, plus background and colour from
  Colors Semantic, `font-feature-settings "ss03","ss08"` (Geist-only),
  `font-optical-sizing: none`. The Typography Role and Layout modes are
  set at medium, small and tiny.
- H1–H6: margins 0, the five type properties bound, each H1–H6 picks its
  Typography Styles mode.
- p, div and input have margin 0. `a` has no underline and `color:
  inherit`.
- Type classes (D0–D6, Body L, Label Text, Chip) bind the five Typography
  Styles variables and pick a mode, as in the starter.

**Found:** **Is Hero** padding-top is `Nav/Height` only, not
`calc(Nav/Height + Section/Padding V)`. The starter's manual calc step
(and probably Is Top's) is still open.

## 5. Fonts, breakpoints, CMS, assets, code, interactions

- **Fonts:** one custom font, **Geist** variable woff2 (100–900, swap).
  Space Grotesk, Manrope, Space Mono (Google) and Satoshi (file) are not
  installed.
- **Breakpoints:** base (desktop) plus medium 991, small 767, tiny 479.
  No large, xl or xxl styles exist.
- **CMS:** no collections.
- **Assets:** 1 (the Geist font file), no folders.
- **Site custom code:** head = loader piece 1 (`SITE wf-tw-lake-mariner`,
  `RELEASE null`), footer = piece 3. Nothing else. No registered scripts,
  no Google tag IDs.
- **Page code:** only the `noindex` meta on the two `/design` pages.
- **Interactions (IX3):** none.
- **robots.txt (webflow.io):** `Disallow: /`, from Webflow's subdomain
  indexing setting.

## 6. Reuse / change / create, by phase

### Phase 1 — Foundations

- **Reuse:** all 10 collections and their modes; the Spacing and Radius
  scales; Weight variables; the Body/H1–H6/p/a tag styles and their
  bindings; D0–D6, Body L/S, Label Text, Chip and the utility classes;
  the breakpoint auto-modes on Body.
- **Change** (proposed old → new for approval):
  - Colors: Brand/Ink → Navy 900 `#112135`, Brand/Accent → Slate 600
    `#3E5570` (or rename), Paper stays white.
  - Ink Tint → Navy tints; Colors Semantic re-pointed (Surface → Mist 100,
    Border → Mist 200, Button → Slate 600, Text/Secondary → Slate 400;
    Dark = Navy 900 background).
  - Typography Role sizes and families to the Figma scale.
  - Line height and tracking values.
  - Layout values (1280 content, 120px rhythm).
  - Drop the Geist `ss03/ss08` feature setting from Body.
- **Create:**
  - Colors: Navy 700, Slate 400, Mist 50/100/200, Slate 60% and 10%.
  - Typography Scale: Family/Display, Body, Body Alt, Mono; Size 11, 13,
    15, 22, 34, 56, 72; LH 1.64; tracking −1%, −4%, +2%.
  - A "Mist" mode in Colors Semantic, if light sections need their own
    theme beside Base and Dark.
  - Upload the fonts (3 from Google, the Satoshi file); remove Geist when
    nothing uses it.
- **Manual (MANUAL-TODO):** Is Hero / Is Top padding-top
  `calc(Nav/Height + Section/Padding V)`.

### Phase 2 — Style guide

- **Reuse:** the page, its frame, all Sg classes and 9 sections. Its
  swatch, radius and spacing combos follow the variables.
- **Change:** add a Sg Swatch Color combo and row for each new colour,
  and type rows for the new families and roles.
- **Create:** rows for every class made in phases 1 and 3.

### Phase 3 — Global components

- **Reuse as is:** G \| Components, G \| Page W (the shell), Icon / Icon
  Size, C \| Icon Button, C \| Video (Project Overview video loop),
  Button Size (Default, Small).
- **Change:**
  - G \| Nav W: placeholder → nav with announcement bar, dropdowns,
    light/dark, mobile sheet.
  - G \| Footer W: placeholder → logo, 3 columns, Follow, bottom bar.
  - Button Color: Primary/Secondary → Solid, Light, Ghost (+ restyle).
  - C \| Button: expose Color and Size props (manual step).
  - Icon: expose Size (manual step).
  - Section Head: Chip → eyebrow in Space Mono, add alignment.
- **Create:** C \| Page Hero, Fact Bar, Stat Row, C \| Follow Band,
  Social Buttons, Breadcrumb, Share Buttons, then the section components
  in HANDOFF › Components to make (Explore Rail, Accordion, Image
  Accordion, Highlight Tabs, Promo Card, Step List, Hover Pair, Scroll
  Video, Benefit Grid, Quote Slider, Post/Event Card, the template
  cards).

### Phase 4 — CMS

- **Reuse:** nothing; the site has no collections.
- **Create:** all 9 collections in HANDOFF › CMS (News Posts, News
  Categories, Topics, Events, Event Types, Event Perks, Documents, FAQs,
  Testimonials). The reference collections go first (Categories, Topics,
  Event Types, Event Perks), so the reference fields can point at them.
- **Note:** the site plan matters here. CMS item limits apply, and the
  sitemap API is blocked on this plan.
