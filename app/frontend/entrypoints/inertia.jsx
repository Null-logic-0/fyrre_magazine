import {createInertiaApp} from '@inertiajs/react'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import RootLayout from "~/pages/public/root_layout.jsx";
import Layout from "~/pages/admin/layout.jsx";


createInertiaApp({


	resolve: (name) => {
		const pages = import.meta.glob('../pages/**/*.jsx', {eager: true})
		let page = pages[`../pages/${name}.jsx`]
		page.default.layout = name.startsWith('admin/')
			? (page) => <Layout children={page}/>
			: (page) => <RootLayout children={page}/>
		return page
	},

	setup({el, App, props}) {
		const auth = props.initialPage.props.auth || {};
		createRoot(el).render(
			<StrictMode>
				<App {...props} />
			</StrictMode>
		)
	},

	defaults: {
		form: {
			forceIndicesArrayFormatInFormData: false,
		},
		future: {
			useScriptElementForInitialPage: true,
			useDataInertiaHeadAttribute: true,
			useDialogForErrorModal: true,
			preserveEqualProps: true,
		},
	},
}).catch((error) => {

	if (document.getElementById("app")) {
		throw error
	} else {
		console.error(
			"Missing root element.\n\n" +
			"If you see this error, it probably means you loaded Inertia.js on non-Inertia pages.\n" +
			'Consider moving <%= vite_javascript_tag "inertia.jsx" %> to the Inertia-specific layout instead.',
		)
	}
})
