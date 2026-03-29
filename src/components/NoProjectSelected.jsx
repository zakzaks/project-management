import image from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onStartAddProject }) {
	return (
		<div className="mt-24 text-center m-auto">
			<img
				className="w-16 h-16 mx-auto"
				src={image}
				alt="No projects selected"
			/>
			<h2 className="text-xl font-bold text-stone-500 my-4">
				No Project Selected
			</h2>
			<p className="my-3">
				Please select a project from the sidebar to view details.
			</p>
			<Button onClick={onStartAddProject}>Create New Project</Button>
		</div>
	);
}
