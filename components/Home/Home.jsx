import About from "./About";
import Banner from "./Banner";
import Blogs from "./Blogs";
import Chapters from "./Chapters";
import Contact from "./Contact";
import Spotlight from "./Spotlight";
import TeamPage from "./TeamPage";
import Vision from "./Vision";
import Whyus from "./Whyus";

function Home({ info, team, blog }) {
	return (
		<div>
			<Spotlight />
			<div id="about">
				<About />
			</div>
			<Banner {...info} />
			<Vision />
			<Whyus {...info} />
			<TeamPage {...team} />
			<Chapters />
			<Blogs {...blog} />
			<div id="contact">
				<Contact {...info} />
			</div>
		</div>
	);
}

export default Home;
