import Link from "next/link";
import Image from "next/future/image";
import styles from "../../../styles/Chapter.module.css";

function Chapter(props) {
	return (
		<div
			className="col-lg-3 col-md-4 col-xs-6"
			data-aos="zoom-in"
			data-aos-delay={props.animate || "100"}
		>
			<div className={styles.clientLogo}>
				<Link href={props.Link} passHref>
					<a>
						<Image
							src={props.Image}
							width="176"
							height="100"
							layout="raw"
							className={`${styles.imagess}	img-fluid`}
							alt={props.Link}
						/>
					</a>
				</Link>
			</div>
		</div>
	);
}

export default Chapter;
