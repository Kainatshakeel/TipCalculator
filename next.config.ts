import type { NextConfig } from "next";
module.exports = {
  experimental: {
    turbopack: false,
  },
};

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  /* config options here */
};

export default nextConfig;
