/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "www.w3.org"],
  },
  output: 'export',
  distDir: 'out', // This specifies the output directory
  images: {
    unoptimized: true, // Optional: if you encounter issues with images in static export
  },
};

module.exports = nextConfig;
