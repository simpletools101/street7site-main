import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
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
        ],
        domains: ['images.pexels.com', 'www.pexels.com', 'cdn.stocksnap.io'],
    },
}

export default nextConfig
