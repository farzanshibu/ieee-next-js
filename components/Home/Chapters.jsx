import styles from "../../styles/Chapter.module.css";
import Chapter from "./Components/Chapter";
import cs from "../../assets/images/Chapter/cs.png";
import emb from "../../assets/images/Chapter/emb.png";
import pes from "../../assets/images/Chapter/pes.png";
import ras from "../../assets/images/Chapter/ras.png";
import wie from "../../assets/images/Chapter/wie.png";
import sight from "../../assets/images/Chapter/sight.png";
import sp from "../../assets/images/Chapter/sp.png";
import csoon from "../../assets/images/Chapter/csoon.png";

function Chapters() {
	return (
		<section id={styles.clients} className={styles.sectionBg}>
			<div className="container" data-aos="fade-up">
				<div className="sectionHeader">
					<h3>Our Chapters</h3>
					<p>
						IEEE MBCET is proud to have different societies and affinity groups
						based on the interest of our members.
					</p>
				</div>

				<div className={`${styles.clientsWrap} row no-gutters clearfix`}>
					<Chapter Image={cs} Link="https://www.computer.org/" animate="100" />
					<Chapter Image={emb} Link="https://www.embs.org/" animate="200" />
					<Chapter Image={pes} Link="https://www.ieee-pes.org/" animate="300" />
					<Chapter Image={ras} Link="https://www.ieee-ras.org/" animate="400" />
					<Chapter Image={wie} Link="https://wie.ieee.org/" animate="100" />
					<Chapter Image={sight} Link="https://sight.ieee.org/" animate="200" />
					<Chapter
						Image={sp}
						Link="https://signalprocessingsociety.org/"
						animate="300"
					/>
					<Chapter Image={csoon} Link="/" animate="400" />
				</div>
			</div>
		</section>
	);
}

export default Chapters;
