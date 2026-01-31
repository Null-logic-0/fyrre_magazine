import React from "react";

const roleStyles = {
	admin: "bg-green-100 text-green-800",
	author: "bg-yellow-200 text-yellow-800",
	user: "bg-gray-100 text-gray-700"
};

export default function Badge({label, className = ""}) {
	const key = label?.toLowerCase();
	const colorClass =
		roleStyles[key] || "bg-gray-200 text-gray-800";

	return (
		<span
			className={`px-3 py-1 inline-flex text-xs leading-5 uppercase font-semibold rounded-full ${colorClass} ${className}`}
		>
      {label || "N/A"}
    </span>
	);
}
