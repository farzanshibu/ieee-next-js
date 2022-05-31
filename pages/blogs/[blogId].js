import Head from "next/head";
import Image from "next/image";
import img from "../../assets/images/intro-bg.png";
import styles from "../../styles/Blog.module.css";

function blogId() {
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
						<Image src={img} alt="image1" width="300px" height="300px" className={styles.blogImg1} />
						<p></p>
						<p></p>
						<Image src={img} alt="image2" width="300px" height="300px" className={styles.blogImg2} />
						<p></p>
					</div>
				</div>
			</section>
		</>
	);
}

export default blogId;
