import Head from "next/head";
import styles from "../styles/Events.module.css";
import Event from "../components/Events/components/Event";

function upcoming() {
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
							<Event
								Title=""
								Description=""
								Image={""}
								Time=""
								Date=""
								SpeakerName=""
								SpeakerDesingation=""
							/>

							<Event
								Title=""
								Description=""
								Image={""}
								Time=""
								Date=""
								SpeakerName=""
								SpeakerDesingation=""
							/>

							<Event
								Title=""
								Description=""
								Image={""}
								Time=""
								Date=""
								SpeakerName=""
								SpeakerDesingation=""
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default upcoming;
