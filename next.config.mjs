/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "www.dominos.co.in" },
      { protocol: "https", hostname: "mis.rezolpos.in" }
    ],
  },
};

export default nextConfig;