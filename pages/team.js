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
	const cs = await Client.fetch(`*[ _type == 'team' && category == 'cs' ]`);
	const embs = await Client.fetch(`*[ _type == 'team' && category == 'embs' ]`);
	const execom = await Client.fetch(
		`*[ _type == 'team' && category == 'execom' ]`,
	);
	const other = await Client.fetch(
		`*[ _type == 'team' && category == 'other' ]`,
	);
	const pes = await Client.fetch(`*[ _type == 'team' && category == 'pes' ]`);
	const ras = await Client.fetch(`*[ _type == 'team' && category == 'ras' ]`);
	const sps = await Client.fetch(`*[ _type == 'team' && category == 'sps' ]`);
	const sight = await Client.fetch(
		`*[ _type == 'team' && category == 'sight' ]`,
	);
	const wie = await Client.fetch(`*[ _type == 'team' && category == 'wie' ]`);

	const data = { cs, embs, execom, other, pes, ras, sps, sight, wie };
	return {
		props: { ...data },
	};
};

export default team;
