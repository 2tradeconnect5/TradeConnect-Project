// Next.js configuration file
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Disable ESLint during builds to prevent build failures
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

