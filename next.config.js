/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["media.graphassets.com"],
    formats: ["image/avif", "image/webp"],
  },
};
