import {Link} from "@inertiajs/react";
import React from "react";
import Pagination from "~/Components/UI/Pagination.jsx";

import TableToolbar from "~/Components/UI/TableToolbar.jsx";
import {Table, TableBody, TableHead} from "~/Components/UI/Table.jsx";
import {FaEdit, FaTrash} from "react-icons/fa";


const columns = [
	{label: "Title"},
	{label: "Author"},
	{label: "Created At"},
	{label: "Actions", srOnly: true, className: "relative"}
];

function ArticlesTable({articles, pagination}) {


	return (
		<div className="mt-24">
			<TableToolbar
				title="Manage Articles"
				path="/admin/articles/new"
				searchPath={"/admin/dashboard"}
				text="Create New Articles"
			/>
			{/* Articles Table */}
			<div className="overflow-x-auto p-6 rounded-lg shadow-xl border border-gray-100">
				<Table>
					<TableHead columns={columns}/>
					<TableBody
						data={articles}
						colSpan={4}
						renderRow={(article) => (
							<tr key={article.id} className="hover:bg-gray-50 transition-colors duration-150">
								<td className="px-6 py-4 whitespace-nowrap">
									<Link
										href={`/articles/${article.id}`}
										viewTransition
										className="text-sm font-medium text-gray-900 hover:underline transition-colors hover:text-blue-500"
									>
										{article.title}
									</Link>
								</td>

								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
									{article?.author}
								</td>

								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{article["formatted_date"]}
								</td>

								<td className="px-6 py-4  flex items-center justify-end text-sm">
									<Link
										href={`/admin/articles/${article.id}/edit`}
										className="text-blue-500 hover:text-blue-700 mr-4 transition-colors duration-200"
									>
										<FaEdit/>

									</Link>
									<Link
										href={`/admin/articles/${article.id}`}
										method={"delete"}
										as={"button"}
										className="text-red-600 cursor-pointer hover:text-red-900 transition-colors duration-200"
									>
										<FaTrash/>
									</Link>
								</td>
							</tr>
						)}
					/>

				</Table>
			</div>

			{
				pagination && <Pagination pagination={pagination} path={"admin/dashboard?page"}/>
			}

		</div>
	);
}

export default ArticlesTable;
