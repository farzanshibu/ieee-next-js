import { atcb_action } from "add-to-calendar-button";
import "add-to-calendar-button/assets/css/atcb.css";
import { FcAlarmClock } from "react-icons/fc";

function AddToCal(props) {
	const {
		name,
		startDate,
		endDate,
		startTime,
		endTime,
		description,
		location,
	} = props;

	return (
		<button
			onClick={() =>
				atcb_action({
					name,
					location,
					startTime,
					endTime,
					description,
					endDate,
					startDate,
					options: ["Apple", "Google", "Microsoft365", "Outlook.com", "Yahoo"],
					timeZone: "Asia/Kolkata",
					iCalFileName: "Reminder-Event",
				})
			}
			className="bg-indigo-500 btn text-white rounded text-sm border-0 focus:outline-none font-bold hover:bg-indigo-700 hover:text-black"
		>
			<FcAlarmClock className="inline-block" /> Add to Calendar
		</button>
	);
}

export default AddToCal;
