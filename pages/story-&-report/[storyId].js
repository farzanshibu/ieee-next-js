import Head from "next/head";
import Client from "../../client";
import Story from "../../components/Story";

function StoryId(props) {
	return (
		<>
			<Head>
				<title>Story | IEEE</title>
			</Head>
			<Story {...props} />
		</>
	);
}

export const getServerSideProps = async (context) => {
	const blog = await Client.fetch(
		`*[_type == "reportandstory" && slug.current == "${context.query.storyId}"]`,
	);

	return {
		props: { ...blog },
	};
};

export default StoryId;
