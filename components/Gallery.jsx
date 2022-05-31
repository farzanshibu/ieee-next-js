import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Gallery.module.css";

function Gallery(props) {
	const imageUrl = "https://source.unsplash.com/random/800x600";
	return (
		<div
			className={styles.gallery}
			data-aos="zoom-in"
			data-aos-delay={props.animate || "100"}
		>
			<Link href={props.Image || imageUrl}>
				<a target="_blank">
					<Image
						src={props.Image || imageUrl}
						alt="galleryImages"
						width="600"
						height="400"
						layout="raw"
					/>
				</a>
			</Link>
		</div>
	);
}

export default Gallery;
