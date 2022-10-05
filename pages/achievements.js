import React from "react";
import Head from "next/head";
import styles from "../styles/Achievements.module.css";
import Client from "../client";
import Achievement from "../components/Achievement/Achievement";

function achievements(props) {
	return (
		<>
			<Head>
				<title>Achievements | IEEE</title>
			</Head>
			<section id={styles.achievements} style={{ backgroundColor: "white" }}>
				<div
					className="container py-5"
					style={{ marginTop: "60px" }}
					data-aos="fade-up"
				>
					<header className="sectionHeader">
						<h3 style={{ color: "black" }}>Achievements</h3>
						<p style={{ color: "black" }}>
							Here are a few of our achievements. Along the way, we accomplish
						</p>
					</header>

					<div className="row row-eq-height justify-content-center">
						<Achievement {...props} />
					</div>
				</div>
			</section>
		</>
	);
}

export const getServerSideProps = async () => {
	const achievements = await Client.fetch(
		`*[ _type == "achievement" ] | order(order asc)`,
	);

	return {
		props: { ...achievements },
	};
};
export default achievements;
