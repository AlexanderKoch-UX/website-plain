/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

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
    scrollRestoration: true,
    optimizePackageImports: ['framer-motion', 'react-intersection-observer']
  },
  eslint: {
    dirs: ['src']
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  env: {
    CUSTOM_KEY: 'alexanderkoch.dev'
  },
  // Performance optimizations
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Optimize chunks in production
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    return config;
  }
}

export default bundleAnalyzer(nextConfig);