// News posts that link out: a card link with a non-empty
// data-external-url (bound in Webflow to the News Posts field "External
// Article URL") goes to that URL in a new tab instead of the post's own
// page. Its card's arrow icon turns into ↗ and the link's label says it
// opens in a new tab. An empty attribute (the field not filled) leaves the
// link as Webflow published it, /news/<slug>; if that href already goes to
// another site, the card only gets the ↗ cue and label.
//
// Used on the Post Card Link in the /news grid, the Featured lead and side
// lists and Related articles on the News template. Finsweet List moves the
// same card elements around, so the attributes set here stay; cards added
// to a list later are handled as they arrive.

const SELECTOR = 'a[data-external-url]';

function parse(url: string): URL | null {
  try {
    const parsed = new URL(url, location.href);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:' ? parsed : null;
  } catch {
    return null;
  }
}

function apply(link: HTMLAnchorElement) {
  if (link.dataset.externalApplied === 'true') return;
  const url = link.dataset.externalUrl?.trim() ?? '';
  // Empty field: keep Webflow's href, unless the Designer already points the
  // card at another site (Muskie binds its cards to Source URL), which only
  // gets the same new-tab cue.
  const parsed = url ? parse(url) : parse(link.getAttribute('href') ?? '');
  if (!parsed || (!url && parsed.host === location.host)) return;
  link.href = parsed.href;
  link.target = '_blank';
  link.rel = 'noopener';
  link.dataset.externalApplied = 'true';
  const label = link.getAttribute('aria-label');
  if (label) link.setAttribute('aria-label', `${label} (opens in a new tab)`);
  link.closest('.post-card')?.querySelectorAll('.ph-arrow-right').forEach((icon) => {
    icon.classList.replace('ph-arrow-right', 'ph-arrow-up-right');
  });
}

function applyWithin(root: ParentNode) {
  root.querySelectorAll<HTMLAnchorElement>(SELECTOR).forEach(apply);
}

export function initExternalLinks() {
  const links = document.querySelectorAll(SELECTOR);
  if (!links.length) return;
  applyWithin(document);
  // Lists whose cards Finsweet (or Webflow) may add after boot.
  const lists = new Set<Element>();
  links.forEach((link) => {
    const list = link.closest('.w-dyn-items');
    if (list) lists.add(list);
  });
  const observer = new MutationObserver((records) => {
    records.forEach((record) => record.addedNodes.forEach((node) => {
      if (node instanceof HTMLAnchorElement && node.matches(SELECTOR)) apply(node);
      else if (node instanceof Element) applyWithin(node);
    }));
  });
  lists.forEach((list) => observer.observe(list, { childList: true }));
}
