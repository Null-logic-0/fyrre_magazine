import React, {useState, useEffect, useRef} from 'react';

export default function ImageUploadWithPreview({
	                                               id,
	                                               name,
	                                               label = 'Featured Image',
	                                               initialImage = null,
	                                               onFileChange,
	                                               error,
	                                               className = '',
                                               }) {
	const [previewUrl, setPreviewUrl] = useState(initialImage);
	const fileInputRef = useRef(null);

	useEffect(() => {
		setPreviewUrl(initialImage);
	}, [initialImage]);

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreviewUrl(reader.result);
			};
			reader.readAsDataURL(file);
			onFileChange(file);
		} else {
			setPreviewUrl(null);
			onFileChange(null);
		}
	};

	const handleRemoveImage = () => {
		setPreviewUrl(null);
		onFileChange(null);
		if (fileInputRef.current) {
			fileInputRef.current.value = '';
		}
	};

	const triggerFileInput = () => {
		fileInputRef.current?.click();
	};

	return (
		<div className={className}>
			<label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
				{label}
			</label>

			{previewUrl ? (
				<div
					className="mb-4 relative group w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden border border-gray-200 shadow-sm"
				>
					<img src={previewUrl} alt="Image Preview" className="w-full h-full object-cover"/>
					<button
						type="button"
						onClick={handleRemoveImage}
						className="absolute top-2 right-2 p-1 bg-black text-white rounded-full  transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
						aria-label="Remove image"
					>
						<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
						     xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
							      d="M6 18L18 6M6 6l12 12"></path>
						</svg>
					</button>
				</div>
			) : (
				<div
					className="mb-4 flex flex-col items-center justify-center w-48 h-48 md:w-64 md:h-64 rounded-lg border-2 border-dashed border-gray-300 hover:border-black transition-colors duration-200 cursor-pointer text-gray-500 hover:text-black"
					onClick={triggerFileInput}
				>
					<svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
					     xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
						      d="M7 16a4 4 0 01-.88-7.903A5 5 0 0115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
					</svg>
					<span className="text-sm font-medium">Upload Image</span>
					<span className="text-xs text-gray-400 mt-1">(Click to choose file)</span>
				</div>
			)}


			<input
				type="file"
				name={name}
				id={id}
				ref={fileInputRef}
				onChange={handleFileChange}
				className="sr-only"
				accept="image/*"
			/>

			{error && (
				<p className="mt-2 text-sm text-red-600">{error}</p>
			)}
		</div>
	);
}