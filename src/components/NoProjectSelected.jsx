import image from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected() {
	return (
		<div className="mt-24 text-center m-auto">
			<img
				className="w-16 h-16 mx-auto"
				src={image}
				alt="No projects selected"
			/>
			<p className="my-3">
				Please select a project from the sidebar to view details.
			</p>
			<Button>Create New Project</Button>
		</div>
	);
}
