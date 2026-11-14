'use client';

export function CookieSettingsLink() {
  return (
    <a
      href="#cookie-settings"
      onClick={event => {
        event.preventDefault();
        window.dispatchEvent(new Event('sintha:open-cookie-settings'));
      }}
      className="text-xs text-white transition-colors hover:text-[#DBC1E8]"
    >
      Cookie settings
    </a>
  );
}
