import React from 'react';
import { FaInstagram, FaGithub, FaReact, FaNodeJs, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { DiMongodb } from 'react-icons/di';
import { SiExpress } from 'react-icons/si';
import { NavLink } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';

function Home() {
  const mediaIcon = [
    { id: 1, url: 'https://github.com/ErAniketKumar', icon: <FaGithub /> },
    { id: 2, url: 'https://linkedin.com/in/eraniket', icon: <FaLinkedin /> },
    { id: 3, url: 'https://www.instagram.com/eraniketshroff/', icon: <FaInstagram /> },
    { id: 4, url: 'https://x.com/eraniket95/', icon: <FaSquareXTwitter /> },
  ];

  const workIcon = [
    { id: 1, icon: <FaReact /> },
    { id: 2, icon: <FaNodeJs /> },
    { id: 3, icon: <SiExpress /> },
    { id: 4, icon: <DiMongodb /> },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 min-h-screen">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center md:order-2"
        >
          <div className="relative">
            <img
              src="/image/aniket_pic.jpg"
              alt="Aniket Kumar"
              className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-2xl border-4 border-teal-400/20"
            />
            <div className="absolute inset-0 rounded-full bg-teal-400/10 animate-pulse"></div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-6 text-center md:text-left md:order-1"
        >
          <span className="text-lg font-medium text-teal-400 flex items-center justify-center md:justify-start gap-3">
            <span className="h-px w-10 bg-teal-400"></span> Welcome
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            I'm <span className="text-teal-400">Aniket Kumar</span>
          </h1>
          <ReactTyped
            className="text-2xl text-gray-300 light-theme:text-gray-800"
            strings={['Founder of KalawatiPutra Edu','Full-Stack Developer', 'Tech Enthusiast', 'Problem Solver']}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
          <p className="text-lg leading-relaxed">
            I'm a full-stack developer specializing in React, Node.js, and MongoDB. I founded{' '}
            <span className="font-semibold text-teal-400">KalawatiPutra Edu</span>, a platform for tech and education solutions. Passionate about building scalable, user-friendly applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <div>
              <h3 className="font-semibold">Connect</h3>
              <div className="flex gap-4 mt-3 justify-center md:justify-start">
                {mediaIcon.map(({ id, url, icon }) => (
                  <NavLink
                    key={id}
                    to={url}
                    target="_blank"
                    className="text-3xl hover:text-teal-400 transition-transform hover:scale-110"
                  >
                    {icon}
                  </NavLink>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Tech Stack</h3>
              <div className="flex gap-4 mt-3 justify-center md:justify-start">
                {workIcon.map(({ id, icon }) => (
                  <span
                    key={id}
                    className="text-3xl hover:text-teal-400 transition-transform hover:scale-110"
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <a
            href="#Portfolio"
            className="inline-block mt-6 px-6 py-3 bg-teal-400 text-gray-900 rounded-md font-semibold hover:bg-teal-300 transition-colors"
          >
            View My Work
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;