/**
 * @type {import('next').NextConfig}
 */

const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  reactStrictMode: false,
  i18n,
  async rewrites() {
      return [
        {
          source: '/agent/agent-profile/:id(\\d{1,})',
          destination: '/agent/agent-profile/:id(\\d{1,})',
        },
        {
          source: '/project/image-box/:slug',
          destination: '/project/image-box/:slug',
        },
        {
          source: '/property/image-box/:slug',
          destination: '/property/image-box/:slug',
        },
        {
         source: '/:path*',
         destination: 'http://localhost:4100/:path*',
        },
      ]
  },
  env: {
    API_URL: "http://localhost:3000/api",
    BACKEND: "http://localhost:4100",
  },
});
