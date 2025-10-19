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
import { NavLink } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

function Home() {
  const mediaIcon = [
    { id: 1, url: "https://github.com/ErAniketKumar", icon: <FaGithub /> },
    { id: 2, url: "https://linkedin.com/in/eraniket", icon: <FaLinkedin /> },
    {
      id: 3,
      url: "https://www.instagram.com/eraniketshroff/",
      icon: <FaInstagram />,
    },
    { id: 4, url: "https://x.com/eraniket95/", icon: <FaSquareXTwitter /> },
  ];

  const workIcon = [
    { id: 1, icon: <FaReact />, name: "React" },
    { id: 2, icon: <FaNodeJs />, name: "Node.js" },
    { id: 3, icon: <SiExpress />, name: "Express" },
    { id: 4, icon: <DiMongodb />, name: "MongoDB" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-2xl border-4 border-yellow-400/30"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500/20 to-yellow-300/20 animate-pulse"></div>
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-yellow-500/10 to-transparent blur-2xl"></div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-6 text-center md:text-left md:order-1"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm font-semibold text-yellow-500 flex items-center justify-center md:justify-start gap-3 tracking-wider uppercase"
          >
            <span className="h-px w-10 bg-yellow-500"></span> Welcome to My
            Portfolio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            I'm{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Aniket Kumar
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl sm:text-2xl text-gray-300"
          >
            <ReactTyped
              strings={[
                "Full-Stack Software Engineer",
                "MERN Stack Developer",
                "Backend Specialist",
                "Problem Solver",
                "Tech Enthusiast",
              ]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-base sm:text-lg leading-relaxed text-gray-400"
          >
            A passionate software engineer specializing in{" "}
            <span className="text-yellow-400 font-semibold">
              MERN Stack (MongoDB, Express.js, React, Node.js)
            </span>{" "}
            and{" "}
            <span className="text-yellow-400 font-semibold">
              Python FastAPI
            </span>
            . I build scalable, high-performance web applications with clean
            architecture and modern development practices. Experienced in
            end-to-end software development, testing, and deployment.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-3 gap-4 py-6"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400">
                400+
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                DSA Problems
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400">
                10+
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                Projects Built
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400">
                9.50
              </div>
              <div className="text-xs sm:text-sm text-gray-500">CGPA</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start"
          >
            {/* Social Links */}
            <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700">
              <h3 className="font-semibold text-white mb-3 text-sm">
                Connect With Me
              </h3>
              <div className="flex gap-3 justify-center md:justify-start">
                {mediaIcon.map(({ id, url, icon }) => (
                  <NavLink
                    key={id}
                    to={url}
                    target="_blank"
                    className="text-2xl text-gray-400 hover:text-yellow-400 transition-all hover:scale-110"
                  >
                    {icon}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700">
              <h3 className="font-semibold text-white mb-3 text-sm">
                Tech Stack
              </h3>
              <div className="flex gap-3 justify-center md:justify-start">
                {workIcon.map(({ id, icon, name }) => (
                  <span
                    key={id}
                    className="text-2xl text-gray-400 hover:text-yellow-400 transition-all hover:scale-110 cursor-pointer"
                    title={name}
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start pt-4"
          >
            <a
              href="#Projects"
              className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 rounded-xl font-bold hover:from-yellow-400 hover:to-yellow-300 transition-all shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 hover:scale-105"
            >
              View My Projects
            </a>
            <a
              href="#ContactUs"
              className="px-8 py-3 bg-gray-800 text-white border-2 border-yellow-500 rounded-xl font-bold hover:bg-yellow-500 hover:text-gray-900 transition-all hover:scale-105"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
