import Image from "next/image";
import styles from "../../../styles/Events.module.css";
import eventImg from "../../../assets/images/hero.jpg";
import Clock from "./Clock";

function Event(props) {
	const imageUrl = "https://source.unsplash.com/random/800x600";
	let d = new Date(props.DateandTime);
	const options = {
		day: "numeric",
		month: "long",
		weekday: "short",
		hour: "numeric",
		minute: "numeric",
	};

	return (
		<div
			className={`${styles.card} ${styles.cardHasBg} text-white click-col`}
			style={{ background: `url(${props.Image || imageUrl}) no-repeat` }}
			data-aos="zoom-in"
			data-aos-delay={props.animate || "100"}
		>
			<Image className="card-img d-none" src={eventImg} alt="Events" />
			<div
				className={`${styles.cardImgOverlay} d-flex flex-column align-items-center justify-content-center`}
			>
				<div className={styles.cardBody}>
					<small className={`${styles.cardMeta} mb-2`}>
						{props.Description}
					</small>
					<h4 className="card-title text-2xl font-bold mt-0">{props.Title}</h4>
					<small id="event-box">
						<i className="fa-solid fa-alarm-clock" style={{ fontSize: "12px" }}>
							{props.DateandTime ? d.toLocaleString("en-US", options) : ""}
						</i>
						<br />
						{props.DateandTime ? (
							<div className={styles.statusBar}>
								<div className="d-flex justify-content-center align-item-center w-100 h-100">
									<i
										className="fa-solid fa-calendar-check"
										style={{ fontSize: "15px", padding: "7px 0" }}
									></i>
									<div id={styles.countDownBox} className="text-center">
										<Clock deadline={props.DateandTime} />
									</div>
								</div>
							</div>
						) : (
							""
						)}
					</small>
				</div>
				<div className={styles.cardFooter}>
					<div className={styles.media}>
						<div className="media-body">
							<h6 className="my-0 text-white d-block ">
								{props.SpeakerName ? (
									props.SpeakerName + ", "
								) : (
									<span className="invisible">.</span>
								)}
								<small>{props.SpeakerDesingation || ""}</small>
							</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Event;
