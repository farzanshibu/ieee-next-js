import Image from "next/future/image";
import BlockContent from "@sanity/block-content-to-react";
import urlFor from "../../Utility/imgtoUrl";
import styles from "../../styles/Team.module.css";
import AddToCal from "./components/AddToCal";

function formatTime(eventTime, prefix = "") {
	return typeof eventTime == "object"
		? prefix +
				eventTime.toLocaleTimeString("en-US", {
					hour: "2-digit",
					minute: "2-digit",
				})
		: "";
}

function formatDate(eventDate, prefix = "") {
	return typeof eventDate == "object"
		? prefix +
				eventDate.toLocaleDateString("en-US", {
					day: "numeric",
					month: "long",
					year: "numeric",
					weekday: "short",
				})
		: "";
}
function Calender(eventDate) {
	return typeof eventDate == "object"
		? eventDate.toISOString().substring(0, 10)
		: "";
}

function Details(props) {
	var props = Object.values(props);
	let d = new Date(props[0]?.date);
	let time = Date.parse(d) - Date.parse(new Date());

	let eventDate = formatDate(new Date(props[0]?.date));
	let Add2eventDate;
	if (props[0].date) {
		Add2eventDate = Calender(new Date(props[0]?.date));
	}
	let eventTime = formatTime(new Date(props[0]?.date));

	let eventLastDate = formatDate(new Date(props[0]?.date3));
	let Add2eventLastDate;
	if (props[0].date3) {
		Add2eventLastDate = Calender(new Date(props[0]?.date3));
	}
	let eventLastTime = formatTime(new Date(props[0]?.date3));
	let deadline = formatDate(new Date(props[0]?.date5));
	let desc;
	if (props[0].description) {
		desc = props[0].description.map((item) => {
			let description = item.children[0].text + " ";
			return description;
		});
	}

	return (
		<section id={styles.team}>
			<div className="container" data-aos="fade-up">
				<section className="text-gray-600 body-font">
					<div className="container mx-auto flex px-5 py-24 align-center md:flex-row flex-col items-center gap-4">
						<div className="flex justify-center align-center lg:max-w-lg lg:w-full ">
							<a>
								<Image
									className="object-cover object-center rounded"
									src={
										props[0].image
											? urlFor(props[0].image).auto("format").url()
											: ""
									}
									alt="event"
									width={800}
									height={600}
									layout="raw"
								/>
							</a>
						</div>
						<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center gap-3">
							<h1 className="title-font sm:text-4xl text-3xl mb-3 font-medium text-gray-900">
								{props[0]?.title}
							</h1>
							<div className="leading-relaxed container-fluid break-words text-justify">
								<div className="prose prose-slate lg:prose-lg">
									<BlockContent
										blocks={props[0].description ? props[0].description : ""}
									/>
								</div>
							</div>
							{props[0].theme ? (
								<div className="prose prose-slate prose-xs">
									<p style={{ textAlign: "left", margin: 0, padding: 0 }}>
										Theme : <strong>{props[0].theme}</strong>
									</p>
								</div>
							) : (
								""
							)}
							{props[0].date5 ? (
								<div className="prose prose-slate prose-xs">
									<p style={{ textAlign: "left", margin: 0, padding: 0 }}>
										Deadline : <strong>{deadline}</strong>
									</p>
								</div>
							) : (
								""
							)}
							{props[0].place ? (
								<div className="prose prose-slate prose-xs">
									<p style={{ textAlign: "left", margin: 0, padding: 0 }}>
										Venue : <strong>{props[0].place}</strong>
									</p>
								</div>
							) : (
								""
							)}
							<div>
								{props[0].speakers ? (
									<div className="prose prose-slate prose-xs">
										<p style={{ textAlign: "left", margin: 0, padding: 0 }}>
											Speakers :<br />
										</p>
										<div className="mt-2 container-fluid">
											{props[0].speakers.map((speaker, index) => (
												<strong key={index}>
													{" "}
													{speaker.speakerName}
													<span className="font-light">
														, {speaker.speakerDesignation}
													</span>
													<br />
												</strong>
											))}
										</div>
									</div>
								) : (
									""
								)}
							</div>
							<div>
								{props[0].contacts ? (
									<div className="prose prose-slate prose-xs">
										<p style={{ textAlign: "left", margin: 0, padding: 0 }}>
											Contacts :<br />
										</p>
										<div className="mt-2 container-fluid">
											{props[0].contacts.map((speaker, index) => (
												<strong key={index}>
													{" "}
													{speaker.contactName}
													<span className="font-light">
														, {speaker.contactNumber}
													</span>
													<br />
												</strong>
											))}
										</div>
									</div>
								) : (
									""
								)}
								<br />
							</div>
							{props[0].rule ? (
								<div className="break-words">
									<p style={{ textAlign: "left", margin: 0, padding: 0 }}>
										Rules :
									</p>
									<div className="container-fluid">
										<div
											className={`${styles.removePaM} prose prose-slate lg:prose-lg`}
										>
											<BlockContent
												className="text-left mt-0 mb-0"
												blocks={props[0].rule}
											/>
										</div>
									</div>
								</div>
							) : (
								""
							)}
							<p style={{ textAlign: "left", fontSize: 14 }}>
								<strong>
									{props[0].date ? eventDate : ""}
									{props[0].date ? ", " + eventTime : ""}
									{props[0].date3 ? " - " + eventLastDate : ""}
									{props[0].date3 ? ", " + eventLastTime : ""}
								</strong>
							</p>

							<div className="flex justify-center gap-4">
								{time > "0" ? (
									<AddToCal
										name={props[0]?.title}
										description={props[0].description ? desc.join(" ") : ""}
										startTime={props[0].date ? eventTime : ""}
										startDate={props[0].date ? Add2eventDate : ""}
										endTime={props[0].date3 ? eventLastTime : eventTime}
										endDate={props[0].date3 ? Add2eventLastDate : Add2eventDate}
										location={props[0].place ? props[0].place : ""}
									/>
								) : (
									""
								)}
								{props[0].knowMore || props[0].formLink ? (
									<a
										id="address"
										href={time < "0" ? props[0].knowMore : props[0].formLink}
									>
										<button
											id="btnval"
											className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg"
											type="button"
										>
											{time < "0" ? "Know-More" : "Register"}
										</button>
									</a>
								) : (
									""
								)}
								<a href="mailto:ieeesb@mbcet.ac.in">
									<button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
										Contact
									</button>
								</a>
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
}

export default Details;
