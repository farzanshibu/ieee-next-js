import styles from "../../styles/Team.module.css";
import { TabItem, Tabs } from "../Tab";
import Team from "./components/Team";
import Execom from "./components/Execom";
import WIE from "./components/WIE";
import SIGHT from "./components/SIGHT";
import CS from "./components/CS";
import PES from "./components/PES";
import RAS from "./components/RAS";
import SPS from "./components/SPS";
import EMBS from "./components/EMBS";

function Teams() {
	return (
		<section id={styles.team}>
			<div className="containers" data-aos="fade-up">
				<div className="sectionHeader">
					<h3>Team</h3>
					<p>
						IEEE MBCET is made up of a lot enthusiastic individuals. Meet the
						amazing team behind IEEE MBCET.
					</p>
				</div>

				<Tabs defaultIndex="1">
					<TabItem label="All" index="1">
						<div className={styles.product}>
							<Team
								Name=""
								Image={""}
								Designation=""
								facebook=""
								instagram=""
								linkedin=""
							/>
							<Team
								Name=""
								Image={""}
								Designation=""
								facebook=""
								instagram=""
								linkedin=""
							/>
							<Team
								Name=""
								Image={""}
								Designation=""
								facebook=""
								instagram=""
								linkedin=""
							/>
							<Execom />
							<CS />
							<PES />
							<RAS />
							<SPS />
							<EMBS />
							<SIGHT />
							<WIE />
						</div>
					</TabItem>
					<TabItem label="Execom" index="2">
						<Execom />
					</TabItem>
					<TabItem label="CS" index="3">
						<CS />
					</TabItem>
					<TabItem label="PES" index="4">
						<PES />
					</TabItem>
					<TabItem label="RAS" index="5">
						<RAS />
					</TabItem>
					<TabItem label="SPS" index="6">
						<SPS />
					</TabItem>
					<TabItem label="EMBS" index="7">
						<EMBS />
					</TabItem>
					<TabItem label="SIGHT" index="8">
						<SIGHT />
					</TabItem>
					<TabItem label="WIE" index="9">
						<WIE />
					</TabItem>
				</Tabs>
			</div>
		</section>
	);
}

export default Teams;
