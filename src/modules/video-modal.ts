// Video Modal: a [data-video-open] link opens a <dialog> that plays the video
// in its data-video-src (a YouTube or Vimeo embed URL; autoplay is added).
// Without a src the dialog says the video is coming (HANDOFF video list).
// The close button, Escape or a click outside the frame closes it; the
// iframe is removed on close so the sound stops. Page scroll pauses while
// it is open and focus goes back to the link.
// Markup: <a href="…" data-video-open data-video-src="…" data-video-title="…">;
// the href is the no-script fallback (the video's page).

import { gsap, reducedMotion } from './gsap';
import { lenis } from './smooth-scroll';

export function initVideoModal() {
  const openers = [...document.querySelectorAll<HTMLElement>('[data-video-open]')];
  if (!openers.length) return;

  const dialog = document.createElement('dialog');
  dialog.className = 'video-modal';
  dialog.innerHTML = `
    <div class="video-modal-frame"></div>
    <button class="lightbox-button is-close" type="button" aria-label="Close video">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true"><path d="M2 2l10 10M12 2L2 12"/></svg>
    </button>`;
  document.body.append(dialog);
  const frame = dialog.querySelector<HTMLElement>('.video-modal-frame')!;
  let opener: HTMLElement | null = null;

  const open = (link: HTMLElement) => {
    opener = link;
    const src = link.dataset.videoSrc?.trim();
    const title = link.dataset.videoTitle || 'Video';
    dialog.setAttribute('aria-label', title);
    if (src) {
      const url = new URL(src, location.href);
      url.searchParams.set('autoplay', '1');
      frame.innerHTML = `<iframe class="video-modal-iframe" src="${url.href}" title="${title}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    } else {
      frame.innerHTML = '<div class="video-modal-note">Video coming soon</div>';
    }
    dialog.showModal();
    lenis?.stop();
    if (!reducedMotion()) gsap.fromTo(frame, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.45, ease: 'power3.out' });
  };

  openers.forEach((link) => link.addEventListener('click', (event) => {
    event.preventDefault();
    open(link);
  }));
  dialog.querySelector('.is-close')!.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => {
    frame.innerHTML = '';
    lenis?.start();
    opener?.focus();
  });
}
