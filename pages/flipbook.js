import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import styles from "../styles/Flipbook.module.css";
import Client from "../client";
import urlFor from "../Utility/imgtoUrl";
// import required modules
import { EffectCards } from "swiper";
import Image from "next/future/image";

function Flipbook(props) {
	const gallerys = Object.values(props);
	return (
		<>
			<section
				id={styles.gallery}
				style={{ backgroundColor: "white", paddingTop: "60px" }}
			>
				<div className="container py-5" data-aos="fade-up">
					<header className="sectionHeader">
						<h3 style={{ color: "black" }}>Gallery</h3>
						<p style={{ color: "black" }}>
							Here is a snapshot of various events, which can be cherished for a
							long time.
						</p>
					</header>

					<div className="row row-eq-height justify-content-center">
						<div
							style={{
								height: "70vh",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Swiper
								effect={"cards"}
								grabCursor={true}
								modules={[EffectCards]}
								className={styles.swiper}
								loop={true}
								lazy={true}
							>
								{gallerys.map((gallery) => (
									<SwiperSlide key={gallery._id}>
										<Link
											href={
												gallery.image
													? urlFor(gallery.image).auto("format").url()
													: ""
											}
											passHref
										>
											<Image
												src={
													gallery.image
														? urlFor(gallery.image).auto("format").url()
														: ""
												}
												fill="cover"
												alt=""
											/>
										</Link>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export const getServerSideProps = async () => {
	const gallery = await Client.fetch(
		`*[ _type == "gallery" ] | order(order asc)`,
	);

	return {
		props: { ...gallery },
	};
};

export default Flipbook;
