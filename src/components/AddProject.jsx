import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function AddProject({ onCancelClick, onAdd }) {
	const title = useRef();
	const description = useRef();
	const dueDate = useRef();
	const modal = useRef();

	function handleSaveClick() {
		const enteredTitle = title.current.value;
		const enteredDescription = description.current.value;
		const enteredDueDate = dueDate.current.value;

		if (
			enteredTitle.trim() === "" ||
			enteredDescription.trim() === "" ||
			enteredDueDate.trim() === ""
		) {
			modal.current.open();
			return;
		}

		onAdd({
			title: enteredTitle,
			description: enteredDescription,
			dueDate: enteredDueDate,
		});
	}

	return (
		<>
			<Modal ref={modal} buttonCaption="Close">
				<h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
				<p className="text-stone-600 mb-4">
					Ooops... looks like you forgot input valid values.
				</p>
				<p className="text-stone-600 mb-4">Please input the valid values.</p>
			</Modal>
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
		</>
	);
}
