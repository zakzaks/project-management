import Button from "./Button";

export default function Sidebar({ onStartAddProject }) {
	return (
		<div className="w-64 h-screen bg-gray-800 text-white p-4">
			<h2 className="text-2xl font-bold mb-4">YOUR PROJECTS</h2>
			<Button onClick={onStartAddProject}>+ Add Project</Button>
			<ul></ul>
		</div>
	);
}
