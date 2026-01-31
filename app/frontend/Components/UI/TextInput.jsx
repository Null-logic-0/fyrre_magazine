import React from "react";
import {twMerge} from "tailwind-merge";

export default function TextInput({
	                                  label,
	                                  required,
	                                  name,
	                                  type = "text",
	                                  value,
	                                  onChange,
	                                  defaultValue,
	                                  placeholder = "",
	                                  error,
	                                  className = "",
	                                  multiline = false,
	                                  rows = 4,
                                  }) {
	const InputElement = multiline ? "textarea" : "input";

	return (
		<div className={twMerge(className, `mb-4`)}>
			{label && (
				<label htmlFor={name} className="block text-sm font-semibold mb-2 text-gray-700">
					{label}
				</label>
			)}
			<InputElement
				id={name}
				name={name}
				defaultValue={defaultValue}
				required={!!required}
				type={multiline ? undefined : type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				rows={multiline ? rows : undefined}
				className="w-full border-b-2 border-gray-300 focus:border-black focus:outline-none rounded-lg py-2 pl-4 pr-2 text-sm transition-colors duration-200"
			/>
			{error && <p className="text-red-500 text-sm mt-2">{error}</p>}
		</div>
	);
}
