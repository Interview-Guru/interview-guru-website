import Link from "next/link";
import StyledMarkdown from "./StyledMarkdown";
import { ArrowLeft } from "lucide-react";

const BlogPageContentComponent = ({
	contentMd,
	title,
	lastUpdatedDate,
}: {
	contentMd: string;
	title: string;
	lastUpdatedDate: string;
}) => {
	return (
		<section className="m-auto max-w-5xl mb-10 min-h-[65vh]">
			<div className="max-w-5xl m-auto pt-4">
				<Link href={"/policy"} className="flex gap-2 text-xs items-center text-muted-foreground hover:text-primary ">
					<ArrowLeft className="w-4 h-4" /> View all poicies
				</Link>
			</div>
			<div className="py-10 text-center">
				<h1 className="text-4xl pb-2 font-bold text-center cursor-default">{title}</h1>
				<p className="text-muted-foreground font-light">{`Last updated on ${lastUpdatedDate}`}</p>
			</div>
			<div className="max-w-4xl px-3">
				<StyledMarkdown content={contentMd} />
			</div>
		</section>
	);
};

export default BlogPageContentComponent;
