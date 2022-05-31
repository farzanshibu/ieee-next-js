import { useEffect, useState } from "react";
import style from "./Clock.module.css";

function Clock(props) {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const getTimeUntil = (deadline) => {
		const time = Date.parse(deadline) - Date.parse(new Date());
		setSeconds(Math.floor((time / 1000) % 60));
		setMinutes(Math.floor((time / 1000 / 60) % 60));
		setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
		setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
	};

	useEffect(() => {
		getTimeUntil(props.deadline);
	});

	useEffect(() => {
		setInterval(() => getTimeUntil(props.deadline), 1000);
	}, [props.deadline]);

	const leading0 = (num) => {
		return num < 10 ? "0" + num : num;
	};

	const time = Date.parse(props.deadline) - Date.parse(new Date());
	if (time <= "-1200000") {
		return (
			<div className={style.clock}>
				<div className={style.clock__days}>Event has Ended </div>
			</div>
		);
	} else if (time > "-1200000" && time < "0") {
		return (
			<div className={style.clock}>
				<div className={style.clock__days}>Join Now </div>
			</div>
		);
	} else if (time > "0" && time < "600000") {
		return (
			<div className={style.clock}>
				<div className={style.clock__days}>
					{`Starting Soon ${leading0(minutes)}M ${leading0(seconds)}S`}
				</div>
			</div>
		);
	} else {
		return (
			<div className={style.clock}>
				<div className={style.clock__days}>
					{`${leading0(days)}D ${leading0(hours)}H ${leading0(
						minutes,
					)}M ${leading0(seconds)}S`}
				</div>
			</div>
		);
	}
}

export default Clock;
