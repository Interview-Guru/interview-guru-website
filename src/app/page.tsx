"use client";

import React from "react";
import { Star, Target, Zap, Brain, Award, Check, Lock, Code, Building, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Aurora from "@/components/react-bits/Aurora";
import { FaStar } from "react-icons/fa";
import { HeaderSection } from "@/components/Header";
import { FooterSection } from "@/components/Footer";
import { BsAmazon, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import ScrollableImageComponent from "@/components/ScrollableImageCarousel";

const InterviewGuruLanding = () => {
	const testimonials = [
		{
			name: "Sarah Chen",
			role: "Software Engineer at Google",
			content:
				"InterviewGuru&apos;s AI mentor helped me understand patterns I was struggling with. Got my dream job in 8 weeks!",
			avatar: "SC",
			rating: 5,
		},
		{
			name: "Marcus Rodriguez",
			role: "Senior Engineer at Meta",
			content: "The personalized path was exactly what I needed. No more wasting time on irrelevant problems.",
			avatar: "MR",
			rating: 5,
		},
		{
			name: "Priya Patel",
			role: "Engineer at Amazon",
			content: "Built by Amazon engineers, for engineers. The quality and depth is unmatched.",
			avatar: "PP",
			rating: 5,
		},
		{
			name: "David Kim",
			role: "Staff Engineer at Stripe",
			content: "Finally got past the interview barrier. The AI really knows when you understand vs just memorizing.",
			avatar: "DK",
			rating: 5,
		},
		{
			name: "Lisa Thompson",
			role: "Engineer at Block",
			content: "Went from failing interviews to landing a $250k offer. This platform changed everything.",
			avatar: "LT",
			rating: 5,
		},
	];

	const companies = [
		"Google",
		"Amazon",
		"Meta",
		"Apple",
		"Microsoft",
		"Netflix",
		"Tesla",
		"Uber",
		"Airbnb",
		"Stripe",
		"Block",
		"Canva",
		"Atlassian",
		"Shopify",
		"Coinbase",
		"DoorDash",
		"Zoom",
		"Slack",
		"Figma",
		"Notion",
	];

	const features = [
		{
			icon: <Brain className="w-8 h-8" />,
			title: "AI Mentor That Knows You",
			description:
				"Your personal AI mentor understands your progress, strengths, and learning style to guide you through each problem.",
		},
		{
			icon: <Target className="w-8 h-8" />,
			title: "Company-Specific Preparation",
			description:
				"Tailored paths for 400+ companies including FAANG, unicorns, and top startups. Know exactly what each company asks.",
		},
		{
			icon: <Zap className="w-8 h-8" />,
			title: "Personalized Learning Path",
			description:
				"Skip the generic approach. Get a customized roadmap based on your target company, timeline, and current skill level.",
		},
		{
			icon: <Code className="w-8 h-8" />,
			title: "Real Understanding, Not Memorization",
			description: "Our AI ensures you truly understand patterns and concepts, not just memorize solutions.",
		},
	];

	const steps = [
		{
			number: "01",
			title: "Choose Your Target Company",
			description: "Select from 400+ companies including FAANG, unicorns, and top startups.",
			icon: <Building className="w-6 h-6" />,
		},
		{
			number: "02",
			title: "Get Your Personalized Path",
			description: "Our AI creates a custom learning roadmap based on your target and timeline.",
			icon: <Target className="w-6 h-6" />,
		},
		{
			number: "03",
			title: "Learn With AI Guidance",
			description: "Work through problems with your AI mentor that ensures real understanding.",
			icon: <Brain className="w-6 h-6" />,
		},
		{
			number: "04",
			title: "Land Your Dream Job",
			description: "Apply with confidence knowing you&apos;ve mastered the patterns that matter.",
			icon: <Award className="w-6 h-6" />,
		},
	];

	const HeroSection = () => {
		return (
			<div>
				<div className="absolute w-full -z-10 -mt-[52px] h-[60%]">
					<Aurora />
				</div>
				<div className="h-[calc(100svh-52px)] flex flex-col justify-around">
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
					</section>
				</div>
			</div>
		);
	};

	const FAQSection = () => {
		return <div>FAQ section</div>;
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
									<AvatarImage
										src="https://media.licdn.com/dms/image/v2/D5603AQGa9BiYr8aywA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698988692214?e=1757548800&v=beta&t=zAZiYQ1YvRqdEvMGHZ2crn9hjC1vNyDuUHpcGaRrJKM"
										alt="Shane Perera"
									/>
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
									<AvatarImage
										src="https://media.licdn.com/dms/image/v2/D5603AQEtXTI9vN7DtQ/profile-displayphoto-shrink_800_800/B56ZYQMAycHQAc-/0/1744028308510?e=1757548800&v=beta&t=CQFR2ob8SMgGyOO7Sqxzz83fmCD5_hAzIMrry3RpTWQ"
										alt="Luka Zoric"
									/>
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
			<section className="min-h-[calc(100svh-52px)] md:min-h-[30vh] px-6 flex flex-col gap-5 justify-around">
				<div className="max-w-6xl mx-auto flex flex-col gap-5">
					<Badge variant="outline" className="flex items-center gap-4 font-light p-3 rounded-full py-1 m-auto">
						<span className="flex md:text-lg gap-2 items-center">Average prep time ~8 weeks</span>
						{/* <span className="flex items-centers gap-1 font-semibold md:text-lg">
						Try it here
						<ArrowRight className="w-3.5 h-4 md:h-7 md:w-4" />
					</span> */}
					</Badge>
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
			<div className="min-h-5xl pb-30 cursor-default">
				<ScrollableImageComponent />
			</div>
		);
	};

	const HowItWorksSection = () => {
		return (
			<div>
				{/* Features */}
				<section id="features" className="py-20 px-6">
					<div className="container mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-4xl md:text-5xl font-bold mb-6">Why InterviewGuru Works</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								Unlike generic practice platforms, we use AI to create a truly personalized experience that adapts to
								how you learn and what you need to succeed.
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-8">
							{features.map((feature, index) => (
								<Card key={index} className="hover:shadow-lg transition-shadow">
									<CardHeader>
										<div className="flex items-center space-x-4">
											{feature.icon}
											<CardTitle>{feature.title}</CardTitle>
										</div>
									</CardHeader>
									<CardContent>
										<CardDescription className="text-base">{feature.description}</CardDescription>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* How It Works */}
				<section id="how-it-works" className="py-20 px-6 bg-gray-50">
					<div className="container mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								Get started in minutes and land your dream job in weeks, not months.
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
							{steps.map((step, index) => (
								<div key={index} className="text-center">
									<div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
										{step.number}
									</div>
									<div className="bg-gray-200 p-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
										{step.icon}
									</div>
									<h3 className="text-xl font-semibold mb-2">{step.title}</h3>
									<p className="text-gray-600">{step.description}</p>
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
		);
	};

	const UsVsThemSection = () => {
		return <div>Us vs them section</div>;
	};

	const PricingSection = () => {
		return (
			<section className="min-h-[calc(100svh-52px)] flex flex-col justify-around py-20 pt-30">
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
							Prepare smarter, interview better & secure high-paying roles
						</h2>
						<p className="text-muted-foreground text-lg">
							Get full access to everything you need to land your dream job.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						{/* Quarterly Plan - Best Deal */}
						<div className="bg-card/30 border-1 border-primary rounded-2xl p-8 relative">
							<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
								<div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
									Best Deal
								</div>
							</div>

							<div className="flex items-center gap-3 mb-8">
								<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
									<div className="w-6 h-6 bg-primary rounded-full"></div>
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
							<Button className="w-full py-3 px-6 rounded-xl font-semibold mb-6 mt-8 transition-colors">
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
							<div className="flex items-center gap-3 mb-4">
								<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
									<div className="w-6 h-6 bg-primary rounded-full"></div>
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

					<div className="text-center mt-12">
						<p className="text-muted-foreground">Trusted by thousands of job seekers worldwide. Cancel anytime.</p>
					</div>
				</div>
			</section>
		);
	};

	const SocialProof = () => {
		return <div>Social proof section</div>;
	};

	return (
		<div className="min-h-screen cursor-default">
			<HeaderSection />
			<HeroSection />
			<InterviewWithTheseCompaniesSection />
			<AboutUsSection />
			{/* <HowItWorksSection /> */}
			{/* <UsVsThemSection /> */}
			{/* <SocialProof /> */}
			<PricingSection />
			{/* <FAQSection /> */}
			<CTASection />
			<FooterSection />
		</div>
	);
};

export default InterviewGuruLanding;
