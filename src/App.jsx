import { useState } from "react";
import Sidebar from "./components/Sidebar";
import FormAddProject from "./components/FormAddProject";
import DetailProject from "./components/DetailProject";

function App() {
	const [selectedProject, setSelectedProject] = useState(null);
	const [projects, setProjects] = useState([
		{ id: 1, name: "Project Alpha" },
		{ id: 2, name: "Project Beta" },
		{ id: 3, name: "Project Gamma" },
	]);
	const [detailProject, setDetailProject] = useState([
		{
			id: 1,
			name: "Project Alpha",
			description: "Description for Project Alpha",
			dueDate: "2024-12-31",
		},
		{
			id: 2,
			name: "Project Beta",
			description: "Description for Project Beta",
			dueDate: "2024-12-31",
		},
		{
			id: 3,
			name: "Project Gamma",
			description: "Description for Project Gamma",
			dueDate: "2024-12-31",
		},
	]);

	function handleClick({ name, description, dueDate }) {
		setProjects([
			...projects,
			{ id: projects.length + 1, name, description, dueDate },
		]);
	}

	return (
		<>
			<div className="grid grid-cols-2">
				<Sidebar projects={projects} />
				{selectedProject ? (
					<DetailProject
						project={detailProject.find((p) => p.id === selectedProject)}
					/>
				) : (
					<FormAddProject onClick={handleClick} />
				)}
			</div>
		</>
	);
}

export default App;
