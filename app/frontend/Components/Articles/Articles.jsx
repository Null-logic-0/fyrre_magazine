import Error from "~/Components/UI/Error.jsx";
import Empty from "~/Components/UI/Empty.jsx";
import {WhenVisible} from "@inertiajs/react";
import Article from "~/Components/Articles/Article.jsx";
import Pagination from "~/Components/UI/Pagination.jsx";
import {useResourceState} from "~/hooks/useResourceState.js";
import Fallback from "~/Components/Articles/Fallback.jsx";

function Articles({articles, pagination}) {
	const {hasError, isEmpty} = useResourceState(articles);

	return (
		<div>
			{hasError ? (
				<Error/>
			) : isEmpty ? (
				<Empty/>
			) : (
				<>
					<div className="grid grid-cols-1 py-12 px-4 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{articles.map((article) => (
							<WhenVisible
								fallback={<Fallback variant={"card"}/>}
								key={article.id}
							>
								<Article article={article}/>
							</WhenVisible>
						))}
					</div>
					{pagination && <Pagination pagination={pagination} path={"articles?page"}/>}
				</>
			)}
		</div>
	);
}

export default Articles;
