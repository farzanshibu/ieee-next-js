import styles from "../../../styles/Why.module.css";

function Why(props) {
	return (
		<div
			className="col-lg-4 mb-4"
			data-aos="zoom-in"
			data-aos-delay={props.animate || "100"}
		>
			<div className={styles.card}>
				<i className={props.icon}></i>
				<div className="card-body">
					<h5 className="card-title">{props.Title}</h5>
					<p className="card-text">{props.Description}</p>
				</div>
			</div>
		</div>
	);
}

export default Why;
