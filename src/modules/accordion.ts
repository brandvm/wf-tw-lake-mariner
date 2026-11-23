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
// only while the accordion's section is on screen (paused where it is when
// it leaves); a click opens that item and its bar starts from zero, and
// autoplay carries on from there. Off with reduced motion. State: data-accordion-images on the scope,
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
      // Paused until the section crosses the middle 60% of the screen, and
      // whenever it leaves (works for sections taller than the screen too).
      accordion.dataset.accordionAutoplayState = 'paused';
      const section = accordion.closest<HTMLElement>('section') ?? scope ?? accordion;
      new IntersectionObserver(([entry]) => {
        accordion.dataset.accordionAutoplayState = entry.isIntersecting ? 'on' : 'paused';
      }, { rootMargin: '-20% 0px -20% 0px' }).observe(section);
    }
  });
}
