import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";
import urlFor from "../imgtoUrl";
import styles from "../../styles/Team.module.css";
import AddToCal from "./components/AddToCal";

function Details(props) {
	const options = {
		day: "numeric",
		month: "long",
		weekday: "short",
		hour: "numeric",
		minute: "numeric",
	};
	let d = new Date(props[0].date);
	let clock = d.toLocaleString("en-US", options);
	let time = Date.parse(clock) - Date.parse(new Date());
	console.log(time);
	const imageUrl = "https://source.unsplash.com/random/800x600";

	return (
		<section id={styles.team}>
			<div className="container" data-aos="fade-up">
				<section className="text-gray-600 body-font">
					<div className="container mx-auto flex px-5 py-24 align-center md:flex-row flex-col items-center gap-4">
						<div className="flex justify-center align-center lg:max-w-lg lg:w-full ">
							<Image
								className="object-cover object-center rounded "
								src={urlFor(props[0].image).auto("format").url() || imageUrl}
								alt="event"
								width={800}
								height={600}
								layout="raw"
							/>
						</div>
						<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center gap-3">
							<h1 className="title-font sm:text-4xl text-3xl mb-3 font-medium text-gray-900">
								{props[0].title}
							</h1>
							<div
								className="mb-8 leading-relaxed"
								style={{ textAlign: "left" }}
							>
								<em>
									<BlockContent
										blocks={props[0].description ? props[0].description : ""}
									/>
								</em>
							</div>
							<div>
								{props[0].speakers ? (
									<p style={{ textAlign: "left", margin: 0, padding: 0 }}>
										Speakers :
										{props[0].speakers.map((speaker, index) => (
											<strong key={index}>
												{speaker.speakerName}
												<span>, {speaker.speakerDesignation}</span>
											</strong>
										))}
									</p>
								) : (
									""
								)}
								<p style={{ textAlign: "left", fontSize: 14 }}>
									<strong>
										{props[0].date ? d.toLocaleString("en-US", options) : ""}
									</strong>
								</p>
							</div>

							{time > "0" && time < "600000" ? (
								<AddToCal
									name={props[0].title}
									startDate={d.toLocaleDateString()}
									description={
										props[0].shortDesignation
											? props[0].shortDesignation
											: "Ieee Event"
									}
									startTime={d.toLocaleTimeString()}
								/>
							) : (
								""
							)}
							{props[0].rule ? (
								<div>
									<strong>Rules</strong>
									<BlockContent blocks={props[0].rule ? props[0].rule : ""} />
								</div>
							) : (
								""
							)}
							<div id="dandt" style={{ display: "none" }}></div>
							<div className="flex justify-center">
								<a
									id="address"
									href={
										time <= "-1200000" ? props[0].knowMore : props[0].formLink
									}
								>
									<button
										id="btnval"
										className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg"
										type="button"
									>
										{time <= "-1200000" ? "Know-More" : "Register"}
									</button>
								</a>
								<a href="mailto:ieeesb@mbcet.ac.in">
									<button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
										Contact
									</button>
								</a>
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
}

export default Details;
