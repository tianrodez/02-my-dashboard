import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  watchOptions: {
    pollIntervalMs: 1000,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.freepik.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/**"
      }
    ],
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
