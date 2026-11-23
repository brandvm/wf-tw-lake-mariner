// Accordion: one item open at a time. Hooks: data-accordion on the list,
// data-accordion-item on each item (data-state="open" for the one that
// starts open), data-accordion-trigger on its button. The panel opens with
// a CSS grid-row transition (js-state repo CSS), so no heights are measured.
//
// Image accordion (optional): photos marked data-accordion-image inside the
// scope (data-accordion-scope="<selector>", else the accordion's parent)
// follow the open item, in item order. Autoplay (optional,
// data-accordion-autoplay="<ms>"): the next item opens when the open
// item's data-accordion-progress bar has filled (CSS animation). It runs
// only while the accordion is on screen (paused otherwise, also before the
// first check) and pauses while the mouse is over it; it never stops on a
// click: a click opens that item and its bar starts from zero, then
// autoplay carries on from there. Off with
// reduced motion. State: data-accordion-images on the scope,
// data-accordion-autoplay-state (on, paused, off) on the accordion.
//
// Open first (optional, data-accordion-open-first): when no item starts
// open, the first one does. For items repeated by a Collection List, which
// all take the same State.

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)');

export function initAccordions() {
  document.querySelectorAll<HTMLElement>('[data-accordion]').forEach((accordion) => {
    const items = [...accordion.querySelectorAll<HTMLElement>('[data-accordion-item]')];
    const scopeSelector = accordion.dataset.accordionScope;
    const scope = (scopeSelector && document.querySelector<HTMLElement>(scopeSelector)) || accordion.parentElement;
    const images = scope ? [...scope.querySelectorAll<HTMLElement>('[data-accordion-image]')] : [];
    if (images.length && scope) scope.dataset.accordionImages = 'on';

    const duration = Number(accordion.dataset.accordionAutoplay) || 0;
    const autoplay = duration > 0 && !REDUCED.matches;
    if (duration) {
      // Paused until the observer below reports the accordion on screen.
      accordion.dataset.accordionAutoplayState = autoplay ? 'paused' : 'off';
      accordion.style.setProperty('--accordion-duration', `${duration}ms`);
    }

    // Tells the CSS the module has started (the open-first pre-state lets go).
    accordion.dataset.accordionState = 'on';

    const set = (item: HTMLElement, open: boolean) => {
      item.dataset.state = open ? 'open' : 'closed';
      item.querySelector('[data-accordion-trigger]')?.setAttribute('aria-expanded', String(open));
    };
    const open = (index: number) => {
      items.forEach((item, i) => set(item, i === index));
      // Fewer photos than items: they repeat in order (one photo stays on).
      images.forEach((img, i) => img.toggleAttribute('data-active', i === index % images.length));
    };
    const openIndex = () => items.findIndex((item) => item.dataset.state === 'open');
    if (accordion.hasAttribute('data-accordion-open-first') && items[0] && openIndex() < 0) items[0].dataset.state = 'open';

    items.forEach((item, i) => {
      set(item, item.dataset.state === 'open');
      item.querySelector('[data-accordion-trigger]')?.addEventListener('click', () => {
        if (item.dataset.state === 'open') {
          // A plain accordion closes; an image accordion keeps one item open.
          if (!images.length) set(item, false);
          return;
        }
        open(i);
      });
      item.querySelector('[data-accordion-progress]')?.addEventListener('animationend', () => {
        if (accordion.dataset.accordionAutoplayState === 'on' && i === openIndex()) open((i + 1) % items.length);
      });
    });
    if (images.length) open(Math.max(0, openIndex()));

    if (autoplay) {
      // Runs while on screen and not hovered (the hover pause lets a reader
      // stop it, WCAG 2.2.2). Focus doesn't pause: a click focuses the
      // trigger, and a click must not stop autoplay.
      let inView = false;
      let hovered = false;
      const update = () => { accordion.dataset.accordionAutoplayState = inView && !hovered ? 'on' : 'paused'; };
      accordion.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') { hovered = true; update(); } });
      accordion.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') { hovered = false; update(); } });
      new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; update(); }, { threshold: 0.25 }).observe(accordion);
    }
  });
}
