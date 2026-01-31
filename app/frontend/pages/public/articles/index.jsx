import {Head} from '@inertiajs/react'
import React from 'react'

import Articles from "~/Components/Articles/Articles.jsx";

export default function Index({articles, pagination}) {


	return (
		<>
			<Head title="FYRRE MAGAZINE | Articles"/>

			<Articles articles={articles} pagination={pagination}/>
		</>
	)
}