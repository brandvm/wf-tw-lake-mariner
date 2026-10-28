// Reveal: [data-reveal] elements rise and fade in as they come into view,
// once; siblings that arrive together are staggered. Anything already on
// the first screen at load is left alone (never hidden), and nothing is
// hidden with reduced motion or without the module (the hiding is set here,
// not in CSS).

import { gsap, reducedMotion } from './gsap';

export function initReveal() {
  const items = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
  if (!items.length || reducedMotion()) return;
  const below = items.filter((el) => el.getBoundingClientRect().top > window.innerHeight);
  if (!below.length) return;
  gsap.set(below, { opacity: 0, y: 32 });
  const io = new IntersectionObserver((entries) => {
    const arriving = entries.filter((e) => e.isIntersecting).map((e) => e.target as HTMLElement);
    if (!arriving.length) return;
    arriving.forEach((el) => io.unobserve(el));
    gsap.to(arriving, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08, clearProps: 'opacity,transform' });
  }, { rootMargin: '0px 0px -10% 0px' });
  below.forEach((el) => io.observe(el));
}
