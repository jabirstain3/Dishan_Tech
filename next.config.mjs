/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dishantech.com',
                port: '',
                pathname: '/wp-content/uploads/2023/08/**',
                search: '',
            },
        ],
    },
};

export default nextConfig;
