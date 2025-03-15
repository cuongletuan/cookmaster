import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cookmaster",
  assetPrefix: "/cookmaster/", 
  trailingSlash: true, 
};

export default nextConfig;
