import urlFor from "../imgtoUrl";
import Team from "./components/Team";
import styles from "../../styles/Team.module.css";

function WalllofWeb(props) {
	const members = Object.values(props);
	return (
		<section id={styles.team}>
			<div className="containers" data-aos="fade-up">
				<div className="sectionHeader">
					<h3>Wall of Web</h3>
					<p>Meet the amazing team behind the IEEE MBCET Website.</p>
				</div>
				<div className={styles.product}>
					{members.map((member) => (
						<Team
							key={member._id}
							Name={member.name}
							Image={urlFor(member.image).auto("format").url()}
							Designation={member.designation}
							animate="100"
							facebook={member.facebook}
							instagram={member.instagram}
							linkedin={member.linkedin}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default WalllofWeb;
