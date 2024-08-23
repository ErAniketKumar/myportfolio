import React from "react";
import {
	FaInstagram,
	FaGithub,
	FaReact,
	FaNodeJs,
	FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import { ReactTyped, Typed } from "react-typed";
import "./Home.css";

function Home() {
	const mediaIcon = [
		{
			id: 1,
			url: "https://github.com/ErAniketKumar",
			icon: <FaGithub />,
		},
		{
			id: 2,
			url: "https://linkedin.com/in/eraniket",
			icon: <FaLinkedin />,
		},
		{
			id: 3,
			url: "https://instagram.com/eraniket95",
			icon: <FaInstagram />,
		},
		{
			id: 4,
			url: "",
			icon: <FaSquareXTwitter />,
		},
	];

	const workIcon = [
		{
			id: 1,
			icon: <FaReact />,
		},
		{
			id: 2,
			icon: <FaNodeJs />,
		},
		{
			id: 3,
			icon: <SiExpress />,
		},
		{
			id: 4,
			icon: <DiMongodb />,
		},
	];

	return (
		<>
			<div
				name="Home"
				className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-12"
			>
				<div className="flex flex-col md:flex-row ">
					<div className="md:w-1/2 mt-10 md:mt-12 space-y-2 order-2 md:order-1 ">
						<span className="text-[1.3rem] justify-center flex items-center gap-1 md:justify-start font-medium text-green-600
						before:content-[''] before:w-6 before:h-[1px] before:bg-green-600">
							Hello
						</span>
						<div className="flex space-x-1 text-2xl md:text-4xl justify-center md:justify-start">
							<h1>I'm a</h1>
							{/* <span className="text-red-700 font-bold">Developer|</span> */}
							<ReactTyped
								className="text-red-700 font-bold"
								typedRef={""}
								strings={["Developer", "Programmer", "Coder"]}
								typeSpeed={50}
								backSpeed={50}
								loop="true"
							/>
						</div>
						<br />
						<p className="text-sm md:text-md text-justify">
							Hi there! My name is Aniket Kumar, and I'm a 3rd-year computer
							science student with a passion for coding and technology. I'm
							currently diving deep into Data Structures and Algorithms, as well
							as MERN stack development., I share my learning
							journey, projects, and insights to help others grow in their tech
							careers.
						</p>
						<br />

						{/* socialmedia icons */}
						<div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center">
							<div className="space-y-2">
								<h1 className="font-bold">Available on</h1>
								<span className="flex text-2xl md:text-3xl space-x-1 md:space-x-2">
									{mediaIcon.map(({ id, url, icon }) => (
										<NavLink key={id} to={url} target="_blank">
											{icon}
										</NavLink>
									))}
								</span>
							</div>
							<div className="space-y-2">
								<h1 className="font-bold">Currently woring on</h1>
								<span className="flex text-2xl space-x-1 md:space-x-2 ml-7 md:ml-0">
									{workIcon.map(({ id, icon }) => (
										<span
											className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"
											key={id}
										>
											{icon}
										</span>
									))}
								</span>
							</div>
						</div>
					</div>

					<div className="md:w-1/2 md:ml-48 md:mt-12 order-1 mt-6 flex justify-center imgBox">
						{/* <img
							src="/image/aniket_pic.jpg"
							className="rounded-full md:w-[400px] md:h-[400px] aniketImg"
							alt=""
						/> */}
					</div>
				</div>
			</div>
			<hr />
		</>
	);
}

export default Home;
