import Flash from "~/Components/UI/Flash.jsx";
import {Toaster} from "react-hot-toast";
import React from "react";
import {usePage} from "@inertiajs/react";
import AdminNavMenu from "~/Components/Header/AdminNavMenu.jsx";

function Layout({children}) {
	const {flash, user} = usePage().props

	return (
		<>
			<Flash flash={flash}/>
			<Toaster position={"top-center"} reverseOrder={false}/>

			<div>
				<AdminNavMenu user={user}/>
				<div
					className="mx-auto px-4 md:px-8 max-w-7xl  text-black font-sans selection:bg-black selection:text-white">


					{children}
				</div>
			</div>
		</>
	);
}

export default Layout;
