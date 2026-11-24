// Live item counts for text like "7 questions" next to a Collection List.
// Hook: data-list-count on the text element. It counts the Collection List
// items (.w-dyn-item, or the selector given as the attribute's value) inside
// the element's section and writes the number into the text:
//   <p data-list-count data-count-noun="question">7 questions · data from …</p>
// With data-count-noun, the first "<number> <noun(s)>" is rewritten with
// the right plural ("1 question", "4 questions"; data-count-plural sets an
// irregular plural); without it, only the first number changes. The rest of
// the text stays as typed, and the published text is the fallback when
// scripts don't run (the Designer canvas shows it too). Counted once at boot,
// before Finsweet List filters anything, so it is the total, not the matches.

export function initListCount() {
  document.querySelectorAll<HTMLElement>('[data-list-count]').forEach((el) => {
    const scope = el.closest('section') ?? document.body;
    const selector = el.dataset.listCount?.trim() || '.w-dyn-item';
    const count = scope.querySelectorAll(selector).length;
    writeCount(el, count);
  });
}

function writeCount(el: HTMLElement, count: number) {
  const noun = el.dataset.countNoun?.trim();
  const plural = el.dataset.countPlural?.trim() || (noun ? `${noun}s` : '');
  const pattern = noun
    ? new RegExp(`\\d+(\\s+)(?:${escape(plural)}|${escape(noun)})\\b`, 'i')
    : /\d+/;
  const replacement = (_match: string, space = ' ') =>
    noun ? `${count}${space}${count === 1 ? noun : plural}` : String(count);

  // Rewrite inside the first text node that matches, so links or spans in
  // the line keep their markup.
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const text = node.nodeValue ?? '';
    if (pattern.test(text)) {
      node.nodeValue = text.replace(pattern, replacement);
      return;
    }
  }
}

function escape(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
