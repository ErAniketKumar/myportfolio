import React from "react";
import Card from "./Card";

function Portfolio() {
	const cardArray = [
		{
			id: 1,
			imgUrl: "/image/crud.png",
			title: "Crud (Todo-list)",
			paragraph: "Lorem ipsum dolor sit amet fhdjwebfijsn",
			live: "https://crudapps-ygc3.onrender.com/add",
			src: "https://github.com/ErAniketKumar/crudApp-withFileUpload-Search/tree/main",
		},
		{
			id: 2,
			imgUrl: "/image/livechatImg.jpg",
			title: "Live chat Apps",
			paragraph: "Lorem ipsum dolor sit amet fhdjwebfijsn",
			live: "https://lovejivan.onrender.com",
			src: "https://github.com/ErAniketKumar/RealTimeChatApp/tree/main",
		},
		{
			id: 3,
			imgUrl: "/image/qrcodeImg.png",
			title: "Qr code generator",
			paragraph: "Lorem ipsum dolor sit amet fhdjwebfijsn",
			live: "https://makeqreasy.onrender.com/",
			src: "https://github.com/ErAniketKumar/QRCodeGenerator/tree/main",
		},
		{
			id: 4,
			imgUrl: "/image/randomColor.png",
			title: "Random Color Gen.",
			paragraph: "Lorem ipsum dolor sit amet fhdjwebfijsn",
			live: "Video",
			src: "Source Code",
		},
		{
			id: 5,
			imgUrl: "/image/calculatorImg.png",
			title: "Calculator",
			paragraph: "Lorem ipsum dolor sit amet fhdjwebfijsn",
			live: "https://eraniketkumar.github.io/JsBasicCalculator/",
			src: "https://github.com/ErAniketKumar/JsBasicCalculator",
		},
		{
			id: 6,
			imgUrl: "/image/iotLinerobot.jpg",
			title: "Line follower",
			paragraph: "Lorem ipsum dolor sit amet fhdjwebfijsn",
			live: "Video",
			src: "Source Code",
		},
		{
			id: 7,
			imgUrl: "/image/livetogetherLogo.jpg",
			title: "Livetogether",
			paragraph: "Lorem ipsum dolor sit amet fhdjwebfijsn",
			live: "https://livetogether.onrender.com",
			src: "https://github.com/ErAniketKumar/liveTogetherEduSite/tree/main",
		},
		{
			id: 8,
			imgUrl: "/image/mernStack.jpeg",
			title: "MERN Stack App",
			paragraph: "Lorem ipsum dolor sit amet fhdjwebfijsn",
			live: "https://mern-crud-api.web.app/",
			src: "https://github.com/ErAniketKumar/MERN-API-CRUD"
		}
	];
	return (
		<>
			<div
				name="Portfolio"
				className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-12"
			>
				<div>
					<h1 className="text-3xl font-bold">Projects</h1>
					<p className="text-lg font-semibold underline mb-5 mt-2">Hands on!</p>
				</div>
				<div className="card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{cardArray.map(({ id, imgUrl, title, paragraph, live, src }) => (
						<Card
							key={id}
							imgUrl={imgUrl}
							title={title}
							paragraph={paragraph}
							live={live}
							src={src}
						></Card>
					))}
				</div>
			</div>

			<hr />
		</>
	);
}

export default Portfolio;
