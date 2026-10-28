// Parallax: a photo drifts against the scroll inside its frame. Hook:
// data-parallax on the img (its parent clips it). The image is scaled up a
// little (js-state CSS) so the drift never shows an edge. data-parallax="x"
// drifts sideways instead, against the image's position across the screen
// (the cards in the pinned Explore rail move sideways, not up).
// Off with reduced motion. Uses the `translate` property, so a hover
// `scale` on the same image still works.

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)');
const AMOUNT = 0.06; // of the frame's size, each way

export function initParallax() {
  if (REDUCED.matches) return;
  const images = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
  if (!images.length) return;
  images.forEach((img) => (img.dataset.parallaxState = 'on'));

  let frameId = 0;
  const update = () => {
    frameId = 0;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    images.forEach((img) => {
      const frame = (img.parentElement ?? img).getBoundingClientRect();
      if (img.dataset.parallax === 'x') {
        if (frame.right < 0 || frame.left > vw) return;
        // -1 when the frame enters on the right, 1 when it leaves on the left.
        const p = 1 - ((frame.left + frame.width / 2) / (vw / 2));
        img.style.translate = `${(p * AMOUNT * frame.width).toFixed(1)}px 0`;
      } else {
        if (frame.bottom < 0 || frame.top > vh) return;
        // -1 when the frame enters at the bottom, 1 when it leaves at the top.
        const p = 1 - ((frame.top + frame.height / 2) / (vh / 2));
        img.style.translate = `0 ${(p * AMOUNT * frame.height).toFixed(1)}px`;
      }
    });
  };
  window.addEventListener('scroll', () => { if (!frameId) frameId = requestAnimationFrame(update); }, { passive: true });
  window.addEventListener('resize', update);
  update();
}
