import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? 'https://fintech-website.netlify.app' 
    : '',
  trailingSlash: true,
  output: 'export',
};

export default nextConfig;