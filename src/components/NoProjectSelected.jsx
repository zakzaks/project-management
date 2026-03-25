import image from "../assets/no-projects.png";

export default function NoProjectSelected() {
	return (
		<div className="mt-24 text-center m-auto">
			<img
				className="w-16 h-16 mx-auto mb-3"
				src={image}
				alt="No projects selected"
			/>
			<p>Please select a project from the sidebar to view details.</p>
		</div>
	);
}
