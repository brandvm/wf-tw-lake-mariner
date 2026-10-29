// Calendar links: a [data-calendar] block declares the event —
//   data-start, data-end (ISO 8601 with offset, or New York wall time as a
//   bound CMS date publishes it: see toIso), data-title, data-location,
//   data-details
// and its [data-calendar-google] link gets a Google Calendar "add event"
// URL (new tab), while [data-calendar-ics] downloads an .ics file built
// in the browser (Apple Calendar, Outlook). In Webflow the data-* values
// are bound to the Events fields (custom attributes on the Detail Bar).

const stamp = (iso: string) => new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
const escapeIcs = (text: string) => text.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/([,;])/g, '\\$1');
const slug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60) || 'event';

// Webflow can't publish a CMS date with its offset: a bound date publishes
// as wall time in the site's time zone (America/Toronto, same offsets as New
// York) in the format chosen in the Designer, e.g. "2026-07-24 08:30" or
// "July 24, 2026 8:30 AM". Those are read as New York time. A value with an
// offset or Z is used as is; a value without a time is refused (no links).
const ZONE = 'America/New_York';
const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

function zoneOffsetMs(utc: number) {
  const name = new Intl.DateTimeFormat('en-US', { timeZone: ZONE, timeZoneName: 'longOffset' })
    .formatToParts(utc).find((p) => p.type === 'timeZoneName')?.value ?? 'GMT';
  const m = /GMT([+-])(\d{2}):(\d{2})/.exec(name);
  return m ? (m[1] === '-' ? -1 : 1) * (Number(m[2]) * 60 + Number(m[3])) * 60000 : 0;
}

export function toIso(value: string): string | null {
  const text = value.trim();
  if (/T\d{2}:\d{2}.*(Z|[+-]\d{2}:?\d{2})$/.test(text)) return Number.isNaN(Date.parse(text)) ? null : text;
  const iso = /(\d{4})-(\d{2})-(\d{2})/.exec(text);
  const named = /([A-Za-z]{3,})\.? (\d{1,2}),? (\d{4})/.exec(text);
  let y: number; let mo: number; let d: number;
  if (iso) [y, mo, d] = [Number(iso[1]), Number(iso[2]) - 1, Number(iso[3])];
  else if (named && MONTHS.includes(named[1].slice(0, 3).toLowerCase())) {
    [y, mo, d] = [Number(named[3]), MONTHS.indexOf(named[1].slice(0, 3).toLowerCase()), Number(named[2])];
  } else return null;
  const time = /(\d{1,2}):(\d{2})\s*([ap])?\.?m?\.?/i.exec(text.slice((iso ?? named)!.index + (iso ?? named)![0].length));
  if (!time) return null;
  let h = Number(time[1]) % (time[3] ? 12 : 24);
  if (time[3]?.toLowerCase() === 'p') h += 12;
  const wall = Date.UTC(y, mo, d, h, Number(time[2]));
  let utc = wall - zoneOffsetMs(wall);
  utc = wall - zoneOffsetMs(utc);
  return new Date(utc).toISOString();
}

export function initCalendarLinks() {
  document.querySelectorAll<HTMLElement>('[data-calendar]').forEach((block) => {
    const { title = '', location = '', details = '' } = block.dataset;
    const start = toIso(block.dataset.start ?? '');
    const end = toIso(block.dataset.end ?? '');
    if (!start || !end) return;
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
