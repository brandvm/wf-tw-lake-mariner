// Small scroll-scrubbed effects (findrealestate.com patterns):
//   [data-media-grow]  the media frame grows from 86% (or the scale in the
//                      attribute, e.g. "0.47") to full size as it scrolls
//                      from the bottom of the screen to the middle (the
//                      "Why FIND" video; Careers video at 0.47).
//   [data-drift="80"]  the element drifts from +80px to -80px while it
//                      crosses the screen, so it moves at its own speed
//                      against its neighbours (the "For Agents" small photo).
// Off with reduced motion. Transforms only, on the frame (never on an img
// the parallax module moves).

import { gsap, reducedMotion } from './gsap';

export function initScrollFx() {
  if (reducedMotion()) return;
  document.querySelectorAll<HTMLElement>('[data-media-grow]').forEach((el) => {
    const from = Number(el.dataset.mediaGrow) || 0.86;
    // Grows from its top edge, so the room it will take opens up below it.
    gsap.fromTo(el, { scale: from, transformOrigin: '50% 0%' }, {
      scale: 1,
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'center center', scrub: true },
    });
  });
  document.querySelectorAll<HTMLElement>('[data-drift]').forEach((el) => {
    const d = Number(el.dataset.drift) || 60;
    gsap.fromTo(el, { y: d }, {
      y: -d,
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });
}
