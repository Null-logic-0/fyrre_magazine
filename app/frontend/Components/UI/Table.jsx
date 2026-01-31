import React from "react";
import {twMerge} from "tailwind-merge";
import Empty from "~/Components/UI/Empty.jsx";
import Error from "~/Components/UI/Error.jsx";
import LoadingSpinner from "~/Components/UI/LoadingSpinner.jsx";

export function TableHead({columns}) {
	return (
		<thead className="bg-gray-50">
		<tr>
			{columns.map((col, index) => (
				<th
					key={index}
					scope="col"
					className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${col.className || ""}`}
				>
					{col.srOnly ? (
						<span className="sr-only">{col.label}</span>
					) : (
						col.label
					)}
				</th>
			))}
		</tr>
		</thead>
	);
}

export function Table({children, className}) {
	return <table className={twMerge("min-w-full divide-y divide-gray-200", className)}>{children}</table>
}


export function TableBody({data, renderRow, colSpan = 1, loading = false, error}) {
	return (
		<tbody className="bg-white divide-y divide-gray-200">
		{loading ? (
			<tr>
				<td colSpan={colSpan} className="px-6 py-8 text-center ">
					<LoadingSpinner/>
				</td>
			</tr>
		) : error ? (
			<tr>
				<td colSpan={colSpan} className="px-6 py-8 text-center text-red-500">
					<Error/>
				</td>
			</tr>
		) : data.length > 0 ? (
			data.map((item) => renderRow(item))
		) : (
			<tr>
				<td colSpan={colSpan} className="px-6 py-8 text-center text-lg text-gray-500">
					<Empty/>
				</td>
			</tr>
		)}
		</tbody>
	);
}
