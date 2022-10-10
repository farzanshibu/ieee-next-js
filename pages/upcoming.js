import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Events.module.css";
import urlFor from "../Utility/imgtoUrl";
import Client from "../client";
import Event from "../components/Events/components/Event";

function formatDate(date) {
	var d = new Date(date),
		month = "" + (d.getMonth() + 1),
		day = "" + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) month = "0" + month;
	if (day.length < 2) day = "0" + day;

	return [year, month, day].join("-");
}

function Upcoming(props) {
	const events = Object.values(props);
	return (
		<>
			<Head>
				<title>Upcoming Events | IEEE</title>
			</Head>
			<section id={styles.events} style={{ backgroundColor: "white" }}>
				<div className="container" data-aos="fade-up">
					<header className="sectionHeader">
						<h3 style={{ color: "black" }}>Upcoming Events</h3>
						<p style={{ color: "black" }}>
							At IEEE MBCET, we believe that participants must get key takeaways
							from each event and craft each event to be of quality and strive
							to achieve it through teamwork.
						</p>
					</header>
					<div className="product">
						<div className="row w-100">
							{events.map((event) => (
								<div key={event._id} className="col-md-4 p-2">
									<Link href={`/events/${event.slug.current}`} passHref>
										<a>
											<Event
												Title={event.title}
												Description={event.shortDesignation}
												Image={
													event.image
														? urlFor(event.image).format("webp").url()
														: ""
												}
												DateandTime={event.date}
												SpeakerName={
													event.speakers ? event.speakers[0].speakerName : ""
												}
												SpeakerDesingation={
													event.speakers ? event.speakers[0].speakerName : ""
												}
											/>
										</a>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
export const getServerSideProps = async () => {
	var date = formatDate(new Date());
	const events = await Client.fetch(
		`*[_type == "events"].eventsArray[lastDate >= "${date}"]`,
	);
	return {
		props: { ...events },
	};
};

export default Upcoming;
