/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  nextConfig,
  sassOption: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
