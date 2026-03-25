import { useState } from "react";

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
		<div className="w-full h-screen bg-gray-800 text-white p-4">
			<h2 className="text-2xl font-bold mb-4">ADD NEW PROJECT</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="projectName">Project Name</label>
				<input
					type="text"
					id="projectName"
					placeholder="Project Name"
					value={projectName}
					onChange={(e) => setProjectName(e.target.value)}
					className="w-full p-2 mb-4 text-black"
				/>
				<label htmlFor="projectDescription">Description</label>
				<textarea
					id="projectDescription"
					placeholder="Project Description"
					value={projectDescription}
					onChange={(e) => setProjectDescription(e.target.value)}
					className="w-full p-2 mb-4 text-black"
				></textarea>
				<label htmlFor="dueDate">Due Date</label>
				<input
					type="date"
					id="dueDate"
					name="dueDate"
					value={dueDate}
					onChange={(e) => setDueDate(e.target.value)}
					className="w-full p-2 mb-4 text-black"
				/>
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Add Project
				</button>
			</form>
		</div>
	);
}
