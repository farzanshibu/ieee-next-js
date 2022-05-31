import Link from "next/link";
import styles from "../../styles/Blog.module.css";
import Blog from "./Componetns/Blog";

function Blogs() {
	return (
		<section id={styles.blog} className="sectionBg">
			<div className={styles.container} data-aos="fade-up">
				<div className={styles.sectionHeader}>
					<h3>Our Blog</h3>
					<div className={styles.gridView}>
						<Link href="blogs/1">
							<a>
								<Blog
									Title="Blog1"
									Description="This is 1st blog !"
									Image={""}
									animate="100"
								/>
							</a>
						</Link>
						<Link href="blogs/1">
							<a>
								<Blog
									Title="Blog2"
									Description="This is 2nd blog !"
									Image={""}
									animate="200"
								/>
							</a>
						</Link>
						<Link href="blogs/1">
							<a>
								<Blog
									Title="Blog3"
									Description="This is 3rd blog !"
									Image={""}
									animate="300"
								/>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Blogs;
