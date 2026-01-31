import {Link} from "@inertiajs/react";
import React from "react";

export default function Logo({path}) {
	return (
		<h1 className="text-sm font-bold md:text-xl">
			<Link href={path}>
				Fyrre Magazine
			</Link>
		</h1>
	)
}