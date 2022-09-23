import Head from "next/head";
import Client from "../client";
import WalllofWeb from "../components/Teams/WalllofWeb";

function wallofWeb(props) {
	return (
		<>
			<Head>
				<title>Walll of Web | IEEE</title>
			</Head>
			<WalllofWeb {...props} />
		</>
	);
}

export const getServerSideProps = async () => {
	const data = await Client.fetch(`*[ _type == "wow" ] | order(order asc)`);

	return {
		props: { ...data },
	};
};

export default wallofWeb;
