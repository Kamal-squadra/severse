import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
   remotePatterns: [
      {
        protocol: "https",
        hostname: "squadra-media.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
  eslint: {
    // ✅ Ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Ignore TypeScript type errors during builds
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
