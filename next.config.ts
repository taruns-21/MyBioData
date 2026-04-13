import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/MyBioData",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
