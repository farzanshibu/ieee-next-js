import styles from "../../styles/Team.module.css";
import Team from "./components/Team";

function WalllofWeb() {
	return (
		<section id={styles.team}>
			<div className="containers" data-aos="fade-up">
				<div className="sectionHeader">
					<h3>Wall of Web</h3>
					<p>Meet the amazing team behind the IEEE MBCET Website.</p>
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
				</div>
			</div>
		</section>
	);
}

export default WalllofWeb;
