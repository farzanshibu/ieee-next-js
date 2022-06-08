import Head from "next/head";
import Link from "next/link";
import Client from "../../client";

import styles from "../../styles/Team.module.css";

function index(props) {
	const data = Object.values(props);

	return (
		<>
			<Head>
				<title>Story & Reports | IEEE</title>
			</Head>
			<section id={styles.team}>
				<div className="container min-vh-95 w-50" data-aos="fade-up">
					<header className="sectionHeader">
						<h3 style={{ color: "black" }}>Reports and Story</h3>
						{/* <p style={{ color: "black" }}>
							Here is a snapshot of various events, which can be cherished for a
							long time.
						</p> */}
					</header>
					<div className="table-responsive d-flex gap-5 flex-wrap justify-content-center p-5">
						<table className="table table-hover">
							<thead className="table-primary">
								<tr>
									<th colSpan="3" className="text-center p-3">
										Reports
									</th>
								</tr>
							</thead>
							<tbody>
								{data.map((report, index) => (
									<tr key={report._id}>
										<th scope="row" className="text-center p-4">
											{index + 1}
										</th>
										<td className="text-center p-4">{report.storyName}</td>
										<td className="text-center p-4">
											<Link href={`/story-&-report/${report.slug.current}`}>
												<a className="btn btn-success">Download</a>
											</Link>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<table className="table table-hover">
							<thead className="table-primary">
								<tr>
									<th colSpan="3" className="text-center p-3">
										Story
									</th>
								</tr>
							</thead>
							<tbody>
								{data.map((report, index) => (
									<tr key={report._id}>
										<th scope="row" className="text-center p-4">
											{index + 1}
										</th>
										<td className="text-center p-4">{report.reportName}</td>
										<td className="text-center p-4">
											<a
												href={report.documentUrl}
												className="btn btn-success px-4"
											>
												View
											</a>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</section>
		</>
	);
}

export const getServerSideProps = async () => {
	const data = await Client.fetch(`*[ _type == "reportandstory" ]`);

	return {
		props: { ...data },
	};
};

export default index;
