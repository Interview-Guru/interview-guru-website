import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Markdown from "react-markdown";

const faqs = [
	{
		question: "Who is InterviewGuru for?",
		answer:
			"InterviewGuru is built for engineers preparing for technical coding interviews, especially those with a focus on algorithms, system design, and company-specific preparation. Whether you're a junior developer aiming for your first role, or a senior engineer targeting top-tier offers, our guided pathways and curated problem sets will help you practice efficiently and progress with confidence.",
	},
	{
		question: "What makes InterviewGuru different from other platforms?",
		answer:
			"InterviewGuru goes beyond question dumps by providing a structured learning pathway, clear question prioritization, company-specific prep, and a supportive prep experience. Every question is part of a larger progression system, designed to help you move from beginner to expert with minimal guesswork. We also simulate real interviews and support you with detailed feedback along the way.",
	},
	{
		question: "Is InterviewGuru worth it?",
		answer:
			"Yes. The cost of InterviewGuru is a fraction of what even a single improved offer could bring you in salary. Excelling in interviews can lead to higher levels, larger signing bonuses, and more total compensation. Our users have landed offers at top companies, and many report seeing questions in their interviews that were directly practiced on the platform.",
	},
	{
		question: "What do I get with InterviewGuru?",
		answer:
			"You get access to 500+ coding questions with detailed explanations, a smart pathway that adapts to your progress, company-specific prep guides, system design materials, and a growing knowledge base covering behavioral and strategy prep. Our roadmap helps you focus only on high-impact content instead of getting overwhelmed.",
	},
	{
		question: "What’s included in the premium plan?",
		answer:
			"Premium unlocks all questions, official solutions, company-specific filters, detailed roadmaps, advanced system design modules, and more. It also gives you access to future updates, exclusive question sets, and deep dives written by engineers who've worked at top-tier companies.",
	},
	{
		question: "Do I get future updates?",
		answer:
			"Yes. As a premium user, you'll receive all future updates for free. This includes new questions, updated solutions, and any new guides we publish to reflect evolving interview trends and technologies.",
	},
	{
		question: "Is InterviewGuru suitable for all experience levels?",
		answer:
			"Absolutely. Beginners can build a strong foundation, mid-level engineers can refine problem-solving and system thinking, and senior engineers can deepen their design and architecture skills. We also support students with discounted plans and tailored study tracks.",
	},
];

export default function CenterAlignedWithActiveBackgroundGray() {
	return (
		<>
			<div className="max-w-[85rem] container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
				{/* Title */}
				<div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
					<h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Got Questions? We Got Answers</h2>
					<p className="mt-1 text-muted-foreground">Answers to the most frequently asked questions.</p>
				</div>
				{/* End Title */}

				<div className="max-w-2xl mx-auto">
					<Accordion type="single" collapsible className="w-full">
						{faqs.map((faq, index) => (
							<AccordionItem value={`item-${index}`} key={faq.question}>
								<AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
								<AccordionContent className="text-muted-foreground text-base font-light">
									<Markdown>{faq.answer}</Markdown>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</>
	);
}
