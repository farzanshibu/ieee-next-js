import Head from "next/head";
import Teams from "../components/Teams/Teams";

function team() {
	return (
		<>
			<Head>
				<title>Team | IEEE</title>
			</Head>
			<Teams />
		</>
	);
}

export default team;
