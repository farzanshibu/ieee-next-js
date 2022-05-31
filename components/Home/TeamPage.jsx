import styles from "../../styles/Team.module.css";
import Team from "../Teams/components/Team";
import Link from "next/link";

function TeamPage() {
	return (
		<section id={styles.team}>
			<div className="container" data-aos="fade-up">
				<div className="sectionHeader">
					<h3>Team</h3>
					<p>
						IEEE MBCET is made up of a lof enthusiastic individuals. Meet some
						of the frontier people of IEEE MBCET. Here is the complete
						<Link href="/team">
							<a className={styles.teamHl}>Team</a>
						</Link>
					</p>
				</div>

				<div className={styles.product}>
					<Team
						Name=""
						Image={""}
						Designation=""
						animate="100"
						facebook=""
						instagram=""
						linkedin=""
					/>
					<Team
						Name=""
						Image={""}
						Designation=""
						animate="200"
						facebook=""
						instagram=""
						linkedin=""
					/>
					<Team
						Name=""
						Image={""}
						Designation=""
						animate="300"
						facebook=""
						instagram=""
						linkedin=""
					/>
					<Team
						Name=""
						Image={""}
						Designation=""
						animate="100"
						facebook=""
						instagram=""
						linkedin=""
					/>
					<Team
						Name=""
						Image={""}
						Designation=""
						animate="200"
						facebook=""
						instagram=""
						linkedin=""
					/>
					<Team
						Name=""
						Image={""}
						Designation=""
						animate="300"
						facebook=""
						instagram=""
						linkedin=""
					/>
				</div>
			</div>
		</section>
	);
}

export default TeamPage;
