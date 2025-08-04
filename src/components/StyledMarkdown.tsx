import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ReactNode } from "react";

// Type definitions for markdown components
interface CodeProps {
	node?: any;
	inline?: boolean;
	className?: string;
	children?: ReactNode;
	[key: string]: any;
}

interface MarkdownProps {
	content: string;
	className?: string;
}

interface StandardProps {
	node?: any;
	children?: ReactNode;
	[key: string]: any;
}

interface LinkProps extends StandardProps {
	href?: string;
}

interface ImageProps extends StandardProps {
	src?: string;
	alt?: string;
}

const StyledMarkdown = ({ content, className = "" }: MarkdownProps) => {
	return (
		<div className={`prose prose-gray max-w-none ${className}`}>
			<Markdown
				components={{
					// Headings
					h1: ({ node, children, ...props }: StandardProps) => (
						<h1 className="text-4xl font-bold text-foreground mb-6 mt-8 pb-2 border-b border-border" {...props}>
							{children}
						</h1>
					),
					h2: ({ node, children, ...props }: StandardProps) => (
						<h2 className="text-3xl font-semibold text-foreground mb-4 mt-8 pb-2 border-b border-border" {...props}>
							{children}
						</h2>
					),
					h3: ({ node, children, ...props }: StandardProps) => (
						<h3 className="text-2xl font-semibold text-foreground mb-3 mt-6" {...props}>
							{children}
						</h3>
					),
					h4: ({ node, children, ...props }: StandardProps) => (
						<h4 className="text-xl font-medium text-foreground mb-3 mt-4" {...props}>
							{children}
						</h4>
					),
					h5: ({ node, children, ...props }: StandardProps) => (
						<h5 className="text-lg font-medium text-foreground mb-2 mt-4" {...props}>
							{children}
						</h5>
					),
					h6: ({ node, children, ...props }: StandardProps) => (
						<h6 className="text-base font-medium text-muted-foreground mb-2 mt-4" {...props}>
							{children}
						</h6>
					),

					// Paragraphs
					p: ({ node, children, ...props }: StandardProps) => (
						<p className="text-foreground leading-7 mb-4" {...props}>
							{children}
						</p>
					),

					// Links
					a: ({ node, children, href, ...props }: LinkProps) => (
						<a
							className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							{...props}
						>
							{children}
						</a>
					),

					// Lists
					ul: ({ node, children, ...props }: StandardProps) => (
						<ul className="list-disc list-inside mb-4 space-y-2 text-foreground ml-4" {...props}>
							{children}
						</ul>
					),
					ol: ({ node, children, ...props }: StandardProps) => (
						<ol className="list-decimal list-inside mb-4 space-y-2 text-foreground ml-4" {...props}>
							{children}
						</ol>
					),
					li: ({ node, children, ...props }: StandardProps) => (
						<li className="leading-7" {...props}>
							{children}
						</li>
					),

					// Blockquotes
					blockquote: ({ node, children, ...props }: StandardProps) => (
						<blockquote
							className="border-l-4 border-primary bg-muted/50 pl-4 py-2 my-6 italic text-muted-foreground"
							{...props}
						>
							{children}
						</blockquote>
					),

					// Tables
					table: ({ node, children, ...props }: StandardProps) => (
						<div className="overflow-x-auto my-6">
							<table className="min-w-full border border-border rounded-lg" {...props}>
								{children}
							</table>
						</div>
					),
					thead: ({ node, children, ...props }: StandardProps) => (
						<thead className="bg-muted/50" {...props}>
							{children}
						</thead>
					),
					tbody: ({ node, children, ...props }: StandardProps) => <tbody {...props}>{children}</tbody>,
					tr: ({ node, children, ...props }: StandardProps) => (
						<tr className="border-b border-border hover:bg-muted/25 transition-colors" {...props}>
							{children}
						</tr>
					),
					th: ({ node, children, ...props }: StandardProps) => (
						<th
							className="px-4 py-3 text-left font-semibold text-foreground border-r border-border last:border-r-0"
							{...props}
						>
							{children}
						</th>
					),
					td: ({ node, children, ...props }: StandardProps) => (
						<td className="px-4 py-3 text-foreground border-r border-border last:border-r-0" {...props}>
							{children}
						</td>
					),

					// Horizontal rule
					hr: ({ node, ...props }: StandardProps) => <hr className="my-8 border-border" {...props} />,

					// Strong and emphasis
					strong: ({ node, children, ...props }: StandardProps) => (
						<strong className="font-bold text-foreground" {...props}>
							{children}
						</strong>
					),
					em: ({ node, children, ...props }: StandardProps) => (
						<em className="italic text-foreground" {...props}>
							{children}
						</em>
					),

					// Pre (for code blocks without language)
					pre: ({ node, children, ...props }: StandardProps) => (
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
