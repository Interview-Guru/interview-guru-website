import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
	title: {
		default: "InterviewGuru | AI Powered Interview Prep That Actually Works",
		template: "%s | InterviewGuru",
	},
	description: "Personalized, AI-guided interview preparation to help you land top offers.",
	keywords: ["interview preparation", "coding interviews", "technical interview", "AI interview prep"],
	authors: [{ name: "InterviewGuru" }],
	creator: "InterviewGuru",
	publisher: "InterviewGuru",
	openGraph: {
		type: "website",
		siteName: "InterviewGuru",
		title: "InterviewGuru - AI Powered Interview Prep That Actually Works",
		description: "Personalized, AI-guided interview preparation to help you land top offers.",
		url: "https://www.interviewguru.com",
		images: [
			{
				url: "/IG_seo.jpg",
				width: 1200,
				height: 630,
				alt: "InterviewGuru Preview",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "InterviewGuru - AI Powered Interview Prep That Actually Works",
		description: "Personalized, AI-guided interview preparation to help you land top offers.",
		images: ["/OG_seo.jpg"],
		// creator: "@interview", // update when created
	},
	robots: {
		index: true,
		follow: true,
		googleBot: { index: true, follow: true, "max-image-preview": "large" },
	},
	icons: {
		icon: [
			{ url: "/favicon.ico" },
			{ url: "/icon-192.png", sizes: "192x192", type: "image/png" },
			{ url: "/icon-512.png", sizes: "512x512", type: "image/png" },
		],
		apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
	},
	manifest: "/site.webmanifest",
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
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}>{children}</body>
		</html>
	);
}
