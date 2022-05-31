import styles from "../../styles/BAnner.module.css";

function Banner() {
	return (
		<div className={styles.rban}>
			<div className={styles.scrollLeft}>
				<a style={{ color: "white", textDecorationLine: "none" }} href="#">
					<p id={styles.dalink}>Hello World SANITY</p>
				</a>
			</div>
		</div>
	);
}

export default Banner;
