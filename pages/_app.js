import Head from "next/head";
import { useEffect } from "react";
import "../styles/globals.css";
import "../styles/tailwind.css";
import "tailwindcss/tailwind.css";
import "bootstrap/dist/css/bootstrap.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import AOS from "aos";
import "aos/dist/aos.css";

let footerPropsCache;
function MyApp({ Component, pageProps, footerProps }) {
	useEffect(() => {
		AOS.init({
			// Global settings:
			disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
			startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
			initClassName: "aos-init", // class applied after initialization
			animatedClassName: "aos-animate", // class applied on animation
			useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
			disableMutationObserver: false, // disables automatic mutations' detections (advanced)
			debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
			throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

			// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
			offset: 120, // offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			duration: 400, // values from 0 to 3000, with step 50ms
			easing: "ease", // default easing for AOS animations
			once: false, // whether animation should happen only once - while scrolling down
			mirror: false, // whether elements should animate out while scrolling past them
			anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
		});
	}, []);

	useEffect(() => {
		footerPropsCache = footerProps;
	}, [footerProps]);

	// You can also pass an optional settings object
	// below listed default settings

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta content="width=device-width, initial-scale=1.0" name="viewport" />
				<meta content="" name="description" />
				<meta content="" name="keywords" />
			</Head>
			<Navbar />
			<Component {...pageProps} />
			<Footer {...footerProps} />
		</>
	);
}

MyApp.getInitialProps = async () => {
	if (footerPropsCache) {
		return { footerProps: footerPropsCache };
	}
	const query = encodeURIComponent(`*[ _type == "home" ]`);
	// const result = await client.fetch(query).then((res) => res.json());
	const url = `https://d19epmzn.api.sanity.io/v1/data/query/production?query=${query}`;
	const result = await fetch(url).then((res) => res.json());
	const post = result.result[0];
	footerPropsCache = post;

	return {
		footerProps: {
			name: post.name,
			contactNumber: post.phoneNumber,
		},
	};
};
export default MyApp;
