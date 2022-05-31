import Head from "next/head";
import Details from "../../components/Events/Details";

function teamId() {
	return (
		<>
			<Head>
				<title>Events-Details | IEEE</title>
			</Head>
			<Details />
		</>
	);
}

export default teamId;
