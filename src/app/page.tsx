"use client";

import React, { useState } from "react";
import {
	Star,
	Target,
	Zap,
	Brain,
	Award,
	Check,
	ArrowRight,
	Play,
	Code,
	Building,
	Menu,
	X,
	StarIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SmallLogo } from "@/components/SmallLogo";
import { useRouter } from "next/router";
import Aurora from "@/components/react-bits/Aurora";
import { FaStar } from "react-icons/fa";

const InterviewGuruLanding = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const scrollToSection = (sectionId: string) => {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
		setMobileMenuOpen(false);
	};

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

	const HeaderSection = () => {
		return (
			<header className="sticky bg-background top-0 w-full border-b">
				<div className="flex justify-between p-2 items-center max-w-[1314px] m-auto">
					{" "}
					<div className="md:hidden">
						<SmallLogo showText={false} />
					</div>
					<div className="hidden md:flex">
						<SmallLogo />
					</div>
					<div className="hidden">
						<div className="hidden md:flex space-x-8">
							<Button variant="ghost" onClick={() => scrollToSection("features")}>
								Features
							</Button>
							<Button variant="ghost" onClick={() => scrollToSection("how-it-works")}>
								How It Works
							</Button>
							<Button variant="ghost" onClick={() => scrollToSection("testimonials")}>
								Success Stories
							</Button>
							<Button variant="ghost" onClick={() => scrollToSection("pricing")}>
								Pricing
							</Button>
						</div>
					</div>
					<div className="flex gap-3">
						<Button
							onClick={() => {
								window.location.href = "https://app.interviewguru.io/sign-in";
							}}
							size="sm"
							variant="ghost"
							className="font-light"
						>
							Login
						</Button>
						<Button
							onClick={() => {
								window.location.href = "https://app.interviewguru.io/sign-up";
							}}
							size="sm"
						>
							Sign up
						</Button>
					</div>
				</div>
			</header>
		);
	};

	const HeroSection = () => {
		return (
			<div>
				<div className="absolute w-full -z-10 -mt-[52px] h-[60%]">
					<Aurora />
				</div>
				<div className="h-[calc(100svh-52px)] flex flex-col justify-around">
					<section className="px-6 flex flex-col gap-5">
						<Badge
							onClick={() => {
								window.location.href = "https://app.interviewguru.io/sign-up";
							}}
							variant="outline"
							className="flex items-center gap-2 font-light p-2 rounded-full py-1 m-auto"
						>
							Built by FAANG Engineers.
							<span className="flex items-centers gap-1 font-semibold">
								Try it here
								<ArrowRight className="w-3.5 h-4" />
							</span>
						</Badge>
						<h1 className="text-3xl font-bold text-center">AI Powered Interview Prep That Actually Works</h1>
						<p className="text-muted-foreground font-light text-sm text-center">
							Get a personalized learning path with an AI mentor that knows you—skip generic practice and get content
							tailored to your exact target role.
						</p>
						<Button
							onClick={() => {
								window.location.href = "https://app.interviewguru.io/sign-up";
							}}
							className="w-full md:w-[120px] m-auto"
						>
							Start Now
						</Button>
						<Badge
							variant="outline"
							className="m-auto flex flex-col items-center gap-2 rounded-2xl border-0.5 border p-3"
						>
							<p className="text-xs m-auto font-light">Trusted by 1000+ Developers</p>
							<div className="flex gap-0.75">
								<FaStar className="w-3 h-3 text-yellow-400" />
								<FaStar className="w-3 h-3 text-yellow-400" />
								<FaStar className="w-3 h-3 text-yellow-400" />
								<FaStar className="w-3 h-3 text-yellow-400" />
								<FaStar className="w-3 h-3 text-yellow-400" />
							</div>
						</Badge>
					</section>
				</div>
			</div>
		);
	};
	return (
		<div className="min-h-screen">
			<HeaderSection />
			<HeroSection />
			{/* Hero Section */}
			<section className="pt-32 pb-20 px-6 bg-white">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
					<div>
						<div className="text-3xl font-bold">400+</div>
						<div className="text-gray-600">Companies</div>
					</div>
					<div>
						<div className="text-3xl font-bold">95%</div>
						<div className="text-gray-600">Success Rate</div>
					</div>
					<div>
						<div className="text-3xl font-bold">8 weeks</div>
						<div className="text-gray-600">Avg. Prep Time</div>
					</div>
					<div>
						<div className="text-3xl font-bold">$250k+</div>
						<div className="text-gray-600">Avg. Salary</div>
					</div>
				</div>
			</section>

			{/* Companies */}
			<section className="py-16 px-6 bg-gray-50 border-y">
				<div className="container mx-auto">
					<h2 className="text-center text-gray-600 text-lg mb-8">Prepare for interviews at</h2>
					<div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
						{companies.map((company, index) => (
							<div key={index} className="font-semibold text-lg">
								{company}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Features */}
			<section id="features" className="py-20 px-6">
				<div className="container mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-6">Why InterviewGuru Works</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Unlike generic practice platforms, we use AI to create a truly personalized experience that adapts to how
							you learn and what you need to succeed.
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

			<div>US VS THEM</div>
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

			{/* Testimonials */}
			<section id="testimonials" className="py-20 px-6">
				<div className="container mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Real engineers who landed their dream jobs using InterviewGuru.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{testimonials.slice(0, 3).map((testimonial, index) => (
							<Card key={index}>
								<CardHeader>
									<div className="flex items-center space-x-4">
										<Avatar>
											<AvatarFallback className="bg-black text-white font-semibold">
												{testimonial.avatar}
											</AvatarFallback>
										</Avatar>
										<div>
											<CardTitle className="text-lg">{testimonial.name}</CardTitle>
											<CardDescription>{testimonial.role}</CardDescription>
										</div>
									</div>
									<div className="flex space-x-1">
										{[...Array(testimonial.rating)].map((_, i) => (
											<Star key={i} className="w-4 h-4 fill-black text-black" />
										))}
									</div>
								</CardHeader>
								<CardContent>
									<p>&quot;{testimonial.content}&quot;</p>
								</CardContent>
							</Card>
						))}
					</div>

					<div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
						{testimonials.slice(3, 5).map((testimonial, index) => (
							<Card key={index + 3}>
								<CardHeader>
									<div className="flex items-center space-x-4">
										<Avatar>
											<AvatarFallback className="bg-black text-white font-semibold">
												{testimonial.avatar}
											</AvatarFallback>
										</Avatar>
										<div>
											<CardTitle className="text-lg">{testimonial.name}</CardTitle>
											<CardDescription>{testimonial.role}</CardDescription>
										</div>
									</div>
									<div className="flex space-x-1">
										{[...Array(testimonial.rating)].map((_, i) => (
											<Star key={i} className="w-4 h-4 fill-black text-black" />
										))}
									</div>
								</CardHeader>
								<CardContent>
									<p>&quot;{testimonial.content}&quot;</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Pricing */}
			<section id="pricing" className="py-20 px-6 bg-gray-50">
				<div className="container mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							No freemium distractions. Get full access to everything you need to land your dream job.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						{/* Monthly */}
						<Card>
							<CardHeader className="text-center">
								<CardTitle className="text-2xl">Monthly</CardTitle>
								<CardDescription>Perfect for focused prep</CardDescription>
								<div className="text-4xl font-bold mt-4">
									$29.99
									<span className="text-lg text-gray-500 font-normal">/month</span>
								</div>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex items-center space-x-3">
									<Check className="w-5 h-5" />
									<span>AI-powered personalized learning paths</span>
								</div>
								<div className="flex items-center space-x-3">
									<Check className="w-5 h-5" />
									<span>400+ company-specific preparation</span>
								</div>
								<div className="flex items-center space-x-3">
									<Check className="w-5 h-5" />
									<span>Personal AI mentor & guidance</span>
								</div>
								<div className="flex items-center space-x-3">
									<Check className="w-5 h-5" />
									<span>Progress tracking & analytics</span>
								</div>
								<div className="flex items-center space-x-3">
									<Check className="w-5 h-5" />
									<span>24/7 support</span>
								</div>
								<Button className="w-full mt-6">Start Now</Button>
							</CardContent>
						</Card>

						{/* Quarterly */}
						<Card className="border-black relative">
							<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
								<Badge>Most Popular</Badge>
							</div>
							<CardHeader className="text-center">
								<CardTitle className="text-2xl">Quarterly</CardTitle>
								<CardDescription>Best value for serious prep</CardDescription>
								<div className="text-4xl font-bold mt-4">
									$69.99
									<span className="text-lg text-gray-500 font-normal">/quarter</span>
								</div>
								<div className="text-sm text-gray-500">Save $20 vs monthly</div>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex items-center space-x-3">
									<Check className="w-5 h-5" />
									<span>Everything in Monthly</span>
								</div>
								<div className="flex items-center space-x-3">
									<Check className="w-5 h-5" />
									<span>Extended timeline optimization</span>
								</div>
								<div className="flex items-center space-x-3">
									<Check className="w-5 h-5" />
									<span>Advanced progress analytics</span>
								</div>
								<div className="flex items-center space-x-3">
									<Check className="w-5 h-5" />
									<span>Priority support</span>
								</div>
								<div className="flex items-center space-x-3">
									<Check className="w-5 h-5" />
									<span>Early access to new features</span>
								</div>
								<Button className="w-full mt-6">Start Now</Button>
							</CardContent>
						</Card>
					</div>

					<div className="text-center mt-8">
						<p className="text-gray-600">30-day money-back guarantee. Cancel anytime.</p>
					</div>
				</div>
			</section>

			<div>COMMON QUESTIONS</div>
			{/* CTA Section */}
			<section className="py-20 px-6">
				<div className="container mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Land Your Dream Job?</h2>
					<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
						Join thousands of engineers who&apos;ve used InterviewGuru to level up their careers and land high-paying
						jobs at top companies.
					</p>
					<Button size="lg">
						Start Now <ArrowRight className="ml-2 w-5 h-5" />
					</Button>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-12 px-6 bg-gray-100 border-t">
				<div className="container mx-auto">
					<div className="grid md:grid-cols-4 gap-8">
						<div>
							<div className="text-2xl font-bold mb-4">InterviewGuru.io</div>
							<p className="text-gray-600">
								AI-powered interview preparation built by Amazon engineers for engineers who want to land their dream
								jobs.
							</p>
						</div>

						<div>
							<h3 className="font-semibold mb-4">Product</h3>
							<div className="space-y-2 text-gray-600">
								<div>Features</div>
								<div>How It Works</div>
								<div>Pricing</div>
								<div>Success Stories</div>
							</div>
						</div>

						<div>
							<h3 className="font-semibold mb-4">Company</h3>
							<div className="space-y-2 text-gray-600">
								<div>About</div>
								<div>Blog</div>
								<div>Careers</div>
								<div>Contact</div>
							</div>
						</div>

						<div>
							<h3 className="font-semibold mb-4">Support</h3>
							<div className="space-y-2 text-gray-600">
								<div>Help Center</div>
								<div>Documentation</div>
								<div>Terms of Service</div>
								<div>Privacy Policy</div>
							</div>
						</div>
					</div>

					<div className="border-t mt-8 pt-8 text-center text-gray-600">
						<p>© 2025 InterviewGuru.io. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default InterviewGuruLanding;
