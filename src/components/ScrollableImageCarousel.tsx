import Image from "next/image";
import React, { useEffect, useRef } from "react";

const ScrollableImageComponent = () => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	// Sample company logos/images - you can replace these with your own
	const images = [
		{ name: "Amazon", logo: "/amazon.png" },
		{ name: "Meta", logo: "/meta.png" },
		{ name: "Atlassian", logo: "/atlassian.png" },
		{ name: "Apple", logo: "/apple.png" },
		{ name: "Netflix", logo: "/netflix.png" },
		{ name: "Google", logo: "/google.png" },
		{ name: "Tesla", logo: "/tesla.png" },
		{ name: "NVIDIA", logo: "/nvidia.png" },
	];

	// Duplicate images for seamless loop
	const allImages = [...images, ...images];

	useEffect(() => {
		const container = scrollContainerRef.current;
		if (!container) return;

		const scroll = () => {
			if (container.scrollLeft >= container.scrollWidth / 2) {
				container.scrollLeft = 0;
			} else {
				container.scrollLeft += 1;
			}
		};

		const intervalId = setInterval(scroll, 50);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<section className="w-full bg-background py-20 px-4">
			<div className="max-w-6xl mx-auto">
				{/* Heading */}
				<div className="text-center mb-12 flex flex-col">
					<h2 className="text-2xl md:text-4xl font-bold text-foreground max-w-2xl m-auto mb-1.5">
						Grinding Leetcode won&apos;t get you the FAANG offer
					</h2>
					<p className="text-muted-foreground text-lg">
						Not a question bank. A proven protocol that maps high-impact skills to 400+ interview processes.
					</p>
				</div>

				{/* Scrollable Images Container */}
				<div className="relative overflow-hidden">
					{/* Gradient overlays for fade effect */}
					<div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
					<div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10"></div>

					<div ref={scrollContainerRef} className="flex gap-8 overflow-x-hidden py-8" style={{ width: "100%" }}>
						{allImages.map((image, index) => (
							<div
								key={`${image.name}-${index}`}
								className="flex-shrink-0 bg-card/50 backdrop-blur-sm rounded-lg hover:bg-card/70 transition-all duration-300 hover:scale-105 border border-border"
								style={{ minWidth: "200px", height: "120px" }}
							>
								<div className="w-full h-full flex items-center justify-center">
									<Image
										src={image.logo}
										alt={image.name}
										width={150}
										height={100}
										className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ScrollableImageComponent;
