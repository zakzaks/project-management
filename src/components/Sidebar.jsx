import Button from "./Button";

export default function Sidebar({ onStartAddProject, projects }) {
	return (
		<div className="w-64 h-screen bg-gray-800 text-white p-4">
			<h2 className="text-2xl font-bold mb-4">YOUR PROJECTS</h2>
			<Button onClick={onStartAddProject}>+ Add Project</Button>
			<ul>
				{projects.map((project) => (
					<li key={project.id} className="mt-2 p-2 bg-gray-700 rounded">
						{project.title}
					</li>
				))}
			</ul>
		</div>
	);
}
