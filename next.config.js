/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  
  // If you have TypeScript files in src/types
  typescript: {
    // This is optional but recommended for larger projects
    ignoreBuildErrors: false,
  },
  
  // Optimize images
  images: {
    domains: ['example.com'], // Add any domains you'll load images from
  },
  
  // If you need to redirect old routes
  async redirects() {
    return [];
  },
  
  // If you need environment variables exposed to the browser
  env: {
    // NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
}

module.exports = nextConfig 