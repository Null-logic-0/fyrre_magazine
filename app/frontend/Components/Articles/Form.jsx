import {useForm} from '@inertiajs/react'
import React from "react"
import TextInput from "~/Components/UI/TextInput.jsx"
import ImageUploadWithPreview from "~/Components/UI/ImageUploadWithPreview.jsx"
import Button from "~/Components/UI/Button.jsx"
import {Link} from '@inertiajs/react'

export default function Form({article = {}, submitUrl, submitMethod = "post"}) {
	const form = useForm({
		title: article.title || "",
		excerpt: article.excerpt || "",
		image: null
	})

	const handleSubmit = (e) => {
		e.preventDefault()
		form.submit(submitMethod, submitUrl, {forceFormData: true})
	}

	return (
		<form onSubmit={handleSubmit} className="mt-6">
			<TextInput
				label="Title"
				value={form.data.title}
				onChange={e => form.setData('title', e.target.value)}
				error={form.errors.title}
			/>

			<TextInput
				label="Excerpt"
				value={form.data.excerpt}
				onChange={e => form.setData('excerpt', e.target.value)}
				error={form.errors.excerpt}
				multiline
				rows={6}
			/>

			<ImageUploadWithPreview
				label="Featured Image"
				initialImage={article.image_url || ""}
				onFileChange={file => form.setData('image', file)}
				error={form.errors.image}
			/>

			<div className="flex gap-4 mt-6 itmes-center ">
				<Link href="/admin/dashboard"
				      className="w-full
						        cursor-pointer
						        bg-gray-100
						        text-gray-900
						        p-3
						        rounded-lg
						        text-center
						        text-sm
						        font-semibold
						        hover:bg-gray-200
						        transition-colors
						        duration-300
						        disabled:opacity-60
						        disabled:cursor-not-allowed
						        tracking-wide">
					Cancel
				</Link>
				<Button type="submit" processing={form.processing}>
					{form.processing ? "Saving..." : "Save"}
				</Button>
			</div>
		</form>
	)
}
