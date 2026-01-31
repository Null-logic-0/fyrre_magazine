import {Head, useForm} from "@inertiajs/react";
import React from "react";
import TextInput from "~/Components/UI/TextInput.jsx";
import Button from "~/Components/UI/Button.jsx";
import AuthLayout from "~/Components/AuthLayout.jsx";
import FormFooterLink from "~/Components/UI/FormFooterLink.jsx";

function Signup() {
	const {data, setData, post, processing, errors} = useForm({
		name: '',
		email_address: '',
		password: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		post('/signup');
	};
	return (
		<>
			<Head title="Admin Panel | Signup"/>

			<AuthLayout
				title="ART & LIFE"
				subtitle="Create new account"
			>

				<form onSubmit={handleSubmit} className="space-y-6">

					<TextInput
						label="Full Name"
						name="name"
						type="text"
						value={data.name}
						onChange={e => setData('name', e.target.value)}
						placeholder="John Doe"
						error={errors.name}
						required={true}
					/>


					<TextInput
						label="Email Address"
						name="email_address"
						type="email"
						value={data.email_address}
						onChange={e => setData('email_address', e.target.value)}
						placeholder="you@example.com"
						error={errors.email_address}
						required={true}
					/>

					<TextInput
						label="Password"
						name="password"
						type="password"
						value={data.password}
						onChange={e => setData('password', e.target.value)}
						placeholder="Enter password"
						error={errors.password}
						required={true}
					/>


					<Button type="submit" processing={processing}>
						{processing ? 'Creating...' : 'Create Account'}
					</Button>
				</form>

				<FormFooterLink
					text="Already have an account?"
					linkText="Log in"
					href="/login"/>
			</AuthLayout>

		</>
	);
}

export default Signup;
