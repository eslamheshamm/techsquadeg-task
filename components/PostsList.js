import React, { useState, useEffect } from "react";
import Post from "./post";
function PostsList({ postsData }) {
	const [posts, setPosts] = useState([]);
	// Set up news data
	useEffect(() => {
		if (postsData) {
			// Error check
			if (postsData.error) {
				// Handle error
			} else {
				setPosts(postsData);
			}
		}
	}, [postsData]);

	return (
		<section className="bg-gray-300 py-4">
			{posts.map((article) => (
				<Post
					key={article._id}
					newsTitle={article.title}
					logo={article.source.url}
					date={article.created_at}
					keywords={article.keywords}
					sourceTitle={article.source.title}
				/>
			))}
		</section>
	);
}

export default PostsList;
