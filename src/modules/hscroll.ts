// Pinned horizontal scroll: the section holds in the middle of the screen
// while page scroll moves its track sideways, and lets go when the track's
// last item lines up with the content's right edge (the S Wrapper).
// Hooks: data-hscroll on the section, data-hscroll-frame (the part that
// pins), data-hscroll-track (what moves: here the whole row, title and
// cards), data-hscroll-item on each card (the last one sets the travel),
// data-hscroll-viewport (the swipe row when the pin is off).
// On only from 992px up and without reduced motion; otherwise, and before
// this runs, the viewport is a native swipe row. State: data-hscroll-state.

const ENABLED = window.matchMedia('(min-width: 992px) and (prefers-reduced-motion: no-preference)');

export function initHScroll() {
  document.querySelectorAll<HTMLElement>('[data-hscroll]').forEach((section) => {
    const frame = section.querySelector<HTMLElement>('[data-hscroll-frame]');
    const track = section.querySelector<HTMLElement>('[data-hscroll-track]');
    const edge = section.querySelector<HTMLElement>('.s-wrapper');
    if (!frame || !track || !edge) return;

    let distance = 0;
    let frameId = 0;

    const measure = () => {
      track.style.transform = '';
      if (!ENABLED.matches) {
        section.dataset.hscrollState = 'off';
        section.style.height = '';
        return;
      }
      section.dataset.hscrollState = 'on';
      const items = track.querySelectorAll<HTMLElement>('[data-hscroll-item]');
      const last = items[items.length - 1] ?? (track.lastElementChild as HTMLElement | null);
      distance = last ? Math.max(0, last.getBoundingClientRect().right - edge.getBoundingClientRect().right) : 0;
      // The section is as tall as the pinned frame plus the travel, so one
      // pixel of page scroll moves the track one pixel.
      section.style.height = `${frame.offsetHeight + distance}px`;
      update();
    };

    const update = () => {
      frameId = 0;
      if (section.dataset.hscrollState !== 'on' || !distance) return;
      const progress = Math.min(1, Math.max(0, -section.getBoundingClientRect().top / distance));
      track.style.transform = `translate3d(${-progress * distance}px, 0, 0)`;
    };

    window.addEventListener('scroll', () => { if (!frameId) frameId = requestAnimationFrame(update); }, { passive: true });
    window.addEventListener('resize', measure);
    ENABLED.addEventListener('change', measure);
    // Images and fonts change the card sizes; measure again once they settle.
    window.addEventListener('load', measure);
    document.fonts?.ready.then(measure);
    measure();
  });
}
