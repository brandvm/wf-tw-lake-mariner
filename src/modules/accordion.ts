// Accordion: one item open at a time. Hooks: data-accordion on the list,
// data-accordion-item on each item (data-state="open" for the one that
// starts open), data-accordion-trigger on its button. The panel opens with
// a CSS grid-row transition (js-state repo CSS), so no heights are measured.
//
// Image accordion (optional): photos marked data-accordion-image inside the
// scope (data-accordion-scope="<selector>", else the accordion's parent)
// follow the open item, in item order. Autoplay (optional,
// data-accordion-autoplay="<ms>"): the next item opens when the open
// item's data-accordion-progress bar has filled (CSS animation); paused on
// hover, focus and off screen; stops after a click; off with reduced
// motion. State: data-accordion-images on the scope,
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
      accordion.dataset.accordionAutoplayState = autoplay ? 'on' : 'off';
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
      images.forEach((img, i) => img.toggleAttribute('data-active', i === index));
    };
    const openIndex = () => items.findIndex((item) => item.dataset.state === 'open');
    if (accordion.hasAttribute('data-accordion-open-first') && items[0] && openIndex() < 0) items[0].dataset.state = 'open';

    items.forEach((item, i) => {
      set(item, item.dataset.state === 'open');
      item.querySelector('[data-accordion-trigger]')?.addEventListener('click', () => {
        if (duration) accordion.dataset.accordionAutoplayState = 'off';
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
      const pause = (paused: boolean) => {
        if (accordion.dataset.accordionAutoplayState === 'off') return;
        accordion.dataset.accordionAutoplayState = paused ? 'paused' : 'on';
      };
      accordion.addEventListener('pointerenter', () => pause(true));
      accordion.addEventListener('pointerleave', () => pause(false));
      accordion.addEventListener('focusin', () => pause(true));
      accordion.addEventListener('focusout', (e) => { if (!accordion.contains(e.relatedTarget as Node | null)) pause(false); });
      new IntersectionObserver(([entry]) => pause(!entry.isIntersecting), { threshold: 0.25 }).observe(accordion);
    }
  });
}
