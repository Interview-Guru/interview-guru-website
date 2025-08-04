"use client";

import BlogPageContentComponent from "@/components/BlogPageContentComponent";
import { HeaderSection } from "@/components/Header";
import { FooterSection } from "@/components/Footer";

const title = "Refund & Cancellation Policy";
const lastUpdatedDate = "August 4th, 2025";
const contentMd = `
This is refund policy in MD.`;

const RefundsPage = () => {
	return (
		<div className="min-h-screen">
			<HeaderSection />
			<BlogPageContentComponent contentMd={contentMd} lastUpdatedDate={lastUpdatedDate} title={title} />
			<FooterSection />
		</div>
	);
};

export default RefundsPage;
