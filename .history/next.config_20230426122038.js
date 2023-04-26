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
        protocol: 'https://www.vecteezy.com/vector-art/9880886-outline-colorful-leading-lines-letters-ag-a-g-logo-with-road-concept-design-letters-ab-with-geometric-design',
        hostname: 'vecteezy.com',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
}

module.exports = nextConfig
