import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    experimental: {
        typedRoutes: false,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
            {
                protocol: 'https',
                hostname: 'www.pexels.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.stocksnap.io',
            },
            {
                protocol: 'https',
                hostname: 'cdn.shopify.com',
            },
        ],
    },
}

export default nextConfig
