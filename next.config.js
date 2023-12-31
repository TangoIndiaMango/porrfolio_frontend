/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "127.0.0.1", "res.cloudinary.com", "backend-api-n9aa.onrender.com"],
  },
};

module.exports = nextConfig;
