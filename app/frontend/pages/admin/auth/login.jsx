import React from 'react';
import {Head, useForm} from '@inertiajs/react';
import TextInput from "~/Components/UI/TextInput.jsx";
import FormFooterLink from "~/Components/UI/FormFooterLink.jsx";
import AuthLayout from "~/Components/AuthLayout.jsx";
import Button from "~/Components/UI/Button.jsx";

export default function Login() {
	const {data, setData, post, processing, errors} = useForm({
		email_address: '',
		password: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		post('/login');
	};

	return (
		<>
			<Head title="Admin Panel | Login"/>

			<AuthLayout
				title="ART & LIFE"
				subtitle="Sign in to your account"
			>

				<form onSubmit={handleSubmit} className="space-y-6">
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
						{processing ? 'Logging in...' : 'Login'}
					</Button>

				</form>

				<FormFooterLink

					text="Don't have an account?"
					linkText="Sign up"
					href="/signup"/>
			</AuthLayout>
		</>
	);
}