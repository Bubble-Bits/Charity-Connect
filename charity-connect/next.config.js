/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "www.news10.com",
      "52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com",
      "www.thecomfortofcooking.com",
      "www.recipetineats.com",
      "www.lovefromtheoven.com",
      "luisandclark.com",
      "www.allrecipes.com",
      "www.iheartnaptime.net",
      "news.rice.edu",
      "sugarspunrun.com",
      "encrypted-tbn0.gstatic.com",
    ],
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
        hostname: "www.booksie.com",
      },
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "www.news10.com",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
    ],
  },
};

module.exports = nextConfig;
