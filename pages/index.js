import React, { useState } from "react";
import Layout from "../components/layout";
import InfiniteScroll from "react-infinite-scroll-component";
import PostsList from "../components/PostsList";

export default function Home({ postsData }) {
	const [currentLength, setCurrentLength] = useState(postsData.news.length);
	const [news, setNews] = useState(postsData.news);

	const fetchData = async () => {
		const res = await fetch(
			`http://80.240.21.204:1337/news?limit=${currentLength + 10} `
		);
		setCurrentLength(currentLength + 10);
		const newPostsData = await res.json();
		setNews(newPostsData.news);
	};
	return (
		<InfiniteScroll
			dataLength={currentLength} //This is important field to render the next data
			next={fetchData}
			hasMore={currentLength === 71145 ? false : true} // limiting scrolling to the total length of views
			loader={<h4 className="text-center text-4xl font-bold">Loading...</h4>}
			endMessage={
				<p style={{ textAlign: "center" }}>
					<b>Yay! You have seen it all</b>
				</p>
			}
		>
			<Layout title={`Home`}>
				<PostsList postsData={news} />
			</Layout>
			);
		</InfiniteScroll>
	);
}

export async function getStaticProps() {
	const res = await fetch(`http://80.240.21.204:1337/news?limit=10`);
	const postsData = await res.json();
	return {
		props: {
			postsData,
		},
	};
}

// import axios from "axios";
// import ReactPaginate from "react-paginate";
// import Router, { withRouter } from "next/router";

// Home.getInitialProps = async ({ query }) => {
//     const page = query.page || 1; //if page empty we request the first page
//     const posts = await axios.get(`http://80.240.21.204:1337/news?limit=120&page=${page}`);
//     return {
//         totalCount: posts.data._meta.totalCount,
//         pageCount: posts.data._meta.pageCount,
//         currentPage: posts.data._meta.currentPage,
//         perPage: posts.data._meta.perPage,
//         posts: posts.news.result,
//     };
// }

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ReactPaginate from "react-paginate";
// import Router, { withRouter } from "next/router";

// const Home = ({ posts, ...props }) => {
// 	const [isLoading, setLoading] = useState(false); //State for the loading indicator
// 	const startLoading = () => setLoading(true);
// 	const stopLoading = () => setLoading(false);
// 	console.log(posts, "data");
// 	/*
//     			Posts fetching happens after page navigation,
//     			so we need to switch Loading state on Router events.
//     		*/
// 	useEffect(() => {
// 		//After the component is mounted set router event handlers
// 		Router.events.on("routeChangeStart", startLoading);
// 		Router.events.on("routeChangeComplete", stopLoading);

// 		return () => {
// 			Router.events.off("routeChangeStart", startLoading);
// 			Router.events.off("routeChangeComplete", stopLoading);
// 		};
// 	}, []);

// 	//When new page selected in paggination, we take current path and query parrams.
// 	// Then add or modify page parram and then navigate to the new route.
// 	const pagginationHandler = (page) => {
// 		const currentPath = props.router.pathname;
// 		const currentQuery = props.router.query;
// 		currentQuery.page = page.selected + 1;

// 		props.router.push({
// 			pathname: currentPath,
// 			query: currentQuery,
// 		});
// 	};

// 	//Conditional rendering of the posts list or loading indicator
// 	let content = null;
// 	if (isLoading) content = <div>Loading...</div>;
// 	else {
// 		//Generating posts list
// 		content = (
// 			<ul>
// 				{posts.news.map((post) => {
// 					return <li key={post.id}>{post.title}</li>;
// 				})}
// 			</ul>
// 		);
// 	}

// 	return (
// 		<div className="container">
// 			<h1>Posts List with Pagination in Next.js</h1>
// 			<div className="posts">{content}</div>

// 			<ReactPaginate
// 				previousLabel={"previous"}
// 				nextLabel={"next"}
// 				breakLabel={"..."}
// 				breakClassName={"break-me"}
// 				activeClassName={"active"}
// 				containerClassName={"pagination"}
// 				subContainerClassName={"pages pagination"}
// 				initialPage={props.currentPage - 1}
// 				pageCount={props.pageCount}
// 				marginPagesDisplayed={2}
// 				pageRangeDisplayed={5}
// 				onPageChange={pagginationHandler}
// 			/>
// 		</div>
// 	);
// };

// //Fetching posts in get Intial Props to make the app seo friendly
// // Home.getInitialProps = async ({ query }) => {
// // 	const page = query.page || 1; //if page empty we request the first page
// // 	const posts = await axios.get(
// // 		`http://80.240.21.204:1337/news?limit=120&page=${page}`
// // 	);
// // 	return {
// // 		// totalCount: posts.data._meta.totalCount,
// // 		// pageCount: posts.data._meta.pageCount,
// // 		// currentPage: posts.data._meta.currentPage,
// // 		// perPage: posts.data._meta.perPage,
// // 		posts: posts,
// // 	};
// // };
// export async function getServerSideProps({ query }) {
// 	const page = query.page || 1;

// 	// Call an external API endpoint to get posts
// 	const res = await fetch(
// 		`http://80.240.21.204:1337/news?limit=5&page=${page}`
// 	);
// 	const posts = await res.json();

// 	// By returning { props: { posts } }, the Blog component
// 	// will receive `posts` as a prop at build time
// 	return {
// 		props: {
// 			totalNews: posts.totalNews,
// 			// pageCount: posts.data._meta.pageCount,
// 			// currentPage: posts.data._meta.currentPage,
// 			// perPage: posts.data._meta.perPage,
// 			posts,
// 		},
// 	};
// }

// export default withRouter(Home);
