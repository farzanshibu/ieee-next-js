import { useEffect, useState } from "react";
import styles from "../styles/Overlay.module.css";
import "animate.css";

function Overlay() {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 300) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		});
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // for smoothly scrolling
		});
	};
	const [hovered, setHovered] = useState(false);
	const toggleHover = () => setHovered(!hovered);
	return (
		<>
			<div className={`${styles.iconBar}`}>
				<div
					className={
						hovered
							? ""
							: "animate__animated animate__shakeX animate__infinite animate__slower"
					}
					onMouseEnter={toggleHover}
					onMouseLeave={toggleHover}
				>
					<a
						href="https://www.facebook.com/ieee.mbcet/"
						aria-label="FacebookLink"
						className={styles.facebook}
					>
						<i className="fa-brands fa-facebook"></i>
					</a>
					<a
						href="https://www.instagram.com/ieeesbmbcet/"
						aria-label="InstagramLink"
						className={styles.instagram}
					>
						<i className="fa-brands fa-instagram"></i>
					</a>
					<a
						href="https://www.linkedin.com/company/ieee-sb-mbcet/mycompany/"
						aria-label="LindedIn"
						className={styles.linkedin}
					>
						<i className="fa-brands fa-linkedin-in"></i>
					</a>
					<a
						href="https://open.spotify.com/show/4ujNotN8NC90pnYBltV3Ex"
						aria-label="Spotify"
						className={styles.spotify}
					>
						<i className="fa-brands fa-spotify"></i>
					</a>
					<a
						href="https://www.youtube.com/channel/UCN33__oB2yQpUxuiLT_dFHg"
						aria-label="Youtube"
						className={styles.youtube}
					>
						<i className="fa-brands fa-youtube"></i>
					</a>
				</div>
			</div>
			{showButton && (
				<button onClick={scrollToTop} className={styles.backTotop}>
					<i className="fa-solid fa-chevron-up"></i>
				</button>
			)}
			<a
				href="https://docs.google.com/forms/d/e/1FAIpQLSfgW9uXDARCY6EwF-XpF2Pg7DDPwO2VO6HUjKTxY13lX0NJ0w/viewform?usp=pp_url"
				className={styles.float}
			>
				<strong>JOIN IEEE</strong>
			</a>

			<a
				href="https://www.youtube.com/watch?v=zdzEbAyY3m4"
				className={styles.float2}
			>
				<strong>HOW TO JOIN</strong>
			</a>
		</>
	);
}

export default Overlay;
