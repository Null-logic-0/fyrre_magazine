import React from 'react';
import {Head, usePage} from '@inertiajs/react';
import ArticlesTable from "~/Components/Articles/ArticlesTable.jsx";


export default function Index({articles, pagination}) {

	const {user} = usePage().props
	return (
		<>
			<Head title="FYRRE MAGAZINE | Admin Dashboard"/>
			<p className="pt-12 text-xl font-semibold">Welcome back {user.name}👋</p>
			<ArticlesTable articles={articles} pagination={pagination}/>
		</>
	);
}