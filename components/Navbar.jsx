import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/ieeeheader.png";
import styles from "../styles/Navbar.module.css";

function Navbar() {
	return (
		<header id={styles.header} className="fixed-top">
			<div className="container d-flex justify-content-between">
				<div className={styles.logo}>
					<Link href="/">
						<Image src={logo} alt="logo" className="img-fluid" />
					</Link>
				</div>

				<nav className={`${styles.mainNav} d-none d-lg-block`}>
					<ul>
						<li className={styles.active}>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/#about">About Us</Link>
						</li>
						<li>
							<Link href="/team">Team</Link>
						</li>
						<li>
							<Link href="/events">
								<a>Events</a>
							</Link>
						</li>
						<li className={styles.dropDown}>
							<Link href="">More</Link>
							<ul>
								<li>
									<Link href="/gallery">Gallery</Link>
								</li>
								<li>
									<Link href="/story-&-report">Reports & Stories</Link>
								</li>
								<li>
									<Link href="/wallofweb">Wall of Web</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link href="/#contact">Contact Us</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Navbar;
