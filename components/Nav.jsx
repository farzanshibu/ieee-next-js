import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import {
	MDBDropdown,
	MDBDropdownMenu,
	MDBDropdownToggle,
	MDBDropdownItem,
} from "mdb-react-ui-kit";
import styles from "../styles/Navbar.module.css";
import { ClickAwayListener } from "@mui/base";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const handleClickAway = () => {
		setIsOpen(false);
	};
	return (
		<div className=" d-flex justify-center">
			<nav
				className={`${styles.bg} mt-4 d-flex h-20 shadow-sm fixed w-95 z-10 rounded-full justify-center`}
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
									<Link href="/" passHref>
										<a className=" hover:bg-blue-300 text-black hover:text-white rounded-md font-semibold px-3 py-2 text-md hover:font-black">
											Home
										</a>
									</Link>
									<Link href="/#about" passHref>
										<a className=" hover:bg-blue-300 text-black hover:text-white px-3 py-2 rounded-md text-sm font-semibold hover:font-black">
											About
										</a>
									</Link>
									<Link href="/achievements" passHref>
										<a className=" hover:bg-blue-300 text-black hover:text-white px-3 py-2 rounded-md text-sm font-semibold hover:font-black">
											Achievements
										</a>
									</Link>
									<Link href="/team" passHref>
										<a className=" hover:bg-blue-300 text-black hover:text-white px-3 py-2 rounded-md text-sm font-semibold hover:font-black">
											Team
										</a>
									</Link>
									<Link href="/events" passHref>
										<a className=" hover:bg-blue-300 text-black hover:text-white px-3 py-2 rounded-md text-sm font-semibold hover:font-black">
											Events
										</a>
									</Link>
									<MDBDropdown>
										<MDBDropdownToggle tag="a" className={styles.dropdown}>
											More
										</MDBDropdownToggle>
										<MDBDropdownMenu className={styles.dropdownMenu}>
											<MDBDropdownItem link href="/gallery">
												Gallery
											</MDBDropdownItem>
											<MDBDropdownItem link href="/story-&-report">
												Reports and Stories
											</MDBDropdownItem>
											<MDBDropdownItem link href="/wallofweb">
												Wall of Web
											</MDBDropdownItem>
										</MDBDropdownMenu>
									</MDBDropdown>
									<Link href="/#contact" passHref>
										<a className=" bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black">
											Contact
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="mr-10 flex md:hidden ">
							<ClickAwayListener onClickAway={handleClickAway}>
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
							</ClickAwayListener>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition ease-in duration-75"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					{() => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={React.createRef()}
								className={`${styles.mobileMenu} bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3`}
							>
								<Link href="/" passHref>
									<a className=" hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
										Home
									</a>
								</Link>
								<Link href="/#about" passHref>
									<a className=" hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
										About Us
									</a>
								</Link>

								<Link href="/achievements" passHref>
									<a className=" hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
										Achievements
									</a>
								</Link>
								<Link href="/team" passHref>
									<a className=" hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
										Team
									</a>
								</Link>
								<Link href="/events" passHref>
									<a className=" hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
										Events
									</a>
								</Link>
								<Link href="/flipbook" passHref>
									<a className=" hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
										Gallery
									</a>
								</Link>
								<Link href="/story-&-report" passHref>
									<a className=" hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
										Reports & Stories
									</a>
								</Link>
								<Link href="/wallofweb" passHref>
									<a className=" hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
										Wall of Web
									</a>
								</Link>

								<Link href="/#contact" passHref>
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
