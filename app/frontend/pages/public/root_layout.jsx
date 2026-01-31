import {Toaster} from "react-hot-toast";
import Flash from "~/Components/UI/Flash.jsx";
import {usePage} from "@inertiajs/react";
import HeaderNav from "~/Components/Header/HeaderNav.jsx";
import React from "react";
import Footer from "~/Components/Footer.jsx";

function RootLayout({children}) {
	const {flash, user} = usePage().props

	console.log(user, "user")

	return (
		<>
			<Flash flash={flash}/>
			<Toaster position={"top-center"} reverseOrder={false}/>

			<div className="mx-auto">
				<HeaderNav user={user}/>
				<section className="border-b-4 border-black py-8 md:py-12 relative">
					<h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-center tracking-tighter uppercase leading-none">
						Art & Life
					</h2>
				</section>
				<div
					className=" mx-auto px-4 md:px-8 max-w-7xl bg-white text-black font-sans selection:bg-black selection:text-white">
					{children}
				</div>
				<Footer/>
			</div>
		</>
	);
}

export default RootLayout;
