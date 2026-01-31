import React from "react";
import {Link} from "@inertiajs/react";

export default function AuthLayout({title, subtitle, children}) {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center  font-sans text-gray-800 p-4">
			<div className="w-full max-w-md bg-white p-10 rounded-xl shadow-2xl space-y-8 border border-gray-100">
				{title && (
					<h1 className="text-5xl font-extrabold text-center text-black tracking-tight leading-tight">
						{title}
					</h1>
				)}
				{subtitle && (
					<p className="text-xl text-center text-gray-600 font-light leading-relaxed">
						{subtitle}
					</p>
				)}
				{children}
			</div>

			<Link
				href={"/"}
				viewTransition
				className="mt-8 text-lg text-gray-700 hover:text-black font-medium transition-all duration-300 ease-in-out underline-offset-4 hover:underline"
			>
				Back to home Page
			</Link>
		</div>
	);
}