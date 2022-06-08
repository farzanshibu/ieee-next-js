import Head from "next/head";
import Image from "next/image";
import Client from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import urlFor from "../../components/imgtoUrl";
import styles from "../../styles/Blog.module.css";

function blogId(props) {
	const imageUrl = "https://source.unsplash.com/random/800x600";

	return (
		<>
			<Head>
				<title>Blog | IEEE</title>
			</Head>
			<section id={styles.blogPage}>
				<div className="container">
					<div className="sectionHeader">
						<h3>{props[0].title}</h3>
						<h5 style={{ textAlign: "center" }}>
							{props[0].name}, {props[0].designation}
						</h5>
					</div>
					<div className={`${styles.para} container`}>
						<Image
							src={
								props[0].image
									? urlFor(props[0].image[0]).auto("format").url()
									: imageUrl
							}
							alt="image2"
							width="500px"
							height="500px"
							layout="raw"
						/>
						<Image
							src={
								props[0].image
									? urlFor(props[0].image[0]).auto("format").url()
									: imageUrl
							}
							alt="image1"
							width="500px"
							height="500px"
							layout="raw"
						/>
					</div>
					<div className={`${styles.para} container`}>
						<BlockContent blocks={props[0].body} />
					</div>
				</div>
			</section>
		</>
	);
}
export const getServerSideProps = async (context) => {
	const blog = await Client.fetch(
		`*[ _type == "blog" && slug.current == "${context.query.blogId}"]{
	"name" : author->name,
  "designation" : author->designation,
  ...
		}`,
	);

	return {
		props: { ...blog },
	};
};

export default blogId;
