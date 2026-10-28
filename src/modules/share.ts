// Share buttons: [data-share="facebook|linkedin|x"] links get the share URL
// for this page (its canonical URL and title); [data-share="native"] opens
// the device's share sheet, or copies the link where there is none and says
// so in its label for a moment. The links open in a new tab.

const targets: Record<string, (url: string, title: string) => string> = {
  facebook: (url) => `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  linkedin: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
  x: (url, title) => `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
};

export function initShare() {
  const buttons = [...document.querySelectorAll<HTMLElement>('[data-share]')];
  if (!buttons.length) return;
  const pageUrl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href ?? location.href.split('#')[0];
  const title = document.title;
  buttons.forEach((el) => {
    const kind = el.dataset.share ?? '';
    const build = targets[kind];
    if (build && el instanceof HTMLAnchorElement) {
      el.href = build(encodeURIComponent(pageUrl), encodeURIComponent(title));
      el.target = '_blank';
      el.rel = 'noopener';
      return;
    }
    if (kind !== 'native') return;
    const label = el.getAttribute('aria-label') ?? 'Share';
    el.addEventListener('click', async () => {
      if (navigator.share) {
        try { await navigator.share({ title, url: pageUrl }); } catch { /* dismissed */ }
        return;
      }
      try {
        await navigator.clipboard.writeText(pageUrl);
        el.setAttribute('aria-label', 'Link copied');
        el.dataset.shareState = 'copied';
        setTimeout(() => { el.setAttribute('aria-label', label); delete el.dataset.shareState; }, 2000);
      } catch { /* no clipboard */ }
    });
  });
}
