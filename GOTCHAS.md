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
- Fix: none yet; the findings are false positives. Split shorthands on `)var(` in scripts/check-drift.mjs.
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

### 2026-10-27 · pnpm classes crashes on .w--current
- Area: css
- Scope: template-candidate
- Symptom: gen-class-list.mjs threw "Cannot read properties of undefined (reading 'toUpperCase')".
- Cause: a rule for the Current state (`.nav-link.w--current`) splits into an empty word.
- Fix: skip `.w-` selectors in prototype/scripts/gen-class-list.mjs (they are Webflow states, not classes to create).
- Status: fixed in this project's prototype; not upstreamed
- Found by: claude

