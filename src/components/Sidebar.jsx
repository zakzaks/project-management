export default function Sidebar({ projects }) {
	return (
		<div className="w-64 h-screen bg-gray-800 text-white p-4">
			<h2 className="text-2xl font-bold mb-4">YOUR PROJECTS</h2>
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				+ Add Project
			</button>
			<ul>
				{projects.map((project) => (
					<li key={project.id} className="mb-2">
						<a href="#" className="hover:underline">
							{project.name}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
