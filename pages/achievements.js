import Head from "next/head";
import styles from "../styles/Achievements.module.css";
import Client from "../client";
import React, { useState } from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import TrophyIcon from "../assets/animated/Trophy-1.gif";
import StarIcon from "../assets/animated/star-1.gif";
import urlFor from "../Utility/imgtoUrl";

import AnimatedIcon from "../Utility/AnimatedIcon";
import Card from "../components/Achievement/Card";
import Realistic from "../Utility/Realistic";
import Firework from "../Utility/Firework";
import Schoolpride from "../Utility/Schoolpride";

import ReactCanvasConfetti from "react-canvas-confetti";

import "react-vertical-timeline-component/style.min.css";

function Achievements(props) {
	const [color, setColor] = useState();
	const achievements = Object.values(props);
	const [startanimation1, getInstance1, canvasStyles1] = Realistic();
	const [startanimation2, getInstance2, canvasStyles2] = Firework();
	const [startanimation3, getInstance3, canvasStyles3] = Schoolpride();
	// var color = "#ff9800";

	const randomcolor = () => {
		const colors = [
			"#e91e63",
			"#b5ff60",
			"#eeff01",
			"#03a9f4",
			"#ff9800",
			"#ff5722",
			"#9c27b0",
			"#673ab7",
			"#3f51b5",
			"#2196f3",
			"#009688",
			"#4caf50",
			"#8bc34a",
			"#cddc39",
			"#ffeb3b",
			"#ffc107",
			"#ff9800",
			"#ff5722",
			"#795548",
			"#01ccff",
			"#ffeb3b",
		];
		return colors[Math.floor(Math.random() * colors.length)];
	};

	if (color === undefined) {
		setColor(randomcolor());
	}
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
						<VerticalTimeline lineColor="#0b0e14">
							{achievements.map((achievement) => (
								<VerticalTimelineElement
									key={achievement._id}
									className="vertical-timeline-element--work"
									contentStyle={{ background: color, color: "#0b0e14" }}
									contentArrowStyle={{ borderRight: `7px solid  ${color}` }}
									date={
										(achievement.achievedDate = new Date().toLocaleDateString(
											"en-GB",
											{
												day: "numeric",
												month: "short",
												year: "numeric",
											},
										))
									}
									iconStyle={{
										background: color,
										boxShadow:
											"0 0 0 4px #102327, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)",
									}}
									iconOnClick={() =>
										achievement.animation === "popup"
											? startanimation1()
											: achievement.animation === "firework"
											? startanimation2()
											: achievement.animation === "schoolpride"
											? startanimation3()
											: null
									}
									icon={<AnimatedIcon icon={TrophyIcon} />}
								>
									<Card
										image={
											achievement.image
												? urlFor(achievement.image).auto("format").url()
												: ""
										}
										title={achievement.name}
										description={achievement.description}
										body={achievement.body ? achievement.body : ""}
									/>
								</VerticalTimelineElement>
							))}
							<VerticalTimelineElement
								iconStyle={{
									background: "rgb(16, 204, 82)",
									boxShadow:
										"0 0 0 4px #102327, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)",
								}}
								icon={<AnimatedIcon icon={StarIcon} />}
							/>
						</VerticalTimeline>
					</div>
				</div>
				<ReactCanvasConfetti refConfetti={getInstance1} style={canvasStyles1} />
				<ReactCanvasConfetti refConfetti={getInstance2} style={canvasStyles2} />
				<ReactCanvasConfetti refConfetti={getInstance3} style={canvasStyles3} />
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
export default Achievements;
