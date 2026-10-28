// Read progress: [data-read-progress] (a line fixed under the top edge)
// fills as the article is read, from the top of the page to the end of
// [data-read-end] (or the main content). scaleX only; none with reduced
// motion (the line stays empty).

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)');

export function initReadProgress() {
  const bar = document.querySelector<HTMLElement>('[data-read-progress]');
  if (!bar || REDUCED.matches) return;
  const end = document.querySelector<HTMLElement>('[data-read-end]') ?? document.querySelector<HTMLElement>('.article-main') ?? document.body;
  let frameId = 0;
  const update = () => {
    frameId = 0;
    const bottom = end.getBoundingClientRect().bottom + window.scrollY - window.innerHeight;
    const p = bottom > 0 ? Math.min(1, Math.max(0, window.scrollY / bottom)) : 1;
    bar.style.transform = `scaleX(${p.toFixed(4)})`;
  };
  window.addEventListener('scroll', () => { if (!frameId) frameId = requestAnimationFrame(update); }, { passive: true });
  window.addEventListener('resize', update);
  update();
}
