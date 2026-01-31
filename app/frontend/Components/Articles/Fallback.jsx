import React from "react";

function Fallback({variant = "card"}) {
	if (variant === "list") {
		return (
			<div
				className="flex flex-col sm:flex-row group gap-6 mb-12 border-b border-gray-200 pb-12 last:border-0 last:pb-0">
				<div className="w-full sm:w-48 h-48 bg-gray-200 animate-pulse shrink-0 grayscale"></div>
				<div className="flex flex-col justify-between w-full">
					<div>
						<p className="bg-gray-200 animate-pulse mb-4 max-w-xs w-full h-4 rounded-xl"></p>
						<p className="bg-gray-200 animate-pulse max-w-lg w-full h-6 rounded-xl"></p>
					</div>
					<p className="bg-gray-200 animate-pulse mt-4 max-w-xs w-full h-4 rounded-xl"></p>
				</div>
			</div>
		);
	}

	return (
		<div className="p-4 bg-gray-200 backdrop-blur-2xl h-120 animate-pulse rounded"></div>
	);
}

export default Fallback;