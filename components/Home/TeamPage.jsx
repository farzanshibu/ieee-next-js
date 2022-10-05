import Link from "next/link";

import urlFor from "../../Utility/imgtoUrl";
import Team from "../Teams/components/Team";
import styles from "../../styles/Team.module.css";

function TeamPage(props) {
	const members = Object.values(props);

	return (
		<section id={styles.team}>
			<div className="container" data-aos="fade-up">
				<div className="sectionHeader">
					<h3>Team</h3>
					<p>
						IEEE MBCET is made up of a lof enthusiastic individuals. Meet some
						of the frontier people of IEEE MBCET. Here is the complete
						<Link href="/team" passHref>
							<a className={styles.teamHl}>Team</a>
						</Link>
					</p>
				</div>

				<div className={styles.product}>
					{members.map((member) => (
						<Team
							key={member._id}
							Name={member.name}
							Image={
								member.image ? urlFor(member.image).auto("format").url() : ""
							}
							Designation={member.designation}
							animate="100"
							facebook={member?.facebook}
							instagram={member?.instagram}
							linkedin={member?.linkedin}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default TeamPage;
