import React from "react";
import { useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { motion, easeIn, anticipate} from "framer-motion";

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
				staggerChildren: 0.1
			},
		},
	},
};

function Card({ imgUrl, title, paragraph, btn1, btn2 }) {

	return (
		<div
			className="relative shadow-md rounded-xl h-[18rem] flex flex-col justify-center items-center overflow-hidden"
		>
			<img className="size-full object-cover " src={imgUrl} alt="" />
			<motion.div className="absolute size-full z-[1] bg-gradient-to-b from-black/20 to-black/70"
			variants={variants.overlay} initial={"initial"} whileHover={"animate"}
			>
				<motion.div 
				className="flex justify-center items-center h-full text-white flex-col"
				variants={variants.elements} whileHover={"animate"}
				initial={"initial"}
				>
					<motion.p variants={variants.elements}>Lorem ipsum dolor sit.</motion.p>
					<motion.div variants={variants.elements} className="flex ">
						<button>
							<TbExternalLink />
						</button>
						<button>
							<FaGithub />
						</button>
					</motion.div>
				</motion.div>
			</motion.div>
		</div>
	);
}

export default Card;
