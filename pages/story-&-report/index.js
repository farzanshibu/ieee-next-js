import Head from "next/head";
import Link from "next/link";
import Client from "../../client";

import styles from "../../styles/Team.module.css";

function index(props) {
	const data = Object.values(props);
	var count1 = 0;
	var count2 = 0;

	return (
		<>
			<Head>
				<title>Story & Reports | IEEE</title>
			</Head>
			<section id={styles.team} style={{ paddingTop: 70 }}>
				<div className="container min-w-[300px] w-50" data-aos="fade-up">
					<header className="sectionHeader">
						<h3 style={{ color: "black" }}>Reports and Story</h3>
					</header>
					<div className="table-responsive d-flex gap-5 flex-wrap justify-content-center py-5">
						<table className="table table-hover">
							<thead className="table-primary">
								<tr>
									<th colSpan="3" className="text-center">
										Reports
									</th>
								</tr>
							</thead>
							<tbody>
								{data.map((report) => (
									<tr key={report._id}>
										{report.storyName ? (
											<>
												<th scope="row" className="text-center p-4">
													{(count1 = count1 + 1)}
												</th>
												<td className="text-center p-4">{report.storyName}</td>
												<td className="text-center p-4">
													<Link
														href={`/story-&-report/${report.slug.current}`}
														passHref
													>
														<a className="btn btn-success">
															<i className="fa-solid fa-cloud-arrow-down"></i>
														</a>
													</Link>
												</td>
											</>
										) : (
											""
										)}
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
								{data.map((report) => (
									<tr key={report._id}>
										{report.reportName ? (
											<>
												<th scope="row" className="text-center p-4">
													{(count2 = count2 + 1)}
												</th>
												<td className="text-center p-4">{report.reportName}</td>
												<td className="text-center p-4">
													<a
														href={report.documentUrl}
														className="btn btn-success px-4"
													>
														<i className="fa-regular fa-eye"></i>
													</a>
												</td>
											</>
										) : (
											""
										)}
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
	const data = await Client.fetch(
		`*[ _type == "reportandstory" ] | order(order asc)`,
	);

	return {
		props: { ...data },
	};
};

export default index;
