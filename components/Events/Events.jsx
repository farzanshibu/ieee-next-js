import styles from "../../styles/Events.module.css";
import React, { useState } from "react";
import {
	MDBTabs,
	MDBTabsItem,
	MDBTabsLink,
	MDBTabsContent,
	MDBTabsPane,
} from "mdb-react-ui-kit";
import Year2019 from "./components/Year2019";
import Year2020 from "./components/Year2020";
import Year2021 from "./components/Year2021";
import Year2022 from "./components/Year2022";

function Events() {
	const [basicActive, setBasicActive] = useState("2022");

	const handleBasicClick = (value) => {
		if (value === basicActive) {
			return;
		}

		setBasicActive(value);
	};
	return (
		<section id={styles.events} style={{ backgroundColor: "white" }}>
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
					<MDBTabsItem>
						<MDBTabsLink
							onClick={() => handleBasicClick("2022")}
							active={basicActive === "2022"}
						>
							2022
						</MDBTabsLink>
					</MDBTabsItem>
					<MDBTabsItem>
						<MDBTabsLink
							onClick={() => handleBasicClick("2021")}
							active={basicActive === "2021"}
						>
							2021
						</MDBTabsLink>
					</MDBTabsItem>
					<MDBTabsItem>
						<MDBTabsLink
							onClick={() => handleBasicClick("2020")}
							active={basicActive === "2020"}
						>
							2020
						</MDBTabsLink>
					</MDBTabsItem>
					<MDBTabsItem>
						<MDBTabsLink
							onClick={() => handleBasicClick("2019")}
							active={basicActive === "2019"}
						>
							2019
						</MDBTabsLink>
					</MDBTabsItem>
				</MDBTabs>

				<MDBTabsContent>
					<MDBTabsPane show={basicActive === "2022"}>
						<Year2022 />
					</MDBTabsPane>
					<MDBTabsPane show={basicActive === "2021"}>
						<Year2021 />
					</MDBTabsPane>
					<MDBTabsPane show={basicActive === "2020"}>
						<Year2020 />
					</MDBTabsPane>
					<MDBTabsPane show={basicActive === "2019"}>
						<Year2019 />
					</MDBTabsPane>
				</MDBTabsContent>
			</div>
		</section>
	);
}

export default Events;
