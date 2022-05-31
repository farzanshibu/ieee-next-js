import { atcb_action } from "add-to-calendar-button";

function AddToCal(props) {
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
						endDate: props.endDate,
						description: props.description,
						startTime: props.startTime,
						endTime: props.endTime,
						options: ["Apple", "Google", "Outlook.com"],
						trigger: "click",
					});
				}}
			>
				<i className="fa-solid fa-calendar-plus"></i>
			</button>
		</div>
	);
}

export default AddToCal;
