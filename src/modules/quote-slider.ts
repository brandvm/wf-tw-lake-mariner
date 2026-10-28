// Quote Slider: testimonials one at a time in a card; the photo behind the
// section changes with the quote. Prev / next buttons, ← → keys inside the
// card and a horizontal swipe move it; it wraps around. The counter reads
// "n/total". The slides cross-fade in one grid cell (js-state CSS), so the
// card keeps the height of the tallest quote.
// Hooks: data-quote-slider on the section, data-quote-slide (figures),
// data-quote-bg (photos, slide order; fewer photos than slides reuse the
// last), data-quote-prev, data-quote-next, data-quote-count.
// State: data-quote-state="on" on the root, data-active on the shown slide
// and photo; aria-hidden on the others.

export function initQuoteSlider() {
  document.querySelectorAll<HTMLElement>('[data-quote-slider]').forEach((root) => {
    const slides = [...root.querySelectorAll<HTMLElement>('[data-quote-slide]')];
    const bgs = [...root.querySelectorAll<HTMLElement>('[data-quote-bg]')];
    const prev = root.querySelector<HTMLButtonElement>('[data-quote-prev]');
    const next = root.querySelector<HTMLButtonElement>('[data-quote-next]');
    const count = root.querySelector<HTMLElement>('[data-quote-count]');
    if (slides.length < 2) {
      prev?.setAttribute('hidden', 'true');
      next?.setAttribute('hidden', 'true');
      count?.setAttribute('hidden', 'true');
      return;
    }
    root.dataset.quoteState = 'on';
    let current = 0;

    const show = (i: number) => {
      current = (i + slides.length) % slides.length;
      slides.forEach((slide, j) => {
        slide.toggleAttribute('data-active', j === current);
        slide.setAttribute('aria-hidden', String(j !== current));
      });
      const bg = Math.min(current, bgs.length - 1);
      bgs.forEach((img, j) => img.toggleAttribute('data-active', j === bg));
      if (count) count.textContent = `${current + 1}/${slides.length}`;
    };

    prev?.addEventListener('click', () => show(current - 1));
    next?.addEventListener('click', () => show(current + 1));
    const card = slides[0].closest<HTMLElement>('[role="region"]') ?? root;
    card.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') show(current - 1);
      else if (event.key === 'ArrowRight') show(current + 1);
    });
    // Swipe: a mostly horizontal drag of 40px or more.
    let x0 = 0;
    let y0 = 0;
    card.addEventListener('pointerdown', (event) => { x0 = event.clientX; y0 = event.clientY; });
    card.addEventListener('pointerup', (event) => {
      const dx = event.clientX - x0;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(event.clientY - y0)) show(current + (dx < 0 ? 1 : -1));
    });
    show(0);
  });
}
