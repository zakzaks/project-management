import { useState } from "react";
import Input from "./Input";

export default function FormAddProject({ onClick }) {
	const [projectName, setProjectName] = useState("");
	const [projectDescription, setProjectDescription] = useState("");
	const [dueDate, setDueDate] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		if (!projectName.trim()) return;
		onClick({ name: projectName, description: projectDescription, dueDate });
		setProjectName("");
		setProjectDescription("");
		setDueDate("");
	}

	return (
		<div className="w-full h-screen bg-slate-500 text-black p-4">
			<h2 className="text-2xl font-bold mb-4">ADD NEW PROJECT</h2>
			<div>
				<Input
					label="Project Name"
					value={projectName}
					onChange={(e) => setProjectName(e.target.value)}
				/>
				<Input
					label="Project Description"
					textarea
					value={projectDescription}
					onChange={(e) => setProjectDescription(e.target.value)}
				/>
				<Input
					label="Due Date"
					type="date"
					value={dueDate}
					onChange={(e) => setDueDate(e.target.value)}
				/>
				<button
					className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
					onClick={handleSubmit}
				>
					Add Project
				</button>
				<button
					className="text-black font-bold py-2 px-4 hover:text-gray-300"
					onClick={() => {
						setProjectName("");
						setProjectDescription("");
						setDueDate("");
					}}
				>
					Cancel
				</button>
			</div>
		</div>
	);
}
