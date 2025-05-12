import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Improve image optimization
  images: {
    unoptimized: true,
  },
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // For Netlify deployments - required for static site generation
  output: 'export',
};

export default nextConfig;
