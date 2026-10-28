// Intro loader: on the first page of a visit a navy screen with the campus
// shield covers the page, lifts away like a curtain once the hero is ready,
// and the hero's parts rise in one after another.
// Hooks: data-page-loader on the loader, data-page-loader-mark on what
// fades first (the shield and line), data-intro on each hero part (in
// order), data-intro-media on the hero photo's frame (S Bg): the zoom runs
// there, not on the img, because GSAP sets the CSS scale and translate
// properties to none on what it animates, and the img's parallax uses them.
// Safety (conventions.md §16): the loader has a CSS backstop that removes
// it after 4 s if this never runs; the hero is never hidden by CSS, only by
// this module while the loader still covers it; reduced motion shows no
// loader at all (CSS); later pages of the visit skip it (head code adds
// html.intro-seen before first paint, so it never flashes).

import type Lenis from 'lenis';
import { gsap, reducedMotion } from './gsap';

const KEY = 'intro-seen';
const MIN_MS = 1000; // long enough for the shield and the line to read
const MAX_MS = 2600; // well inside the 4 s CSS backstop

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

export function initIntro(lenis: Lenis | null) {
  const loader = document.querySelector<HTMLElement>('[data-page-loader]');
  if (!loader) return;
  const seen = (() => {
    try {
      return sessionStorage.getItem(KEY) === '1';
    } catch {
      return false;
    }
  })();
  if (seen || reducedMotion()) {
    loader.remove();
    return;
  }
  try {
    sessionStorage.setItem(KEY, '1');
  } catch {
    // Storage blocked: the intro plays on every page; nothing else changes.
  }

  // This module owns the exit now: stop the CSS backstop.
  loader.style.animation = 'none';
  lenis?.stop();

  const parts = [...document.querySelectorAll<HTMLElement>('[data-intro]')];
  const media = document.querySelector<HTMLElement>('[data-intro-media]');
  const mediaImg = media?.querySelector('img');
  const mark = loader.querySelector('[data-page-loader-mark]');
  // Hidden only now, while the loader covers them.
  gsap.set(parts, { y: 32, opacity: 0 });
  if (media) gsap.set(media, { scale: 1.12 });

  const ready = Promise.all([
    wait(MIN_MS),
    document.fonts?.ready ?? Promise.resolve(),
    mediaImg?.decode?.().catch(() => undefined) ?? Promise.resolve(),
  ]);

  Promise.race([ready, wait(MAX_MS)]).then(() => {
    gsap
      .timeline({
        onComplete: () => {
          loader.remove();
          gsap.set([...parts, media].filter(Boolean), { clearProps: 'transform,opacity,scale,translate,rotate' });
          lenis?.start();
        },
      })
      .to(mark, { y: -16, opacity: 0, duration: 0.35, ease: 'power2.in' })
      .to(loader, { yPercent: -100, duration: 0.85, ease: 'power3.inOut' }, '-=0.05')
      .to(media, { scale: 1, duration: 1.4, ease: 'power2.out' }, '<')
      .to(parts, { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out' }, '<0.35');
  });
}
