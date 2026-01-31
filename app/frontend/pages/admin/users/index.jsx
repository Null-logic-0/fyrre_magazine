import {Head} from "@inertiajs/react";
import ArticlesTable from "~/Components/Articles/ArticlesTable.jsx";
import React from "react";
import UsersTable from "~/Components/Users/UsersTable.jsx";

function Index({users, pagination}) {
	return (
		<>
			<Head title="FYRRE MAGAZINE | Manage Users"/>
			<UsersTable users={users} pagination={pagination}/>
		</>
	);
}

export default Index;
