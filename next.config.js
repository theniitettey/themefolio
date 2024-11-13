/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  /* config options here */
  experimental: {
    serverActions: true,
  },
};

module.exports = withContentlayer(nextConfig);
