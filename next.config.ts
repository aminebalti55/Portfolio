import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/please",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
