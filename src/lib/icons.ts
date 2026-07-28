// Minimal Feather-style icon paths, looked up by key. Shared across components
// that render a CMS-supplied icon name (services, values, team specialties, FAQ).
export const icons: Record<string, string> = {
  wind: '<path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/><path d="M17.7 7.7A2.5 2.5 0 1 1 19.5 12H2"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/>',
  baby: '<circle cx="12" cy="7" r="3"/><path d="M8 21c0-3 1.5-5 4-5s4 2 4 5"/><path d="M9 16c-1.5 1-3 1-4-1M15 16c1.5 1 3 1 4-1"/>',
  home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/>',
  brain: '<path d="M9.5 3a3 3 0 0 0-3 3v1a3 3 0 0 0-1.5 5.6A3.5 3.5 0 0 0 7 19h1.5a1.5 1.5 0 0 0 1.5-1.5V6a3 3 0 0 0-.5-3Z"/><path d="M14.5 3a3 3 0 0 1 3 3v1a3 3 0 0 1 1.5 5.6A3.5 3.5 0 0 1 17 19h-1.5a1.5 1.5 0 0 1-1.5-1.5V6a3 3 0 0 1 .5-3Z"/>',
  droplet: '<path d="M12 2s6 7.2 6 11.5A6 6 0 0 1 6 13.5C6 9.2 12 2 12 2Z"/>',
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  footprints: '<path d="M4 16v-2a3 3 0 0 1 3-3 3 3 0 0 0 3-3V6a2 2 0 1 0-4 0"/><path d="M20 20v-2a3 3 0 0 0-3-3 3 3 0 0 1-3-3v-2a2 2 0 1 1 4 0"/>',
  "message-circle": '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.4 8.4 0 0 1 3.5 11 8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5Z"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/>',
  "map-pin": '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
  "check-circle": '<circle cx="12" cy="12" r="9"/><path d="m9 12 2 2 4-4"/>',
  users: '<circle cx="9" cy="7" r="4"/><path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2"/><path d="M17 8a4 4 0 0 1 0 8"/><path d="M23 21v-2a5 5 0 0 0-3-4.6"/>',
  "shield-check": '<path d="M12 2 4 5v6c0 5 3.4 9.3 8 11 4.6-1.7 8-6 8-11V5l-8-3Z"/><path d="m9 12 2 2 4-4"/>',
  sparkles: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  stethoscope: '<path d="M6 4v6a4 4 0 0 0 8 0V4"/><path d="M10 16.5a4.5 4.5 0 1 0 9 0V13"/><circle cx="19" cy="8" r="1.5"/>',
  quote: '<path d="M9 5H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 1 2 2v0a4 4 0 0 1-4 4"/><path d="M19 5h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 1 2 2v0a4 4 0 0 1-4 4"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>',
};

export const defaultIconKey = "sparkles";
