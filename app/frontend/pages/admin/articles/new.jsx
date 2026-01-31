import {Head} from '@inertiajs/react'
import Form from '../../../Components/Articles/Form.jsx'

export default function New() {

	return (
		<>
			<Head title="Create New Article"/>

			<div className="mx-auto md:w-2/3 w-full px-8 pt-24">
				<h1 className="font-bold text-4xl">Create New Article</h1>

				<Form
					submitUrl="/admin/articles"
					submitMethod="post"
				/>


			</div>
		</>
	)
}
