// Entry point. Keep this file a manifest: one run() call per module.
// Feature code lives in src/modules/<name>.ts and exports an init
// function that no-ops when its selector is absent from the page.
import { initAriaRoles } from './modules/aria-roles';
import { initEnvironmentSwitcher } from './modules/environment-switcher';
import { initPlaceholders } from './modules/placeholders';
import { initUniqueFormIds } from './modules/unique-form-ids';
import type Lenis from 'lenis';
import { initSmoothScroll } from './modules/smooth-scroll';
import { initIntro } from './modules/intro';
import { initAnchorScroll } from './modules/anchor-scroll';
import { initYear } from './modules/year';
import { initStyleGuideNav } from './modules/style-guide-nav';
import { initNav } from './modules/nav';
import { initNavState } from './modules/nav-state';
import { initAnnouncement } from './modules/announcement';
import { initAccordions } from './modules/accordion';
import { initTabs } from './modules/tabs';
import { initHScroll } from './modules/hscroll';
import { initTextFill } from './modules/text-fill';
import { initParallax } from './modules/parallax';
import { initCountUp } from './modules/count-up';
import { initCursorButton } from './modules/cursor-button';
import { initHeroSequence } from './modules/hero-sequence';
import { initScrollFx } from './modules/scroll-fx';
import { initBandInset } from './modules/band-inset';
import { initSteps } from './modules/steps';
import { initLightbox } from './modules/lightbox';
import { initVideoModal } from './modules/video-modal';
import { initBenefits } from './modules/benefits';
import { initQuoteSlider } from './modules/quote-slider';
import { initCustomSelect } from './modules/custom-select';
import { initReveal } from './modules/reveal';
import { initCalendarLinks } from './modules/calendar-links';
import { initShare } from './modules/share';
import { initReadProgress } from './modules/read-progress';
import { initFollowFan } from './modules/follow-fan';

// Each module runs in isolation: one that throws is logged and skipped,
// and every module after it still initializes.
function run(name: string, init: () => void) {
  try {
    init();
  } catch (error) {
    console.error(`[wfc] ${name} failed to initialize`, error);
  }
}

function boot() {
  // Release the pre-paint scroll lock set by loader.html first, before any
  // module measures the page — smooth-scroll libraries such as Lenis read
  // the scroll height at init and get ~0 while body is still locked. The
  // head snippet also has a fallback timeout.
  document.documentElement.classList.remove('is-loading');

  run('environment-switcher', initEnvironmentSwitcher);
  // Starter fixes for markup Webflow publishes (conventions.md §9–11).
  run('aria-roles', initAriaRoles);
  run('placeholders', initPlaceholders);
  run('unique-form-ids', initUniqueFormIds);

  // Lenis measures the page when it starts, so it runs after the lock is
  // released; the modules that scroll or lock the page get its instance
  // (never window.lenis, lessons/js.md).
  let lenis: Lenis | null = null;
  run('smooth-scroll', () => { lenis = initSmoothScroll(); });
  run('intro', () => initIntro(lenis));
  run('anchor-scroll', () => initAnchorScroll(lenis ?? undefined));
  run('year', initYear);
  run('style-guide-nav', initStyleGuideNav);
  run('nav', () => initNav(lenis));
  run('nav-state', initNavState);
  run('announcement', initAnnouncement);
  run('accordion', initAccordions);
  run('tabs', () => initTabs(lenis));
  run('hscroll', initHScroll);
  run('text-fill', initTextFill);
  run('parallax', initParallax);
  run('count-up', initCountUp);
  run('cursor-button', initCursorButton);
  run('hero-sequence', initHeroSequence);
  run('scroll-fx', initScrollFx);
  run('band-inset', initBandInset);
  run('steps', initSteps);
  run('lightbox', initLightbox);
  run('video-modal', initVideoModal);
  run('benefits', initBenefits);
  run('quote-slider', initQuoteSlider);
  run('custom-select', initCustomSelect);
  run('reveal', initReveal);
  run('calendar-links', initCalendarLinks);
  run('share', initShare);
  run('read-progress', initReadProgress);
  run('follow-fan', initFollowFan);
  // Finsweet List (News and Events filters) joins when the News page is built.
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
