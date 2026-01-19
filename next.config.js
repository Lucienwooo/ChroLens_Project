/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ChroLens-Project',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  staticPageGenerationTimeout: 300,
}

module.exports = nextConfig
