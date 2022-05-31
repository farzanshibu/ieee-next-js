import Head from "next/head";
import Gallery from "../components/Gallery";
import styles from "../styles/Why.module.css";

function gallery() {
	return (
		<>
			<Head>
				<title>Gallery | IEEE</title>
			</Head>
			<section id={styles.whyUs} style={{ backgroundColor: "white" }}>
				<div className="container py-5" data-aos="fade-up">
					<header className="sectionHeader">
						<h3 style={{ color: "black" }}>Gallery</h3>
						<p style={{ color: "black" }}>
							Here is a snapshot of various events, which can be cherished for a
							long time.
						</p>
					</header>

					<div className="row row-eq-height justify-content-center">
						<Gallery Image={""} animate="100" />
						<Gallery Image={""} animate="200" />
						<Gallery Image={""} animate="300" />
						<Gallery Image={""} animate="400" />
						<Gallery Image={""} animate="500" />
						<Gallery Image={""} animate="100" />
						<Gallery Image={""} animate="200" />
						<Gallery Image={""} animate="300" />
						<Gallery Image={""} animate="400" />
						<Gallery Image={""} animate="500" />
						<Gallery Image={""} animate="100" />
						<Gallery Image={""} animate="200" />
						<Gallery Image={""} animate="300" />
					</div>
				</div>
			</section>
		</>
	);
}

export default gallery;
