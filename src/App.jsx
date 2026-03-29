import { useState } from "react";
import Sidebar from "./components/Sidebar";
import AddProject from "./components/AddProject";
import DetailProject from "./components/DetailProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

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

	function handleSelectProject(projectId) {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProject: projectId,
			};
		});
	}
	const selectedProject = projectsState.projects.find(
		(project) => project.id === projectsState.selectedProject,
	);

	let content = <SelectedProject project={selectedProject} />;

	if (projectsState.selectedProject === null) {
		content = (
			<AddProject onCancelClick={handleCancelClick} onAdd={handleAddProject} />
		);
	} else if (projectsState.selectedProject === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
	}

	return (
		<>
			<div className="flex gap-3 h-screen">
				<Sidebar
					projects={projectsState.projects}
					onStartAddProject={handleStartAddProject}
					onSelectProject={handleSelectProject}
				/>
				{content}
			</div>
		</>
	);
}

export default App;
