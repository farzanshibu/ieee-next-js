import Head from "next/head";

import Client from "../../client";
import Events from "../../components/Events/Events";

function Event(props) {
	return (
		<>
			<Head>
				<title>Events | IEEE</title>
			</Head>
			<Events {...props} />
		</>
	);
}

export const getServerSideProps = async () => {
	const events = await Client.fetch(`*[_type == "events"] | order(title desc)`);
	return {
		props: { ...events },
	};
};
export default Event;
