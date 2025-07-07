/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages deployment configuration
  basePath: process.env.NODE_ENV === 'production' ? '/jayas-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/jayas-portfolio' : '',
  // Disable server-side features for static export
  distDir: 'out',
}

module.exports = nextConfig
