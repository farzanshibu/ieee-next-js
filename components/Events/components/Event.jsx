import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Events.module.css";
import eventImg from "../../../assets/images/hero.jpg";
import Clock from "./Clock";

function Event(props) {
	const imageUrl = "https://source.unsplash.com/random/800x600";

	return (
		<div className="col-md-4 p-2">
			<div
				className={`${styles.card} ${styles.cardHasBg} text-white click-col`}
				style={{ background: `url(${imageUrl || props.Image}) no-repeat` }}
				data-aos="zoom-in"
				data-aos-delay={props.animate || "100"}
			>
				<Image className="card-img d-none" src={eventImg} alt="Events" />
				<Link href="events/1" className="text-white">
					<div className={`${styles.cardImgOverlay} d-flex flex-column`}>
						<div className={styles.cardBody}>
							<small className={`${styles.cardMeta} mb-2`}>
								{props.Description}
							</small>
							<h4 className="card-title mt-0">{props.Title}</h4>
							<small id="event-box">
								<i
									className="fa-solid fa-alarm-clock"
									style={{ fontSize: "15px" }}
								>
									{props.Time} @ {props.Date}
								</i>
								<br />
								{props.Date || props.Time ? (
									<div className={styles.statusBar}>
										<div
											data-countdown=""
											className="d-flex justify-content-center align-item-center w-100 h-100"
										>
											<i
												className="fa-solid fa-calendar-check"
												style={{ fontSize: "15px", padding: "7px 0" }}
											></i>
											<div id={styles.countDownBox} className="text-center">
												<Clock deadline={props.Time + " " + props.Date} />
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
									<h6 className="my-0 text-white d-block">
										{props.SpeakerName}
									</h6>
									<small>{props.SpeakerDesingation}</small>
								</div>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Event;
