import {useState, useEffect} from "react";
import {router} from "@inertiajs/react";
import TextInput from "~/Components/UI/TextInput.jsx";

function debounce(fn, delay) {
	let timeoutId;
	return (...args) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => fn(...args), delay);
	};
}

export default function Search({initialSearch = "", path}) {
	const [search, setSearch] = useState(initialSearch);

	const debouncedSearch = debounce((query) => {
		router.get(path, {q: query}, {preserveState: true, replace: true});
	}, 300);

	const handleChange = (e) => {
		setSearch(e.target.value);
		debouncedSearch(e.target.value);
	};

	return (

		<TextInput
			placeholder="Search..."
			value={search}
			onChange={handleChange}
		/>

	);
}
