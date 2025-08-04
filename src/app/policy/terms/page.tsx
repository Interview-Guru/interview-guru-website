import { FooterSection, HeaderSection } from "@/app/page";
import BlogPageContentComponent from "@/components/BlogPageContentComponent";

const title = "Terms of Service";
const lastUpdatedDate = "August 4th, 2025";
const contentMd = `
This is terms and services MD.`;

const TermsPage = () => {
	return (
		<div className="min-h-screen">
			<HeaderSection />
			<BlogPageContentComponent contentMd={contentMd} lastUpdatedDate={lastUpdatedDate} title={title} />
			<FooterSection />
		</div>
	);
};

export default TermsPage;
