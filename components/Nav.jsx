import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "next/image";
import logo from "../assets/images/ieeeheader.png";
import styles from "../styles/Navbar.module.css";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className=" d-flex justify-center">
			<nav
				className={`${styles.bg} mt-4 d-flex h-20 shadow-sm fixed w-9/12 z-10 rounded-full justify-center`}
			>
				<div className="w-full">
					<div className="flex items-center h-20">
						<div className="flex items-center w-full  mx-20  justify-between">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<h1 className=" font-black m-0 text-xl text-blue-900 ">
									IEEE<span className="text-green-900">MBCET</span>
								</h1>
							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<Link href="/">
										<a className=" hover:bg-blue-300 text-black hover:text-white rounded-md font-semibold px-3 py-2 text-md hover:font-black">
											Home
										</a>
									</Link>
									<Link href="/#about">
										<a className=" hover:bg-blue-300 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:font-black">
											About
										</a>
									</Link>
									<Link href="/team">
										<a className=" hover:bg-blue-300 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:font-black">
											Team
										</a>
									</Link>
									<Link href="/events">
										<a className=" hover:bg-blue-300 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:font-black">
											Events
										</a>
									</Link>
									<Dropdown>
										<Dropdown.Toggle className={styles.dropdown}>
											More
										</Dropdown.Toggle>
										<Dropdown.Menu className={styles.dropdownMenu}>
											<Dropdown.Item href="/gallery">Gallery</Dropdown.Item>
											<Dropdown.Item href="/story-&-report">
												Reports & Stories
											</Dropdown.Item>
											<Dropdown.Item href="/wallofweb">
												Wall of Web
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
									<Link href="/#contact">
										<a className=" bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black">
											Contact
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
							>
								<Link href="/">
									<a className=" hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
										Home
									</a>
								</Link>
								<Link href="/#about">
									<a className=" hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
										About Us
									</a>
								</Link>

								<Link href="/team">
									<a className=" hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
										Team
									</a>
								</Link>
								<Link href="/events">
									<a className=" hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
										Events
									</a>
								</Link>
								<Link href="/gallary">
									<a className=" hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
										Gallery
									</a>
								</Link>
								<Link href="/story-&-report">
									<a className=" hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
										Reports & Stories
									</a>
								</Link>
								<Link href="/wallofweb">
									<a className=" hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
										Wall of Web
									</a>
								</Link>

								<Link href="/#contact">
									<a className=" hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
										Contact
									</a>
								</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar;
