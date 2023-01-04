/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    runtime: "experimental-edge",
    appDir: true,
  },
};

module.exports = nextConfig;
