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
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "www.interstatedevelopment.com"
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com"
      },
      {
        protocol: "https",
        hostname: "img.freepik.com"
      }
    ],
  },
};

module.exports = nextConfig;
