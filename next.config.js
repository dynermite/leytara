/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['cdn.builder.io']
  },
  // Add Builder.io webpack configuration
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
  // Make sure this line is NOT present:
  // output: 'export',
};

module.exports = nextConfig;