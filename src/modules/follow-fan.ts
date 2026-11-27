// Follow Band fan (adapted from marketcap's brand-lines): the 3D fan fans
// in — rotates up from below and fades in — as the band arrives. No pointer
// drift (removed 2026-11-27 at the user's request). Hooks: data-follow-area
// (the band), data-follow-fan (the image). Nothing with reduced motion.

import { gsap, reducedMotion } from './gsap';

export function initFollowFan() {
  if (reducedMotion()) return;
  document.querySelectorAll<HTMLElement>('[data-follow-area]').forEach((area) => {
    const fan = area.querySelector<HTMLElement>('[data-follow-fan]');
    if (!fan) return;
    gsap.fromTo(fan, { opacity: 0, rotate: -24, yPercent: 8, transformOrigin: '20% 80%' }, {
      opacity: 1,
      rotate: 0,
      yPercent: 0,
      duration: 1.4,
      ease: 'power3.out',
      immediateRender: true,
      scrollTrigger: { trigger: area, start: 'top 80%', once: true },
    });
  });
}
