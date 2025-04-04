/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/Escort', // Your repository name
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  assetPrefix: '/Escort/', // Your repository name with trailing slash
  trailingSlash: true,
  distDir: 'out',
};

export default nextConfig; 