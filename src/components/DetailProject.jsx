export default function DetailProject({ project }) {
	if (!project) {
		return (
			<div className="w-full h-screen bg-gray-800 text-white p-4">
				<h2 className="text-2xl font-bold mb-4">SELECT A PROJECT</h2>
				<p>Please select a project from the sidebar to view details.</p>
			</div>
		);
	}

	return (
		<div className="w-full h-screen bg-gray-800 text-white p-4">
			<h2 className="text-2xl font-bold mb-4">{project.name}</h2>
			<p>{project.description}</p>
			<p>Due Date: {project.dueDate}</p>
		</div>
	);
}
