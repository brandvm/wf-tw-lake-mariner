// Text fill on scroll, letter by letter (the findrealestate.com heading
// treatment): every letter starts faint and fills to the text colour as the
// text scrolls up the screen, with a soft edge a few letters wide, from the
// moment the text's top reaches 88% of the viewport height until its bottom
// reaches 45%. Hook: data-text-fill on the text element. Letters are wrapped
// at runtime (each word stays one unbreakable group), so Webflow keeps plain
// text and the two-tone span is the no-script and reduced-motion look.
// Screen readers get the text once: the wrapped copy is aria-hidden and a
// visually hidden copy of the original text sits next to it.

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)');
const START = 0.88;
const END = 0.45;
const SOFT = 6; // letters in the soft edge
const MIN = 0.22; // opacity of a letter not yet filled

function wrapLetters(el: HTMLElement) {
  const letters: HTMLElement[] = [];
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  nodes.forEach((node) => {
    const frag = document.createDocumentFragment();
    (node.textContent ?? '').split(/(\s+)/).forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) {
        frag.append(part);
        return;
      }
      const word = document.createElement('span');
      word.dataset.fillWord = '';
      [...part].forEach((ch) => {
        const letter = document.createElement('span');
        letter.dataset.fillLetter = '';
        letter.textContent = ch;
        letters.push(letter);
        word.append(letter);
      });
      frag.append(word);
    });
    node.replaceWith(frag);
  });
  return letters;
}

export function initTextFill() {
  if (REDUCED.matches) return;
  const items = [...document.querySelectorAll<HTMLElement>('[data-text-fill]')].map((el) => {
    const spoken = document.createElement('span');
    spoken.className = 'sr-only';
    spoken.textContent = el.textContent ?? '';
    const visual = document.createElement('span');
    visual.setAttribute('aria-hidden', 'true');
    while (el.firstChild) visual.append(el.firstChild);
    el.append(spoken, visual);
    const letters = wrapLetters(visual);
    el.dataset.textFillState = 'on';
    return { el, letters, last: -1 };
  });
  if (!items.length) return;

  let frameId = 0;
  const update = () => {
    frameId = 0;
    const vh = window.innerHeight;
    items.forEach((item) => {
      const rect = item.el.getBoundingClientRect();
      if (rect.bottom < -vh || rect.top > vh * 2) return;
      const progress = Math.min(1, Math.max(0, (vh * START - rect.top) / (vh * START - vh * END + rect.height)));
      const head = progress * (item.letters.length + SOFT);
      const key = Math.round(head * 4);
      if (key === item.last) return;
      item.last = key;
      item.letters.forEach((letter, i) => {
        const v = Math.min(1, Math.max(0, (head - i) / SOFT));
        letter.style.opacity = (MIN + (1 - MIN) * v).toFixed(3);
      });
    });
  };
  window.addEventListener('scroll', () => { if (!frameId) frameId = requestAnimationFrame(update); }, { passive: true });
  window.addEventListener('resize', update);
  update();
}
