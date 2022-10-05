import Head from "next/head";
import Link from "next/link";
import Client from "../client";

export default function FourOhFour() {
	console.log();

	return (
		<>
			<Head>
				<title>404 | IEEE</title>
			</Head>
			<div
				style={{ height: "64vh" }}
				className="flex items-center justify-center gap-3"
			>
				<h1 className="font-black text-2xl">404</h1>
				<div className="w-[1.5px] h-[40px] bg-black rounded"></div>
				<Link href="/">
					<a> This page could not be found.</a>
				</Link>
			</div>
		</>
	);
}
