// Lightbox (ported from the marketcap build): a [data-lightbox] trigger opens the image large
// in a <dialog> (top layer, focus kept inside, Escape closes), with a row of
// thumbnails of the whole set underneath. The image fits the space left
// above the thumbnails, 1em clear of the viewport edges.
//   · The set is the group's [data-lightbox-item]s — in Webflow a hidden
//     Collection List of the project's multi-image field, so the popup can
//     show more images than the page — or, without those, its triggers.
//   · Opening starts on the clicked image; the side arrows, thumbnails and
//     the ← → keys switch it (arrows and thumbnails hide for a single image).
// Rich text: in a [data-lightbox-rich] block (a CMS body), each image is
// wrapped in a button[data-lightbox] here and the block is the group, so
// the editors' images open in the lightbox with no markup of their own.
// Markup: [data-lightbox-group] › button[data-lightbox] holding an <img>;
// optional img[data-lightbox-item] elements (hidden) for the full set;
// optional data-full on an <img> for a larger file. Page scroll pauses.
import { gsap, reducedMotion } from './gsap';
import { lenis } from './smooth-scroll';

const imgOf = (el: Element) => (el instanceof HTMLImageElement ? el : el.querySelector('img'));
const srcOf = (img: HTMLImageElement) => img.dataset.full ?? img.getAttribute('src') ?? '';

function wrapRichImages() {
  document.querySelectorAll<HTMLElement>('[data-lightbox-rich]').forEach((block) => {
    block.setAttribute('data-lightbox-group', '');
    block.querySelectorAll<HTMLImageElement>('img').forEach((img) => {
      if (img.closest('[data-lightbox]')) return;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'lightbox-trigger';
      button.dataset.lightbox = '';
      button.setAttribute('aria-label', `Enlarge image${img.alt ? `: ${img.alt}` : ''}`);
      img.replaceWith(button);
      button.append(img);
    });
  });
}

export function initLightbox() {
  wrapRichImages();
  const triggers = Array.from(document.querySelectorAll<HTMLElement>('[data-lightbox]'));
  if (!triggers.length) return;

  const dialog = document.createElement('dialog');
  dialog.className = 'lightbox';
  dialog.setAttribute('aria-label', 'Image viewer');
  dialog.innerHTML = `
    <div class="lightbox-stage"><img class="lightbox-media" alt=""></div>
    <div class="lightbox-thumbs" role="group" aria-label="All images"></div>
    <button class="lightbox-button is-prev" type="button" aria-label="Previous image">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true"><path d="M9 2L4 7l5 5"/></svg>
    </button>
    <button class="lightbox-button is-next" type="button" aria-label="Next image">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true"><path d="M5 2l5 5-5 5"/></svg>
    </button>
    <button class="lightbox-button is-close" type="button" aria-label="Close">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true"><path d="M2 2l10 10M12 2L2 12"/></svg>
    </button>`;
  document.body.append(dialog);
  const media = dialog.querySelector<HTMLImageElement>('.lightbox-media')!;
  const strip = dialog.querySelector<HTMLElement>('.lightbox-thumbs')!;
  const prevBtn = dialog.querySelector<HTMLButtonElement>('.lightbox-button.is-prev')!;
  const nextBtn = dialog.querySelector<HTMLButtonElement>('.lightbox-button.is-next')!;
  let set: HTMLImageElement[] = [];
  let index = 0;
  let opener: HTMLElement | null = null;

  const show = (i: number, animate = true) => {
    index = (i + set.length) % set.length;
    const img = set[index];
    media.src = srcOf(img);
    media.alt = img.alt;
    strip.querySelectorAll('.lightbox-thumb').forEach((t, n) => {
      t.classList.toggle('is-active', n === index);
      t.setAttribute('aria-pressed', String(n === index));
      if (n === index) (t as HTMLElement).scrollIntoView({ block: 'nearest', inline: 'nearest' });
    });
    if (animate && !reducedMotion()) gsap.fromTo(media, { opacity: 0.4 }, { opacity: 1, duration: 0.35 });
  };

  const open = (trigger: HTMLElement) => {
    opener = trigger;
    const group = trigger.closest('[data-lightbox-group]') ?? document.body;
    const items = Array.from(group.querySelectorAll<HTMLElement>('[data-lightbox-item]'));
    set = (items.length ? items : Array.from(group.querySelectorAll<HTMLElement>('[data-lightbox]')))
      .map(imgOf)
      .filter((img): img is HTMLImageElement => !!img);
    const clicked = imgOf(trigger);
    const start = Math.max(0, set.findIndex((img) => clicked && srcOf(img) === srcOf(clicked)));
    if (clicked && !set.some((img) => srcOf(img) === srcOf(clicked))) set.unshift(clicked);

    strip.innerHTML = '';
    strip.hidden = set.length < 2;
    prevBtn.hidden = nextBtn.hidden = set.length < 2;
    set.forEach((img, n) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'lightbox-thumb';
      b.setAttribute('aria-label', `Image ${n + 1}: ${img.alt}`);
      b.innerHTML = `<img class="lightbox-thumb-media" src="${srcOf(img)}" alt="">`;
      b.addEventListener('click', () => show(n));
      strip.append(b);
    });

    dialog.showModal();
    show(start, false);
    lenis?.stop();
    if (!reducedMotion()) gsap.fromTo(media, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.45, ease: 'power3.out' });
  };

  triggers.forEach((t) => t.addEventListener('click', () => open(t)));
  dialog.querySelector('.lightbox-button.is-close')!.addEventListener('click', () => dialog.close());
  prevBtn.addEventListener('click', () => show(index - 1));
  nextBtn.addEventListener('click', () => show(index + 1));
  // A click on the backdrop area (the dialog or the stage, not the image) closes it.
  dialog.addEventListener('click', (event) => {
    const t = event.target as Element;
    if (t === dialog || t.classList.contains('lightbox-stage')) dialog.close();
  });
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') show(index + 1);
    else if (event.key === 'ArrowLeft') show(index - 1);
  });
  dialog.addEventListener('close', () => {
    lenis?.start();
    opener?.focus();
  });
}
