import {Link} from "@inertiajs/react";
import TextInput from "~/Components/UI/TextInput.jsx";
import React from "react";
import Search from "~/Components/UI/Search.jsx";

function TableToolbar({title, path, text, searchPath}) {
	return (
		<>
			<div className="flex justify-between max-md:flex-wrap gap-4 items-center mb-6">
				<h1 className="text-3xl font-bold text-gray-900 tracking-tight">
					{title}
				</h1>
				<Link
					href={path}
					className="inline-flex items-center px-5 py-2.5 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
				>
					{text}
				</Link>

			</div>

			{/* Search/Filter Bar (Placeholder) */}
			<div className="w-xs mb-6">
				<Search path={searchPath}/>
			</div>


		</>
	);
}

export default TableToolbar;
