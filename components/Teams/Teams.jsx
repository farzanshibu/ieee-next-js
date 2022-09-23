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

function Teams(dataset) {
	const datas = Object.values(dataset);
	const categorys = [
		"all",
		"execom",
		"cs",
		"pes",
		"ras",
		"sps",
		"embs",
		"sight",
		"wie",
	];
	const [basicActive, setBasicActive] = useState("all");
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
					{categorys.map((category, key) => (
						<MDBTabsItem key={key}>
							<MDBTabsLink
								onClick={() => handleBasicClick(category)}
								active={basicActive === category}
								className="uppercase"
							>
								{category}
							</MDBTabsLink>
						</MDBTabsItem>
					))}
				</MDBTabs>
				<MDBTabsContent>
					<MDBTabsPane show={basicActive === "all"}>
						<div className="flex flex-wrap justify-center">
							{datas.map((data) => (
								<div key={data._id} className={styles.product}>
									<Team
										Name={data.name}
										Image={
											data.image ? urlFor(data.image).auto("format").url() : ""
										}
										Designation={data.designation}
										facebook={data?.facebook}
										instagram={data?.instagram}
										linkedin={data?.linkedin}
									/>
								</div>
							))}
						</div>
					</MDBTabsPane>
					{categorys.map((category, key) => (
						<MDBTabsPane key={key} show={basicActive === category}>
							<div className="flex flex-wrap justify-center">
								{datas.map((data) => (
									<div key={data._id}>
										{data.category == category ? (
											<div className={styles.product}>
												<Team
													Name={data.name}
													Image={
														data.image
															? urlFor(data.image).auto("format").url()
															: ""
													}
													Designation={data.designation}
													facebook={data?.facebook}
													instagram={data?.instagram}
													linkedin={data?.linkedin}
												/>
											</div>
										) : (
											""
										)}
									</div>
								))}
							</div>
						</MDBTabsPane>
					))}
				</MDBTabsContent>
			</div>
		</section>
	);
}

export default Teams;
