import Image from "next/future/image";
import styles from "../../../styles/Team.module.css";
import Social from "./Social";

function Team(props) {
	return (
		<div
			className={styles.itemBox}
			data-aos="zoom-in"
			data-aos-delay={props.animate || "100"}
		>
			<div className={`${styles.row} row-eq-height justify-content-center`}>
				<div className="col-lg-2 col-md-6">
					<div className={styles.member}>
						<a>
							<Image
								src={props.Image}
								className="img-fluid"
								alt="ProfileImage"
								width="160"
								height="160"
								layout="raw"
							/>
						</a>
						<div className={styles.memberInfo}>
							<div className={styles.memberInfoContent}>
								<h4>{props.Name}</h4>
								<span>{props.Designation}</span>
								<Social
									url1={props.facebook}
									url2={props.instagram}
									url3={props.linkedin}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Team;
