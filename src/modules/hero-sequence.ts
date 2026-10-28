// Home hero exit (from the findrealestate.com hero, without its logo stage):
// as the hero scrolls away, its headline block and facts lift and blur out
// and the photo darkens a little. No pin.
// Hooks: data-hero-seq on the section, data-hero-content (headline block),
// data-hero-facts (Fact Bar), data-hero-shade (the photo's overlay).
// Off with reduced motion.

import { gsap, reducedMotion } from './gsap';

export function initHeroSequence() {
  const section = document.querySelector<HTMLElement>('[data-hero-seq]');
  if (!section || reducedMotion()) return;
  const content = section.querySelector<HTMLElement>('[data-hero-content]');
  const facts = section.querySelector<HTMLElement>('[data-hero-facts]');
  const shade = section.querySelector<HTMLElement>('[data-hero-shade]');
  if (!content) return;

  // fromTo with immediateRender off: the intro loader animates the same
  // parts at load, and nothing here may overwrite that before a scroll.
  const tl = gsap.timeline({
    defaults: { ease: 'none', immediateRender: false },
    scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: 0.6 },
  });
  tl.fromTo(content, { y: 0, opacity: 1, filter: 'blur(0px)' }, { y: -120, opacity: 0, filter: 'blur(10px)', duration: 0.6 }, 0);
  if (facts) tl.fromTo(facts, { y: 0, opacity: 1 }, { y: 40, opacity: 0, duration: 0.4 }, 0);
  if (shade) tl.fromTo(shade, { opacity: 1 }, { opacity: 1, backgroundColor: 'rgba(17, 33, 53, 0.85)', duration: 1 }, 0);
}
