// Card rail: a row of cards that scrolls sideways, with previous and next
// arrows (Chesapeake › Community Impact › Community benefits).
//   [data-card-rail]          wraps the whole block (heading row and cards)
//   [data-card-rail-track]    the row that scrolls (overflow-x in Webflow)
//   [data-card-rail-prev]     the arrow buttons (DOM <button type="button">)
//   [data-card-rail-next]
// Each arrow moves the row by one card (card width plus the row's gap). An
// arrow at its end gets aria-disabled="true" (styles.css shows it light). The
// row also scrolls by swipe, trackpad and the snap points set in Webflow.

import { reducedMotion } from './gsap';

export function initCardRail() {
  document.querySelectorAll<HTMLElement>('[data-card-rail]').forEach((rail) => {
    const track = rail.querySelector<HTMLElement>('[data-card-rail-track]');
    if (!track) return;
    const prev = rail.querySelector<HTMLElement>('[data-card-rail-prev]');
    const next = rail.querySelector<HTMLElement>('[data-card-rail-next]');

    const step = () => {
      const first = track.firstElementChild as HTMLElement | null;
      if (!first) return track.clientWidth;
      const style = getComputedStyle(track);
      const gap = parseFloat(style.columnGap) || 0;
      return first.getBoundingClientRect().width + gap;
    };
    const setDisabled = (button: HTMLElement | null, disabled: boolean) => {
      if (!button) return;
      button.setAttribute('aria-disabled', String(disabled));
    };
    const update = () => {
      const end = track.scrollWidth - track.clientWidth - 1;
      setDisabled(prev, track.scrollLeft <= 1);
      setDisabled(next, track.scrollLeft >= end);
    };
    const move = (direction: number) => {
      track.scrollBy({ left: direction * step(), behavior: reducedMotion() ? 'auto' : 'smooth' });
    };

    prev?.addEventListener('click', () => move(-1));
    next?.addEventListener('click', () => move(1));
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  });
}
