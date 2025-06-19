/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  distDir: "../.next",
  experimental: {
    outputFileTracingRoot: "..",
  },
};

export default nextConfig;
