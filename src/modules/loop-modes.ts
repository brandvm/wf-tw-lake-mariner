// Loop Modes (Closed-Loop Cooling › Inside the Loop): one frame, two looping
// diagram videos (warmer days: chillers on / below ~60°F: heat exchangers
// only) and a tab per video. The active video fades in and plays while the
// frame is on screen; the modes alternate every data-loop-modes ms (default
// 8000, one loop of the animation) until a tab is clicked, then they stay.
// Hooks: data-loop-modes (value = ms) › data-loop-tab buttons (role=tab) and
// data-loop-video elements, in the same order. State: data-loop-state="on"
// on the root, data-active on the active video, aria-selected on the tabs.
// Reduced motion: nothing plays and nothing alternates; the tabs switch
// between the two posters.

import { reducedMotion } from './gsap';

export function initLoopModes() {
  document.querySelectorAll<HTMLElement>('[data-loop-modes]').forEach((root) => {
    const tabs = [...root.querySelectorAll<HTMLButtonElement>('[data-loop-tab]')];
    const videos = [...root.querySelectorAll<HTMLVideoElement>('[data-loop-video]')];
    if (!tabs.length || tabs.length !== videos.length) return;
    const interval = Number(root.dataset.loopModes) || 8000;
    const still = reducedMotion();
    let active = 0;
    let inView = false;
    let pinned = false;
    let timer = 0;

    videos.forEach((video) => {
      // Webflow writes the boolean attributes with a value; set the
      // properties too so autoplay rules see a muted inline video.
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
    });

    const play = () => {
      videos.forEach((video, i) => {
        if (i === active && inView && !still) {
          if (video.preload === 'none') video.preload = 'auto';
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    };

    const schedule = () => {
      window.clearTimeout(timer);
      if (pinned || still || !inView) return;
      timer = window.setTimeout(() => select((active + 1) % tabs.length), interval);
    };

    const select = (index: number) => {
      active = index;
      tabs.forEach((tab, i) => {
        tab.setAttribute('aria-selected', String(i === index));
        tab.tabIndex = i === index ? 0 : -1;
      });
      videos.forEach((video, i) => {
        video.toggleAttribute('data-active', i === index);
        if (i === index) video.currentTime = 0;
      });
      play();
      schedule();
    };

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => {
        pinned = true;
        select(i);
      });
      tab.addEventListener('keydown', (event) => {
        const to = ({ ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 } as Record<string, number>)[event.key];
        if (to === undefined) return;
        event.preventDefault();
        const next = (to + tabs.length) % tabs.length;
        tabs[next].focus();
        pinned = true;
        select(next);
      });
    });

    new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      play();
      schedule();
    }, { threshold: 0.25 }).observe(root);

    root.dataset.loopState = 'on';
    select(0);
  });
}
