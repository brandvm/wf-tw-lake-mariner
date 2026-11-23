// FAQ schema: one FAQPage JSON-LD from the questions shown on the page. Hooks:
// data-faq-schema on each wrapper (the Home FAQ Accordion; on /faq the
// General and Propylene glycol Accordions), whose data-accordion-item items
// hold .accordion-question and .accordion-body. Every wrapper on the page
// goes into the same block (Google reads one FAQPage per page), in document
// order, a question repeated across wrappers only once. The script sits in
// document.head, marked data-faq-schema-for, so a second run replaces it
// instead of adding another. A page with no items adds nothing.

export function initFaqSchema() {
  const seen = new Set<string>();
  const entities = [...document.querySelectorAll<HTMLElement>('[data-faq-schema] [data-accordion-item]')]
    .map((item) => ({
      question: clean(item.querySelector('.accordion-question')?.textContent),
      answer: clean(item.querySelector('.accordion-body')?.textContent),
    }))
    .filter((qa) => qa.question && qa.answer && !seen.has(qa.question) && seen.add(qa.question))
    .map((qa) => ({
      '@type': 'Question',
      name: qa.question,
      acceptedAnswer: { '@type': 'Answer', text: qa.answer },
    }));

  document.head.querySelectorAll('script[data-faq-schema-for]').forEach((script) => script.remove());
  if (!entities.length) return;

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.dataset.faqSchemaFor = 'page';
  // textContent never parses as HTML; escaping < keeps a "</script>" in
  // CMS text from ending the element if the head is ever serialized.
  script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: entities })
    .replace(/</g, '\\u003c');
  document.head.append(script);
}

function clean(text: string | null | undefined) {
  return (text ?? '').replace(/\s+/g, ' ').trim();
}
