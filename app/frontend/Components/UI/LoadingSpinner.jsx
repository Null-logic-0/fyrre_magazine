import React from 'react';
import {twMerge} from "tailwind-merge";

export default function LoadingSpinner({size = 'md', color = 'black', className = ''}) {
	let spinnerSizeClasses = '';
	let spinnerBorderClasses = '';

	switch (size) {
		case 'sm':
			spinnerSizeClasses = 'w-5 h-5';
			spinnerBorderClasses = 'border-2';
			break;
		case 'md':
			spinnerSizeClasses = 'w-8 h-8';
			spinnerBorderClasses = 'border-3';
			break;
		case 'lg':
			spinnerSizeClasses = 'w-12 h-12';
			spinnerBorderClasses = 'border-4';
			break;
		case 'xl':
			spinnerSizeClasses = 'w-16 h-16';
			spinnerBorderClasses = 'border-4';
			break;
		default:
			spinnerSizeClasses = 'w-8 h-8';
			spinnerBorderClasses = 'border-3';
	}


	if (size === 'md') {
		spinnerBorderClasses = 'border-[3px]';
	}


	const spinnerColorClass = `border-${color}-500`;
	const spinnerTopBorderColorClass = `border-t-${color}-500`;

	const finalSpinnerColorClass = color === 'black' ? 'border-gray-300' : `border-${color}-500`; // Base color of the full circle
	const finalSpinnerTopBorderColorClass = color === 'black' ? 'border-t-black' : `border-t-${color}-500`; // Color of the moving part


	return (
		<div
			className={twMerge(`
                animate-spin rounded-full
                ${spinnerSizeClasses}
                ${spinnerBorderClasses}
                ${finalSpinnerColorClass}
                ${finalSpinnerTopBorderColorClass}
                
            `, className)}
			role="status"
		>
			<span className="sr-only">Loading...</span>
		</div>
	);
}