/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            type: 'asset',
            resourceQuery: [/url/],
        }, {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            resourceQuery: { not: [/url/] },
            use: ["@svgr/webpack"],
        });
        return config
    },
}

module.exports = nextConfig
