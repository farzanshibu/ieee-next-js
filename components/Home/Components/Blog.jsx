import Image from "next/image";
import styles from "../../../styles/BlogComponent.module.css";

function Blog(props) {
	let poster = "https://source.unsplash.com/random/800x600";
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
					src={props.Image || poster}
					className={styles.moviePoster}
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
