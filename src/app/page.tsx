"use client";

import React from "react";
import { Target, Check, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Aurora from "@/components/react-bits/Aurora";
import { FaStar } from "react-icons/fa";
import { HeaderSection } from "@/components/Header";
import { FooterSection } from "@/components/Footer";
import { BsAmazon, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import ScrollableImageComponent from "@/components/ScrollableImageCarousel";
import Image from "next/image";
import CenterAlignedWithActiveBackgroundGray from "@/components/blocks/faq-sections/center-aligned";
import { ListChecks, Lightbulb, Rocket } from "lucide-react";
import { BeforeAndAfter } from "@/components/ui/before-and-after";
import { TestimonialsColumn } from "@/components/blocks/testimonials-columns-1";
import { motion } from "motion/react";

const InterviewGuruLanding = () => {
	const HeroSection = () => {
		return (
			<div>
				<div className="absolute w-full -z-10 -mt-[52px] h-[60%]">
					<Aurora />
				</div>
				<div className="flex flex-col justify-around py-30">
					<section className="px-6 flex flex-col gap-5">
						<Badge variant="outline" className="m-auto flex items-center gap-2 rounded-2xl border-0.5 border p-3">
							<p className="text-xs md:text-md m-auto font-light cursor-default">Trusted by 1000+ Engineers</p>
							<div className="flex gap-0.75">
								<FaStar className="w-3 h-3 text-yellow-400" />
								<FaStar className="w-3 h-3 text-yellow-400" />
								<FaStar className="w-3 h-3 text-yellow-400" />
								<FaStar className="w-3 h-3 text-yellow-400" />
								<FaStar className="w-3 h-3 text-yellow-400" />
							</div>
						</Badge>

						<h1 className="max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold text-center cursor-default mx-auto">
							AI Powered Interview Prep That Actually Works
						</h1>
						<p className="text-muted-foreground font-light cursor-default text-center max-w-lg m-auto md:text-lg">
							Get a personalized learning path with an AI mentor and skip months of random tutorials and get
							laser-focused prep for your exact target role.
						</p>
						<Button
							onClick={() => {
								window.location.href = "https://app.interviewguru.io/sign-up";
							}}
							className="w-full md:w-[220px] m-auto md:text-lg md:p-6"
						>
							Start Now
						</Button>
						{/* Angled screenshot with floor glow */}
						<div
							className="hidden lg:block relative mt-20 m-auto w-full max-w-[1000px]"
							style={{ perspective: "1200px" }}
						>
							{/* Upward/floor glow */}
							<div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 rounded-[28px] bg-gradient-to-t from-black/60 via-black/20 to-transparent blur-3xl" />

							{/* 3D tilted image */}
							<Image
								src="/IG_pathway_shot.png"
								alt="InterviewGuru Pathway"
								width={1000}
								height={600}
								className="relative rounded-2xl shadow-2xl transform-gpu will-change-transform"
								style={{ transform: "rotateX(8deg) rotateZ(-4deg) scale(1.02)" }}
								priority
							/>
						</div>
					</section>
				</div>
			</div>
		);
	};

	const FAQSection = () => {
		return (
			<div>
				<CenterAlignedWithActiveBackgroundGray />
			</div>
		);
	};

	const AboutUsSection = () => {
		return (
			<div className="max-w-4xl mx-auto px-6 cursor-default">
				{/* Main heading */}
				<Badge variant="outline" className="flex items-center gap-4 font-light p-3 rounded-full py-1 m-auto mb-5">
					<span className="flex md:text-lg gap-2 items-center">
						Built by ex-interviews at <BsAmazon />
					</span>
					{/* <span className="flex items-centers gap-1 font-semibold md:text-lg">
						Try it here
						<ArrowRight className="w-3.5 h-4 md:h-7 md:w-4" />
					</span> */}
				</Badge>
				<div className="text-center mb-12">
					<h2 className="text-2xl md:text-4xl font-bold text-foreground max-w-2xl m-auto">
						We built InterviewGuru Because It&apos;s What We Wish Existed
					</h2>
				</div>

				{/* Main story card */}
				<Card className="bg-card/30 border border-border">
					<CardContent className="md:px-10 md:py-8">
						<blockquote className="md:text-xl leading-relaxed text-muted-foreground mb-8 font-extralight">
							We were tired of wasting months grinding through random Leetcode problems that didn&apos;t actually
							prepare us for real interviews.
							<br />
							<br />
							Starting from nothing, we both worked our way up to senior and principle level positions by figuring out
							the hard way that{" "}
							<strong>success comes from understanding patterns and core concepts, not memorizing solutions.</strong>
							<br />
							<br />
							<strong>
								Through interviewing and mentoring other engineers, we developed our own interview prep protocol that
								leverages AI to accelerate the learning process.
							</strong>{" "}
							<br />
							<br />
							After successfully helping engineers land FAANG offers using this method,{" "}
							<strong>
								we decided to package our proven system into a platform that makes this approach available to everyone.
							</strong>
							<br />
						</blockquote>

						<div className="grid md:grid-cols-2 gap-8 mt-10">
							<div className="flex items-center gap-4">
								<Avatar className="w-12 h-12">
									<AvatarImage src="/shane_profile_image.jpeg" alt="Shane Perera" />
									<AvatarFallback>SP</AvatarFallback>
								</Avatar>
								<div className="flex flex-col">
									<Link
										href={"https://www.linkedin.com/in/shane-h-perera/"}
										className="font-semibold text-foreground flex gap-2 p-0 items-center hover:underline underline-offset-3"
									>
										Shane Perera
										<BsLinkedin />
									</Link>
									<div className="text-xs text-muted-foreground">Co-founder, InterviewGuru</div>
									<div className="flex items-center gap-1 text-xs text-muted-foreground">
										Amazon Alumini
										<BsAmazon />
									</div>
								</div>
							</div>

							<div className="flex items-center gap-4">
								<Avatar className="w-12 h-12">
									<AvatarImage src="luka_profile_image.png" alt="Luka Zoric" />
									<AvatarFallback>LZ</AvatarFallback>
								</Avatar>
								<div className="flex flex-col">
									<Link
										href={"https://www.linkedin.com/in/luka-zoric/"}
										className="font-semibold text-foreground flex gap-2 p-0 items-center hover:underline underline-offset-3"
									>
										Luka Zoric
										<BsLinkedin />
									</Link>
									<div className="text-xs text-muted-foreground">Co-founder, InterviewGuru</div>
									<div className="flex items-center gap-1 text-xs text-muted-foreground">
										Amazon Alumini
										<BsAmazon />
									</div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		);
	};

	const CTASection = () => {
		return (
			<section className="px-6 flex flex-col gap-5 pb-10">
				<div className="max-w-6xl mx-auto flex flex-col gap-5">
					<h2 className="max-w-2xl text-4xl md:text-5xl font-bold text-center cursor-default mx-auto">
						Your Dream Job Is Absolutely Worth It
					</h2>
					<p className="text-muted-foreground font-light cursor-default text-center max-w-lg m-auto md:text-lg">
						Join thousands who went from interview anxiety to job offers in as early as 8 weeks.
					</p>
					<Button
						onClick={() => {
							window.location.href = "https://app.interviewguru.io/sign-up";
						}}
						className="w-full md:w-[220px] m-auto md:text-lg md:p-6"
					>
						Get Started Now
					</Button>
				</div>
			</section>
		);
	};

	const InterviewWithTheseCompaniesSection = () => {
		return (
			<div className="min-h-5xl pb-20 cursor-default">
				<ScrollableImageComponent />
			</div>
		);
	};

	const HowItWorksSection = () => {
		const steps = [
			{
				icon: Target,
				title: "Set your target",
				body: "Answer a short questionnaire about your role level, timeline, and the companies you're targeting. This sets up a pathway that's tuned to your goals from day one.",
			},
			{
				icon: ListChecks,
				title: "Get your pathway",
				body: "We guide you through a curated question sequence covering fundamentals and company-specific questions. No decision fatigue, no wasted reps.",
			},
			{
				icon: Lightbulb,
				title: "Practice with AI guidance",
				body: "Instead of dumping a solution in your lap, our AI tutor walks you through each question step-by-step. Your job is not to remember but understand.",
			},
			{
				icon: Rocket,
				title: "Lock it in",
				body: "Track your progress, revisit weak spots and drill company-specific patterns so you're ready when it counts!",
			},
		];

		return (
			<section className="px-6 flex flex-col gap-5 py-20">
				<div className="max-w-6xl mx-auto flex flex-col gap-5">
					<Badge variant="outline" className="flex items-center gap-4 font-light p-3 rounded-full py-1 m-auto">
						<span className="flex md:text-lg gap-2 items-center">Most Optimal Interview Prep</span>
					</Badge>
					<h2 className="text-2xl md:text-4xl font-bold text-foreground max-w-2xl m-auto">How InterviewGuru Works</h2>
					<p className="text-muted-foreground font-light cursor-default text-center max-w-lg m-auto md:text-lg">
						A clear, focused path from setup to final prep—so all you need to do is keep solving.
					</p>

					<div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
						{steps.map(({ icon: Icon, title, body }, i) => (
							<Card key={i} className="bg-card/30 border border-border">
								<CardContent className="p-5">
									<div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-card">
										<Icon className="h-5 w-5" aria-hidden="true" />
									</div>
									<h3 className="text-lg font-medium">{title}</h3>
									<p className="mt-1 text-sm text-muted-foreground leading-relaxed">{body}</p>
								</CardContent>
							</Card>
						))}
					</div>

					{/* <div className="flex mt-5 w-full">
						<Button
							onClick={() => {
								window.location.href = "https://app.interviewguru.io/sign-up";
							}}
							className="w-full md:w-[320px] md:m-auto md:text-lg md:p-6"
						>
							Start In Just 60 Seconds
						</Button>
					</div> */}
				</div>
			</section>
		);
	};

	const PricingSection = () => {
		return (
			<section className="min-h-[calc(100svh-52px)] flex flex-col justify-around py-10">
				<div className="mx-auto px-6">
					<div className="text-center mb-16">
						<Badge variant="outline" className="flex items-center gap-4 font-light p-3 rounded-full py-1 m-auto mb-5">
							<span className="flex md:text-lg gap-2 items-center">Simple and Transparent Pricing</span>
							{/* <span className="flex items-centers gap-1 font-semibold md:text-lg">
						Try it here
						<ArrowRight className="w-3.5 h-4 md:h-7 md:w-4" />
					</span> */}
						</Badge>
						<h2 className="text-2xl md:text-4xl font-bold text-foreground max-w-2xl m-auto mb-1.5">
							Prepare Smarter. Interview better. Secure High-Paying Roles
						</h2>
						<p className="text-muted-foreground text-lg">
							Get full access to everything you need to land your dream job.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						{/* Quarterly Plan - Best Deal */}
						<div className="bg-card/30 outline outline-green-400 rounded-2xl p-8 relative">
							<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
								<Badge variant="outline" className="text-white outline-green-400 outline-1 rounded-sm bg-green-900">
									Best Deal
								</Badge>
							</div>

							<div className="flex items-center gap-3 mb-8">
								<div className="w-11 h-11 bg-primary/5 outline-1 rounded-full flex items-center justify-center">
									<Image src="/white_logo.png" alt="IG Logo" width={60} height={60} className="object-contain" />{" "}
								</div>
								<div>
									<h3 className="text-2xl font-bold text-card-foreground">IG Pro Plan</h3>
									<p className="text-muted-foreground flex gap-2 items-center">
										Billed quarterly{" "}
										<Badge variant="outline" className="text-white outline-green-400 outline-1 rounded-sm bg-green-900">
											45% OFF
										</Badge>
									</p>
								</div>
							</div>

							<div className="text-4xl font-bold text-card-foreground mb-1">
								$24.99<span className="text-sm font-normal"> / month</span>
							</div>
							<Button
								onClick={() => {
									window.location.href = "https://app.interviewguru.io/sign-up";
								}}
								className="w-full py-3 px-6 rounded-xl font-semibold mb-6 mt-8 transition-colors"
							>
								Subscribe
							</Button>

							<div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
								<Lock className="w-4 h-4" />
								<span>Secure checkout</span>
							</div>

							<div className="space-y-3">
								<div className="flex items-center gap-3">
									<Check className="w-5 h-5 text-green-500 flex-shrink-0" />
									<span className="text-card-foreground">Unlimited access to all content</span>
								</div>
								<div className="flex items-center gap-3">
									<Check className="w-5 h-5 text-green-500 flex-shrink-0" />
									<span className="text-card-foreground">Personalised learning path</span>
								</div>
								<div className="flex items-center gap-3">
									<Check className="w-5 h-5 text-green-500 flex-shrink-0" />
									<span className="text-card-foreground">Progress tracking and analytics</span>
								</div>
								<div className="flex items-center gap-3">
									<Check className="w-5 h-5 text-green-500 flex-shrink-0" />
									<span className="text-card-foreground">Supportive community & coaching</span>
								</div>
								<div className="flex items-center gap-3">
									<Check className="w-5 h-5 text-green-500 flex-shrink-0" />
									<span className="text-card-foreground">AI-guided problem solving</span>
								</div>
								<div className="flex items-center gap-3">
									<Check className="w-5 h-5 text-green-500 flex-shrink-0" />
									<span className="text-card-foreground">24/7 customer support</span>
								</div>
							</div>
						</div>
						{/* Monthly Plan */}
						<div className="bg-background border border-border rounded-2xl p-8 relative">
							<div className="flex items-center gap-3 mb-8">
								<div className="w-11 h-11 outline-1 rounded-full flex items-center justify-center">
									<Image src="/white_logo.png" alt="IG Logo" width={60} height={60} className="object-contain" />{" "}
								</div>
								<div>
									<h3 className="text-2xl font-bold text-card-foreground">IG Pro</h3>
									<p className="text-muted-foreground">Billed monthly</p>
								</div>
							</div>

							<div className="text-4xl font-bold text-card-foreground mb-1">
								$44.99<span className="text-sm font-normal"> / month</span>
							</div>

							<Button
								onClick={() => {
									window.location.href = "https://app.interviewguru.io/sign-up";
								}}
								variant="secondary"
								className="w-full py-3 px-6 rounded-xl font-semibold mb-6 mt-8 transition-colors"
							>
								Subscribe
							</Button>

							<div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
								<Lock className="w-4 h-4" />
								<span>Secure checkout</span>
							</div>

							<div className="space-y-3">
								<div className="flex items-center gap-3">
									<Check className="w-5 h-5 text-green-500 flex-shrink-0" />
									<span className="text-card-foreground">Unlimited access to all content</span>
								</div>
								<div className="flex items-center gap-3">
									<Check className="w-5 h-5 text-green-500 flex-shrink-0" />
									<span className="text-card-foreground">Personalised learning path</span>
								</div>
								<div className="flex items-center gap-3">
									<Check className="w-5 h-5 text-green-500 flex-shrink-0" />
									<span className="text-card-foreground">Progress tracking and analytics</span>
								</div>
								<div className="flex items-center gap-3">
									<Check className="w-5 h-5 text-green-500 flex-shrink-0" />
									<span className="text-card-foreground">Supportive community & coaching</span>
								</div>
								<div className="flex items-center gap-3">
									<Check className="w-5 h-5 text-green-500 flex-shrink-0" />
									<span className="text-card-foreground">AI-guided problem solving</span>
								</div>
								<div className="flex items-center gap-3">
									<Check className="w-5 h-5 text-green-500 flex-shrink-0" />
									<span className="text-card-foreground">24/7 customer support</span>
								</div>
							</div>
						</div>
					</div>

					<div className="text-left md:text-center text-muted-foreground pt-6 text-xs font-light space-y-1">
						<p>Pro tip: Most companies reimburse interview prep as a professional development expense.</p>
						<p>Note: Our price goes up with each new feature launch. Secure your founder&apos;s rate now.</p>
					</div>
				</div>
			</section>
		);
	};

	const SocialProof = () => {
		const testimonials = [
			{
				text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
				image: "https://randomuser.me/api/portraits/women/1.jpg",
				name: "Briana Patton",
				role: "Operations Manager",
			},
			{
				text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
				image: "https://randomuser.me/api/portraits/men/2.jpg",
				name: "Bilal Ahmed",
				role: "IT Manager",
			},
			{
				text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
				image: "https://randomuser.me/api/portraits/women/3.jpg",
				name: "Saman Malik",
				role: "Customer Support Lead",
			},
			{
				text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
				image: "https://randomuser.me/api/portraits/men/4.jpg",
				name: "Omar Raza",
				role: "CEO",
			},
			{
				text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
				image: "https://randomuser.me/api/portraits/women/5.jpg",
				name: "Zainab Hussain",
				role: "Project Manager",
			},
			{
				text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
				image: "https://randomuser.me/api/portraits/women/6.jpg",
				name: "Aliza Khan",
				role: "Business Analyst",
			},
			{
				text: "Our business functions improved with a user-friendly design and positive customer feedback.",
				image: "https://randomuser.me/api/portraits/men/7.jpg",
				name: "Farhan Siddiqui",
				role: "Marketing Director",
			},
			{
				text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
				image: "https://randomuser.me/api/portraits/women/8.jpg",
				name: "Sana Sheikh",
				role: "Sales Manager",
			},
			{
				text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
				image: "https://randomuser.me/api/portraits/men/9.jpg",
				name: "Hassan Ali",
				role: "E-commerce Manager",
			},
		];

		const firstColumn = testimonials.slice(0, 3);
		const secondColumn = testimonials.slice(3, 6);
		const thirdColumn = testimonials.slice(6, 9);

		return (
			<section className="bg-background my-20 relative">
				<div className="container z-10 mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
						viewport={{ once: true }}
						className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
					>
						<Badge variant="outline" className="flex items-center gap-4 font-light p-3 rounded-full py-1 m-auto mb-5">
							<span className="flex md:text-lg gap-2 items-center">Testimonials</span>
						</Badge>
						<div className="text-center mb-12">
							<h2 className="text-2xl md:text-4xl font-bold text-foreground max-w-2xl m-auto">
								See What Others Have To Say
							</h2>
							<p className="text-center mt-5 opacity-75">
								Trusted by 1000+ developers landing internship to senior level offers.
							</p>
						</div>
					</motion.div>

					<div className="flex justify-center gap-6 mt-5 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
						<TestimonialsColumn testimonials={firstColumn} duration={15} />
						<TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
						<TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
					</div>
				</div>
			</section>
		);
	};

	return (
		<div className="min-h-screen cursor-default">
			<HeaderSection />
			<HeroSection />
			<InterviewWithTheseCompaniesSection />
			<AboutUsSection />
			<HowItWorksSection />
			{/* <UsVsThemSection /> */}
			{/* <SocialProof /> */}
			<PricingSection />
			<FAQSection />
			<CTASection />
			<FooterSection />
		</div>
	);
};

export default InterviewGuruLanding;
