import {BsArrowRight} from "react-icons/bs";
import React from "react";
import {useForm} from "@inertiajs/react";

function Sidebar() {
	const {data, setData, post, processing, reset} = useForm({
		email: '',
	});

	function handleSubmit(e) {
		e.preventDefault()
		post("/email_subscription", {
			onSuccess: () => reset()
		})

	}

	return (
		<aside className="lg:col-span-4 lg:pl-8 lg:border-l border-gray-200">

			<div className="bg-gray-50 p-8">
				<h4 className="text-xl font-bold mb-2">Design News to your inbox</h4>
				<form
					onSubmit={handleSubmit}
					className="flex mt-6 border border-gray-300 bg-white p-1">

					<input type="email"
					       name="email"
					       value={data.email}
					       onChange={(e) => setData("email", e.target.value)}
					       placeholder="your@example.com"
					       className="w-full p-2 text-sm outline-none"/>
					<button
						type={'submit'}
						disabled={processing}
						className="bg-black cursor-pointer text-white px-4 hover:bg-gray-800 transition-colors">
						<BsArrowRight/>
					</button>

				</form>
			</div>
		</aside>
	);
}

export default Sidebar;
