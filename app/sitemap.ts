import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.sinthaphysiotherapy.co.za';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/privacy-policy',
    '/blog',
    '/blog/renal-metabolic-care',
    '/blog/strong-at-every-age',
    '/blog/recognising-rsv',
    '/blog/strong-women-strong-lungs',
  ];

  return routes.map(route => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: route.startsWith('/blog/') ? 'monthly' : 'weekly',
    priority: route === '' ? 1 : route === '/services' || route === '/contact' ? 0.9 : 0.7,
  }));
}
