// One shared GSAP with ScrollTrigger registered. Every module imports gsap
// from here, never from 'gsap' directly, so they all share the ticker that
// drives Lenis (smooth-scroll.ts) and plugins are registered once.
// Recipe: webflow-build recipes/smooth-scroll.
// gsap-hide and gsap-restore keep the plugins off Webflow's window.gsap
// (lessons/js.md); keep this import order.
import './gsap-hide';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './gsap-restore';

gsap.registerPlugin(ScrollTrigger);

/** Read at call time: the setting can change while the page is open. */
export const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

export { gsap, ScrollTrigger };
