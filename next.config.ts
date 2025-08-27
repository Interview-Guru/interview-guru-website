import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Existing configurations
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "via.placeholder.com",
			},
			{
				protocol: "https",
				hostname: "randomuser.me",
			},
		],
	},

	// Optimization settings (removed swcMinify as it's default now)
	compress: true, // Enable gzip compression
	poweredByHeader: false, // Remove X-Powered-By header for security

	// Compiler optimizations
	compiler: {
		// Remove console.log statements in production (keep errors)
		removeConsole:
			process.env.NODE_ENV === "production"
				? {
						exclude: ["error", "warn"],
				  }
				: false,

		// Remove React data-testid attributes in production
		reactRemoveProperties:
			process.env.NODE_ENV === "production"
				? {
						properties: ["^data-testid$"],
				  }
				: false,
	},

	// Optional: Additional webpack optimizations
	webpack: (config, { dev, isServer }) => {
		// Only apply optimizations in production client-side builds
		if (!dev && !isServer) {
			// Ensure optimization is enabled
			config.optimization = {
				...config.optimization,
				minimize: true,
			};
		}
		return config;
	},
};

export default nextConfig;
