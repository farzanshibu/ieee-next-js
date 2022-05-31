import About from "./About";
import Banner from "./Banner";
import Blogs from "./Blogs";
import Chapters from "./Chapters";
import Contact from "./Contact";
import Spotlight from "./Spotlight";
import TeamPage from "./TeamPage";
import Vision from "./Vision";
import Whyus from "./Whyus";

function Home(props) {
	return (
		<div>
			<Spotlight />
			<div id="about">
				<About />
			</div>
			<Banner />
			<Vision />
			<Whyus {...props} />
			<TeamPage />
			<Chapters />
			<Blogs />
			<div id="contact">
				<Contact {...props} />
			</div>
		</div>
	);
}

export default Home;
