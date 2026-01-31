import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";
import React from "react";

function Footer() {
	return (
		<footer className="bg-black text-white py-6">
			<div
				className="flex flex-col w-full md:flex-row mx-auto px-4 md:px-8 max-w-7xl justify-between items-center  text-xs text-gray-500 uppercase tracking-wider">
				<p>© {new Date().getFullYear()} Fyrre Magazine. All rights reserved.</p>
				<div className="flex gap-6 mt-4 md:mt-0">
					<BsTwitter className="hover:text-white cursor-pointer transition-colors" size={16}/>
					<BsInstagram className="hover:text-white cursor-pointer transition-colors" size={16}/>
					<BsFacebook className="hover:text-white cursor-pointer transition-colors" size={16}/>
				</div>
			</div>

		</footer>
	);
}

export default Footer;
