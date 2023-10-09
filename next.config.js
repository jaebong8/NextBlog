/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
    },
    async redirects() {
        return [
            {
                source:"/posts/deleted_forever",
                destination:"/",
                permanent: true,
            },
            {
                source:"/posts/deleted_temp",
                destination:"/",
                permanent: false,
            }
        ]
    },
    async rewrites() {
        return [
            {
                source:"/p/:id",
                destination:"/posts/:id",
            },
        ]
    }
};

module.exports = nextConfig;
