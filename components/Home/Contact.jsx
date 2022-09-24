import Image from "next/future/image";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contact from "/assets/images/contatct.png";
import styles from "../../styles/Contact.module.css";
import TextField from "@mui/material/TextField";

function Contact(props) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	return (
		<section id={styles.contact}>
			<div className="container-fluid" id="contact" data-aos="fade-up">
				<div className={`${styles.sectionHeader} sectionHeader`}>
					<h3>Contact Us</h3>
				</div>

				<div className="row">
					<div className="col-lg-6">
						<div className="mb-4 mb-lg-0">
							<a>
								<Image
									className={styles.contactImg}
									src={contact}
									alt="contact"
								/>
							</a>
						</div>
					</div>

					<div className="col-lg-6">
						<div className="row">
							<div className={`${styles.info} w-2/4`}>
								<i className="fa-solid fa-at"></i>
								<p>
									<a href="mailto:ieeesb@mbcet.ac.in">ieeesb@mbcet.ac.in</a>
								</p>
							</div>
							<div className={`${styles.info} w-2/4`}>
								<i className="fa-solid fa-mobile"></i>
								<p>
									<a href={` tel: +91${props[0].phoneNumber}`}>
										+91 {props[0].phoneNumber}
									</a>
								</p>
							</div>
						</div>

						<div className="form pt-3">
							<form
								method="POST"
								autoComplete="off"
								onSubmit={handleSubmit((data) => {
									console.log(data);
									fetch("https://formspree.io/f/xeqndgek", {
										method: "POST",
										body: JSON.stringify(data),
										headers: {
											Accept: "application/json",
										},
									});
									fetch("/api/contact", {
										method: "post",
										body: JSON.stringify(data),
									})
										.then((response) => response.json())
										.then((data) => {
											console.log("Success:", data);
											toast.success(" Successfully", {
												position: "bottom-right",
												autoClose: 5000,
												hideProgressBar: false,
												closeOnClick: true,
												pauseOnHover: true,
												draggable: true,
												progress: undefined,
												theme: "colored",
											});
										})
										.catch((error) => {
											console.error("Error:", error);
											toast.error(" Something went wrong", {
												position: "bottom-right",
												theme: "colored",
												autoClose: 5000,
												hideProgressBar: false,
												closeOnClick: true,
												pauseOnHover: true,
												draggable: true,
												progress: undefined,
											});
										});
									reset();
								})}
								className={styles.phpEmailForm}
							>
								<div className="row justify-content-center align-items-center">
									<div className="form-group col-lg-6">
										<TextField
											id="outlined-size-normal"
											label="Name"
											variant="outlined"
											type="text"
											fullWidth
											placeholder="Your Name"
											size="small"
											error={errors.name}
											{...register("name", { required: true, minLength: 2 })}
										/>
										{errors.name && errors.name.type === "required" && (
											<span className={styles.validate}>
												This field is required
											</span>
										)}
										{errors.name && errors.name.type === "minLength" && (
											<span className={styles.validate}>
												Name must be atleast 2 characters long
											</span>
										)}
									</div>
									<div className="form-group col-lg-6 mt-3 mt-lg-0">
										<TextField
											id="outlined-size-normal"
											label="Email Address"
											variant="outlined"
											type="email"
											placeholder="Email@exaple.com"
											size="small"
											fullWidth
											error={errors.email && errors.email.type === "required"}
											{...register("email", { required: true })}
										/>
										{errors.email && errors.email.type === "required" && (
											<span className={styles.validate}>
												This field is required
											</span>
										)}
									</div>
								</div>
								<div className="form-group mt-3">
									<TextField
										id="outlined-size-normal"
										label="Subject"
										variant="outlined"
										type="text"
										fullWidth
										size="small"
										error={errors.subject}
										{...register("subject", { required: true, minLength: 4 })}
									/>
									{errors.subject && (
										<span className={styles.validate}>
											This field is required
										</span>
									)}
									{errors.subject && errors.subject.type === "minLength" && (
										<span className={styles.validate}>
											Subject must be atleast 4 characters long
										</span>
									)}
								</div>
								<div className="form-group mt-4">
									<TextField
										id="outlined-textarea"
										label="Message"
										placeholder="Placeholder"
										fullWidth
										size="small"
										multiline
										minRows="5"
										error={errors.message}
										{...register("message", { required: true, minLength: 6 })}
									/>
									{errors.message && (
										<span className={styles.validate}>
											This field is required
										</span>
									)}
									{errors.message && errors.message.type === "minLength" && (
										<span className={styles.validate}>
											Message must be atleast 6 characters long
										</span>
									)}
								</div>
								<div className="mb-3">
									<div className={styles.loading}>Loading</div>
									<div className={styles.sentMessage}>
										Your message has been sent. Thank you!
									</div>
								</div>
								<div className="text-center">
									<button type="submit" title="Send Message">
										Send Message
									</button>
									<ToastContainer />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
