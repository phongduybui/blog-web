/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_SERVER_DOMAIN],
  },
  async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: 'https://admin.hoangan.site/uploads/:path*', // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
