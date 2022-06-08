import BlockContent from "@sanity/block-content-to-react";
import styles from "../styles/Team.module.css";

function Story(props) {
	return (
		<section id={styles.team}>
			<div classNameName="container" data-aos="fade-up">
				<section className="text-gray-600 body-font">
					<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
						<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
							<iframe
								width="540px"
								height="304px"
								src={props[0].youtubeUrl}
							></iframe>
						</div>
						<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
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
