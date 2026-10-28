// Highlight tabs, driven by scroll: the section pins for a few screen
// heights and page scroll moves through the tabs. The line above each tab
// fills as one continuous progress line, tabs already passed stay bright,
// and the panel and background photo follow the current tab. Clicking a
// tab (or arrow keys, Home, End) glides the page to that tab's point.
// Hooks: data-tabs on the section, data-tabs-frame (the part that pins),
// data-tab-list, data-tab (buttons, aria-controls → panel id) each with a
// data-tab-progress line, data-tab-panel, data-tab-bg (photos, tab order).
// Reduced motion and below 768px: no pin; the tabs switch on click. ARIA tab roles are set
// here, so Webflow keeps plain divs and buttons.
// State: data-tabs-state (pinned, static) on the section; data-active on the
// shown panel and photo; data-passed on tabs before the current one.

import type Lenis from 'lenis';

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)');
// As marketcap's approach-steps: nothing pins below 768px.
const PIN = window.matchMedia('(min-width: 768px)');
const STEP = 0.5; // scroll per tab, in screen heights

export function initTabs(lenis: Lenis | null = null) {
  document.querySelectorAll<HTMLElement>('[data-tabs]').forEach((root, n) => {
    const tabs = [...root.querySelectorAll<HTMLButtonElement>('[data-tab]')];
    const panels = [...root.querySelectorAll<HTMLElement>('[data-tab-panel]')];
    const bgs = [...root.querySelectorAll<HTMLElement>('[data-tab-bg]')];
    const bars = tabs.map((tab) => tab.querySelector<HTMLElement>('[data-tab-progress]'));
    const frame = root.querySelector<HTMLElement>('[data-tabs-frame]');
    const list = root.querySelector<HTMLElement>('[data-tab-list]');
    if (!tabs.length || tabs.length !== panels.length) return;

    list?.setAttribute('role', 'tablist');
    tabs.forEach((tab, i) => {
      tab.id ||= `tabs-${n}-tab-${i}`;
      tab.setAttribute('role', 'tab');
      panels[i].setAttribute('role', 'tabpanel');
      panels[i].setAttribute('aria-labelledby', tab.id);
    });

    let current = -1;
    const show = (i: number) => {
      if (i === current) return;
      current = i;
      tabs.forEach((tab, j) => {
        const on = j === i;
        tab.setAttribute('aria-selected', String(on));
        tab.tabIndex = on ? 0 : -1;
        tab.toggleAttribute('data-passed', j < i);
        panels[j].toggleAttribute('data-active', on);
        panels[j].setAttribute('aria-hidden', String(!on));
        bgs[j]?.toggleAttribute('data-active', on);
      });
      // Keep the current tab in view where the tab row scrolls sideways.
      if (list && list.scrollWidth > list.clientWidth) {
        list.scrollTo({ left: tabs[i].offsetLeft - list.offsetLeft, behavior: 'smooth' });
      }
    };
    const fill = (progress: number) => {
      bars.forEach((bar, j) => {
        if (bar) bar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress * tabs.length - j)).toFixed(4)})`;
      });
    };

    let pinned = false;
    let distance = 0;

    const measure = () => {
      pinned = !!frame && !REDUCED.matches && PIN.matches;
      root.dataset.tabsState = pinned ? 'pinned' : 'static';
      if (!pinned || !frame) {
        root.style.height = '';
        distance = 0;
        fill((current + 1) / tabs.length);
        return;
      }
      distance = Math.round(window.innerHeight * STEP * tabs.length);
      root.style.height = `${frame.offsetHeight + distance}px`;
      update();
    };
    const update = () => {
      if (!pinned || !distance) return;
      const progress = Math.min(1, Math.max(0, -root.getBoundingClientRect().top / distance));
      fill(progress);
      show(Math.min(tabs.length - 1, Math.floor(progress * tabs.length)));
    };
    // The scroll position where tab i is current (a little past its start).
    const goTo = (i: number) => {
      if (!pinned) {
        show(i);
        fill((i + 1) / tabs.length);
        tabs[i].focus();
        return;
      }
      const y = root.getBoundingClientRect().top + window.scrollY + ((i + 0.15) / tabs.length) * distance;
      if (lenis) lenis.scrollTo(y, { duration: 1 });
      else window.scrollTo({ top: y, behavior: 'smooth' });
      tabs[i].focus({ preventScroll: true });
    };

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => goTo(i));
      tab.addEventListener('keydown', (event) => {
        const keys: Record<string, number> = { ArrowRight: current + 1, ArrowLeft: current - 1, Home: 0, End: tabs.length - 1 };
        if (!(event.key in keys)) return;
        event.preventDefault();
        goTo(Math.min(tabs.length - 1, Math.max(0, keys[event.key])));
      });
    });

    let frameId = 0;
    window.addEventListener('scroll', () => { if (!frameId) frameId = requestAnimationFrame(() => { frameId = 0; update(); }); }, { passive: true });
    window.addEventListener('resize', measure);
    show(0);
    measure();
  });
}
