import React from "react";
import Link from "next/link";
import ActiveLink from "./activeLink";
export default function Navbar() {
	const [navbarOpen, setNavbarOpen] = React.useState(false);

	return (
		<>
			<nav className="relative flex  flex-wrap items-center justify-between px-2 py-3  text-white bg-green-500 ">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
						<Link href="/">
							<a
								className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase "
								href="/"
							>
								Sport News
							</a>
						</Link>
						<button
							className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<i>{Icon}</i>
						</button>
					</div>
					<div
						className={
							"lg:flex flex-grow items-end" +
							(navbarOpen ? " flex  justify-end" : " hidden")
						}
						id="example-navbar-danger"
					>
						<ul className="flex flex-col items-stretch  lg:flex-row list-none lg:ml-auto">
							<li className="">
								<ActiveLink
									activeClassName="lg:text-green-500 lg:bg-white font-bold"
									href="/login"
								>
									<a
										className="lg:border lg:border-white    rounded-3xl  px-12  py-2 text-lg uppercase mr-4 "
										href="/login"
									>
										Login
									</a>
								</ActiveLink>
							</li>
							<li>
								<ActiveLink
									activeClassName="lg:text-green-500 lg:bg-white font-bold"
									href="/about"
								>
									<a
										className="lg:border lg:border-white    rounded-3xl  px-12  py-2 text-lg uppercase mr-4 "
										href="/about"
									>
										About
									</a>
								</ActiveLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
const Icon = (
	<svg viewBox="0 0 100 80" width="40" height="40" fill="white">
		<rect width="100" height="10"></rect>
		<rect y="30" width="100" height="10"></rect>
		<rect y="60" width="100" height="10"></rect>
	</svg>
);
