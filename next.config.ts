import type { NextConfig } from "next";

const repoName = "Travel_website-frontend";

const nextConfig: NextConfig = {
  output: "export",              // static export
  basePath: `/${repoName}`,      // prepend all routes
  assetPrefix: `/${repoName}/`,  // prepend all assets
  images: {
    unoptimized: true,           // for <Image />
  },
};

export default nextConfig;