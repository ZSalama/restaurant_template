import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            new URL(
                'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/**'
            ),
        ],
    },
}

export default nextConfig
