import { SocialIcon } from "react-social-icons";
import styles from "../../../styles/Team.module.css";

function Social(props) {
	return (
		<div className={styles.social}>
			{props.url1 ? (
				<SocialIcon
					url={props.url1}
					className={styles.socialIcon}
					style={{ height: 35, width: 35 }}
				/>
			) : (
				""
			)}
			{props.url2 ? (
				<SocialIcon
					url={props.url2}
					className={styles.socialIcon}
					style={{ height: 35, width: 35 }}
				/>
			) : (
				""
			)}
			{props.url3 ? (
				<SocialIcon
					url={props.url3}
					className={styles.socialIcon}
					style={{ height: 35, width: 35 }}
				/>
			) : (
				""
			)}
		</div>
	);
}

export default Social;
