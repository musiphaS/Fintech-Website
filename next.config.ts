import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  target: 'serverless',
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;