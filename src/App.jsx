import { useState } from "react";
import Sidebar from "./components/Sidebar";
import AddProject from "./components/AddProject";
import DetailProject from "./components/DetailProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
	const [projectsState, setProjectsState] = useState({
		selectedProject: undefined,
		projects: [],
	});

	function handleStartAddProject() {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProject: null,
			};
		});
	}

	function handleCancelClick() {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProject: undefined,
			};
		});
	}

	function handleClick({ name, description, dueDate }) {
		setProjects([
			...projects,
			{ id: projects.length + 1, name, description, dueDate },
		]);
	}

	let content;

	projectsState.selectedProject === null
		? (content = <AddProject onCancelClick={handleCancelClick} />)
		: (content = (
				<NoProjectSelected onStartAddProject={handleStartAddProject} />
			));

	return (
		<>
			<div className="flex gap-3 h-screen">
				<Sidebar onStartAddProject={handleStartAddProject} />
				{content}
			</div>
		</>
	);
}

export default App;
