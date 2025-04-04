/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/Escort', // Your repository name
  images: {
    unoptimized: true,
  },
  assetPrefix: '/Escort/', // Your repository name with trailing slash
};

export default nextConfig; 