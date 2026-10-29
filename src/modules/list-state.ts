// List state: the parts of the News and Events lists that Finsweet List
// (src/modules/finsweet.ts) doesn't do. Works on any Finsweet list with an
// fs-list-instance, so every list page uses the same markup:
//   data-list-root on the section that holds the list: it takes
//     data-list-state="filtered" while a filter or search of that instance
//     is on (Clear All shows, styles.css), "all" otherwise;
//   items that Finsweet adds to the list (a filter, sort or Show more) rise
//     in, as in the prototype (not with reduced motion).
// The state is read from the controls themselves (a checked radio with a
// value, a text field with text), so it needs nothing from Finsweet's API.

import { gsap, reducedMotion } from './gsap';

export function initListState() {
  document.querySelectorAll<HTMLElement>('[data-list-root]').forEach((root) => {
    const list = root.querySelector<HTMLElement>('[fs-list-element="list"]');
    const instance = list?.getAttribute('fs-list-instance');
    if (!list || !instance) return;
    const forms = [...document.querySelectorAll<HTMLElement>(`[fs-list-element="filters"][fs-list-instance="${instance}"]`)];

    const update = () => {
      const fields = forms.flatMap((f) => [...f.querySelectorAll<HTMLInputElement>('input[fs-list-field]')]);
      const filtered = fields.some((input) =>
        input.type === 'radio' || input.type === 'checkbox'
          ? input.checked && (input.getAttribute('fs-list-value') ?? input.value) !== ''
          : input.value.trim() !== '',
      );
      root.dataset.listState = filtered ? 'filtered' : 'all';
    };
    forms.forEach((f) => {
      f.addEventListener('input', update);
      f.addEventListener('change', update);
    });
    // Clear All resets the fields without an input event; read them after it.
    document.addEventListener('click', (event) => {
      if ((event.target as Element).closest(`[fs-list-element="clear"][fs-list-instance="${instance}"]`)) {
        requestAnimationFrame(update);
      }
    });
    update();

    if (reducedMotion()) return;
    new MutationObserver((records) => {
      const added = records.flatMap((r) => [...r.addedNodes]).filter((n): n is HTMLElement => n instanceof HTMLElement);
      if (added.length) gsap.fromTo(added, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.06, clearProps: 'opacity,transform' });
    }).observe(list, { childList: true });
  });
}
