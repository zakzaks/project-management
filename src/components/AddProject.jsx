import Input from "./Input";
import { useRef } from "react";

export default function AddProject({ onCancelClick, onAdd }) {
	const title = useRef();
	const description = useRef();
	const dueDate = useRef();

	function handleSaveClick() {
		const enteredTitle = title.current.value;
		const enteredDescription = description.current.value;
		const enteredDueDate = dueDate.current.value;

		onAdd({
			title: enteredTitle,
			description: enteredDescription,
			dueDate: enteredDueDate,
		});
	}

	return (
		<div className="mt-3 mr-3 w-full">
			<h2 className="text-2xl font-bold mb-4">ADD NEW PROJECT</h2>
			<div>
				<Input ref={title} label="Project Name" />
				<Input ref={description} label="Project Description" textarea />
				<Input ref={dueDate} label="Due Date" type="date" />
				<button
					onClick={handleSaveClick}
					className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
				>
					Add Project
				</button>
				<button
					className="text-black font-bold py-2 px-4 hover:text-gray-300"
					onClick={onCancelClick}
				>
					Cancel
				</button>
			</div>
		</div>
	);
}
