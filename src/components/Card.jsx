import React from "react";

function Card({imgUrl, title, paragraph,btn1, btn2}) {
	return (
		<div className="shadow-md border rounded-md h-[20rem] flex flex-col justify-center items-center space-y-2 hover:scale-105 duration-200 hover:border-none">
			<img
				className="w-[8rem] h-[8rem] p-1 rounded-full border-2"
				src={imgUrl}
				alt=""
			/>
			<h1 className="text-lg font-bold">{title}</h1>
			<p className="text-center text-md">
				{paragraph}
			</p>
			<div className="flex space-x-2">
				<button className="px-3 py-2 bg-blue-600 text-white rounded">
					{btn1}
				</button>
				<button className="px-3 py-2 bg-green-600 text-white rounded">
                    {btn2}
				</button>
			</div>
		</div>
	);
}

export default Card;
