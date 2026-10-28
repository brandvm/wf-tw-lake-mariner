// The current year in the footer's copyright line: <span data-year>2026</span>.
// The published text stays as a fallback when scripts don't run.
export function initYear() {
  const year = String(new Date().getFullYear());
  document.querySelectorAll<HTMLElement>('[data-year]').forEach((el) => {
    el.textContent = year;
  });
}
