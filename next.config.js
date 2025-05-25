/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Adiciona isto para liberar o next export
    domains: [
      'source.unsplash.com',
      'images.unsplash.com',
      'lh3.googleusercontent.com',
    ]
  }
}

module.exports = nextConfig
