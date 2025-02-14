import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Enables the `app/` directory in Next.js 13+
  },
};

export default nextConfig;
