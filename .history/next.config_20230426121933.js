/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: '',
        hostname: 'example.com',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
}

module.exports = nextConfig
