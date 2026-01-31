import NavLink from "~/Components/Header/NavLink.jsx";
import Logo from "~/Components/UI/Logo.jsx";
import Header from "~/Components/Header/Header.jsx";
import React from "react";

function HeaderNav({user}) {
	return (
		<Header>

			<Logo path="/"/>
			<ul className="flex gap-6 items-center">
				<NavLink path="/">
					home
				</NavLink>
				<NavLink path="/articles">
					Articles
				</NavLink>
				{
					user && (<NavLink path="/admin/dashboard">
						Admin
					</NavLink>)
				}

			</ul>
		</Header>


	);
}

export default HeaderNav;
