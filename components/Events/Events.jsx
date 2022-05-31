import styles from "../../styles/Events.module.css";
import { TabItem, Tabs } from "../Tab";
import Year2019 from "./components/Year2019";
import Year2020 from "./components/Year2020";
import Year2021 from "./components/Year2021";
import Year2022 from "./components/Year2022";

function Events() {
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

				<Tabs defaultIndex="1">
					<TabItem label="2022" index="1">
						<Year2022 />
					</TabItem>
					<TabItem label="2021" index="2">
						<Year2021 />
					</TabItem>
					<TabItem label="2020" index="3">
						<Year2020 />
					</TabItem>
					<TabItem label="2019" index="4">
						<Year2019 />
					</TabItem>
				</Tabs>
			</div>
		</section>
	);
}

export default Events;
