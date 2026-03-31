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
		tasks: [],
	});

	function handleAddTask(text) {
		setProjectsState((prevState) => {
			const newTask = {
				text,
				id: Math.random(),
				projectId: prevState.selectedProject,
			};
			return {
				...prevState,
				tasks: [...prevState.tasks, newTask],
			};
		});
	}

	function handleDeleteTask(id) {
		setProjectsState((prevState) => {
			return {
				...prevState,
				tasks: prevState.tasks.filter((task) => task.id !== id),
			};
		});
	}

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

	function handleDeleteProject() {
		setProjectsState((prevState) => {
			return {
				...prevState,
				projects: prevState.projects.filter(
					(project) => project.id !== prevState.selectedProject,
				),
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

	let content = (
		<SelectedProject
			tasks={projectsState.tasks}
			project={selectedProject}
			onDelete={handleDeleteProject}
			onAddTask={handleAddTask}
			onDeleteTask={handleDeleteTask}
		/>
	);

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
					selectedProject={projectsState.selectedProject}
				/>
				{content}
			</div>
		</>
	);
}

export default App;
