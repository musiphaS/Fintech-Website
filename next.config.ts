import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Add this to ensure proper asset loading
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? 'https://fintech-website.netlify.app' 
    : '',
  trailingSlash: true,
};

export default nextConfig;