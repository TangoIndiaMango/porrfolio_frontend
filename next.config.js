/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "127.0.0.1", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
