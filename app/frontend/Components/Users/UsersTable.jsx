import React from "react";
import Pagination from "~/Components/UI/Pagination.jsx";

import {Table, TableBody, TableHead} from "~/Components/UI/Table.jsx";
import Search from "~/Components/UI/Search.jsx";
import Badge from "~/Components/UI/Badge.jsx";

import RoleSelect from "~/Components/Users/RoleSelect.jsx";


const columns = [
	{label: "Full Name"},
	{label: "Email"},
	{label: "Role"},
	{label: "Created At"},
	{label: "Actions", srOnly: true, className: "relative"}
];

function UsersTable({users, pagination}) {


	return (
		<div className="mt-24">
			<div className="flex mb-8 items-center w-full justify-between flex-wrap">

				<h1 className="text-3xl font-bold text-gray-900 tracking-tight">
					Manage Users
				</h1>
				<div className="w-xs">

					<Search path={"/admin/users"}/>
				</div>
			</div>
			<div className="overflow-auto p-6 rounded-lg shadow-xl border border-gray-100">
				<Table>
					<TableHead columns={columns}/>
					<TableBody
						data={users}
						colSpan={4}
						renderRow={(user) => (
							<tr key={user.id} className="hover:bg-gray-50 transition-colors duration-150">
								<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">

									{user.name}
								</td>

								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
									{user?.email_address}
								</td>

								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
									<Badge label={user?.role}/>
								</td>

								<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{user["formatted_date"]}
								</td>

								<td className="px-6 py-4  flex items-center justify-end text-sm">

									<RoleSelect user={user}/>


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

export default UsersTable;
