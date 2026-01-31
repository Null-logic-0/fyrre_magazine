import React, {useState} from 'react';
import {BsArrowRight} from 'react-icons/bs';
import Hero from "~/Components/Hero.jsx";
import ArticleCard from "~/Components/Articles/ArticleCard.jsx";
import Sidebar from "~/Components/Sidebar.jsx";
import {Head, Link, WhenVisible} from "@inertiajs/react";
import Fallback from "~/Components/Articles/Fallback.jsx";
import {useResourceState} from '~/hooks/useResourceState.js';
import Empty from "~/Components/UI/Empty.jsx";
import Error from "~/Components/UI/Error.jsx";


export default function Index({articles}) {
	const [loadedCount, setLoadedCount] = useState(0);
	const allLoaded = loadedCount === articles.length;
	const {hasError, isEmpty} = useResourceState(articles);

	return (
		<>
			<Head title="FYRRE MAGAZINE"/>

			<Hero/>

			<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">

				<div className="lg:col-span-8">
					{hasError ? (
						<Error/>
					) : isEmpty ? (
						<Empty/>
					) : (
						<>
							<div className="flex flex-col">
								{articles.map((article) => (
									<WhenVisible key={article.id}
									             fallback={<Fallback variant={"list"}/>}>
										<div onLoad={() => setLoadedCount(prev => prev + 1)}>
											<ArticleCard article={article}/>
										</div>
									</WhenVisible>
								))}
							</div>
							{allLoaded && (
								<div className="mt-8">
									<Link href={"/articles"}
									      viewTransition
									      className="text-xs font-bold uppercase flex items-center gap-2 hover:gap-4 transition-all">
										See All Articles <BsArrowRight/>
									</Link>
								</div>
							)}
						</>
					)}
				</div>

				<Sidebar/>
			</div>
		</>
	);
}