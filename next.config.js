/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SANITY_PROJECT: process.env.SANITY_PROJECT_ID
  }
}

module.exports = nextConfig
