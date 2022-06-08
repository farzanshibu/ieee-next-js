// import { useEffect } from "react";
import { atcb_action, atcb_init } from "add-to-calendar-button";

function AddToCal(props) {
	// useEffect(() => atcb_init(), []);
	return (
		<div>
			<button
				style={{
					color: "#000",
					backgroundColor: "#74c8f7",
					padding: "10px",
					borderRadius: "5px",
				}}
				onClick={(e) => {
					e.preventDefault();
					atcb_action({
						name: props.name,
						startDate: props.startDate,
						description: props.description,
						startTime: props.startTime,
						options: ["Apple", "Google", "Outlook.com"],
						trigger: "click",
					});
				}}
			>
				<i className="fa-solid fa-calendar-plus"></i> Calendar
			</button>
		</div>
	);
}

export default AddToCal;
