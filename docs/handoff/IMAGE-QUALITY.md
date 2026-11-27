# Image quality pass (2026-11-27)

Every image on the five campus sites, measured on staging, then the ones that
were soft or over-compressed replaced with sharper files from the Figma
originals. Started from Community Impact › "Our Team, In Their Own Words"
(`#testimonials`), which the user flagged.

## How it was measured

A Playwright pass over every page and CMS item reachable from `/`, `/news` and
`/events` on each `<site>.webflow.io` (11–32 pages per site), at 1440 px @2× and
390 px @3×, every lazy image forced to load. For each `<img>`, CSS background
and video poster: the file, its natural size and bytes, whether it has a
`srcset`, and the width it is drawn at in CSS px (for `object-fit: cover` the
width of the cropped image, so a tall hero or a parallax photo counts wider than
its box). Flagged: the largest source under 1.5× the largest drawn width, or a
photo under 0.25 bits per pixel (visible WebP/JPEG blocking).

Then each flagged image's source was looked up in Figma (`i5kBzV34Xa9qvV7I64FxFZ`,
Clean Pages, the campus rows): the topmost visible image fill, its natural size
and crop transform. The script and raw data are not kept in the repo (scratch);
the inventory below is the result.

## What changed

New files are in `Assets/image-upgrade-2026-11-27/` (WebP, `cwebp -m 6
-sharp_yuv`). The PO tab photos and the testimonial backgrounds had a dark navy
grade baked into the site files (the Figma frame's overlay, exported with the
photo). The new files keep that look: the Figma original, cropped with the
fill's own transform, then matched to the old file's tone (a per-channel fit
plus a smooth gain map, correlation ≥ 0.98 with the old file at thumbnail size).

| Image | Where | Before | After | srcset | Status |
| --- | --- | --- | --- | --- | --- |
| Testimonial › Jim Spoon background (`careers-quote-bg`) | Careers, CI (LH, LM) · CMS Testimonials | 1600×904, 73 KB | 1794×1013, 137 KB (Figma original, q88) | no (CMS) | ☑ JD MU LH CH · ☐ LM |
| Testimonial › Dan Heidemann | same | 1680×985, 34 KB (0.17 bpp) | 1680×985, 74 KB (lossless original, same grade, q90) | no (CMS) | ☑ JD MU LH CH · ☐ LM |
| Testimonial › Jesse Rohring | same | 1680×985, 43 KB (0.21 bpp) | 1680×985, 106 KB (Figma's current composite: photo + shade + cut-out, q90) | no (CMS) | ☑ JD MU LH CH · ☐ LM |
| Justified fire-trucks news cover | /news (Featured), every article's Related list | 768×513 PNG, 725 KB | 768×513 WebP, 101 KB | no (CMS) | ☑ JD |
| PO Highlight Tabs 1–5 (`po-tab-N`) | Project Overview | 1680×952, 212–481 KB | 2400×1360 (tab 3: 2007×1137), 89–317 KB | yes, after re-ingest | uploaded; swap needs the Designer bridge |
| Careers video poster | Careers › Meet our employees | 1600×871, 218 KB | 2400×1307, 111 KB | yes, after re-ingest | uploaded; swap needs the Designer bridge |
| CI employees poster | Community Impact (LM, LH) | 600×419, 32 KB | 1920×1080, 99 KB (first frame of the film) | yes, after re-ingest | file ready; swap needs the Designer bridge |
| Explore › Events card | Home, Project Overview | 1640×545, 195 KB | 2174×723, 114 KB | yes, after re-ingest | uploaded; swap needs the Designer bridge |
| Explore › News card | Home, Project Overview | 1100×763, 176 KB | 1840×1277, 152 KB | yes, after re-ingest | uploaded; swap needs the Designer bridge |
| LH topping-out poster | Lake Hawkeye › CI | 1600×901, 52 KB | 2400×1351, 93 KB | yes, after re-ingest | file ready; swap needs the Designer bridge |

Bytes above are the uploaded originals. Pages with `srcset` serve Webflow's
own `-p-500` … `-p-2000` variants to smaller screens, so phones download less
than these sizes.

The testimonial photos are drawn about 1,660 CSS px wide at 1440 (cover plus
parallax), which a 2× screen would want at ~3,300 px. Figma's sources stop at
1,639–1,794 px (they are video stills), so the gain here is the compression,
not the resolution. Sharper still needs the original stills or footage from the
client.

## Left as is, and why

- **No larger source.** Every campus hero and aerial (Justified 1024–1717 px,
  Muskie 1374–1448, Chesapeake 1671–1700): Figma holds exactly the file the
  site uses. Lake Mariner's PO hero (1627), Cooling hero (1339) and intro lake
  (1844), the Cooling step photos, Explore › Careers (1080), About TeraWulf, the
  PO cooling teaser and the CI grid photo likewise. These need originals from
  the client.
- **CI investment scene** (photo, smoke, cut-out): realigned today (447e779);
  the photo and cut-out must stay pixel-locked. Figma has 4094 px originals of
  both for a later rebuild of the pair.
- **News CMS covers.** A CMS image has no `srcset`, so one file serves the
  416 px /news card and the article cover; a 2000 px cover would cost /news its
  PageSpeed (its LCP is the Featured lead card). The covers are the publishers'
  own images (copies) or sample photos (Lake Mariner).
- **Already 2400 px** (homes, Careers, FAQ, CI heroes, Barker): flagged only
  because cover cropping on a tall viewport draws them wider than the box.
- **Smoke layers** (1024 px in Figma too) and the **Follow fan** (a 546×1024
  export, now static): soft by nature.

## Still to do

1. **Designer bridge, site by site.** Site assets get responsive variants only
   through `asset_tool › upload_image_by_url` with the Designer MCP app open
   (GOTCHAS 2026-11-24). For each site: open its Designer app link, then
   ingest the files above by URL (they are on Justified's CDN, see below),
   swap the PO tab images, the Careers/CI Video Frame posters and the Explore
   card images, publish, check `srcset` on the published `<img>`.
2. **Lake Mariner** (`webflow-tw-lake-mariner` needs signing in again with
   `/mcp`): the testimonials (CMS, no bridge needed) and the same swaps.

Uploaded files (Justified CDN, usable as the source URL for every site):

```text
https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b09ab4c50c018275670bcf8_po-tab-1-hd.webp
https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b09ab4c5e5646af311f7057_po-tab-2-hd.webp
https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b09ab4cdbceaaebdfefe3cf_po-tab-3-hd.webp
https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b09ab4d01ab7edde58aff95_po-tab-4-hd.webp
https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b09ab4d4640c24aeec80da5_po-tab-5-hd.webp
https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b09ab4df2fc6d65ebd1e591_careers-video-poster-hd.webp
https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b09ab4d2abdfe3abeeaf8c1_explore-events-hd.webp
https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b09ab4d4640c24aeec80de6_explore-news-hd.webp
https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b09ab4df2fc6d65ebd1e5ce_careers-quote-bg-hd.webp
https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b09ab4edbceaaebdfefe457_careers-testimonial-dan-heidemann-hd.webp
https://cdn.prod.website-files.com/6b05c58e6a2daeafb0769727/6b09ab4f858fc9e6795dae9e_careers-testimonial-jesse-rohring-hd.webp
```

These Justified copies have no variants (API upload without the Designer);
they are only a source URL. Once every site is swapped they can go at the
unused-assets cleanup.

## Inventory (flagged images, all five sites)

Sites: LM Lake Mariner, JD Justified, MU Muskie, LH Lake Hawkeye, CH
Chesapeake. "Shown" is the widest drawn width in CSS px at 1440 and at 390;
"Source ÷ shown" uses the largest file available (original or largest
`srcset` entry).

| File | Sites | Natural | Bytes | srcset | Shown 1440 / 390 (CSS px) | Source ÷ shown | Flag | Action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `careers-quote-bg.webp` | CH JD LH LM MU | 1600×904 | 73 KB | no | 1890 / 2219 | 0.72 | small | Re-encoded from the lossless Figma original 1794 px (q88); nothing larger exists |
| `careers-testimonial-dan-heidemann.webp` | CH JD LH LM MU | 1680×985 | 34 KB | no | 1822 / 2139 | 0.79 | over-compressed, small | Re-encoded from the lossless Figma original (q90); Figma has nothing larger than ~1700 px |
| `careers-testimonial-jesse-rohring.webp` | CH JD LH LM MU | 1680×985 | 43 KB | no | 1822 / 2139 | 0.79 | over-compressed, small | Re-encoded from the lossless Figma original (q90); Figma has nothing larger than ~1700 px |
| `careers-video-poster.jpg` | CH JD LH LM MU | 1600×871 | 218 KB | yes | 1450 / 555 | 1.10 | small | Upgraded: Figma original 3456 px → 2400 px |
| `ci-employees-poster.webp` | LH LM | 600×419 | 32 KB | yes | 1262 / 433 | 0.48 | small | Upgraded: first frame of the 1080p film (1920 px); was a 600 px stand-in |
| `ci-lh-topping-out.webp` | LH | 1600×901 | 52 KB | yes | 1402 / 538 | 1.14 | small | Upgraded: local original 3122 px → 2400 px |
| `explore-events.jpg` | CH JD LH LM MU | 1640×545 | 195 KB | yes | 1923 / 1551 | 0.85 | small | Upgraded: Figma original 2174 px |
| `explore-news.jpg` | CH JD LH LM MU | 1100×763 | 176 KB | yes | 921 / 741 | 1.19 | small | Upgraded: Figma original 2155 px → 1840 px |
| `po-tab-1.jpg` | CH JD LH LM MU | 1680×952 | 336 KB | yes | 1826 / 1713 | 0.92 | small | Upgraded: Figma original (3780–4096 px), same crop and grade → 2400 px (tab 3: 2007 px native) |
| `po-tab-2.jpg` | CH JD LH LM MU | 1680×952 | 265 KB | yes | 1826 / 1713 | 0.92 | small | Upgraded: Figma original (3780–4096 px), same crop and grade → 2400 px (tab 3: 2007 px native) |
| `po-tab-3.jpg` | CH JD LH LM MU | 1680×952 | 268 KB | yes | 1826 / 1713 | 0.92 | small | Upgraded: Figma original (3780–4096 px), same crop and grade → 2400 px (tab 3: 2007 px native) |
| `po-tab-4.jpg` | CH JD LH LM MU | 1680×952 | 212 KB | yes | 1826 / 1713 | 0.92 | small | Upgraded: Figma original (3780–4096 px), same crop and grade → 2400 px (tab 3: 2007 px native) |
| `po-tab-5.jpg` | JD LH LM MU | 1680×952 | 481 KB | yes | 1826 / 1713 | 0.92 | small | Upgraded: Figma original (3780–4096 px), same crop and grade → 2400 px (tab 3: 2007 px native) |
| `61b2e968-e382-41a4-98c0-ebc275051973.png` | JD | 768×513 | 725 KB | no | 1262 / 403 | 0.61 | small | CMS cover (Justified fire trucks): 725 KB PNG → 101 KB WebP, same 768 px (no larger source); done |
| `news-po-tab-2.webp` | LM | 1600×907 | 57 KB | no | 1262 / 403 | 1.27 | small | CMS cover: one file serves the /news card and the article (no srcset), so a larger file would cost /news PageSpeed; left (sample post, replaced before launch) |
| `aerial-home.jpg` | LM | 2400×1243 | 718 KB | yes | 1850 / 924 | 1.30 | small | Already 2400 px |
| `aerial-lh-home.webp` | LH | 1920×1168 | 217 KB | yes | 1946 / 1600 | 0.99 | small | No larger source (Figma 1920 px) |
| `careers-hero-careers.jpg` | CH JD LH LM MU | 2400×1600 | 400 KB | yes | 1682 / 1476 | 1.43 | small | Already 2400 px |
| `careers-openings.webp` | CH LH LM MU | 2400×1459 | 96 KB | yes | 1095 / 348 | 2.19 | over-compressed | Portal screenshot, flat colour: low bits per pixel is expected; left |
| `cde-home-aerial.webp` | CH | 1700×1035 | 243 KB | yes | 1902 / 1604 | 0.89 | small | No larger source: Figma holds the same file; needs originals from the client |
| `cde-home-hero.webp` | CH | 1671×1060 | 325 KB | yes | 1674 / 1720 | 0.97 | small | No larger source: Figma holds the same file; needs originals from the client |
| `ci-barker.jpg` | LM | 2400×1343 | 543 KB | yes | 2152 / 658 | 1.12 | small | Already 2400 px |
| `ci-grid-bg.webp` | JD LH LM MU | 1680×1270 | 288 KB | yes | 1656 / 1301 | 1.01 | small | No larger source (Figma 1734 px) |
| `ci-hero-ci.jpg` | CH JD LH LM MU | 2400×1020 | 390 KB | yes | 2491 / 2319 | 0.96 | small | Already 2400 px (enough; the ratio is the cover crop of a tall hero) |
| `ci-scene-cutout-fixed.webp` | CH JD LH MU | 2000×1269 | 61 KB | no | 1676 / 772 | 1.19 | over-compressed, small | Left: realigned today (447e779); the photo/cut-out pair must stay pixel-locked. Figma has 4094 px originals for a later rebuild |
| `ci-scene-cutout.webp` | LM | 1024×650 | 24 KB | yes | 1676 / 772 | 0.61 | small | Left: realigned today (447e779); the photo/cut-out pair must stay pixel-locked. Figma has 4094 px originals for a later rebuild |
| `ci-scene-photo.webp` | CH JD LH LM MU | 2000×1269 | 108 KB | yes | 1676 / 772 | 1.19 | small | Left: realigned today (447e779); the photo/cut-out pair must stay pixel-locked. Figma has 4094 px originals for a later rebuild |
| `ci-scene-smoke.webp` | CH JD LH LM MU | 1024×331 | 48 KB | yes | 1697 / 781 | 0.60 | small | Soft smoke layer: Figma source is 1024 px too; resolution is not visible |
| `cooling-cool-days-poster.webp` | CH LH LM | 1280×720 | 53 KB | no | 1097 / 350 | 1.17 | small | No larger source in Figma (same size as the site file) |
| `cooling-hero-cooling.jpg` | CH LH LM | 1339×883 | 250 KB | yes | 1679 / 1481 | 0.80 | small | No larger source in Figma (same size as the site file) |
| `cooling-intro-lake.jpg` | CH LH LM | 1844×853 | 142 KB | yes | 1830 / 942 | 1.01 | small | No larger source in Figma (same size as the site file) |
| `cooling-intro-smoke.webp` | CH LH LM | 1024×331 | 48 KB | yes | 1697 / 873 | 0.60 | small | Soft smoke layer: Figma source is 1024 px too; resolution is not visible |
| `cooling-ops.jpg` | CH LH LM | 2400×1666 | 574 KB | yes | 1656 / 1528 | 1.45 | small | No larger source in Figma (same size as the site file) |
| `cooling-step-1.jpg` | CH LH LM | 868×1016 | 272 KB | yes | 593 / 375 | 1.46 | small | No larger source in Figma (same size as the site file) |
| `cooling-step-3.jpg` | CH LH LM | 872×1022 | 300 KB | yes | 593 / 375 | 1.47 | small | No larger source in Figma (same size as the site file) |
| `cooling-warm-days-poster.webp` | CH LH LM | 1280×720 | 54 KB | no | 1097 / 350 | 1.17 | small | No larger source in Figma (same size as the site file) |
| `event-terawulf-hiring-event-data-center-operators.webp` | LM | 1600×1067 | 44 KB | no | 651 / 350 | 2.46 | over-compressed | CMS sample event photo; left (replaced before launch) |
| `explore-careers.jpg` | CH JD LH LM MU | 1100×693 | 171 KB | yes | 1013 / 816 | 1.09 | small | No larger source (Figma 1080 px) |
| `faq-bg.jpg` | CH JD LH LM MU | 2400×1382 | 604 KB | yes | 1656 / 2118 | 1.13 | small | Already 2400 px |
| `faq-hero-faq-v2.webp` | JD LM MU | 2400×1601 | 249 KB | yes | 1694 / 1477 | 1.42 | small | Already 2400 px |
| `faq-hero-faq-v2.webp.webp` | CH LH | 2400×1601 | 249 KB | yes | 1686 / 1473 | 1.42 | small | Already 2400 px |
| `hero-home.jpg` | LM | 2400×1125 | 415 KB | yes | 2235 / 2098 | 1.07 | small | Already 2400 px |
| `hero-lh-home.webp` | LH | 2400×959 | 117 KB | yes | 2620 / 2659 | 0.90 | small | Already 2400 px |
| `jd-home-aerial-v2.webp` | JD | 1717×916 | 260 KB | yes | 1795 / 897 | 0.96 | small | No larger source: Figma holds the same file (1024–1717 px); needs originals from the client |
| `jd-home-hero.webp` | JD | 1717×916 | 272 KB | no | 1960 / 1853 | 0.88 | small | No larger source: Figma holds the same file (1024–1717 px); needs originals from the client |
| `jd-po-hero-v2.webp` | JD | 1024×685 | 103 KB | yes | 1709 / 1494 | 0.60 | small | No larger source: Figma holds the same file (1024–1717 px); needs originals from the client |
| `jd-rd-photo-v2.webp` | JD | 2400×1350 | 356 KB | yes | 2184 / 655 | 1.10 | small | No larger source: Figma holds the same file (1024–1717 px); needs originals from the client |
| `muskie-aerial-v2.webp` | MU | 1374×971 | 252 KB | yes | 1663 / 1385 | 0.83 | small | No larger source: Figma holds the same file; needs originals from the client |
| `muskie-campus-v2.webp` | MU | 1448×1086 | 188 KB | yes | 1680 / 1534 | 0.86 | small | No larger source: Figma holds the same file; needs originals from the client |
| `news-14news.webp` | JD | 1600×890 | 71 KB | no | 1262 / 403 | 1.27 | small | CMS cover: no srcset (one file serves the /news card and the article), and the source is the publisher's image or a Lake Mariner sample photo, no larger than this; left |
| `news-aerial-home.webp` | LM | 1600×829 | 132 KB | no | 1262 / 505 | 1.27 | small | Already 2400 px |
| `news-beshear.webp` | JD | 600×400 | 21 KB | no | 1262 / 403 | 0.48 | small | CMS cover: no srcset (one file serves the /news card and the article), and the source is the publisher's image or a Lake Mariner sample photo, no larger than this; left |
| `news-careers-benefit-1.webp` | LM | 1000×667 | 52 KB | no | 1262 / 403 | 0.79 | small | CMS cover: no srcset (one file serves the /news card and the article), and the source is the publisher's image or a Lake Mariner sample photo, no larger than this; left |
| `news-demolition.webp` | JD | 768×428 | 27 KB | no | 1262 / 403 | 0.61 | small | CMS cover: no srcset (one file serves the /news card and the article), and the source is the publisher's image or a Lake Mariner sample photo, no larger than this; left |
| `news-enr.webp` | JD | 900×550 | 75 KB | no | 1262 / 403 | 0.71 | small | CMS cover: no srcset (one file serves the /news card and the article), and the source is the publisher's image or a Lake Mariner sample photo, no larger than this; left |
| `news-fluor.webp` | JD | 480×252 | 27 KB | no | 1262 / 498 | 0.38 | small | CMS cover: no srcset (one file serves the /news card and the article), and the source is the publisher's image or a Lake Mariner sample photo, no larger than this; left |
| `news-follow-fan.webp` | CH JD LH LM MU | 546×1024 | 48 KB | yes | 1442 / 847 | 0.38 | small | No larger source: the 3D fan is a 546×1024 export; shown rotated/scaled, its box overstates the size |
| `news-fox56.webp` | JD | 1600×807 | 116 KB | no | 1262 / 403 | 1.27 | small | CMS cover: no srcset (one file serves the /news card and the article), and the source is the publisher's image or a Lake Mariner sample photo, no larger than this; left |
| `news-kentucky-power.webp` | JD | 1030×728 | 56 KB | no | 1262 / 403 | 0.82 | small | CMS cover: no srcset (one file serves the /news card and the article), and the source is the publisher's image or a Lake Mariner sample photo, no larger than this; left |
| `news-lh-built-for-future.webp` | LH | 1600×800 | 296 KB | no | 1262 / 404 | 1.27 | small | CMS cover: no srcset (one file serves the /news card and the article), and the source is the publisher's image or a Lake Mariner sample photo, no larger than this; left |
| `news-lh-communities-benefits.webp` | LH | 1068×580 | 42 KB | no | 1262 / 482 | 0.85 | small | CMS cover: no srcset (one file serves the /news card and the article), and the source is the publisher's image or a Lake Mariner sample photo, no larger than this; left |
| `news-lh-honest-governance.webp` | LH | 1200×900 | 92 KB | no | 1262 / 403 | 0.95 | small | CMS cover: no srcset (one file serves the /news card and the article), and the source is the publisher's image or a Lake Mariner sample photo, no larger than this; left |
| `news-lh-legal-counsel.webp` | LH | 1600×1067 | 51 KB | no | 1262 / 403 | 1.27 | over-compressed, small | CMS cover: no srcset (one file serves the /news card and the article), and the source is the publisher's image or a Lake Mariner sample photo, no larger than this; left |
| `news-lh-massena.webp` | LH | 1215×911 | 234 KB | no | 1262 / 403 | 0.96 | small | CMS cover: no srcset (one file serves the /news card and the article), and the source is the publisher's image or a Lake Mariner sample photo, no larger than this; left |
| `news-lh-ny-large-load.webp` | LH | 1600×546 | 59 KB | no | 1777 / 592 | 0.90 | small | CMS cover: no srcset (one file serves the /news card and the article), and the source is the publisher's image or a Lake Mariner sample photo, no larger than this; left |
| `news-lh-open-house-recap.webp` | LH | 1600×1067 | 59 KB | no | 1262 / 403 | 1.27 | small | CMS cover: no srcset (one file serves the /news card and the article), and the source is the publisher's image or a Lake Mariner sample photo, no larger than this; left |
| `news-lh-protecting-lansing.webp` | LH | 1200×1568 | 259 KB | no | 1262 / 403 | 0.95 | small | CMS cover: no srcset (one file serves the /news card and the article), and the source is the publisher's image or a Lake Mariner sample photo, no larger than this; left |
| `news-lh-smoke-to-silicon.webp` | LH | 1600×1143 | 89 KB | no | 1262 / 403 | 1.27 | small | Soft smoke layer: Figma source is 1024 px too; resolution is not visible |
| `news-lh-transforming-communities.webp` | LH | 1600×900 | 85 KB | no | 1262 / 403 | 1.27 | small | CMS cover: no srcset (one file serves the /news card and the article), and the source is the publisher's image or a Lake Mariner sample photo, no larger than this; left |
| `news-messenger-4b.webp` | JD | 700×500 | 30 KB | no | 1262 / 403 | 0.55 | small | CMS cover: no srcset (one file serves the /news card and the article), and the source is the publisher's image or a Lake Mariner sample photo, no larger than this; left |
| `news-noise-study.webp` | JD | 554×888 | 73 KB | no | 1262 / 403 | 0.44 | small | CMS cover: no srcset (one file serves the /news card and the article), and the source is the publisher's image or a Lake Mariner sample photo, no larger than this; left |
| `news-owensboro.webp` | JD | 1600×838 | 38 KB | no | 1262 / 403 | 1.27 | over-compressed, small | CMS cover: no srcset (one file serves the /news card and the article), and the source is the publisher's image or a Lake Mariner sample photo, no larger than this; left |
| `news-po-project-wide.webp` | LM | 1600×894 | 142 KB | no | 1262 / 403 | 1.27 | small | CMS cover: no srcset (one file serves the /news card and the article), and the source is the publisher's image or a Lake Mariner sample photo, no larger than this; left |
| `news-post-1.webp` | LM | 1000×667 | 47 KB | no | 1262 / 403 | 0.79 | small | CMS cover: no srcset (one file serves the /news card and the article), and the source is the publisher's image or a Lake Mariner sample photo, no larger than this; left |
| `news-post-2.webp` | LM | 1000×562 | 102 KB | no | 1262 / 466 | 0.79 | small | CMS cover: no srcset (one file serves the /news card and the article), and the source is the publisher's image or a Lake Mariner sample photo, no larger than this; left |
| `news-post-3.webp` | LM | 1000×500 | 122 KB | no | 1262 / 523 | 0.79 | small | CMS cover: no srcset (one file serves the /news card and the article), and the source is the publisher's image or a Lake Mariner sample photo, no larger than this; left |
| `news-post-5.webp` | LM | 1000×562 | 40 KB | no | 1262 / 466 | 0.79 | small | CMS cover: no srcset (one file serves the /news card and the article), and the source is the publisher's image or a Lake Mariner sample photo, no larger than this; left |
| `news-post-shield-mdc.webp` | MU | 327×375 | 28 KB | no | 246 / 147 | 1.33 | small | CMS cover: no srcset (one file serves the /news card and the article), and the source is the publisher's image or a Lake Mariner sample photo, no larger than this; left |
| `po-about-tw.jpg` | CH JD LH LM MU | 1280×600 | 190 KB | yes | 1262 / 647 | 1.01 | small | No source found in Figma for this still (video frame); left |
| `po-cooling-teaser.jpg` | CH LH LM | 1500×842 | 360 KB | yes | 1259 / 918 | 1.19 | small | No larger source in Figma (same size as the site file) |
| `po-hero-po.jpg` | LM | 1627×1087 | 584 KB | yes | 1660 / 1468 | 0.98 | small | No larger source (Figma 1627 px, live-site original the same) |
| `po-lh-responsible.webp` | LH | 716×980 | 80 KB | yes | 706 / 449 | 1.01 | small | No larger source (Figma) |
| `po-rd-lake.jpg` | LM | 1915×1072 | 405 KB | yes | 1799 / 658 | 1.06 | small | No larger source (Figma 1915 px) |
