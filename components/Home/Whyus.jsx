import Image from "next/image";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import styles from "../../styles/Why.module.css";
import logo from "../../assets/images/ieee-logo.png";
import Why from "./Componetns/why";

function Whyus(props) {
	return (
		<section id={styles.whyUs}>
			<div className="container" data-aos="fade-up">
				<header className={styles.sectionHeader}>
					<p className="d-flex justify-content-center">
						<Image src={logo} alt="simple-logo" />
					</p>
					<h3>Why join us?</h3>
					<p>
						We have some solid reasons which will help you to decide whether to
						join us or not. Just to brief it out, IEEE MBCET is an amazing and
						unique experience, that cannot be expressed through words! Here are
						some of the exceptional benefits.
					</p>
				</header>

				<div className="row row-eq-height justify-content-center">
					<Why
						Title="Unlimited Resources"
						Description="IEEE provides a wide range of journals, eBooks and articles creating
						awareness on various technological advancements and other fields."
						icon="fa-solid fa-coins"
						animate="100"
					/>
					<Why
						Title="Volunteering"
						Description="Get the joy of volunteering, build your confidence and grow
									your professional network by conducting and assisting various
									IEEE events."
						icon="fa-solid fa-handshake-angle"
						animate="200"
					/>
					<Why
						Title="Career Opportunities"
						Description="	Various employment and job placement opportunities are
									provided by IEEE for students and professionals in engineering
									and technical sectors."
						icon="fa-brands fa-creative-commons"
						animate="300"
					/>
					<Why
						Title="Get Mentored"
						Description="IEEE MBCET helps you to connect with passionate people across
									the world. Learn, collaborate and grow"
						icon="fa-solid fa-images"
						animate="100"
					/>
					<Why
						Title="Collaboration beyond Barriers"
						Description="This is your best opportunity to collaborate with like minded,
									yet unique individuals"
						icon="fa fa-language"
						animate="200"
					/>
					<Why
						Title="On Demand Events"
						Description="Ever wanted to experience an event or session, share it with
									us and we will get it done"
						icon="fa fa-object-group"
						animate="300"
					/>
				</div>

				<div
					className={`${styles.counters} row d-flex justify-content-center`}
					data-aos="fade-up"
					data-aos-delay="100"
				>
					<div
						style={{ width: "250px" }}
						className="col-lg-3 col-6 text-center"
					>
						<span>
							<CountUp end={props.members} redraw={true}>
								{({ countUpRef, start }) => (
									<VisibilitySensor onChange={start} delayedCall>
										<span ref={countUpRef} />
									</VisibilitySensor>
								)}
							</CountUp>
						</span>
						<p>Members</p>
					</div>
					<div
						style={{ width: "250px" }}
						className="col-lg-3 col-6 text-center"
					>
						<span>
							<CountUp end={props.events} redraw={true}>
								{({ countUpRef, start }) => (
									<VisibilitySensor onChange={start} delayedCall>
										<span ref={countUpRef} />
									</VisibilitySensor>
								)}
							</CountUp>
						</span>
						<p>Events</p>
					</div>
					<div
						style={{ width: "250px" }}
						className="col-lg-3 col-6 text-center"
					>
						<span>
							<CountUp end={props.socities} redraw={true}>
								{({ countUpRef, start }) => (
									<VisibilitySensor onChange={start} delayedCall>
										<span ref={countUpRef} />
									</VisibilitySensor>
								)}
							</CountUp>
						</span>
						<p>Societies</p>
					</div>
					<div
						style={{ width: "250px" }}
						className="col-lg-3 col-6 text-center"
					>
						<span>
							<CountUp end={props.affinityGroups} redraw={true}>
								{({ countUpRef, start }) => (
									<VisibilitySensor onChange={start} delayedCall>
										<span ref={countUpRef} />
									</VisibilitySensor>
								)}
							</CountUp>
						</span>
						<p>Affinity Groups</p>
					</div>
					<div
						style={{ width: "250px" }}
						className="col-lg-3 col-6 text-center"
					>
						<span>
							<CountUp end={props.mission} redraw={true}>
								{({ countUpRef, start }) => (
									<VisibilitySensor onChange={start} delayedCall>
										<span ref={countUpRef} />
									</VisibilitySensor>
								)}
							</CountUp>
						</span>
						<p>Mission</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Whyus;
