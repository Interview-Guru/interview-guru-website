export const SmallLogo = ({ showText = true, outline = false }) => {
	return (
		<div className="flex flex-row items-center justify-center font-medium">
			<div
				className={`${
					outline
						? " mb-3 bg-muted-foreground/15 backdrop-blur-lg outline-[1px] outline-gray-300 dark:outline-gray-300 shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:outline-gray-400 dark:hover:outline-gray-300"
						: ""
				}  justify-center flex items-center px-2 pr-3 py-1.5 rounded-full transition-all duration-300`}
			>
				<div className={`flex h-6 w-6 items-center justify-center rounded-md`}>
					<svg
						className="h-full w-full"
						viewBox="250 250 500 500"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						preserveAspectRatio="xMidYMid meet"
					>
						<path
							d="M500.117 326C403.955 326 326 403.954 326 500.116V500.116C326.013 501.609 327.226 502.812 328.719 502.812H493.195C501.48 502.812 508.195 509.527 508.195 517.812V535.249C508.195 543.533 501.48 550.249 493.195 550.249H399.338C390.214 550.249 383.221 558.33 385.756 567.095C394.489 597.302 416.984 638.731 461.613 660.861C488.275 674.082 519.638 675.704 548.242 667.495C620.997 646.615 674.234 579.584 674.234 500.116C674.234 403.954 596.279 326 500.117 326Z"
							fill="currentColor"
						/>
					</svg>
				</div>
				{showText && <span className="ml-2 text-sm cursor-default font-light">InterviewGuruAI</span>}
			</div>
		</div>
	);
};
