import React, {useState} from 'react';
import {BsArrowRight} from 'react-icons/bs';
import {Head, Link} from "@inertiajs/react";
import Articles from "~/Components/Articles/Articles.jsx";


export default function Show({articles, article}) {
	const [imageLoaded, setImageLoaded] = useState(false);

	return (
		<>
			<Head title={`FYRRE MAGAZINE | ${article.title}`}/>

			<div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
				<div className="container mx-auto px-4 md:px-8 max-w-7xl">
					<section className="py-12">
						<h1 className="text-6xl md:text-8xl pb-6 font-black uppercase tracking-tighter leading-[0.85] max-w-3xl">
							{article.title}
						</h1>

						<div
							className="flex justify-between items-center border-t pt-6 border-black text-[10px] font-bold uppercase tracking-widest">
							<span>{article.author}</span>
							<span>{article["formatted_date"]}</span>
						</div>
					</section>

					<div className="w-full h-100 md:h-150 overflow-hidden bg-gray-200 mb-16 relative">
						{!imageLoaded && (
							<div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
						)}
						<img
							src={article["image_url"]}
							alt={article.title}
							onLoad={() => setImageLoaded(true)}
							className={`w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ${
								imageLoaded ? 'opacity-100' : 'opacity-0'
							}`}
						/>
					</div>

					<article
						className="md:col-span-7 pb-12 md:col-start-5 font-serif text-lg leading-relaxed text-gray-800 space-y-8">
						<p className="text-xl leading-relaxed text-black"
						   dangerouslySetInnerHTML={{__html: article.excerpt.replace(/\n/g, "<br />")}}
						/>

					</article>

					<section className="py-12 border-t border-black">
						<div className="flex justify-between items-center mb-12">
							<h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Latest Posts</h2>
							<Link
								href={'/articles'}
								viewTransition
								className="text-xs font-bold uppercase flex items-center gap-2 hover:gap-4 transition-all">
								See All <BsArrowRight/>
							</Link>
						</div>

						<Articles articles={articles}/>
					</section>
				</div>
			</div>
		</>
	);
}