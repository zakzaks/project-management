export default function Input({ label, textarea, ...props }) {
	return (
		<p className="flex flex-col gap-4">
			<label className="uppercase font-bold" htmlFor={label}>
				{label}
			</label>
			{textarea ? (
				<textarea className="w-full p-2 mb-4 text-black" {...props} />
			) : (
				<input className="w-full p-2 mb-4 text-black" {...props} />
			)}
		</p>
	);
}
