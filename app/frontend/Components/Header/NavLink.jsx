import {Link, usePage} from "@inertiajs/react";

function NavLink({path, children}) {
	const {url} = usePage()
	return (
		<li className="text-xs md:text-sm">
			<Link
				className={url === path ? 'text-white underline' : 'text-gray-400 hover:text-white transition-colors hover:underline'}
				href={path} viewTransition>
				{children}
			</Link>
		</li>
	);
}

export default NavLink;
