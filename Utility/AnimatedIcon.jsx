import React from "react";
import Image from "next/image";
import styles from "../styles/Achievements.module.css";

function AnimatedIcon(props) {
	return (
		<div className={`flex items-center justify-center ${styles.centerfix}`}>
			<Image
				src={props.icon}
				alt="tropy"
				width={50}
				height={50}
				style={{
					WebkitBoxShadow: "26px 46px 92px -3px rgba(0,0,0,0.75)",
					MozBoxShadow: "26px 46px 92px -3px rgba(0,0,0,0.75)",
					boxShadow: "26px 46px 92px -3px rgba(0,0,0,0.75)",
				}}
			/>
		</div>
	);
}

export default AnimatedIcon;
