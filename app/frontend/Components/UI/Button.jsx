import React from "react";
import {twMerge} from "tailwind-merge";

export default function Button({
	                               children,
	                               processing = false,
	                               disabled = false,
	                               type = "button",
	                               className = "",
	                               ...props
                               }) {
	return (
		<button
			type={type}
			disabled={disabled || processing}
			className={twMerge(className, `
        w-full 
        cursor-pointer
        bg-black 
        text-white 
        p-3
        rounded-lg 
        text-sm
        font-semibold 
        hover:bg-gray-800 
        transition-colors 
        duration-300 
        disabled:opacity-60 
        disabled:cursor-not-allowed
        tracking-wide
       
      `)}
			{...props}
		>
			{children}
		</button>
	);
}
