import Head from "next/head";
import Overlay from "../components/Overlay";
import HomePage from "../components/Home/Home";
import client from "../client";

export default function Home(props) {
	return (
		<>
			<Head>
				<title>Home | IEEE</title>
			</Head>
			<Overlay />
			<HomePage {...props} />
		</>
	);
}
export const getServerSideProps = async () => {
	const query = encodeURIComponent(`*[ _type == "home" ]`);
	// const result = await client.fetch(query).then((res) => res.json());

	const url = `https://d19epmzn.api.sanity.io/v1/data/query/production?query=${query}`;

	const result = await fetch(url).then((res) => res.json());
	const post = result.result[0];

	if (!post) {
		return {
			notFound: true,
		};
	} else {
		return {
			props: {
				affinityGroups: post.affinityGroups || null,
				events: post.events || null,
				members: post.members || null,
				mission: post.mission || null,
				socities: post.socities || null,
				contactNumber: post.phoneNumber || null,
			},
		};
	}
};
