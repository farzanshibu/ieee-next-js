import Head from "next/head";
import Image from "next/future/image";
import Client from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import urlFor from "../../components/imgtoUrl";
import styles from "../../styles/Blog.module.css";

function blogId(props) {
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
						{props[0].image[0] ? (
							<Image
								className="drop-shadow-2xl w-auto h-auto"
								src={urlFor(props[0].image[0]).auto("format").url()}
								alt="image1"
								width="500"
								height="500"
								layout="raw"
								loading="lazy"
							/>
						) : (
							""
						)}
						{props[0].image[0] ? (
							<Image
								className="drop-shadow-2xl w-auto h-auto"
								src={urlFor(props[0].image[1]).auto("format").url()}
								alt="image2"
								width="500"
								height="500"
								layout="raw"
								loading="lazy"
							/>
						) : (
							""
						)}
					</div>
					<div className={`${styles.para} container text-justify`}>
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
