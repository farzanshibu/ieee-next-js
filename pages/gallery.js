import Head from "next/head";
import Gallery from "../components/Gallery";
import Client from "../client";
import urlFor from "../components/imgtoUrl";
import styles from "../styles/Gallery.module.css";

function gallery(props) {
	const gallerys = Object.values(props);
	return (
		<>
			<Head>
				<title>Gallery | IEEE</title>
			</Head>
			<section id={styles.gallery} style={{ backgroundColor: "white" }}>
				<div className="container py-5" data-aos="fade-up">
					<header className="sectionHeader">
						<h3 style={{ color: "black" }}>Gallery</h3>
						<p style={{ color: "black" }}>
							Here is a snapshot of various events, which can be cherished for a
							long time.
						</p>
					</header>

					<div className="row row-eq-height justify-content-center">
						{gallerys.map((gallery) => (
							<Gallery
								key={gallery._id}
								Image={urlFor(gallery.image).auto("format").url()}
								animate="100"
							/>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export const getServerSideProps = async () => {
	const gallery = await Client.fetch(`*[ _type == "gallery" ]`);

	return {
		props: { ...gallery },
	};
};

export default gallery;
