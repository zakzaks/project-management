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

	function handleAddProject(projectData) {
		const newProject = {
			...projectData,
			id: Math.random(),
		};
		setProjectsState((prevState) => {
			return {
				...prevState,
				projects: [...prevState.projects, newProject],
				selectedProject: undefined,
			};
		});
	}

	let content;

	projectsState.selectedProject === null
		? (content = (
				<AddProject
					onCancelClick={handleCancelClick}
					onAdd={handleAddProject}
				/>
			))
		: (content = (
				<NoProjectSelected onStartAddProject={handleStartAddProject} />
			));

	return (
		<>
			<div className="flex gap-3 h-screen">
				<Sidebar
					projects={projectsState.projects}
					onStartAddProject={handleStartAddProject}
				/>
				{content}
			</div>
		</>
	);
}

export default App;
