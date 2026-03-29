import Button from "./Button";

export default function Sidebar({
	onStartAddProject,
	projects,
	onSelectProject,
	selectedProject,
}) {
	return (
		<div className="w-64 h-screen bg-gray-800 text-white p-4">
			<h2 className="text-2xl font-bold mb-4">YOUR PROJECTS</h2>
			<Button onClick={onStartAddProject}>+ Add Project</Button>
			<ul>
				{projects.map((project) => {
					let cssClasses =
						"w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-gray-500 cursor-pointer";
					if (project.id === selectedProject) {
						cssClasses += " bg-gray-700";
					} else {
						cssClasses += " text-gray-400";
					}

					return (
						<li
							key={project.id}
							className={cssClasses}
							onClick={() => onSelectProject(project.id)}
						>
							{project.title}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
