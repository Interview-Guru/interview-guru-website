"use client";

import { FooterSection, HeaderSection } from "../page";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import Link from "next/link";

const PolicyPage = () => {
	const policyCards = [
		{
			title: "Terms of Service",
			description:
				"Our terms of service outlining the rules and guidelines for using interview guru platform, including licensing, user conduct and service changes.",
			link: "terms",
		},
		{
			title: "Refund & Cancellation Policy",
			description: "Information about our refund policy, cancellation process and subscription details.",
			link: "refund",
		},
		{
			title: "Privacy Policy",
			description:
				"Details about how we collect, use and protect your personal information, and your rights regarding your data.",
			link: "privacy",
		},
	];

	return (
		<div className="min-h-screen">
			<HeaderSection />

			<section className="bg-gradient-to-b from-foreground/5 to-transparent">
				<h1 className="py-10 text-4xl font-bold text-center cursor-default">Our Policies</h1>
				<div className="px-3 min-h-[70vh] flex gap-5 flex-col max-w-xl mx-auto">
					{policyCards.map((policyCard) => {
						return (
							<Link key={policyCard.title} href={`/policy/${policyCard.link}`}>
								<Card className="bg-background">
									<CardHeader className="text-xl font-semibold">{policyCard.title}</CardHeader>
									<CardDescription className="px-4">{policyCard.description}</CardDescription>
								</Card>
							</Link>
						);
					})}
				</div>
			</section>

			<FooterSection />
		</div>
	);
};

export default PolicyPage;
