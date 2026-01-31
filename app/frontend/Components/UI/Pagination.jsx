import {Link} from "@inertiajs/react";
import React from "react";

function Pagination({pagination, path}) {
	if (!pagination || pagination["pages"] <= 1) {
		return null;
	}
	return (
		<div className="flex items-center justify-end gap-4 pb-12 py-4">
			{pagination.prev ? (
				<Link
					href={`/${path}=${pagination.prev}`}
					preserveState
					preserveScroll
					viewTransition

					className="px-4 py-2 bg-gray-800 transition-colors text-white rounded hover:bg-gray-900"
				>
					Previous
				</Link>
			) : (
				<span className="px-4 py-2 bg-gray-300 text-gray-500 rounded cursor-not-allowed">
                   Previous
                </span>
			)}

			<span className="text-gray-700">
                Page {pagination.page} of {pagination["pages"]}
             </span>

			{pagination.next ? (
				<Link
					href={`/${path}=${pagination.next}`}
					preserveState
					preserveScroll
					viewTransition
					className="px-4 py-2 bg-gray-800 transition-colors text-white rounded hover:bg-gray-900"
				>
					Next
				</Link>
			) : (
				<span className="px-4 py-2 bg-gray-300 text-gray-500 rounded cursor-not-allowed">
                   Next
                </span>
			)}
		</div>
	);
}

export default Pagination;
