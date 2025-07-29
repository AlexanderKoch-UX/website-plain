/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif']
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  basePath: '',
  distDir: 'build',
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizeCss: true,
    scrollRestoration: true
  },
  eslint: {
    dirs: ['src']
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  env: {
    CUSTOM_KEY: 'alexanderkoch.dev'
  }
}

module.exports = nextConfig