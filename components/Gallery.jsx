import Image from "next/future/image";
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
			<Link href={props.Image || imageUrl} passHref>
				<a target="_blank">
					<Image
						src={props.Image || imageUrl}
						alt="galleryImages"
						width="230"
						height="140"
						layout="raw"
					/>
				</a>
			</Link>
		</div>
	);
}

export default Gallery;
