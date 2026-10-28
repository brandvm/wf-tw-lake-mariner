// Nav on scroll (pattern from brandvm/marketcap src/modules/nav-state.ts).
//   · The bar scrolls away with the page (G | Nav W is absolute).
//   · Scrolling up brings it back: data-nav-up fixes it to the top as a
//     solid white bar with dark text, once the page has moved up UP_AFTER px
//     with the bar's own spot off screen. Scrolling down, or reaching the
//     top, drops it and the bar goes back to its place in the page.
//   · While the menu sheet is open nothing changes.
// Markup: [data-nav] (G | Nav W). State: data-nav-up (js-state repo CSS).

const UP_AFTER = 24;
const DOWN_AFTER = 8;

export function initNavState() {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  if (!nav) return;
  let lastY = window.scrollY;
  let turn = lastY;
  let goingUp = false;
  const setUp = (value: boolean) => nav.toggleAttribute('data-nav-up', value);
  const onScroll = () => {
    const y = window.scrollY;
    if (y === lastY) return;
    const up = y < lastY;
    if (up !== goingUp) {
      goingUp = up;
      turn = lastY;
    }
    lastY = y;
    if (nav.dataset.state === 'open') return;
    if (y <= 0) setUp(false);
    else if (up && turn - y >= UP_AFTER && y > nav.offsetHeight * 2) setUp(true);
    else if (!up && y - turn >= DOWN_AFTER) setUp(false);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}
