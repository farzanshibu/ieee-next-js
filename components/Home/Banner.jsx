import styles from "../../styles/Banner.module.css";

function Banner(props) {
	return (
		<div className={styles.rban}>
			<div className={styles.scrollLeft}>
				<a
					style={{ color: "white", textDecorationLine: "none" }}
					href={props[0].bannerUrl}
				>
					<p id={styles.dalink}>{props[0].banner}</p>
				</a>
			</div>
		</div>
	);
}

export default Banner;
