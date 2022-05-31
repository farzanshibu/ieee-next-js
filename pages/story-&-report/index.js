import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Team.module.css";

function index() {
	return (
		<>
			<Head>
				<title>Story & Reports | IEEE</title>
			</Head>
			<section id={styles.team}>
				<div className="container min-vh-95 w-50" data-aos="fade-up">
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
								<tr>
									<th scope="row" className="text-center p-4">
										1
									</th>
									<td className="text-center p-4">1</td>
									<td className="text-center p-4">
										<Link href="/story-&-report/1">
											<a className="btn btn-success">Download</a>
										</Link>
									</td>
								</tr>
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
								<tr>
									<th scope="row" className="text-center p-4">
										1
									</th>
									<td className="text-center p-4">2</td>
									<td className="text-center p-4">
										<a href="" className="btn btn-success px-4">
											View
										</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>
		</>
	);
}

export default index;
