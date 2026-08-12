/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oldaetherlynweb.vercel.app",
      },
    ],
  },
};

export default nextConfig;
