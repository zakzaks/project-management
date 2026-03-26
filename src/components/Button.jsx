export default function Button({ children }, ...props) {
	return (
		<button
			className="bg-stone-800 hover:bg-stone-500  text-white font-bold py-2 px-4 rounded"
			{...props}
		>
			{children}
		</button>
	);
}
