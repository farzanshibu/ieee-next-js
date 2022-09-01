/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = nextConfig;
module.exports = {
	experimental: {
		images: {
			allowFutureImage: true,
		},
	},
	images: {
		domains: ["source.unsplash.com", "cdn.sanity.io"],
	},
};
