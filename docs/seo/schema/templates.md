# CMS template schema and share-image head code

The JSON-LD for the two published CMS templates lives in each template's
**page head code** (Page settings › Custom code › Inside `<head>` tag),
together with the `og:image` / `twitter:image` tags. The source of truth
is the campus's `.jsonld` file (`lake-mariner/news-post.jsonld`, `lake-mariner/event.jsonld`); the head code below is generated (`node docs/seo/schema/build-template-head.mjs <campus> news-post|event`)
from it with every `{Field}` replaced by Webflow's field token. Write it
with the pages scripts tool (`set_page_freeform_code`, location `head`),
or paste it in the Designer.

Why head code and not the template's Schema markup field: the pages API
re-serialises Schema markup as JSON, and a field token isn't valid JSON,
so every bound value publishes empty (`lessons/designer.md`, "CMS text
bindings inside JSON-LD can break the schema"). Head code keeps the tokens
as typed.

Token form: `{{wf {&quot;path&quot;:&quot;<field-slug>&quot;,&quot;type&quot;:&quot;<Type>&quot;\} }}`,
types `PlainText`, `ImageRef` (the image URL) and `Date` (ISO 8601).
In the Designer the same token is inserted with "+ Add field".

## Fields used

| `{Field}` in the .jsonld | Collection field (slug) | Type | Notes |
| --- | --- | --- | --- |
| News `{Slug}` | `slug` | PlainText | builds the canonical-domain URL |
| News `{Name}` | `name` | PlainText | headline and breadcrumb name; use ’, never `"` |
| News `{Cover Image}` | `cover-image` | ImageRef | empty when a post has no cover |
| News `{Publish Date}` | `publish-date` | Date | |
| News `{Author}` | `author` | PlainText | a person's name, or "Lake Mariner Data" |
| Events `{Slug}` | `slug` | PlainText | |
| Events `{Name}` | `name` | PlainText | |
| Events `{Start}`, `{End}` | `start`, `end` | Date | stored in UTC, entered as New York time |
| Events `{Location}` | `location` | PlainText | the Place name; the address is the campus town (per site) |
| Events `{Image}` | `image` | ImageRef | |
| Events `{Summary}` | `summary` | PlainText | single line; no `"` |

Per site: the domain (`lakemarinerdata.com`) and the event address
(Barker, NY) are typed into the code; change them in the campus's own
`.jsonld` files and regenerate.

## News Posts Template (page `6ae24c78f20026a060258823`) — head code

```html
<meta property="og:image" content="{{wf {&quot;path&quot;:&quot;cover-image&quot;,&quot;type&quot;:&quot;ImageRef&quot;\} }}">
<meta name="twitter:image" content="{{wf {&quot;path&quot;:&quot;cover-image&quot;,&quot;type&quot;:&quot;ImageRef&quot;\} }}">
<script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"NewsArticle","@id":"https://lakemarinerdata.com/newsroom/{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}#article","mainEntityOfPage":"https://lakemarinerdata.com/newsroom/{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}","headline":"{{wf {&quot;path&quot;:&quot;name&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}","image":["{{wf {&quot;path&quot;:&quot;cover-image&quot;,&quot;type&quot;:&quot;ImageRef&quot;\} }}"],"datePublished":"{{wf {&quot;path&quot;:&quot;publish-date&quot;,&quot;type&quot;:&quot;Date&quot;\} }}","author":{"@type":"Person","name":"{{wf {&quot;path&quot;:&quot;author&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}"},"publisher":{"@id":"https://lakemarinerdata.com/#organization"},"isPartOf":{"@id":"https://lakemarinerdata.com/#website"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"News","item":"https://lakemarinerdata.com/newsroom"},{"@type":"ListItem","position":2,"name":"{{wf {&quot;path&quot;:&quot;name&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}","item":"https://lakemarinerdata.com/newsroom/{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}"}]}]}</script>
```

## Events Template (page `6ae24c79b1163d6f8fbe6961`) — head code

```html
<meta property="og:image" content="{{wf {&quot;path&quot;:&quot;image&quot;,&quot;type&quot;:&quot;ImageRef&quot;\} }}">
<meta name="twitter:image" content="{{wf {&quot;path&quot;:&quot;image&quot;,&quot;type&quot;:&quot;ImageRef&quot;\} }}">
<script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"Event","@id":"https://lakemarinerdata.com/events/{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}#event","url":"https://lakemarinerdata.com/events/{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}","name":"{{wf {&quot;path&quot;:&quot;name&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}","startDate":"{{wf {&quot;path&quot;:&quot;start&quot;,&quot;type&quot;:&quot;Date&quot;\} }}","endDate":"{{wf {&quot;path&quot;:&quot;end&quot;,&quot;type&quot;:&quot;Date&quot;\} }}","eventStatus":"https://schema.org/EventScheduled","location":{"@type":"Place","name":"{{wf {&quot;path&quot;:&quot;location&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}","address":{"@type":"PostalAddress","addressLocality":"Barker","addressRegion":"NY","addressCountry":"US"}},"image":["{{wf {&quot;path&quot;:&quot;image&quot;,&quot;type&quot;:&quot;ImageRef&quot;\} }}"],"description":"{{wf {&quot;path&quot;:&quot;summary&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}","organizer":{"@id":"https://lakemarinerdata.com/#organization"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Events","item":"https://lakemarinerdata.com/events"},{"@type":"ListItem","position":2,"name":"{{wf {&quot;path&quot;:&quot;name&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}","item":"https://lakemarinerdata.com/events/{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}"}]}]}</script>
```
