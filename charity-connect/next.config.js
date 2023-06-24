/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "www.tutorialspoint.com",
      },
      {
        protocol: "https",
        hostname: "assets.pokemon.com",
      },
    ],
  },
};

module.exports = nextConfig;
