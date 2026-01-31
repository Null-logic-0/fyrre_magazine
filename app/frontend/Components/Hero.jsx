import React from "react";

const heroImage = new URL("../assets/hero.jpg", import.meta.url).href;

function Hero() {
	return (
		<section className="py-12 border-b border-gray-300">
			<div className="flex flex-col md:flex-row justify-between items-start mb-8 px-2 md:px-0">
				<h2 className="text-5xl md:text-7xl font-bold uppercase leading-[0.9] max-w-2xl tracking-tight">
					Don't Close <br/> Your Eyes
				</h2>
				<div className="mt-6 md:mt-2 max-w-xs">
					<p className="text-gray-600 text-sm leading-relaxed mb-4">
						A closer look at the ideas, images, and movements shaping
						contemporary culture — from experimental art to the design
						languages redefining our everyday lives.
					</p>
					<div className="flex gap-2 text-[10px] font-bold uppercase tracking-wide">
						<span>Art</span> <span>•</span> <span>Design</span> <span>•</span> <span>Culture</span>
					</div>
				</div>
			</div>


			<div
				className="w-full h-64 md:h-125  relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
				<img
					src={heroImage}
					alt="Abstract contemporary artwork featured by Fyrre Magazine"
					className="w-full h-full object-cover"
				/>

			</div>
		</section>
	);
}

export default Hero;
