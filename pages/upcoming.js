import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Events.module.css";
import urlFor from "../components/imgtoUrl";
import Client from "../client";
import Event from "../components/Events/components/Event";

function upcoming(props) {
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
								<Link key={event._id} href={`/events/${event.slug.current}`}>
									<a>
										<Event
											Title={event.title}
											Description={event.shortDesignation}
											Image={urlFor(event.image).format("webp").url()}
											DateandTime={event.date}
											SpeakerName={event.speakers[0].speakerName}
											SpeakerDesingation={event.speakers[0].speakerDesignation}
										/>
									</a>
								</Link>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
export const getServerSideProps = async () => {
	const events = await Client.fetch(
		`*[_type == "events" && lastDate > '${new Date().toISOString()}']`,
	);

	return {
		props: { ...events },
	};
};

export default upcoming;
