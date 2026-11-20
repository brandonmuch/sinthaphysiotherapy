/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/post/renal-metabolic-care-where-recovery-begins-and-builds-into-strength',
        destination: '/blog/renal-metabolic-care',
        permanent: true,
      },
      {
        source: '/post/strong-at-every-age-how-physiotherapy-helps-our-golden-crew',
        destination: '/blog/strong-at-every-age',
        permanent: true,
      },
      {
        source: '/post/recognising-rsv',
        destination: '/blog/recognising-rsv',
        permanent: true,
      },
      {
        source: '/post/strong-women-strong-lungs',
        destination: '/blog/strong-women-strong-lungs',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
        ],
      },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
