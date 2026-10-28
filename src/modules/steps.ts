// Steps (the findrealestate.com Steps pattern): the cards of a step list fill
// in turn — a card sits faint until its top passes 65% of the screen height,
// then stays full. The line in the sticky heading fills with the list and the
// counter shows the last card reached.
// Hooks: data-steps on the wrapper, data-step on each card, data-steps-bar
// (the line, scaleX), data-steps-count (the counter text).
// State: data-steps-state="on" on the wrapper, data-reached on cards.
// Reduced motion: no state, so every card is full; the line is full.

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)');
const LINE = 0.65; // where a card counts as reached, in screen heights

export function initSteps() {
  document.querySelectorAll<HTMLElement>('[data-steps]').forEach((root) => {
    const steps = [...root.querySelectorAll<HTMLElement>('[data-step]')];
    const bar = root.querySelector<HTMLElement>('[data-steps-bar]');
    const count = root.querySelector<HTMLElement>('[data-steps-count]');
    if (!steps.length) return;
    if (REDUCED.matches) {
      if (bar) bar.style.transform = 'scaleX(1)';
      return;
    }
    root.dataset.stepsState = 'on';
    const list = steps[0].parentElement ?? root;

    let frameId = 0;
    const update = () => {
      frameId = 0;
      const line = window.innerHeight * LINE;
      let last = 0;
      steps.forEach((step, i) => {
        const reached = i === 0 || step.getBoundingClientRect().top < line;
        step.toggleAttribute('data-reached', reached);
        if (reached) last = i;
      });
      const rect = list.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (line - rect.top) / rect.height));
      if (bar) bar.style.transform = `scaleX(${progress.toFixed(4)})`;
      if (count) count.textContent = `[${last + 1}]`;
    };
    window.addEventListener('scroll', () => { if (!frameId) frameId = requestAnimationFrame(update); }, { passive: true });
    window.addEventListener('resize', update);
    update();
  });
}
