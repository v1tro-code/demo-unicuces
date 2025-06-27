/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["asset.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "asset.cloudinary.com",
        pathname: "**",
      },
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig
