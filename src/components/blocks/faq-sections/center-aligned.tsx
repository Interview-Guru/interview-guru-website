import StyledMarkdown from "@/components/StyledMarkdown";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Markdown from "react-markdown";

const faqs = [
	{
		question: "Who is InterviewGuru for?",
		answer: `InterviewGuru is built for engineers preparing for technical coding interviews, especially those focused on data structures, algorithms, and company-specific challenges.

Whether you're a junior developer looking to break into the industry or a mid-to-senior engineer aiming to land a top-tier offer, our guided pathways help you progress with clarity and confidence.`,
	},
	{
		question: "What makes InterviewGuru different from other platforms?",
		answer: `InterviewGuru offers a **personalized prep experience** rather than just a list of problems. Our adaptive pathway:

- Responds to your progress
- Prioritizes high-impact questions
- Keeps your practice focused and distraction-free

Unlike other platforms, we cut the fluff and give you exactly what you need to succeed.`,
	},
	{
		question: "Is InterviewGuru worth it?",
		answer: `Just do the math.

The cost of InterviewGuru is **less than an hour of an engineer’s time**, yet the potential return is massive—**better interview performance, stronger offers, and higher compensation**.

Many users have reported encountering questions in their real interviews that were directly practiced on our platform.`,
	},
	{
		question: "What do I get with InterviewGuru?",
		answer: `You get access to:

- Carefully selected coding questions
- Personalized progress tracking
- Company-specific questions
- A guided prep pathway tailored to your strengths and gaps

Most importantly, you get **AI-driven coaching**. Instead of revealing answers, our assistant helps you think through problems and arrive at the solution yourself—ensuring you truly understand the 'why' behind every step.`,
	},
	{
		question: "What's included in the premium plan?",
		answer: `The premium plan unlocks:

- Full access to our question bank
- Company filters to target your dream roles
- An **AI interview coach** to guide you through each question with structured hints and strategy (without giving away the answer)
- Access to our **private community and mentors** for support, advice, and accountability
- **All future content updates** at no extra cost`,
	},
	{
		question: "Do I get future updates?",
		answer: `Yes. All premium members get **free lifetime access** to new questions and features as they’re released, keeping your prep aligned with evolving interview trends.`,
	},
	{
		question: "Is InterviewGuru suitable for all experience levels?",
		answer: `Absolutely.

- **Beginners** can build strong fundamentals and get step-by-step guidance.
- **Mid-level engineers** can close knowledge gaps and increase speed.
- **Senior engineers** can refine their problem-solving and target company-specific expectations.

InterviewGuru is built to grow with you, no matter where you’re starting.`,
	},
];

export default function CenterAlignedWithActiveBackgroundGray() {
	return (
		<>
			<div className="max-w-[85rem] container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-20">
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
								<AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
								<AccordionContent className="!text-muted-foreground text-base font-light">
									<StyledMarkdown content={faq.answer} className="!text-muted-foreground !text-sm" />
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</>
	);
}
