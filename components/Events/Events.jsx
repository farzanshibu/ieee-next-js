import styles from "../../styles/Events.module.css";
import React, { useState } from "react";
import {
	MDBTabs,
	MDBTabsItem,
	MDBTabsLink,
	MDBTabsContent,
	MDBTabsPane,
} from "mdb-react-ui-kit";
import Year from "./components/Year";

function Events(props) {
	const events = Object.values(props);
	let currentYear = new Date().getFullYear();
	const [basicActive, setBasicActive] = useState(`${currentYear}`);
	const handleBasicClick = (value) => {
		if (value === basicActive) {
			return;
		}

		setBasicActive(value);
	};
	return (
		<section
			id={styles.events}
			style={{ backgroundColor: "white", paddingTop: 70 }}
		>
			<div className="container" data-aos="fade-up">
				<header className="sectionHeader">
					<h3 style={{ color: "black" }}>Events</h3>
					<p style={{ color: "black" }}>
						At IEEE MBCET, we believe that participants must get key takeaways
						from each event and craft each event to be of quality and strive to
						achieve it through teamwork.
					</p>
				</header>

				<MDBTabs className="mb-5 justify-content-center">
					{events.map((eventyear) => (
						<MDBTabsItem key={eventyear._id}>
							<MDBTabsLink
								onClick={() => handleBasicClick(eventyear?.year)}
								active={basicActive === eventyear?.year}
							>
								{eventyear?.year}
							</MDBTabsLink>
						</MDBTabsItem>
					))}
				</MDBTabs>

				<MDBTabsContent>
					{events.map((event) => (
						<MDBTabsPane key={event._id} show={basicActive === event?.year}>
							<Year {...event?.eventsArray} />
						</MDBTabsPane>
					))}
				</MDBTabsContent>
			</div>
		</section>
	);
}

export default Events;
