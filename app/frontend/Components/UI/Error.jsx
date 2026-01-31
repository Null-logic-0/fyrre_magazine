import {BsExclamationTriangle} from "react-icons/bs";
import React from "react";

function Error() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
			<BsExclamationTriangle className="text-6xl text-red-500 mb-4"/>
			<h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
			<p className="text-gray-600 text-center max-w-md mb-6">
				We couldn't load the articles. Please try again later.
			</p>
			<button
				onClick={() => window.location.reload()}
				className="bg-black text-white px-6 py-2 cursor-pointer hover:bg-gray-800 transition-colors"
			>
				Retry
			</button>
		</div>
	);
}

export default Error;
