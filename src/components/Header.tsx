import Link from "next/link";
import { SmallLogo } from "./SmallLogo";
import { Button } from "./ui/button";

export const HeaderSection = () => {
	const scrollToSection = (sectionId: string) => {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<header className="sticky bg-background backdrop-blur-lg top-0 w-full border-b z-100">
			<div className="flex justify-between p-2 items-center max-w-5xl m-auto">
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
						Start Now
					</Button>
				</div>
			</div>
		</header>
	);
};
