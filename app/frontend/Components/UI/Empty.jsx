import {BsInboxFill} from "react-icons/bs";
import React from "react";

function Empty() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
			<BsInboxFill className="text-6xl text-gray-400 mb-4"/>
			<h2 className="text-2xl font-bold mb-2">No Articles Found</h2>
			<p className="text-gray-600 text-center max-w-md">
				There are no articles available at the moment.<br/> Check back later!
			</p>
		</div>
	);
}

export default Empty;
