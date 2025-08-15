import Link from "next/link";
import { ReactNode } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Badge } from "./ui/badge";
import { SmallLogo } from "./SmallLogo";
import { IconBrandDiscord } from "@tabler/icons-react";
import { Handshake } from "lucide-react";
import { BsCash } from "react-icons/bs";

export const FooterSection = () => {
	const SocialMediaIcon = ({ icon, link }: { icon: ReactNode; link: string }) => {
		return (
			<Link href={link}>
				<div className="w-5 h-5">{icon}</div>
			</Link>
		);
	};

	const socialMediaIconsData = [
		{ icon: <FaXTwitter className="w-5 h-5" />, link: "#1" },
		{ icon: <FaInstagram className="w-5 h-5" />, link: "#2" },
		{ icon: <FaLinkedin className="w-5 h-5" />, link: "#3" },
	];

	const SocialMediaLinks = () => {
		return (
			<div className="flex gap-2 text-muted-foreground pt-2">
				{socialMediaIconsData.map((socialMediaIcon) => {
					return <SocialMediaIcon key={socialMediaIcon.link} icon={socialMediaIcon.icon} link={socialMediaIcon.link} />;
				})}
			</div>
		);
	};

	return (
		<footer className="flex px-6 py-20 bg-gradient-to-t from-foreground/5 to-transparent">
			<div className="flex max-w-5xl m-auto justify-between w-full flex-wrap gap-10">
				<div className="flex flex-col gap-2 mb-5">
					<div className="flex items-left">
						<SmallLogo showText={true} outline={true} />
					</div>
					<p className="text-sm max-w-xs text-muted-foreground">
						InterviewGuru is an AI powered platform that enables most optimal interview preparation for technical
						interviews.
					</p>
					<SocialMediaLinks />
					<Badge
						variant="outline"
						className="flex items-center gap-2 text-xs tiny font-light rounded-full cursor-default my-4"
					>
						<span className="relative h-2 w-2 rounded-full bg-green-400">
							<span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
						</span>
						Systems online
					</Badge>
					{/* This will be tooltip that says "This actually updates it's not just static to make it looks good" */}
					<p className="text-xs text-muted-foreground">© 2025 InterviewGuru.io. All rights reserved.</p>
				</div>
				<div className="flex items-left flex-wrap gap-10">
					<div className="flex flex-col">
						<p className="font-bold pb-3 cursor-default">Affiliate Program</p>
						<div className="flex flex-col gap-2 text-muted-foreground font-light text-sm">
							<Link
								className="flex gap-1 items-center hover:text-primary"
								target="_blank"
								href={"https://interviewguru.tolt.io/"}
							>
								{/* <BsCash size={17} /> */}
								Become an Affiliate
							</Link>
						</div>
					</div>
					<div className="flex flex-col">
						<p className="font-bold pb-3 cursor-default">Legal</p>
						<div className="flex flex-col gap-2 text-muted-foreground font-light text-sm">
							<Link className="hover:text-primary" href={"/policy/terms"}>
								Terms of Service
							</Link>
							<Link className="hover:text-primary" href={"/policy/refund"}>
								Refund Policy
							</Link>
							<Link className="hover:text-primary" href={"/policy/privacy"}>
								Privacy Policy
							</Link>
						</div>
					</div>
					<div className="flex flex-col">
						<p className="font-bold pb-3 cursor-default">Links</p>
						<div className="flex flex-col gap-2 text-muted-foreground font-light text-sm">
							<Link
								href={"https://discord.com/invite/XwUJu7tBHW"}
								className="flex gap-1 items-center hover:text-primary"
								target="_blank"
							>
								<IconBrandDiscord size={17} />
								Join the community
							</Link>
							<Link className="hover:text-primary" href={"https://app.interviewguru.io/sign-in"}>
								Sign in to account
							</Link>
							<Link className="hover:text-primary" href={"https://app.interviewguru.io/sign-up"}>
								Create account
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
