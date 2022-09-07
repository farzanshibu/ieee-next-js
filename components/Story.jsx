import BlockContent from "@sanity/block-content-to-react";
import styles from "../styles/Team.module.css";

function Story(props) {
	return (
		<section id={styles.team} className="py-[3.48rem]">
			<div className="container" data-aos="fade-up">
				<section className="text-gray-600 body-font">
					<div className="container mx-auto flex pt-24 2xl:gap-5 xl:gap-3 md:gap-4 lg:flex-row flex-col items-center align-items-center">
						<div className="lg:max-w-lg lg:w-full ">
							{/* <iframe
								width="100%"
								height="100%"
								// src={props[0].youtubeUrl}
								src="https://www.youtube.com/watch?v=WhZxDpvxMwY"
							></iframe> */}
							<iframe
								className="sm:w-[320px] sm:h-[240px] md:w-[420px] md:h-[340px] lg:w-[560px] lg:h-[315px]"
								width="560"
								height="315"
								src="https://www.youtube.com/embed/hMXCFdDeip0"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							></iframe>
						</div>
						<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center px-5">
							<h1 className="title-font sm:text-4xl text-3xl mb-3 font-medium text-gray-900">
								Journey of IEEE MBCET {props[0].storyName}
							</h1>
							<p className="mb-8 leading-relaxed">
								<BlockContent blocks={props[0].description} />
							</p>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
}

export default Story;
