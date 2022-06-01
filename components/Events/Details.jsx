import Image from "next/image";
import styles from "../../styles/Team.module.css";
import eventImg from "../../assets/images/hero.jpg";
import AddToCal from "./components/AddToCal";

function Details() {
	const time = Date.parse("may 31, 2022 03:30:50 PM") - Date.parse(new Date());
	const imageUrl = "https://source.unsplash.com/random/800x600";

	return (
		<section id={styles.team}>
			<div className="container" data-aos="fade-up">
				<section className="text-gray-600 body-font">
					<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
						<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
							<Image
								className="object-cover object-center rounded"
								alt="event"
								width={800}
								height={600}
								layout="raw"
								src={imageUrl}
							/>
						</div>
						<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
							<h1 className="title-font sm:text-4xl text-3xl mb-3 font-medium text-gray-900"></h1>
							<p className="mb-8 leading-relaxed" style={{ textAlign: "left" }}>
								<em></em>
							</p>
							<p style={{ textAlign: "left" }}>
								Speakers: <br />
								<b></b>
								<br />
								<em></em>
								<br />
								<br />
								<b></b>
								<br />
								<em></em>
								<br />
								<br />
								<b></b>
								<br />
								<em> </em>
								<br />
								<br />
							</p>

							<p style={{ textAlign: "left" }}>
								Date: <br />
								Time:
							</p>
							<AddToCal
								name="Test1"
								startDate=""
								endDate=""
								description=""
								startTime=""
								endTime=""
							/>
							<p></p>
							<div id="dandt" style={{ display: "none" }}></div>
							<div className="flex justify-center">
								<a
									id="address"
									href={
										time >= "1200000"
											? "https://www.google.com"
											: "https://www.instagram.com"
									}
								>
									<button
										id="btnval"
										className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg"
										type="button"
									>
										{time >= "1200000" ? "Register" : "Know - More"}
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
