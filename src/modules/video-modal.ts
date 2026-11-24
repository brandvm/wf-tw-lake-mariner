// Video Modal: a [data-video-open] link opens a <dialog> that plays the video
// in its data-video-src: a YouTube or Vimeo link as copied from the browser
// (watch?v=, youtu.be/, shorts/, vimeo.com/<id>) or an embed URL; page links
// are turned into embed URLs and autoplay is added. A video file (.mp4, .webm,
// .mov, .m4v, e.g. a Webflow asset URL) plays in a native <video> with
// controls; data-video-captions (a .vtt URL) adds its captions track, fetched
// into a blob URL so a captions file on another host needs no crossorigin
// attribute on the video.
// Without a src the dialog says the video is coming (HANDOFF video list).
// The close button, Escape or a click outside the frame closes it; the
// player is removed on close so the sound stops. Page scroll pauses while
// it is open and focus goes back to the link.
// Markup: <a href="…" data-video-open data-video-src="…" data-video-title="…"
//   data-video-captions="…">;
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
    if (src && isVideoFile(src)) {
      playFile(frame, src, title, link.dataset.videoCaptions?.trim());
    } else if (src) {
      const url = embedUrl(src);
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

// A page link to a video (what an editor copies from the address bar) as the
// URL its player embeds from. YouTube goes through youtube-nocookie.com, so no
// cookies are set until the visitor plays it. Anything else is used as given.
function embedUrl(src: string) {
  const url = new URL(src, location.href);
  const host = url.hostname.replace(/^(www\.|m\.)/, '');
  let id = '';
  if (host === 'youtu.be') id = url.pathname.slice(1);
  else if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
    const parts = url.pathname.split('/').filter(Boolean);
    id = url.searchParams.get('v') || (['shorts', 'embed', 'live'].includes(parts[0]) ? parts[1] : '') || '';
  }
  if (id) {
    const embed = new URL(`https://www.youtube-nocookie.com/embed/${id.split(/[?&/]/)[0]}`);
    const start = url.searchParams.get('t') || url.searchParams.get('start');
    if (start) embed.searchParams.set('start', String(parseInt(start, 10) || 0));
    embed.searchParams.set('rel', '0');
    return embed;
  }
  if (host === 'vimeo.com') {
    const vimeoId = url.pathname.split('/').filter(Boolean).find((part) => /^\d+$/.test(part));
    if (vimeoId) return new URL(`https://player.vimeo.com/video/${vimeoId}`);
  }
  return url;
}

function isVideoFile(src: string) {
  return /\.(mp4|webm|mov|m4v)$/i.test(new URL(src, location.href).pathname);
}

// A native player for a self-hosted file. Autoplay with sound is allowed here
// because the dialog opens from a click; if the browser still refuses, the
// controls stay for the visitor to press play.
function playFile(frame: HTMLElement, src: string, title: string, captions?: string) {
  const video = document.createElement('video');
  video.className = 'video-modal-iframe';
  video.src = src;
  video.controls = true;
  video.playsInline = true;
  video.preload = 'auto';
  video.setAttribute('aria-label', title);
  frame.replaceChildren(video);
  if (captions) addCaptions(video, captions);
  video.play().catch(() => {});
}

async function addCaptions(video: HTMLVideoElement, url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) return;
    const blob = new Blob([await response.text()], { type: 'text/vtt' });
    if (!video.isConnected) return;
    const track = document.createElement('track');
    track.kind = 'captions';
    track.label = 'English';
    track.srclang = 'en';
    track.src = URL.createObjectURL(blob);
    video.append(track);
  } catch {
    // Captions are optional: the video plays without them.
  }
}
