import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dvz12xmz2ihps.cloudfront.net",
        port: "",
        pathname: "/avatars/**",
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        port: "",
        pathname: "/product-images/**",
      },

      // https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp
    ],
  },
};

export default nextConfig;
