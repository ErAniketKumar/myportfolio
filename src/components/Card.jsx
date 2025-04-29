import React from 'react';
import { FaGlobe, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const variants = {
  overlay: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } },
  },
  elements: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3, staggerChildren: 0.1 } },
  },
};

function Card({ imgUrl, title, paragraph, live, src }) {
  return (
    <motion.div
      className="relative rounded-xl overflow-hidden shadow-xl bg-gray-800/50"
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <img className="w-full h-48 object-cover" src={imgUrl} alt={title} />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"
        variants={variants.overlay}
        initial="initial"
        whileHover="animate"
      >
        <motion.div
          className="flex flex-col justify-end h-full text-white p-4"
          variants={variants.elements}
          initial="initial"
          whileHover="animate"
        >
          <motion.h1 variants={variants.elements} className="text-xl font-semibold">
            {title}
          </motion.h1>
          <motion.p variants={variants.elements} className="text-sm text-gray-300">
            {paragraph}
          </motion.p>
          <motion.div variants={variants.elements} className="flex gap-4 mt-3">
            <Link
              to={live}
              target="_blank"
              className="text-2xl text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <FaGlobe />
            </Link>
            <Link
              to={src}
              target="_blank"
              className="text-2xl text-green-400 hover:text-green-300 transition-colors"
            >
              <FaGithub />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Card;