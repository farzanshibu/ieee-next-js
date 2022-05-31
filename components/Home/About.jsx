import Image from "next/image";
import logo from "/assets/images/ieeembcet.png";
import styles from "../../styles/About.module.css";

function About() {
	return (
		<section id={styles.about}>
			<div className="container" data-aos="fade-up">
				<header className={styles.sectionHeader}>
					<h3>About Us</h3>
				</header>

				<div className={`row ${styles.aboutContainer}`}>
					<p>
						The IEEE student branch of Mar Baselios College of Engineering &
						Technology was established on February 14, 2006 by Dr G
						Vijayaraghavan, former Chairperson of IEEE Kerala Section, Founder &
						CEO of Technopark, Trivandrum. IEEE MBCET is a segment of IEEE
						Kerala Section which falls under IEEE India Council, a fragment of
						Region 10 (Asia Pacific and Australia).
					</p>

					<p>Here are some of our proud achievments:</p>
					<div className={`col-lg-6 order-lg-1 order-2 ${styles.content}`}>
						<div
							className={styles.iconBox}
							data-aos="fade-up"
							data-aos-delay="100"
						>
							<div className={styles.icon}>
								<i className="fa-solid fa-star"></i>
							</div>
							<h4 className={styles.title}>
								Special mention in SB Video Presentation
							</h4>
							<p className={styles.description}>
								Received recognition under All India Student Young Professionals
								Women in Engineering Life Members Congress(AISYWLC) 2020
							</p>
						</div>

						<div
							className={styles.iconBox}
							data-aos="fade-up"
							data-aos-delay="200"
						>
							<div className={styles.icon}>
								<i className="fa-solid fa-star"></i>
							</div>
							<h4 className={styles.title}>Best Emerging EMBS SBC</h4>
							<p className={styles.description}>
								Bagged the award of emerging EMBS student branch chapter 2020
								under Kerala Section.
							</p>
						</div>

						<div
							className={styles.iconBox}
							data-aos="fade-up"
							data-aos-delay="300"
						>
							<div className={styles.icon}>
								<i className="fa-solid fa-star"></i>
							</div>
							<h4 className={styles.title}>
								EMBS SBC with maximum number of members
							</h4>
							<p className={styles.description}>
								Awarded by IEEE EMBS Kerala chapter for year 2020.
							</p>
						</div>
					</div>

					<div
						className={`col-lg-6 order-lg-2 ${styles.background}`}
						data-aos="zoom-in"
					>
						<Image
							src={logo}
							className="img-fluid"
							alt="logo"
							width="470"
							height="355"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
