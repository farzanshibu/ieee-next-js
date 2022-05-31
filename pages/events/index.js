import Head from "next/head";
import Events from "../../components/Events/Events";

function events() {
	return (
		<>
			<Head>
				<title>Events | IEEE</title>
			</Head>
			<Events />
		</>
	);
}

export default events;
