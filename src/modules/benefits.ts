// Benefit Grid (adapted from marketcap's capabilities): a 2 × 2 grid of
// boxes, one active at a time. The active box takes a bigger share of the
// grid — its column and its row grow, the others give up the room, and the
// grid's own size never changes (CSS transition on grid-template-*). The
// active box changes on a timer while the grid is on screen, and on click
// (the timer carries on from the clicked box). A line along the active box's
// foot fills as its time runs out.
// Hooks: data-benefits › data-benefit-grid › data-benefit buttons, each with
// a data-benefit-progress line. State: data-benefits-state="on" on the root,
// data-active and aria-pressed on the boxes.
// Below 992px (one column) and with reduced motion the tracks stay as the
// CSS sets them; reduced motion also has no timer.

import { gsap, ScrollTrigger, reducedMotion } from './gsap';

const AUTOPLAY_MS = 4000;
const GROW_COL = 1.2; // the active column's share, against 1fr
const GROW_ROW = 1.35; // the active row's share
const WIDE = window.matchMedia('(min-width: 992px)');
const COLUMNS = 2;

export function initBenefits() {
  const root = document.querySelector<HTMLElement>('[data-benefits]');
  const grid = root?.querySelector<HTMLElement>('[data-benefit-grid]');
  if (!root || !grid) return;
  const items = [...grid.querySelectorAll<HTMLButtonElement>('[data-benefit]')];
  const bars = items.map((item) => item.querySelector<HTMLElement>('[data-benefit-progress]'));
  if (!items.length) return;
  root.dataset.benefitsState = 'on';
  let active = -1;

  const layout = () => {
    if (!WIDE.matches || reducedMotion() || active < 0) {
      grid.style.gridTemplateColumns = '';
      grid.style.gridTemplateRows = '';
      return;
    }
    const rows = Math.ceil(items.length / COLUMNS);
    const col = active % COLUMNS;
    const row = Math.floor(active / COLUMNS);
    grid.style.gridTemplateColumns = Array.from({ length: COLUMNS }, (_, i) => (i === col ? `${GROW_COL}fr` : '1fr')).join(' ');
    grid.style.gridTemplateRows = Array.from({ length: rows }, (_, i) => (i === row ? `${GROW_ROW}fr` : '1fr')).join(' ');
  };

  let onChange = () => {};
  const select = (index: number) => {
    const changed = index !== active;
    active = index;
    items.forEach((item, i) => {
      item.toggleAttribute('data-active', i === index);
      item.setAttribute('aria-pressed', String(i === index));
    });
    layout();
    if (changed) onChange();
  };

  items.forEach((item, i) => item.addEventListener('click', () => select(i)));
  // Arrow keys move focus between the boxes (Enter / Space select).
  items.forEach((item, i) =>
    item.addEventListener('keydown', (event) => {
      const cols = WIDE.matches ? COLUMNS : 1;
      const to = ({ ArrowRight: i + 1, ArrowLeft: i - 1, ArrowDown: i + cols, ArrowUp: i - cols, Home: 0, End: items.length - 1 } as Record<string, number>)[event.key];
      if (to === undefined || to < 0 || to >= items.length) return;
      event.preventDefault();
      items[to].focus();
    }),
  );
  select(0);
  WIDE.addEventListener('change', layout);

  if (reducedMotion()) return;
  let inView = false;
  const state = { p: 0 };
  const write = () => bars.forEach((bar, i) => { if (bar) bar.style.transform = `scaleX(${i === active ? state.p.toFixed(3) : 0})`; });
  const tween = gsap.fromTo(state, { p: 0 }, {
    p: 1,
    duration: AUTOPLAY_MS / 1000,
    ease: 'none',
    paused: true,
    onUpdate: write,
    onComplete: () => select((active + 1) % items.length),
  });
  onChange = () => {
    tween.restart();
    write();
    tween.paused(!inView);
  };
  ScrollTrigger.create({
    trigger: grid,
    start: 'top 75%',
    end: 'bottom 25%',
    onToggle: (self) => {
      inView = self.isActive;
      tween.paused(!inView);
    },
  });
}
