import React from "react";
import {Link} from "@inertiajs/react";

export default function FormFooterLink({text, linkText, href}) {
	return (
		<p className="text-center text-gray-500 mt-8 text-sm">
			{text}{" "}
			<Link
				href={href}
				viewTransition
				className="text-black hover:underline font-medium"
			>
				{linkText}
			</Link>
		</p>
	);
}
