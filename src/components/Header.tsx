import Link from "next/link";
import { SmallLogo } from "./SmallLogo";
import { Button } from "./ui/button";
import { Clock } from "lucide-react";

const BetaOffer = () => {
	return (
		<div className="hidden sm:block border-foreground bg-red-500 text-white">
			<div className="flex justify-around items-center gap-2 text-sm py-1.5">
				<div className="flex gap-2 items-center">
					<Clock className="w-5 h-6 text-white" />
					<p className="flex items-center gap-1">
						<span className="font-semibold ">Early Bird:</span> Use Code
						<strong>BETA50</strong> at checkout for 50% OFF
					</p>
				</div>
			</div>
		</div>
	);
};

export const HeaderSection = () => {
	const scrollToSection = (sectionId: string) => {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<header className="sticky bg-background backdrop-blur-lg top-0 w-full z-100">
			<div className="flex justify-between p-2 items-center max-w-5xl m-auto border-b">
				<Link href={"/"}>
					<div className="md:hidden">
						<SmallLogo showText={false} />
					</div>
					<div className="hidden md:flex">
						<SmallLogo />
					</div>
				</Link>

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
						size="lg"
						variant="ghost"
						className="font-light"
					>
						Login
					</Button>
					<Button
						onClick={() => {
							window.location.href = "https://app.interviewguru.io/sign-up";
						}}
						size="lg"
						className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
					>
						Get Started for Free
					</Button>
				</div>
			</div>
			<BetaOffer />
		</header>
	);
};
