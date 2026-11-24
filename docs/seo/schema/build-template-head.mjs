// Prints a CMS template's head code (og:image, twitter:image, JSON-LD)
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
process.stdout.write(`<meta property="og:image" content="${img}">\n<meta name="twitter:image" content="${img}">\n<script type="application/ld+json">${json}</script>\n`);
