"use client";

import BlogPageContentComponent from "@/components/BlogPageContentComponent";
import { FooterSection } from "@/components/Footer";
import { HeaderSection } from "@/components/Header";

const title = "Privacy Policy";
const lastUpdatedDate = "August 4th, 2025";
const contentMd = `
This is privacy policy in MD.`;

const PrivacyPage = () => {
	return (
		<div className="min-h-screen">
			<HeaderSection />
			<BlogPageContentComponent contentMd={contentMd} lastUpdatedDate={lastUpdatedDate} title={title} />
			<FooterSection />
		</div>
	);
};

export default PrivacyPage;
