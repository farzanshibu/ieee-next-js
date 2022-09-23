import Image from "next/future/image";
import styles from "../../../styles/BlogComponent.module.css";

function Blog(props) {
	return (
		<div className={styles.movieStack}>
			<div
				className={styles.eachMovie}
				data-aos="zoom-in"
				data-aos-delay={props.animate || "100"}
			>
				<Image
					alt="moviePoster"
					layout="raw"
					width={200}
					height={300}
					src={props.Image}
					className={`${styles.moviePoster} w-auto h-auto`}
					loading="lazy"
				/>
				<h1 className={styles.movieTitle}> {props.Title} </h1>
			</div>
			<div className={styles.movieDescription}>
				<p
					style={{
						margin: "0 0",
						padding: "0 0",
						fontSize: "unset",
					}}
				>
					{props.Title}
				</p>
				<h3
					style={{
						margin: "0 0",
						padding: "0 0",
						fontSize: "unset",
					}}
				>
					{props.Author}
				</h3>
			</div>
		</div>
	);
}

export default Blog;
