// Follow Band fan (adapted from marketcap's brand-lines): the 3D fan fans
// in — rotates up from below and fades in — as the band arrives, then
// drifts against the pointer inside the band, easing back to rest when the
// pointer leaves. Hooks: data-follow-area (the band), data-follow-fan (the
// image). Pointer drift only on fine pointers; nothing with reduced motion.

import { gsap, reducedMotion } from './gsap';

const SHIFT = 28; // px the fan travels at the band's edge
const TURN = 4; // degrees it turns at the band's edge

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

    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const wrap = fan.parentElement!;
    const x = gsap.quickTo(wrap, 'x', { duration: 0.9, ease: 'power3.out' });
    const y = gsap.quickTo(wrap, 'y', { duration: 0.9, ease: 'power3.out' });
    const r = gsap.quickTo(wrap, 'rotate', { duration: 0.9, ease: 'power3.out' });
    area.addEventListener('pointermove', (event) => {
      const box = area.getBoundingClientRect();
      const dx = (event.clientX - box.left) / box.width - 0.5;
      const dy = (event.clientY - box.top) / box.height - 0.5;
      x(-dx * SHIFT * 2);
      y(-dy * SHIFT);
      r(dx * TURN);
    });
    area.addEventListener('pointerleave', () => { x(0); y(0); r(0); });
  });
}
