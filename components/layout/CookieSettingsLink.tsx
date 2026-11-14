'use client';

export function CookieSettingsLink() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('sintha:open-cookie-settings'))}
      className="cursor-pointer border-0 bg-transparent p-0 text-xs font-normal text-white shadow-none transition-colors hover:text-[#DBC1E8]"
    >
      Cookie settings
    </button>
  );
}
