import Head from "next/head";
import Overlay from "../components/Overlay";
import HomePage from "../components/Home/Home";
import Client from "../client";

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
	const info = await Client.fetch(`*[ _type == "home" ]`);
	const blog = await Client.fetch(`*[_type == "blog"]{
  _id,
  "name" : author->name,
  slug,
  title,
  mainImage
}`);
	const team = await Client.fetch(`*[_type == 'team' && homepage == true]`);

	const result = { info, team, blog };

	return {
		props: { ...result },
	};
};
