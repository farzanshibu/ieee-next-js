import Head from "next/head";
import Teams from "../components/Teams/Teams";
import Client from "../client";

function team(props) {
	return (
		<>
			<Head>
				<title>Team | IEEE</title>
			</Head>
			<Teams {...props} />
		</>
	);
}

export const getServerSideProps = async () => {
	const data = await Client.fetch(`*[ _type == 'team'] | order(order asc)`);
	return {
		props: { ...data },
	};
};

export default team;
