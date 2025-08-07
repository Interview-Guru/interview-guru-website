import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Markdown from "react-markdown";

const faqs = [
	{
		question: "Who is InterviewGuru for?",
		answer:
			"InterviewGuru is built for engineers preparing for technical coding interviews, especially those focused on data structures, algorithms, and company-specific challenges. Whether you're a junior developer looking to break into the industry or a mid-to-senior engineer aiming to land a top-tier offer, our guided pathways help you progress with clarity and confidence.",
	},
	{
		question: "What makes InterviewGuru different from other platforms?",
		answer:
			"InterviewGuru offers a personalized prep experience rather than just a list of problems. Our smart pathway adapts to your progress, prioritizes high-impact questions, and provides a focused, distraction-free environment to improve consistently. Unlike other platforms, we cut the fluff and give you exactly what you need to succeed.",
	},
	{
		question: "Is InterviewGuru worth it?",
		answer:
			"Just do the math. The cost of InterviewGuru is less than an hours of an engineer's time, yet the potential return is massive—better interview performance, stronger offers, and higher compensation. Many users have reported seeing questions in their real interviews that were directly practiced on our platform.",
	},
	{
		question: "What do I get with InterviewGuru?",
		answer:
			"You get access to carefully selected coding questions, personalized progress tracking, company-specific questions, and curated prep pathways. On top of that, you get the most optimal pathway to prepare for interviews, guided by an AI assistant that knows exactly what you should be doing. Instead of giving you the solution outright, it helps you arrive at it yourself—ensuring you fully understand the reasoning behind each step and build true mastery through doing.",
	},
	{
		question: "What's included in the premium plan?",
		answer:
			"The premium plan unlocks our full question bank, company filters, and—most importantly—access to our AI interview coach. The AI guides you through each question with personalized support, helping you deeply understand the concepts without revealing the solution. Premium members also get access to our private community and mentors for additional guidance, support, and accountability. All future content updates are included at no extra cost.",
	},
	{
		question: "Do I get future updates?",
		answer:
			"Yes. All premium members receive lifetime access to new questions, updated solutions, and any new prep tools we add to stay aligned with evolving interview trends.",
	},
	{
		question: "Is InterviewGuru suitable for all experience levels?",
		answer:
			"Yes. InterviewGuru is designed for all levels. Beginners can build strong fundamentals, mid-level engineers can fill in skill gaps and improve speed, and experienced engineers can sharpen their edge with targeted practice on the most commonly asked interview problems.",
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
