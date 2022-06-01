import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Blog.module.css";

function blogId() {
	const imageUrl = "https://source.unsplash.com/random/800x600";

	return (
		<>
			<Head>
				<title>Blog | IEEE</title>
			</Head>
			<section id={styles.blogPage}>
				<div className="container">
					<div className="sectionHeader">
						<h3>Title</h3>
						<h5 style={{ textAlign: "center" }}>name,className</h5>
					</div>
					<div className={`${styles.para} container`}>
						<p></p>
						<Image
							src={imageUrl}
							alt="image2"
							width="500px"
							height="500px"
							layout="raw"
							className={styles.blogImg2}
						/>
						<p></p>
						<p></p>

						<Image
							src={imageUrl}
							alt="image1"
							width="500px"
							height="500px"
							layout="raw"
							className={styles.blogImg1}
						/>
						<p></p>
					</div>
				</div>
			</section>
		</>
	);
}

export default blogId;
