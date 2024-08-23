import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

import { Link } from "react-scroll";

import {disableScroll, enableScroll} from "../utils/scrollHandler.util.js";

function Navbar() {
	const [menu, setMenu] = useState(false);

	const navItems = [
		{
			id: 1,
			text: "Home",
			
		},
		{
			id: 2,
			text: "About",
			
		},
		{
			id: 3,
			text: "Portfolio",
			
		},
		{
			id: 4,
			text: "Explore",
		
		},
		{
			id: 5,
			text: "Contact",
			
		},
	];

	const toggleNav = () => {
		setMenu(prev => {
			if (prev) {
				enableScroll();
				return false;
			} else {
				disableScroll();
				return true;
			}
		});
	}

	return (
		<>
			<div className="relative z-[30] max-w-screen-2xl container mx-auto px-4 md:px-20">
				<div className="shadow-md flex justify-between items-center px-5 fixed top-0 left-0 right-0 bg-white">
					<div className="logo flex items-center gap-2">
						<div className="text-3xl">
							<FaUser />
						</div>
						<div className="flex flex-col">
							<span className="text-md font-bold">Aniket</span>
							<span className="text-sm font-semibold">Web developer</span>
						</div>
					</div>

					{/* desktop navbar */}

					<div className="justify-between lg:w-[40%] md:w-[50%] hidden md:flex">
						{navItems.map(({ id, text, route }) => (
							<span
								className={`hover:scale-105 duration-200 cursor-pointer`}
								key={id}
							>
								<Link
									className="hover:text-blue-700"
									to={text}
									smooth={true}
									duration={500}
									offset={-70}
									activeClass="active"
								>
									{text}
								</Link>
							</span>
						))}
					</div>

					<div className="md:hidden text-3xl" onClick={() => {
						toggleNav();
					}}>
						{menu ? <RxCross1 /> : <FaBars />}
					</div>

					{/* mobile navbar */}
				</div>
				{menu && (
					<div className="fixed z-[10] size-full md:hidden flex flex-col h-screen justify-center items-center bg-white space-y-3 text-xl font-semibold">
						{navItems.map(({ id, text, route }) => (
							<span
								className={`hover:scale-105 duration-200 cursor-pointer`}
								key={id}
							>
								<Link
									className="hover:text-blue-700"
									to={text}
									onClick={() => toggleNav()}
									smooth={true}
									duration={500}
									offset={-70}
									activeClass="active"
								>
									{text}
								</Link>
							</span>
						))}
					</div>
				)}
			</div>
		</>
	);
}

export default Navbar;
