import {router} from "@inertiajs/react";

function RoleSelect({user}) {
	const handleChange = (e) => {
		const role = e.target.value;

		router.patch(`/admin/users/${user.id}`, {
			user: {
				role: role
			}
		}, {
			preserveScroll: true,
		});

	};

	return (
		<select
			value={user.role}
			onChange={handleChange}
			className="border rounded px-2 py-1 text-sm"
		>
			<option value="admin">Admin</option>
			<option value="author">Author</option>
			<option value="user">User</option>
		</select>
	);
}

export default RoleSelect;
