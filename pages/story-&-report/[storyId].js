import Head from "next/head";
import Story from "../../components/Story";

function storyId() {
	return (
		<>
			<Head>
				<title>Story | IEEE</title>
			</Head>
			<Story />
		</>
	);
}

export default storyId;
