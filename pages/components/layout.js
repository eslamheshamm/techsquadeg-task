import React from "react";
import Head from "next/head";
import Navbar from "./nav";

export default function Layout({ title, children }) {
	return (
		<body className="m-0">
			<Head>
				<title>{title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main className=" flex text-center m-0  ">
				<section className="w-8/12 bg-white hidden lg:block">
					{/* column */}
				</section>
				<section className="w-full">{children}</section>
				<section className="w-8/12 bg-white hidden lg:block">
					{/* column */}
				</section>
			</main>
		</body>
	);
}
