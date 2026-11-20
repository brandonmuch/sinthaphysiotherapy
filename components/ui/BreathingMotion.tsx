'use client';

import { useEffect } from 'react';

const REVEAL_SELECTOR = [
  '.home-hero__copy',
  '.home-intro__copy',
  '.intro-collage > *',
  '.pillar-card',
  '.snapshot-list li',
  '.home-service',
  '.home-cta__layout',
  '.faq-list details',
  '.blog-invite__layout',
  '.team-card',
  '.affiliated-card',
  '.philosophy-section__layout',
  '.service-pair',
  '.services-hero__inner',
  '.contact-map',
  '.contact-info-card',
  '.contact-form',
  '.blog-card',
].join(',');

export function BreathingMotion() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) return;

    const root = document.documentElement;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -44px 0px' }
    );

    let sequence = 0;
    const markForReveal = (element: Element) => {
      if (!(element instanceof HTMLElement) || element.classList.contains('breath-reveal')) return;
      element.classList.add('breath-reveal');
      element.style.setProperty('--breath-delay', `${Math.min(sequence % 3, 2) * 70}ms`);
      sequence += 1;
      observer.observe(element);
    };

    const scan = (scope: ParentNode) => {
      if (scope instanceof HTMLElement && scope.matches(REVEAL_SELECTOR)) markForReveal(scope);
      scope.querySelectorAll(REVEAL_SELECTOR).forEach(markForReveal);
    };

    scan(document);
    root.classList.add('breathing-motion-ready');

    const mutations = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) scan(node);
        });
      });
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
      root.classList.remove('breathing-motion-ready');
    };
  }, []);

  return null;
}
