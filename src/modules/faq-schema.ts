// FAQ schema: FAQPage JSON-LD from the questions shown on the page. Hooks:
// data-faq-schema on the wrapper (the Home FAQ Accordion), whose
// data-accordion-item items hold .accordion-question and .accordion-body.
// One script per wrapper, in document.head, marked data-faq-schema-for so a
// second run replaces it instead of adding another. A wrapper with no items
// adds nothing.

export function initFaqSchema() {
  document.querySelectorAll<HTMLElement>('[data-faq-schema]').forEach((wrapper, index) => {
    const entities = [...wrapper.querySelectorAll<HTMLElement>('[data-accordion-item]')]
      .map((item) => ({
        question: clean(item.querySelector('.accordion-question')?.textContent),
        answer: clean(item.querySelector('.accordion-body')?.textContent),
      }))
      .filter((qa) => qa.question && qa.answer)
      .map((qa) => ({
        '@type': 'Question',
        name: qa.question,
        acceptedAnswer: { '@type': 'Answer', text: qa.answer },
      }));

    const key = String(index);
    document.head.querySelector(`script[data-faq-schema-for="${key}"]`)?.remove();
    if (!entities.length) return;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.faqSchemaFor = key;
    // textContent never parses as HTML; escaping < keeps a "</script>" in
    // CMS text from ending the element if the head is ever serialized.
    script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: entities })
      .replace(/</g, '\\u003c');
    document.head.append(script);
  });
}

function clean(text: string | null | undefined) {
  return (text ?? '').replace(/\s+/g, ' ').trim();
}
