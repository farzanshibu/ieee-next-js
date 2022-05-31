/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = nextConfig;
module.exports = {
	experimental: {
		images: {
			layoutRaw: true,
		},
	},
	images: {
		domains: ["source.unsplash.com"],
	},
};
