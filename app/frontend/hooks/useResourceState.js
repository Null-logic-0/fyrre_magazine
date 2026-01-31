import {usePage} from '@inertiajs/react';

export function useResourceState(resource) {
	const {errors} = usePage().props;

	const hasError = errors && Object.keys(errors).length > 0;
	const isEmpty = !resource || resource.length === 0;
	const hasData = !hasError && !isEmpty;

	return {
		hasError,
		isEmpty,
		hasData,
		errors
	};
}