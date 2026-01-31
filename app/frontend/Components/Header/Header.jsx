import React from "react";

export default function Header({children}) {
	return (
		<header>
			<nav className="w-full mx-auto bg-black text-white">
				<div
					className="max-w-7xl  mx-auto   font-bold uppercase tracking-widest py-2 px-4 flex justify-between items-center">
					{children}
				</div>
			</nav>
		</header>
	)
}