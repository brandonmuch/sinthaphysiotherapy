'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type CookieChoice = 'essential' | 'optional';

const STORAGE_KEY = 'sintha-cookie-preference';

export function CookieConsent() {
  const [choice, setChoice] = useState<CookieChoice | null>(null);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === 'essential' || stored === 'optional') {
        setChoice(stored);
      } else {
        setOpen(true);
      }
    } catch {
      setOpen(true);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    const reopen = () => setOpen(true);
    window.addEventListener('sintha:open-cookie-settings', reopen);
    return () => window.removeEventListener('sintha:open-cookie-settings', reopen);
  }, []);

  const saveChoice = (nextChoice: CookieChoice) => {
    setChoice(nextChoice);
    try {
      window.localStorage.setItem(STORAGE_KEY, nextChoice);
    } catch {
      // The preference remains available for this page view if storage is blocked.
    }
    setOpen(false);
  };

  if (!ready || !open) return null;

  return (
    <>
      {open ? (
        <section
          className="sintha-cookie-panel"
          role="dialog"
          aria-labelledby="sintha-cookie-title"
          aria-describedby="sintha-cookie-description"
        >
          <div className="sintha-cookie-copy">
            <h2 id="sintha-cookie-title">Cookie preferences</h2>
            <p id="sintha-cookie-description">
              This website currently uses only essential site storage to remember your choice. Analytics and advertising cookies are not currently enabled. Your preference is saved in this browser and will be respected if optional tools are introduced.
            </p>
            <Link href="/privacy-policy#cookies" onClick={() => setOpen(false)}>
              Read our privacy policy
            </Link>
          </div>
          <div className="sintha-cookie-actions">
            <button type="button" onClick={() => saveChoice('essential')}>
              Essential only
            </button>
            <button type="button" onClick={() => saveChoice('optional')}>
              Allow optional cookies
            </button>
          </div>
        </section>
      ) : (
        <button
          type="button"
          className="sintha-cookie-settings"
          onClick={() => setOpen(true)}
          aria-label="Open cookie preferences"
        >
          Cookie settings
        </button>
      )}
      <span className="sr-only" aria-live="polite">
        {choice === 'essential'
          ? 'Cookie preference saved: essential storage only.'
          : choice === 'optional'
            ? 'Cookie preference saved: optional cookies allowed.'
            : ''}
      </span>
    </>
  );
}
