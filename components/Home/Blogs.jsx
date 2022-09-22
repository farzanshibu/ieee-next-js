import Link from "next/link";

import urlFor from "../imgtoUrl";
import Blog from "./Components/Blog";
import styles from "../../styles/Blog.module.css";

function Blogs(props) {
	const blogs = Object.values(props);
	return (
		<section id={styles.blog} className="sectionBg">
			<div className={styles.container} data-aos="fade-up">
				<div className={styles.sectionHeader}>
					<h3>Our Blog</h3>
					<div className={styles.gridView}>
						{blogs.map((blog) => (
							<Link key={blog._id} href={`/blogs/${blog.slug.current}`}>
								<a>
									<Blog
										Title={blog.title}
										Author={blog.name}
										Image={
											blog.mainImage
												? urlFor(blog.mainImage).height(200).url()
												: ""
										}
										animate="100"
									/>
								</a>
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Blogs;
