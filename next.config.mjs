/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['your-image-domain.com'],
    unoptimized: true, 
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.avif$/,
      type: 'asset/resource',
    });
    return config;
  },
  experimental: {
    turbo: false, // Disable Turbopack explicitly
  },
};

export default nextConfig;
