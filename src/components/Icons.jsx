const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const IconShield = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...p}>
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const IconClock = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>
);

export const IconUsers = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...p}>
    <circle cx="9" cy="8" r="3" />
    <path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
    <circle cx="17" cy="8" r="2.4" />
    <path d="M16 14.2c2.8.5 5 2.6 5 5.8" />
  </svg>
);

export const IconPhone = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2.2 2A16 16 0 015 6.2 2 2 0 015 4z" />
  </svg>
);

export const IconMail = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const IconPin = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}>
    <path d="M12 21s7-6.2 7-11.5A7 7 0 105 9.5C5 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.4" />
  </svg>
);

export const IconBox = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...p}>
    <path d="M3 8l9-4 9 4-9 4-9-4z" />
    <path d="M3 8v9l9 4 9-4V8" />
    <path d="M12 12v9" />
  </svg>
);

export const IconHeadset = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...p}>
    <path d="M4 13v-1a8 8 0 0116 0v1" />
    <rect x="3" y="13" width="4" height="6" rx="1.4" />
    <rect x="17" y="13" width="4" height="6" rx="1.4" />
    <path d="M20 19v1a3 3 0 01-3 3h-3" />
  </svg>
);

export const IconTruck = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...p}>
    <rect x="1.5" y="8" width="11" height="8" rx="1" />
    <path d="M12.5 11h4l3 3v2h-7z" />
    <circle cx="6" cy="18" r="1.8" />
    <circle cx="17" cy="18" r="1.8" />
  </svg>
);

export const IconStar = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" stroke="none" {...p}>
    <path d="M12 2.5l2.9 6 6.6.7-5 4.4 1.5 6.5-6-3.4-6 3.4 1.5-6.5-5-4.4 6.6-.7z" />
  </svg>
);

export const IconQuote = (p) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" stroke="none" {...p}>
    <path d="M9.5 6C6 6 3.5 8.7 3.5 12.3c0 3.1 2 5.2 4.6 5.2 1.9 0 3.4-1.4 3.4-3.3 0-1.7-1.2-3-2.9-3.1.3-2 1.9-3.3 3.9-3.6L11.6 6h-2.1zm9.4 0c-3.5 0-6 2.7-6 6.3 0 3.1 2 5.2 4.6 5.2 1.9 0 3.4-1.4 3.4-3.3 0-1.7-1.2-3-2.9-3.1.3-2 1.9-3.3 3.9-3.6L21 6h-2.1z" />
  </svg>
);

export const IconCheck = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}>
    <path d="M4 12.5l5 5L20 7" />
  </svg>
);

export const IconRupee = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...p}>
    <path d="M6 4h12M6 9h12M6 4c5 0 8 1.6 8 5s-3 5-8 5l8 6" />
  </svg>
);

export const IconDoc = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...p}>
    <path d="M7 3h7l4 4v14H7z" />
    <path d="M14 3v4h4" />
    <path d="M9.5 12h5M9.5 15.5h5" />
  </svg>
);

export const IconArrowRight = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconChevronLeft = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}>
    <path d="M15 6l-6 6 6 6" />
  </svg>
);

export const IconChevronRight = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}>
    <path d="M9 6l6 6-6 6" />
  </svg>
);

export const IconPlus = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const IconHandshake = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...p}>
    <path d="M2 12l4-3 3 2 3-2 2 1.5" />
    <path d="M9 11l4 4a1.6 1.6 0 002.3-2.3L11 8.5" />
    <path d="M22 12l-4-3-2.2 1.6" />
  </svg>
);

export const IconTrend = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...base} {...p}>
    <path d="M3 17l6-6 4 4 8-8" />
    <path d="M15 7h6v6" />
  </svg>
);

export const IconWhatsapp = (p) => (
  <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" stroke="none" {...p}>
    <path d="M16.03 3C9.1 3 3.5 8.6 3.5 15.5c0 2.4.66 4.6 1.8 6.5L3 29l7.2-2.3a12.4 12.4 0 005.8 1.4h.03c6.94 0 12.53-5.6 12.53-12.5S22.97 3 16.03 3zm0 22.7c-1.9 0-3.7-.5-5.3-1.5l-.38-.23-4.27 1.37 1.4-4.16-.25-.4a10.24 10.24 0 01-1.6-5.53c0-5.67 4.6-10.27 10.4-10.27 2.78 0 5.4 1.08 7.36 3.04a10.35 10.35 0 013.05 7.33c0 5.67-4.6 10.35-10.4 10.35zm5.7-7.75c-.31-.16-1.85-.91-2.14-1.02-.29-.1-.5-.16-.71.16-.21.31-.82 1.02-1 1.23-.19.21-.37.24-.68.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.19.21-.31.31-.52.1-.21.05-.4-.02-.55-.08-.16-.71-1.7-.97-2.34-.26-.62-.52-.53-.71-.54h-.6c-.21 0-.55.08-.83.4-.29.31-1.1 1.07-1.1 2.62s1.12 3.04 1.28 3.25c.16.21 2.2 3.36 5.34 4.71.75.32 1.33.51 1.78.66.75.24 1.43.2 1.97.13.6-.09 1.85-.75 2.11-1.48.26-.73.26-1.36.18-1.48-.08-.13-.29-.2-.6-.35z" />
  </svg>
);
