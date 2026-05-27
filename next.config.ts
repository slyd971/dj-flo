import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  outputFileTracingExcludes: {
    "*": [
      "node_modules/@next/swc*/**",
      "node_modules/typescript/**",
      "node_modules/tailwindcss/**",
      "node_modules/@tailwindcss/**",
      "node_modules/postcss/**",
      "node_modules/autoprefixer/**",
      "node_modules/caniuse-lite/**",
      "node_modules/lightningcss/**",
      "node_modules/lightningcss-darwin-x64/**",
      "node_modules/lightningcss-linux-x64-gnu/**",
      "node_modules/@swc/**",
      "node_modules/magic-string/**",
    ],
  },
};

export default nextConfig;
