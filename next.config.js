/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['i.ytimg.com'],
	},
	sassOptions: {
		includePaths: [path.join(__dirname, '/src', 'styles')],
	},
};

module.exports = nextConfig
