import React from "react";
import {Link} from "@inertiajs/react";

function ArticleCard({article}) {
	return (
		<div
			className="flex flex-col sm:flex-row group gap-6 mb-12 border-b border-gray-200 pb-12 last:border-0 last:pb-0">
			<Link href={`/articles/${article.id}`}
			      viewTransition
			      className="w-full  sm:w-48 h-48 bg-gray-200 shrink-0 grayscale group-hover:grayscale-0 transition-all duration-300 cursor-pointer">
				<img src={article["image_url"]} alt={article.title} className="w-full h-full object-cover"/>
			</Link>
			<div className="flex flex-col justify-between w-full">
				<div>
					<h3 className="text-2xl font-bold mb-3 group-hover:underline cursor-pointer decoration-2 underline-offset-4">
						<Link viewTransition href={`/articles/${article.id}`}>
							{article.title}
						</Link>
					</h3>
					<p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2 truncate max-w-lg">
						{article["excerpt"]}
					</p>
				</div>

				<p className="text-xs font-bold uppercase tracking-wider text-black">
					{article["formatted_date"]}
				</p>


			</div>
		</div>
	);
}

export default ArticleCard;
