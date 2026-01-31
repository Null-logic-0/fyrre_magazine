import {Head, Link} from '@inertiajs/react'
import Form from '../../../Components/Articles/Form.jsx'

export default function Edit({article}) {
	console.log(article, "a")

	return (
		<>
			<Head title="Editing article"/>

			<div className="mx-auto md:w-2/3 w-full px-8 pt-24">
				<h1 className="font-bold text-4xl">{article.title}</h1>


				<Form
					article={article}
					submitUrl={`/admin/articles/${article.id}`}
					submitMethod="patch"
				/>


			</div>
		</>
	)
}
