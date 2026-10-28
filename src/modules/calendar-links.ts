// Calendar links: a [data-calendar] block declares the event —
//   data-start, data-end (ISO 8601 with offset), data-title, data-location,
//   data-details
// and its [data-calendar-google] link gets a Google Calendar "add event"
// URL (new tab), while [data-calendar-ics] downloads an .ics file built
// in the browser (Apple Calendar, Outlook). In Webflow the data-* values
// are bound to the Events fields (custom attributes on the Detail Bar).

const stamp = (iso: string) => new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
const escapeIcs = (text: string) => text.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/([,;])/g, '\\$1');
const slug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60) || 'event';

export function initCalendarLinks() {
  document.querySelectorAll<HTMLElement>('[data-calendar]').forEach((block) => {
    const { start, end, title = '', location = '', details = '' } = block.dataset;
    if (!start || !end || Number.isNaN(Date.parse(start)) || Number.isNaN(Date.parse(end))) return;
    const pageUrl = [details, window.location.href.split('#')[0]].filter(Boolean).join('\n\n');

    const google = block.querySelector<HTMLAnchorElement>('[data-calendar-google]');
    if (google) {
      const url = new URL('https://calendar.google.com/calendar/render');
      url.searchParams.set('action', 'TEMPLATE');
      url.searchParams.set('text', title);
      url.searchParams.set('dates', `${stamp(start)}/${stamp(end)}`);
      url.searchParams.set('location', location);
      url.searchParams.set('details', pageUrl);
      google.href = url.href;
      google.target = '_blank';
      google.rel = 'noopener';
    }

    const ics = block.querySelector<HTMLAnchorElement>('[data-calendar-ics]');
    if (ics) {
      const body = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Lake Mariner Data//Events//EN',
        'BEGIN:VEVENT',
        `UID:${stamp(start)}-${slug(title)}@${window.location.hostname}`,
        `DTSTAMP:${stamp(new Date().toISOString())}`,
        `DTSTART:${stamp(start)}`,
        `DTEND:${stamp(end)}`,
        `SUMMARY:${escapeIcs(title)}`,
        `LOCATION:${escapeIcs(location)}`,
        `DESCRIPTION:${escapeIcs(pageUrl)}`,
        'END:VEVENT',
        'END:VCALENDAR',
      ].join('\r\n');
      ics.href = `data:text/calendar;charset=utf-8,${encodeURIComponent(body)}`;
      ics.download = `${slug(title)}.ics`;
    }
  });
}
