import React from "react";
import { format } from "date-fns";

export default function Post({ logo, newsTitle, sourceTitle, date, keywords }) {
	return (
		<article className="flex flex-col items-start bg-white shadow-md rounded-2xl px-8 py-8 mb-12  w-10/12 md:w-8/12 lg:w-11/12 mx-auto">
			<div className="flex items-center justify-between w-full">
				<div className="flex items-center">
					<img src={logo} className="w-6 h-6 mr-4" />
					<h3 className="font-bold text-xl sm:text-2xl">{sourceTitle}</h3>
				</div>
				<div className="w-6   text-green-500 self-end">
					<Wifi />
				</div>
			</div>
			<h2 className="text-xl my-4 mb-8">{newsTitle}</h2>
			<time>{format(new Date(date), "eeee, dd LLLL yyyy 'AT' kk:ss ")}</time>
			<div className="h-1 w-full border-gray-400 border-b block my-4"></div>
			<div className="flex flex-wrap">
				{keywords.map((keyowrd) => (
					<span className="px-6 py-2 sm:mr-2 m-1 rounded-full border-green-500 border text-green-500">
						{keyowrd.name}
					</span>
				))}
			</div>
		</article>
	);
}

function Wifi(props) {
	return (
		<svg
			x={0}
			y={0}
			viewBox="0 0 512 512"
			fill="currentColor"
			xmlSpace="preserve"
			{...props}
		>
			<path d="M10.667 0C4.779 0 0 4.779 0 10.667V96c0 5.888 4.779 10.667 10.667 10.667 217.621 0 394.667 177.045 394.667 394.667 0 5.888 4.779 10.667 10.667 10.667h85.333c5.888 0 10.667-4.779 10.667-10.667C512 224.896 287.104 0 10.667 0z" />
			<path d="M10.667 170.667C4.779 170.667 0 175.445 0 181.333v85.333c0 5.888 4.779 10.667 10.667 10.667 123.52 0 224 100.48 224 224 0 5.888 4.779 10.667 10.667 10.667h85.333c5.888 0 10.667-4.779 10.667-10.667-.001-182.336-148.331-330.666-330.667-330.666z" />
			<circle cx={74.667} cy={437.333} r={74.667} />
		</svg>
	);
}
