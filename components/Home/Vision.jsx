import styles from "../../styles/Vision.module.css";

function Vision() {
	return (
		<section id={styles.services} className={styles.sectionBg}>
			<div className="container" data-aos="fade-up">
				<header className={styles.sectionHeader}>
					<h3>Vision & Mission</h3>
				</header>

				<div className="row justify-content-center">
					<p style={{ textAlign: "center", color: "black", fontSize: "15px" }}>
						There is always a driving factor behind each community initative.
						IEEE MBCET is proud to have that driving factor, which helps
						everyone in their pursuit!
					</p>

					<div
						className="col-md-6 col-lg-5"
						data-aos="zoom-in"
						data-aos-delay="100"
					>
						<div className={styles.box}>
							<div className={styles.icon}>
								<i className="fa-solid fa-eye" style={{ color: "#ff689b" }}></i>
							</div>
							<h4 className={styles.title} style={{ color: "black" }}>
								VISION
							</h4>
							<p className={styles.description} style={{ color: "black" }}>
								To be a community supporting each and every individual
								throughout their pursuit and drive them to success
							</p>
						</div>
					</div>
					<div
						className="col-md-6 col-lg-5"
						data-aos="zoom-in"
						data-aos-delay="200"
					>
						<div className={styles.box}>
							<div className={styles.icon}>
								<i
									className="fa-solid fa-globe"
									style={{ color: "#e9bf06" }}
								></i>
							</div>
							<h4 className={styles.title} style={{ color: "black" }}>
								MISSION
							</h4>
							<p className={styles.description} style={{ color: "black" }}>
								To transform the Youth as technically competent, ethically sound
								and socially committed professionals, for the welfare of
								humanity
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Vision;
