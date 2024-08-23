import React from "react";
import { useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { motion, easeIn, anticipate } from "framer-motion";
import { NavLink,Link } from "react-router-dom";

const variants = {
	overlay: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 0.3,
				ease: anticipate,
			},
		},
	},
	elements: {
		initial: {
			opacity: 0,
			y: 20,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.3,
				ease: easeIn,
				staggerChildren: 0.1,
			},
		},
	},
};

function Card({ imgUrl, title, paragraph, live, src }) {
	return (
		<div className="relative shadow-md rounded-xl h-[18rem] flex flex-col justify-center items-center overflow-hidden">
			<img className="size-full object-fill " src={imgUrl} alt="" />
			<motion.div
				className="absolute size-full z-[1] bg-gradient-to-b from-black/50 to-black/90"
				variants={variants.overlay}
				initial={"initial"}
				whileHover={"animate"}
			>
				<motion.div
					className="flex justify-center items-center h-full text-white flex-col"
					variants={variants.elements}
					whileHover={"animate"}
					initial={"initial"}
				>
					<motion.h1  variants={variants.elements}
					className="text-2xl font-semibold">
						{title}
					</motion.h1>
					<motion.div variants={variants.elements} className="flex gap-2">
						<Link to={live} target="_blank">
							<TbExternalLink className="text-5xl text-indigo-600" />
						</Link>
						<Link to ={src} target="_blank">
							<FaGithub className="text-4xl" />
						</Link>
					</motion.div>
				</motion.div>
			</motion.div>
		</div>
	);
}

export default Card;
