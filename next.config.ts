import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/services", destination: "/personal-training-services", permanent: true },
      { source: "/pricing", destination: "/personal-training-prices", permanent: true },
    ];
  },
};

export default nextConfig;
