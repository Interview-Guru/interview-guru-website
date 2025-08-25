import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

// Global metadata
export const metadata: Metadata = {
	metadataBase: new URL("https://www.interviewguru.io"),
	title: "InterviewGuru | Leetcode + AI",
	description:
		"Get a personalized learning path with an AI mentor, skip months of random tutorials and get laser-focused prep for your exact target role.",
	openGraph: {
		type: "website",
		url: "https://www.interviewguru.io",
		title: "InterviewGuru | Leetcode + AI",
		description:
			"Get a personalized learning path with an AI mentor, skip months of random tutorials and get laser-focused prep for your exact target role.",
		siteName: "InterviewGuru",
		images: [
			{
				url: "https://opengraph.b-cdn.net/production/images/7124fce7-7712-4226-8331-a9e41e1ea607.png?token=EzGU8KJcI7QTCBSeaQge1cCiE1qWptFbRSNbIzNuwl4&height=630&width=1200&expires=33290797043",
				width: 1200,
				height: 630,
				alt: "InterviewGuru Preview",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@interview", // update when ready
		title: "InterviewGuru | Leetcode + AI",
		description:
			"Get a personalized learning path with an AI mentor, skip months of random tutorials and get laser-focused prep for your exact target role.",
		images: [
			"https://opengraph.b-cdn.net/production/images/7124fce7-7712-4226-8331-a9e41e1ea607.png?token=EzGU8KJcI7QTCBSeaQge1cCiE1qWptFbRSNbIzNuwl4&height=630&width=1200&expires=33290797043",
		],
	},
	icons: {
		icon: [
			{ url: "/favicon.ico" },
			{ url: "/icon-192.png", sizes: "192x192", type: "image/png" },
			{ url: "/icon-512.png", sizes: "512x512", type: "image/png" },
		],
		apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
	},
};

// Optional viewport settings (LCP / theme color best practice)
export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: "#000000",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}>
				<GoogleTagManager gtmId="GTM-52FCRQ3J" />
				<Analytics />
				<Script
					src="https://cdn.tolt.io/tolt.js"
					strategy="afterInteractive"
					data-tolt={process.env.NEXT_PUBLIC_TOLT_PUBLIC_ID}
				/>
				{children}
			</body>
		</html>
	);
}
