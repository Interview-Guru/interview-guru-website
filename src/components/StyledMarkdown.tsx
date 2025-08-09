import Markdown from "react-markdown";
import { ReactNode } from "react";

interface MarkdownProps {
	content: string;
	className?: string;
}

interface StandardProps {
	children?: ReactNode;
	[key: string]: any;
}

interface LinkProps extends StandardProps {
	href?: string;
}

const StyledMarkdown = ({ content, className = "" }: MarkdownProps) => {
	return (
		<div className={`prose prose-gray max-w-none ${className}`}>
			<Markdown
				components={{
					// Headings
					h1: ({ children, ...props }: StandardProps) => (
						<h1 className="text-4xl mb-6 mt-8 pb-2 border-b border-border" {...props}>
							{children}
						</h1>
					),
					h2: ({ children, ...props }: StandardProps) => (
						<h2 className="text-3xl mb-4 mt-8 pb-2 border-b border-border" {...props}>
							{children}
						</h2>
					),
					h3: ({ children, ...props }: StandardProps) => (
						<h3 className="text-2xl mb-3 mt-6" {...props}>
							{children}
						</h3>
					),
					h4: ({ children, ...props }: StandardProps) => (
						<h4 className="text-xl mb-3 mt-4" {...props}>
							{children}
						</h4>
					),
					h5: ({ children, ...props }: StandardProps) => (
						<h5 className="text-lg mb-2 mt-4" {...props}>
							{children}
						</h5>
					),
					h6: ({ children, ...props }: StandardProps) => (
						<h6 className="text-base mb-2 mt-4" {...props}>
							{children}
						</h6>
					),

					// Paragraphs
					p: ({ children, ...props }: StandardProps) => (
						<p className="leading-7 mb-4" {...props}>
							{children}
						</p>
					),

					// Links
					a: ({ children, href, ...props }: LinkProps) => (
						<a
							className="underline underline-offset-4 transition-colors"
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							{...props}
						>
							{children}
						</a>
					),

					// Lists
					ul: ({ children, ...props }: StandardProps) => (
						<ul className="list-disc list-inside mb-4 space-y-2 text-foreground ml-4" {...props}>
							{children}
						</ul>
					),
					ol: ({ children, ...props }: StandardProps) => (
						<ol className="list-decimal list-inside mb-4 space-y-2 text-foreground ml-4" {...props}>
							{children}
						</ol>
					),
					li: ({ children, ...props }: StandardProps) => (
						<li className="leading-7" {...props}>
							{children}
						</li>
					),

					// Blockquotes
					blockquote: ({ children, ...props }: StandardProps) => (
						<blockquote
							className="border-l-4 border-primary bg-muted/50 pl-4 py-2 my-6 italic text-muted-foreground"
							{...props}
						>
							{children}
						</blockquote>
					),

					// Tables
					table: ({ children, ...props }: StandardProps) => (
						<div className="overflow-x-auto my-6">
							<table className="min-w-full border border-border rounded-lg" {...props}>
								{children}
							</table>
						</div>
					),
					thead: ({ children, ...props }: StandardProps) => (
						<thead className="bg-muted/50" {...props}>
							{children}
						</thead>
					),
					tbody: ({ children, ...props }: StandardProps) => <tbody {...props}>{children}</tbody>,
					tr: ({ children, ...props }: StandardProps) => (
						<tr className="border-b border-border hover:bg-muted/25 transition-colors" {...props}>
							{children}
						</tr>
					),
					th: ({ children, ...props }: StandardProps) => (
						<th className="px-4 py-3 text-left text-foreground border-r border-border last:border-r-0" {...props}>
							{children}
						</th>
					),
					td: ({ children, ...props }: StandardProps) => (
						<td className="px-4 py-3 text-foreground border-r border-border last:border-r-0" {...props}>
							{children}
						</td>
					),

					// Horizontal rule
					hr: ({ ...props }: StandardProps) => <hr className="my-8 border-border" {...props} />,

					// Strong and emphasis
					strong: ({ children, ...props }: StandardProps) => (
						<strong className="text-foreground" {...props}>
							{children}
						</strong>
					),
					em: ({ children, ...props }: StandardProps) => (
						<em className="italic text-foreground" {...props}>
							{children}
						</em>
					),

					// Pre (for code blocks without language)
					pre: ({ children, ...props }: StandardProps) => (
						<pre className="bg-muted border border-border rounded-lg p-4 overflow-x-auto my-6 text-sm" {...props}>
							{children}
						</pre>
					),
				}}
			>
				{content}
			</Markdown>
		</div>
	);
};

export default StyledMarkdown;
