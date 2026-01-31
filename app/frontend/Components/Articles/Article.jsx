import {Link} from "@inertiajs/react";

export default function Article({article}) {
	return (

		<article
			className="bg-gray-200 p-6 flex flex-col rounded  h-full group cursor-pointer hover:bg-gray-100 transition-colors">


			<div className="aspect-square w-full bg-gray-200 mb-6 overflow-hidden relative">
				<img
					src={article["image_url"]}
					alt={article.title}
					className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
				/>
			</div>

			<div className="grow">
				<div className="flex justify-between items-center">
					<h3 className="text-2xl font-bold mb-3 leading-tight">{article.title}</h3>
					<span className="text-[10px] font-bold text-gray-400 uppercase">
						{article["formatted_date"]}
					</span>

				</div>

				<p className="text-sm text-gray-600 font-serif leading-relaxed line-clamp-3 mb-6">
					{article["excerpt"]}
				</p>
			</div>

			<div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
				<div className="flex gap-1 text-[10px] uppercase font-bold tracking-wide">
					<span className="text-gray-400">Author</span>
					<span>{article.author} </span>
				</div>
				<Link href={`/articles/${article.id}`}
				      viewTransition
				      className="text-[10px] hover:text-gray-600 hover:underline transition-colors uppercase font-bold text-gray-400">Read
					More
				</Link>
			</div>
		</article>


	)
}
