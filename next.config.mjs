/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {\n    return [\n      {\n        source: '/(.*)',\n        headers: [\n          { key: 'X-Content-Type-Options', value: 'nosniff' },\n          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },\n          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },\n          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },\n          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },\n        ],\n      },\n    ];\n  },\n  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;