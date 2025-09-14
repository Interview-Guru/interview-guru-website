import React from "react";
import { Check, X, ChevronRight, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const UsVsThemSection = () => {
	const comparisonData = [
		{
			category: "Approach",
			leetcode: { text: "Random problem grinding", good: false },
			neetcode: { text: "Generic roadmap", good: false },
			interviewguru: { text: "Personalized pathway for YOUR target company", good: true },
		},
		{
			category: "Learning Method",
			leetcode: { text: "Memorize solutions", good: false },
			neetcode: { text: "Watch videos, copy code", good: false },
			interviewguru: { text: "AI tutor ensures you understand", good: true },
		},
		{
			category: "Time to Job Ready",
			leetcode: { text: "6-12 months grinding", good: false },
			neetcode: { text: "4-6 months following videos", good: false },
			interviewguru: { text: "8 weeks focused prep", good: true },
		},
		// {
		// 	category: "Built By",
		// 	leetcode: { text: "Competitive programmers", good: false },
		// 	neetcode: { text: "Content Creator", good: false },
		// 	interviewguru: { text: "Ex-Amazon interviewers", good: true },
		// },
		{
			category: "Best For",
			leetcode: { text: "For puzzle enthusiasts", good: false },
			neetcode: { text: "For beginners", good: false },
			interviewguru: { text: "For serious job seekers", good: true },
		},
	];

	const platforms = [
		{
			id: "leetcode",
			name: "LeetCode",
			tagline: "Puzzle Playground",
			color: "orange",
		},
		{
			id: "neetcode",
			name: "NeetCode & Others",
			tagline: "Generic Course/Roadmap",
			color: "purple",
		},
		{
			id: "interviewguru",
			name: "Interview Guru",
			tagline: "Personalized Pathway",
			color: "green",
			highlight: true,
		},
	];

	return (
		<section className="px-6 py-20">
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<div className="text-center mb-12">
					<Badge
						variant="outline"
						className="flex items-center gap-2 font-light p-3 rounded-full py-1 m-auto mb-5 w-fit"
					>
						<span className="md:text-lg">Why We&apos;re Different</span>
					</Badge>
					<h2 className="text-3xl md:text-5xl font-bold text-foreground max-w-3xl m-auto mb-4">
						Stop Wasting Time on
						<br />
						{/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
							Random Puzzles
						</span> */}
						Random Puzzles
					</h2>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Other platforms give you problems. We give you a personalized system that actually gets you hired.
					</p>
				</div>

				{/* Desktop Comparison Table */}
				<Card className="hidden md:block overflow-hidden bg-card/30">
					<CardContent className="p-0">
						<table className="w-full">
							<thead>
								<tr className="border-b">
									<th className="text-left p-4 font-medium">Feature</th>
									{platforms.map((platform) => (
										<th
											key={platform.id}
											className={`text-center p-4 font-medium transition-all ${
												platform.highlight ? "bg-green-500/5 rounded-lg" : ""
											}`}
										>
											<div className="flex flex-col items-center gap-1">
												<span className="flex items-center gap-1">
													{platform.name}
													{platform.highlight}
												</span>
												<Badge
													variant={platform.highlight ? "default" : "outline"}
													className={`text-xs ${platform.highlight ? "bg-green-600 text-white" : ""}`}
												>
													{platform.tagline}
												</Badge>
											</div>
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{comparisonData.map((row, idx) => (
									<tr key={idx} className="border-b hover:bg-muted/30 transition-colors">
										<td className="p-4 font-medium">{row.category}</td>
										<td className="p-4 text-center text-sm">
											<div className="flex items-center justify-center gap-2">
												{row.leetcode.good ? (
													<Check className="w-4 h-4 text-green-500 flex-shrink-0" />
												) : (
													<X className="w-4 h-4 text-red-500 flex-shrink-0" />
												)}
												<span className="text-muted-foreground">{row.leetcode.text}</span>
											</div>
										</td>
										<td className="p-4 text-center text-sm">
											<div className="flex items-center justify-center gap-2">
												{row.neetcode.good ? (
													<Check className="w-4 h-4 text-green-500 flex-shrink-0" />
												) : (
													<X className="w-4 h-4 text-red-500 flex-shrink-0" />
												)}
												<span className="text-muted-foreground">{row.neetcode.text}</span>
											</div>
										</td>
										<td className="p-4 text-center text-sm bg-green-500/5">
											<div className="flex items-center justify-center gap-2">
												{row.interviewguru.good ? (
													<Check className="w-4 h-4 text-green-500 flex-shrink-0" />
												) : (
													<X className="w-4 h-4 text-red-500 flex-shrink-0" />
												)}
												<span className="font-medium">{row.interviewguru.text}</span>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</CardContent>
				</Card>

				{/* Mobile Comparison Cards */}
				<div className="md:hidden space-y-5">
					{platforms.map((platform, index) => (
						<motion.div
							key={platform.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
						>
							<Card
								className={`relative bg-card/10 ${
									platform.highlight ? "ring-2 ring-green-500/20  border-green-500/20 bg-card/30" : ""
								}`}
							>
								{/* {platform.highlight && (
									<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
										<Badge className="bg-green-600 text-white">
											<Trophy className="w-3 h-3 mr-1" />
											Best Choice
										</Badge>
									</div>
								)} */}
								<CardContent className="p-4">
									<div className="flex items-center justify-between mb-4">
										<div>
											<h3 className="text-lg font-bold flex items-center gap-2">{platform.name}</h3>
											<p className="text-sm text-muted-foreground">{platform.tagline}</p>
										</div>
									</div>

									<div className="space-y-2">
										{comparisonData.map((item, idx) => {
											const data =
												platform.id === "leetcode"
													? item.leetcode
													: platform.id === "neetcode"
													? item.neetcode
													: item.interviewguru;
											return (
												<div key={idx} className="flex items-start gap-2 text-sm">
													{data.good ? (
														<Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
													) : (
														<X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
													)}
													<div>
														{/* <span className="font-medium text-xs text-muted-foreground">{item.category}:</span> */}
														<span className={`ml-1 ${data.good ? "font-medium" : "text-muted-foreground"}`}>
															{data.text}
														</span>
													</div>
												</div>
											);
										})}
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
					<Button
						size="lg"
						className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
						onClick={() => (window.location.href = "https://app.interviewguru.io/sign-up")}
					>
						Get Started for Free
						<ChevronRight className="w-4 h-4 ml-2" />
					</Button>
					<div className="flex items-center gap-2 text-xs text-muted-foreground">
						<Clock className="w-4 h-4" />
						<span>Takes 2 minutes</span>
					</div>
				</div>
				{/* Bottom Note */}
				{/* <div className="mt-8 text-center">
					<p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
						<AlertCircle className="w-4 h-4" />
						Built by ex-Amazon engineers who used this exact system to land $250K+ offers
					</p>
				</div> */}
			</div>
		</section>
	);
};

export default UsVsThemSection;
