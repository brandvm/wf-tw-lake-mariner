// Announcement bar: the close button removes the bar and remembers it for
// that message only. data-announcement="<id>" names the message; change
// the id when the message changes so it shows again.

const KEY = 'announcement-closed';

export function initAnnouncement() {
  const bar = document.querySelector<HTMLElement>('[data-announcement]');
  if (!bar) return;
  const id = bar.dataset.announcement || 'default';
  let closed: string | null = null;
  try {
    closed = localStorage.getItem(KEY);
  } catch {
    // Storage blocked: the bar shows, and closing still works for this page.
  }
  if (closed === id) {
    bar.remove();
    return;
  }
  bar.querySelector('[data-announcement-close]')?.addEventListener('click', () => {
    bar.remove();
    try {
      localStorage.setItem(KEY, id);
    } catch {
      // ignore
    }
  });
}
