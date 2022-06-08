import Image from "next/image";

import footer from "../assets/images/mbcet.png";
import styles from "../styles/Footer.module.css";

function Footer(props) {
	return (
		<footer id={styles.footer}>
			<div className={styles.footerTop}>
				<div className="container">
					<div className="row">
						<div className={`${styles.footerInfo} col-lg-5 col-md-6`}>
							<h3>IEEE MBCET</h3>
							<p>
								IEEE is the world&apos;s largest technical professional
								organization dedicated to advancing technology for the benefit
								of humanity.
							</p>
							<a href="https://mbcet.ac.in/">
								<Image
									src={footer}
									alt="footer"
									style={{ marginTop: "20px" }}
								/>
							</a>
						</div>

						<div className={`${styles.footerLinks} col-lg-4 col-md-6`}>
							<h4>Useful Links</h4>
							<ul>
								<li>
									<a href="https://www.ieee.org/">IEEE</a>
								</li>
								<li>
									<a href="https://ieeexplore.ieee.org/Xplore/home.jsp">
										IEEE Xplore Digital Library
									</a>
								</li>
								<li>
									<a href="https://ieee-collabratec.ieee.org/">
										IEEE Collabratec
									</a>
								</li>
								<li>
									<a href="https://spectrum.ieee.org/">IEEE Spectrum Online</a>
								</li>
								<li>
									<a href="https://www.ieeer10.org/">IEEE Region 10</a>
								</li>
							</ul>
						</div>

						<div className={`${styles.footerContact} col-lg-3 col-md-6`}>
							<h4>Contact Us</h4>
							<p>
								MBCET <br />
								Nalanchira PO, 695015
								<br />
								Trivandrum, Kerala, India
								<br />
								<strong>Phone:</strong> +91 {props[0].phoneNumber} ({" "}
								{props[0].name})
								<br />
								<strong>Email:</strong>
								<a href="mailto:ieeesb@mbcet.ac.in" style={{ color: "white" }}>
									ieeesb@mbcet.ac.in
								</a>
								<br />
							</p>
							<div className={styles.socialLinks}>
								<a href="https://facebook.com/ieee.mbcet/" className="facebook">
									<i className="fa-brands fa-facebook"></i>
								</a>
								<a
									href="https://www.instagram.com/ieeesbmbcet/"
									className="instagram"
								>
									<i className="fa-brands fa-instagram"></i>
								</a>
								<a
									href="https://www.linkedin.com/company/ieee-sb-mbcet/"
									className="linkedin"
								>
									<i className="fa-brands fa-linkedin-in"></i>
								</a>
								<a
									href="https://open.spotify.com/show/4ujNotN8NC90pnYBltV3Ex"
									className="linkedin"
								>
									<i className="fa-brands fa-spotify"></i>
								</a>
								<a
									href="https://www.clubhouse.com/club/voice-it-out"
									className="linkedin"
								>
									<i className="fa fa-microphone"></i>
								</a>
								<a
									href="https://www.youtube.com/channel/UCN33__oB2yQpUxuiLT_dFHg"
									className="linkedin"
								>
									<i className="fa-brands fa-youtube"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
