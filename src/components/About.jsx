import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.03, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)', transition: { duration: 0.3 } },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-teal-400 tracking-tight">About Me</h1>
        <div className="space-y-10">
          {/* Introduction */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-gray-800/30 light-theme:bg-white/80 p-6 rounded-xl shadow-lg border border-teal-400/20 light-theme:border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-teal-400 mb-4">Aniket Kumar</h2>
            <p className="text-lg leading-relaxed">
              I'm <span className="font-semibold text-teal-400">Aniket Kumar</span>, a full-stack developer passionate about building dynamic web applications with HTML, CSS, JavaScript, React, and Node.js. I founded{' '}
              <span className="font-semibold text-teal-400">KalawatiPutra Edu</span>, KalawatiPutra Edu a platform to empower startups and learners through tech and education. My focus is on creating scalable, user-centric solutions.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-gray-800/30 light-theme:bg-white/80 p-6 rounded-xl shadow-lg border border-teal-400/20 light-theme:border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-teal-400 mb-4">Education</h2>
            <ul className="space-y-4">
              <li>
                <strong>B.E. in Computer Science</strong>
                <p>Chitkara University, HP | 3rd Year | CGPA: 9.44/10</p>
              </li>
              <li>
                <strong>Higher Secondary (12th Grade)</strong>
                <p>P.M.V.S Ramnagar, Bihar | 77.6%</p>
              </li>
            </ul>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-gray-800/30 light-theme:bg-white/80 p-6 rounded-xl shadow-lg border border-teal-400/20 light-theme:border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-teal-400 mb-4">Skills</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li><strong>Languages:</strong> JavaScript, Python, C++</li>
              <li><strong>Web:</strong> HTML, CSS, React, Node.js, Express.js</li>
              <li><strong>Databases:</strong> MongoDB, MySQL</li>
              <li><strong>Tools:</strong> Git, GitHub, VS Code, IntelliJ IDEA</li>
              <li><strong>DSA:</strong> Sorting, Searching, Dynamic Programming</li>
              <li><strong>Soft Skills:</strong> Problem-Solving, Teamwork, Communication</li>
            </ul>
          </motion.div>

          {/* Achievements */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-gray-800/30 light-theme:bg-white/80 p-6 rounded-xl shadow-lg border border-teal-400/20 light-theme:border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-teal-400 mb-4">Achievements</h2>
            <ul className="space-y-2">
              <li>Solved 400+ DSA problems on LeetCode, CodeChef, and GeeksforGeeks</li>
              <li>Completed 100 Days of Code Challenge (Jan–Apr 2024)</li>
              <li>Finalist, Explore AI 2.0 Hackathon with Yamaha (Apr 2023)</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-gray-800/30 light-theme:bg-white/80 p-6 rounded-xl shadow-lg border border-teal-400/20 light-theme:border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-teal-400 mb-4">Contact</h2>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <FaPhone className="text-teal-400" />
                +91-9123120581
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-teal-400" />
                ceo@kalawatiputra.com
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;