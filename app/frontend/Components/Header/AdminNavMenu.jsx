import React from 'react';
import NavLink from "~/Components/Header/NavLink.jsx";
import Header from "~/Components/Header/Header.jsx";
import Logo from "~/Components/UI/Logo.jsx";
import {Link} from "@inertiajs/react";

export default function AdminNavMenu({user}) {
	return (
		<Header>
			<Logo path="/admin/dashboard"/>

			{
				user && (
					<ul className="flex items-center space-x-6 lg:space-x-8">

						<NavLink path="/">
							Home
						</NavLink>

						<NavLink path="/admin/dashboard">
							Dashboard
						</NavLink>

						<NavLink path="/admin/users">
							Users
						</NavLink>

					</ul>
				)
			}


			<div className="flex items-center space-x-4">
				{user ? (
					<>
						<Link
							href="/logout"
							method="delete"
							as="button"
							className="inline-flex cursor-pointer items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white hover:text-black  hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
						>
							Logout
						</Link>
					</>
				) : (
					<>
						<Link
							href="/login"
							viewTransition
							className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-gray-100 hover:bg-gray-200 transition-colors duration-300 "
						>
							Login
						</Link>
						<Link
							href="/signup"
							viewTransition
							className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white hover:text-black bg-black hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
						>
							Sign Up
						</Link>
					</>
				)}
			</div>
		</Header>
	);
}


