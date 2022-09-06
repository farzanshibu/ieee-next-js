import styles from "../../styles/Team.module.css";
import React, { useState } from "react";
import {
	MDBTabs,
	MDBTabsItem,
	MDBTabsLink,
	MDBTabsContent,
	MDBTabsPane,
} from "mdb-react-ui-kit";
import urlFor from "../imgtoUrl";
import Team from "./components/Team";
import Execom from "./components/Execom";
import WIE from "./components/WIE";
import SIGHT from "./components/SIGHT";
import CS from "./components/CS";
import PES from "./components/PES";
import RAS from "./components/RAS";
import SPS from "./components/SPS";
import EMBS from "./components/EMBS";

function Teams({ cs, embs, execom, other, pes, ras, sps, sight, wie }) {
	const others = Object.values(other);
	const [basicActive, setBasicActive] = useState("All");
	const handleBasicClick = (value) => {
		if (value === basicActive) {
			return;
		}

		setBasicActive(value);
	};
	return (
		<section id={styles.team} style={{ paddingTop: 70 }}>
			<div className="containers" data-aos="fade-up">
				<div className="sectionHeader">
					<h3>Team</h3>
					<p>
						IEEE MBCET is made up of a lot enthusiastic individuals. Meet the
						amazing team behind IEEE MBCET.
					</p>
				</div>

				<MDBTabs className="mb-5 justify-content-center">
					<MDBTabsItem>
						<MDBTabsLink
							onClick={() => handleBasicClick("All")}
							active={basicActive === "All"}
						>
							All
						</MDBTabsLink>
					</MDBTabsItem>
					<MDBTabsItem>
						<MDBTabsLink
							onClick={() => handleBasicClick("Execom")}
							active={basicActive === "Execom"}
						>
							Execom
						</MDBTabsLink>
					</MDBTabsItem>
					<MDBTabsItem>
						<MDBTabsLink
							onClick={() => handleBasicClick("CS")}
							active={basicActive === "CS"}
						>
							CS
						</MDBTabsLink>
					</MDBTabsItem>
					<MDBTabsItem>
						<MDBTabsLink
							onClick={() => handleBasicClick("PES")}
							active={basicActive === "PES"}
						>
							PES
						</MDBTabsLink>
					</MDBTabsItem>
					<MDBTabsItem>
						<MDBTabsLink
							onClick={() => handleBasicClick("RAS")}
							active={basicActive === "RAS"}
						>
							RAS
						</MDBTabsLink>
					</MDBTabsItem>
					<MDBTabsItem>
						<MDBTabsLink
							onClick={() => handleBasicClick("SPS")}
							active={basicActive === "SPS"}
						>
							SPS
						</MDBTabsLink>
					</MDBTabsItem>
					<MDBTabsItem>
						<MDBTabsLink
							onClick={() => handleBasicClick("EMBS")}
							active={basicActive === "EMBS"}
						>
							EMBS
						</MDBTabsLink>
					</MDBTabsItem>
					<MDBTabsItem>
						<MDBTabsLink
							onClick={() => handleBasicClick("SIGHT")}
							active={basicActive === "SIGHT"}
						>
							SIGHT
						</MDBTabsLink>
					</MDBTabsItem>
					<MDBTabsItem>
						<MDBTabsLink
							onClick={() => handleBasicClick("WIE")}
							active={basicActive === "WIE"}
						>
							WIE
						</MDBTabsLink>
					</MDBTabsItem>
				</MDBTabs>

				<MDBTabsContent>
					<MDBTabsPane show={basicActive === "All"}>
						<div className={styles.product}>
							{others.map((other) => (
								<Team
									key={other._id}
									Name={other.name}
									Image={urlFor(other.image).auto("format").url()}
									Designation={other.designation}
									facebook={other.facebook}
									instagram={other.instagram}
									linkedin={other.linkedin}
								/>
							))}
							<Execom {...execom} />
							<CS {...cs} />
							<PES {...pes} />
							<RAS {...ras} />
							<SPS {...sps} />
							<EMBS {...embs} />
							<SIGHT {...sight} />
							<WIE {...wie} />
						</div>
					</MDBTabsPane>
					<MDBTabsPane show={basicActive === "Execom"}>
						<div className={styles.product}>
							<Execom {...execom} />
						</div>
					</MDBTabsPane>
					<MDBTabsPane show={basicActive === "CS"}>
						<div className={styles.product}>
							<CS {...cs} />
						</div>
					</MDBTabsPane>
					<MDBTabsPane show={basicActive === "PES"}>
						<div className={styles.product}>
							<PES {...pes} />
						</div>
					</MDBTabsPane>
					<MDBTabsPane show={basicActive === "RAS"}>
						<div className={styles.product}>
							<RAS {...ras} />
						</div>
					</MDBTabsPane>
					<MDBTabsPane show={basicActive === "SPS"}>
						<div className={styles.product}>
							<SPS {...sps} />
						</div>
					</MDBTabsPane>
					<MDBTabsPane show={basicActive === "EMBS"}>
						<div className={styles.product}>
							<EMBS {...embs} />
						</div>
					</MDBTabsPane>
					<MDBTabsPane show={basicActive === "SIGHT"}>
						<div className={styles.product}>
							<SIGHT {...sight} />
						</div>
					</MDBTabsPane>
					<MDBTabsPane show={basicActive === "WIE"}>
						<div className={styles.product}>
							<WIE {...wie} />
						</div>
					</MDBTabsPane>
				</MDBTabsContent>
			</div>
		</section>
	);
}

export default Teams;
