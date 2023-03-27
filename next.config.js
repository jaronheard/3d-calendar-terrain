/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@react-three/drei", "three-stdlib"],
};

module.exports = nextConfig;
