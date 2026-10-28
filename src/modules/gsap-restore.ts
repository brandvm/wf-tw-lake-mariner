// Imported by gsap.ts after the GSAP plugins: puts back the window.gsap that
// gsap-hide.ts set aside, so Webflow's interactions keep their own copy.
const w = window as unknown as { gsap?: unknown; __wfcHiddenGsap?: unknown };

if ('__wfcHiddenGsap' in w) {
  w.gsap = w.__wfcHiddenGsap;
  delete w.__wfcHiddenGsap;
}

export {};
