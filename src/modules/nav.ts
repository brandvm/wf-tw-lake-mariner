// Nav: the two dropdowns (desktop) and the full-screen menu sheet (below
// 992px). Hooks: data-nav on G | Nav W, data-nav-toggle on the menu
// button, data-nav-dropdown / data-nav-dropdown-toggle on each dropdown.
// State goes on data-state="open"; the CSS for it is js-state repo CSS.
// Takes the Lenis instance (or null) to lock scrolling under the sheet.

import type Lenis from 'lenis';

const MOBILE = window.matchMedia('(max-width: 991px)');

export function initNav(lenis: Lenis | null = null) {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  if (!nav) return;
  const toggle = nav.querySelector<HTMLButtonElement>('[data-nav-toggle]');
  const dropdowns = [...nav.querySelectorAll<HTMLElement>('[data-nav-dropdown]')];

  const setDropdown = (dropdown: HTMLElement, open: boolean) => {
    dropdown.dataset.state = open ? 'open' : 'closed';
    dropdown.querySelector('[data-nav-dropdown-toggle]')?.setAttribute('aria-expanded', String(open));
  };
  const closeDropdowns = (except?: HTMLElement) =>
    dropdowns.forEach((d) => d !== except && setDropdown(d, false));

  const setSheet = (open: boolean) => {
    nav.dataset.state = open ? 'open' : 'closed';
    toggle?.setAttribute('aria-expanded', String(open));
    toggle?.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
    // Lock the page under the sheet: through Lenis when it runs.
    if (lenis) {
      if (open) lenis.stop();
      else lenis.start();
    } else {
      document.documentElement.style.overflow = open ? 'hidden' : '';
    }
  };

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector<HTMLButtonElement>('[data-nav-dropdown-toggle]');
    button?.addEventListener('click', () => {
      if (MOBILE.matches) return; // the sheet shows every group open
      const open = dropdown.dataset.state !== 'open';
      closeDropdowns(dropdown);
      setDropdown(dropdown, open);
    });
    dropdown.addEventListener('focusout', (event) => {
      if (!dropdown.contains(event.relatedTarget as Node | null)) setDropdown(dropdown, false);
    });
  });

  toggle?.addEventListener('click', () => setSheet(nav.dataset.state !== 'open'));

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target as Node)) closeDropdowns();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const openDropdown = dropdowns.find((d) => d.dataset.state === 'open');
    if (openDropdown) {
      setDropdown(openDropdown, false);
      openDropdown.querySelector<HTMLElement>('[data-nav-dropdown-toggle]')?.focus();
    } else if (nav.dataset.state === 'open') {
      setSheet(false);
      toggle?.focus();
    }
  });
  MOBILE.addEventListener('change', () => {
    closeDropdowns();
    setSheet(false);
  });
}
