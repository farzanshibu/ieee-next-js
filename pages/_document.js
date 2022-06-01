import Document, { Html, Head, Main, NextScript } from "next/document";
export default class CustomDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						href="https://ieeesbmbcet.in/images/IEEE%20MBCET%20white.png"
						rel="icon"
					/>
					<link
						href="https://ieeesbmbcet.in/images/IEEE%20MBCET%20white.png"
						rel="apple-touch-icon"
					/>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
						integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
						crossOrigin="anonymous"
						referrerPolicy="no-referrer"
					/>
					<link
						rel="stylesheet"
						href="https://cdn.jsdelivr.net/npm/add-to-calendar-button@1.8/assets/css/atcb.min.css"
					></link>
					<link
						href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Montserrat:300,400,500,700&display=optional"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<script
						src="https://cdn.jsdelivr.net/npm/add-to-calendar-button@1.8"
						defer
					></script>
				</body>
			</Html>
		);
	}
}
