/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: 'export' for dynamic features (APIs, dynamic pages)
  // Keep trailingSlash for good practice
  trailingSlash: true,
};

module.exports = nextConfig;
