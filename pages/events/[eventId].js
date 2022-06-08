import Head from "next/head";
import Client from "../../client";
import Details from "../../components/Events/Details";

function teamId(props) {
	return (
		<>
			<Head>
				<title>Events-Details | IEEE</title>
			</Head>
			<Details {...props} />
		</>
	);
}

export const getServerSideProps = async (context) => {
	const event = await Client.fetch(
		`*[_type == "events"].eventsArray[slug.current == '${context.query.eventId}']`,
	);
	return {
		props: { ...event },
	};
};

export default teamId;
