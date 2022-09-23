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
	// const cs = await Client.fetch(
	// 	`*[ _type == 'team' && category == 'cs' ] | order(order asc)`,
	// );
	// const embs = await Client.fetch(
	// 	`*[ _type == 'team' && category == 'embs' ] | order(order asc)`,
	// );
	// const execom = await Client.fetch(
	// 	`*[ _type == 'team' && category == 'execom' ] | order(order asc)`,
	// );
	// const other = await Client.fetch(
	// 	`*[ _type == 'team' && category == 'other' ] | order(order asc)`,
	// );
	// const pes = await Client.fetch(
	// 	`*[ _type == 'team' && category == 'pes' ] | order(order asc)`,
	// );
	// const ras = await Client.fetch(
	// 	`*[ _type == 'team' && category == 'ras' ] | order(order asc)`,
	// );
	// const sps = await Client.fetch(
	// 	`*[ _type == 'team' && category == 'sps' ] | order(order asc)`,
	// );
	// const sight = await Client.fetch(
	// 	`*[ _type == 'team' && category == 'sight' ] | order(order asc)`,
	// );
	// const wie = await Client.fetch(
	// 	`*[ _type == 'team' && category == 'wie' ] | order(order asc)`,
	// );

	// const data = { cs, embs, execom, other, pes, ras, sps, sight, wie };
	const data = await Client.fetch(`*[ _type == 'team'] | order(order asc)`);
	console.log(data);
	return {
		props: { ...data },
	};
};

export default team;
