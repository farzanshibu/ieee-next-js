import Head from "next/head";
import Client from "../client";

export default function fiveohoh({ info }) {
	return (
		<>
			<Head>
				<title>500 | IEEE</title>
			</Head>
			<div
				style={{ height: "64vh" }}
				className="flex items-center justify-center gap-3"
			>
				<h1 className="font-black text-2xl">500</h1>
				<div className="w-[1.5px] h-[40px] bg-black rounded"></div>

				<a>
					Server-side error occurred.
					<br /> Contact Admin : {info[0].phoneNumber} ( {info[0].name} )
				</a>
			</div>
		</>
	);
}
export const getStaticProps = async () => {
	const info = await Client.fetch(`*[ _type == "home" ]`);

	const result = { info };
	return {
		props: { ...result },
	};
};
