import Link from "next/link";
import styles from "../../styles/Spotloight.module.css";

function Spotlight() {
	return (
		<section id={styles.intro} className="clearfix">
			<div className="container" data-aos="fade-up">
				{/* <div className={styles.introImg} data-aos="zoom-out" data-aos-delay="200">
					<a>
						<Image src={Hero} alt="hero" className="img-fluid" />
					</a>
				</div> */}

				<div
					className={styles.introInfo}
					data-aos="zoom-in"
					data-aos-delay="100"
				>
					{/* <h2>Redefining your career ahead!</h2> */}
					<h2>
						Unleash your potential and get exposure to global professional
						domain
					</h2>
					<div>
						<Link href="/upcoming" passHref>
							<a className={styles.btnGetStarted}>Upcoming Event</a>
						</Link>
						<Link href="/story-&-report" passHref>
							<a className={styles.btnServices}>Sneak Peek</a>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Spotlight;
