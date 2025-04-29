import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaGithub } from 'react-icons/fa';

function Card({ imgUrl, title, paragraph, live, src }) {
  return (
    <motion.div
      className="bg-gray-800/30 light-theme:bg-white/80 rounded-xl shadow-lg border border-teal-400/20 light-theme:border-gray-200 overflow-hidden"
      whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)' }}
      whileTap={{ scale: 0.98 }} // Subtle feedback on tap
      transition={{ duration: 0.3 }}
    >
      {/* Image with Hover/Tap Effects */}
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-teal-400/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </motion.div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-teal-400">{title}</h3>
        <p className="text-gray-300 light-theme:text-gray-800">{paragraph}</p>
        <div className="flex gap-4">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-teal-400 text-gray-900 rounded-md font-semibold hover:bg-teal-300 transition-colors"
          >
            <FaGlobe /> {live === 'Video' ? 'Watch Video' : 'Live Demo'}
          </a>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-teal-400 text-teal-400 rounded-md hover:bg-teal-400/10 transition-colors"
          >
            <FaGithub /> {src === 'Source Code' ? 'Source' : 'GitHub'}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;