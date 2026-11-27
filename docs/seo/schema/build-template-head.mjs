// Prints a CMS template's head code (news posts: the external-post script;
// og:image, twitter:image, JSON-LD)
// from a campus's .jsonld file, with each {Field} turned into Webflow's
// field token. Usage:
//   node docs/seo/schema/build-template-head.mjs lake-mariner news-post
//   node docs/seo/schema/build-template-head.mjs lake-mariner event
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const [campus, type] = process.argv.slice(2);
const files = { 'news-post': 'cover-image', event: 'image' };
if (!campus || !(type in files)) { console.error('usage: build-template-head.mjs <campus> news-post|event'); process.exit(1); }
const tok = (slug, t) => `{{wf {&quot;path&quot;:&quot;${slug}&quot;,&quot;type&quot;:&quot;${t}&quot;\\} }}`;
const fields = {
  '{Slug}': tok('slug', 'PlainText'), '{Name}': tok('name', 'PlainText'), '{Author}': tok('author', 'PlainText'),
  '{Cover Image}': tok('cover-image', 'ImageRef'), '{Publish Date}': tok('publish-date', 'Date'),
  '{Start}': tok('start', 'Date'), '{End}': tok('end', 'Date'), '{Location}': tok('location', 'PlainText'),
  '{Image}': tok('image', 'ImageRef'), '{Summary}': tok('summary', 'PlainText'),
};
const file = path.join(path.dirname(fileURLToPath(import.meta.url)), campus, `${type}.jsonld`);
let json = JSON.stringify(JSON.parse(fs.readFileSync(file, 'utf8')));
for (const [k, v] of Object.entries(fields)) json = json.split(k).join(v);
const left = json.match(/\{[A-Z][\w ]*\}/);
if (left) { console.error(`no token for ${left[0]}`); process.exit(1); }
const img = tok(files[type], 'ImageRef');
// News posts with an External Article URL have no page of their own: the
// cards open the source (src/modules/external-links.ts) and this script,
// first in the head, marks the page noindex, points its canonical at the
// source and sends anyone who lands on it there. Webflow can't make a
// robots meta or a redirect depend on a field, so it is done here.
const external = type === 'news-post'
  ? `<script>(function(){var u="${tok('external-article-url', 'Link')}".replace(/&amp;/g,"&").trim();if(!/^https?:\\/\\//.test(u))return;var h=document.head,m=document.createElement("meta");m.name="robots";m.content="noindex, follow";h.appendChild(m);var c=document.querySelector('link[rel="canonical"]');if(!c){c=document.createElement("link");c.rel="canonical";h.appendChild(c);}c.href=u;location.replace(u);})();</script>\n`
  : '';
process.stdout.write(external + `<meta property="og:image" content="${img}">\n<meta name="twitter:image" content="${img}">\n<script type="application/ld+json">${json}</script>\n`);
