import React from 'react';
import { motion } from 'framer-motion';

function Skill() {
  const skillArray = [
    { id: 1, imgUrl: 'image/html.png', title: 'HTML' },
    { id: 2, imgUrl: 'image/css.jpg', title: 'CSS' },
    { id: 3, imgUrl: 'image/javascript.png', title: 'JavaScript' },
    { id: 4, imgUrl: 'image/oracle.png', title: 'Oracle' },
    { id: 5, imgUrl: 'image/cpp.png', title: 'C++' },
    { id: 6, imgUrl: 'image/github.png', title: 'GitHub' },
    { id: 7, imgUrl: 'image/dsa.webp', title: 'DSA' },
    { id: 8, imgUrl: 'image/reactjs.png', title: 'React' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <h1 className="text-4xl font-bold text-teal-400">Skills</h1>
        <p className="text-lg text-gray-300">Technologies I've mastered</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skillArray.map(({ id, imgUrl, title }) => (
            <motion.div
              key={id}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={imgUrl}
                alt={title}
                className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-teal-400/20"
              />
              <h3 className="mt-3 text-sm font-semibold text-gray-200">{title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Skill;