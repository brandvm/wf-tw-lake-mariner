// Imported by gsap.ts before the GSAP plugins (lessons/js.md › Bundled GSAP
// plugins register themselves on Webflow's window.gsap). A plugin file ends
// with `_getGSAP() && gsap.registerPlugin(Plugin)`, which falls back to
// window.gsap: Webflow's own copy when the site has interactions. Hiding it
// while the plugins evaluate keeps them off Webflow's core; gsap-restore.ts
// puts it back. ES module evaluation order makes this run first.
const w = window as unknown as { gsap?: unknown; __wfcHiddenGsap?: unknown };

if ('gsap' in w) {
  w.__wfcHiddenGsap = w.gsap;
  delete w.gsap;
}

export {};
